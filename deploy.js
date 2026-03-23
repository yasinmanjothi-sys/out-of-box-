/**
 * deploy.js — Calibrated FTP Deployment Pipeline
 *
 * This script handles the automated transmission of the static build
 * to the HostPinnacle cPanel environment with enhanced safety boundaries.
 */

const ftp = require("basic-ftp");
const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, ".env.local") });

// ── Configuration ───────────────────────────────────────────────────────────
const FTP_HOST = (process.env.FTP_HOST || "").replace(/\/$/, ""); // Strip trailing slash
const FTP_USER = process.env.FTP_USER;
const FTP_PASS = process.env.FTP_PASS;
const FTP_PORT = parseInt(process.env.FTP_PORT || "21", 10);

const LOCAL_BUILD_DIR = path.resolve(__dirname, "out");
const REMOTE_TARGET = "/public_html";
const ABSOLUTE_BOUNDARY = "/home1/outofbox/public_html";

async function deploy() {
  const client = new ftp.Client();
  client.ftp.verbose = false;

  try {
    console.log("\n🚀 Initializing Deployment Pipeline...");

    // 1. Connection & Diagnostic
    console.log(`📡 Connecting to: ${FTP_HOST} (Port: ${FTP_PORT})`);
    await client.access({
      host: FTP_HOST,
      user: FTP_USER,
      password: FTP_PASS,
      port: FTP_PORT,
      secure: false,
    });

    // Diagnostic Log
    const currentHost = client.ftp.ip;
    console.log(`✅ Connection established with ${FTP_HOST} [Target User: ${FTP_USER}]`);

    // 2. Safety Boundary Check
    console.log(`📁 Navigating to target boundary: ${REMOTE_TARGET}`);
    await client.ensureDir(REMOTE_TARGET);
    await client.cd(REMOTE_TARGET);

    const workingDir = await client.pwd();
    if (!workingDir.endsWith("public_html")) {
      throw new Error(`CRITICAL: Deployment escaped boundary. Current dir: ${workingDir}. Aborting to protect root structures.`);
    }
    console.log(`🛡️  Boundary Verified: Operation restricted to ${workingDir}`);

    // 3. Conflict Mitigation (index.php)
    console.log("🧹 Checking for legacy routing conflicts...");
    const remoteList = await client.list();
    const phpIndex = remoteList.find(f => f.name.toLowerCase() === "index.php");
    if (phpIndex) {
      console.log("   ⚠️  Detected legacy index.php — renaming to index.php.bak to prioritize Next.js build.");
      await client.rename("index.php", "index.php.bak");
    }

    // 4. Cleanup (Purge non-essential remote files)
    console.log("🧹 Purging remote public_html (preserving .htaccess, .well-known, cgi-bin)...");
    for (const item of remoteList) {
      // Skip essentials and our freshly renamed backup
      if (item.name === ".htaccess" || item.name === ".well-known" || item.name === "cgi-bin" || item.name === "index.php.bak") {
        continue;
      }
      try {
        if (item.isDirectory) {
          await client.removeDir(item.name);
        } else {
          await client.remove(item.name);
        }
      } catch (e) {
        console.warn(`   (Sub-item check: Could not remove ${item.name}, likely protected or system-owned)`);
      }
    }

    // 5. Transmission
    console.log(`📤 Transmitting build from ${LOCAL_BUILD_DIR}...`);
    await client.uploadFromDir(LOCAL_BUILD_DIR);
    console.log("✨ Transmission Complete.");

    console.log("\n🏁 Deployment Finished Successfully!");
    console.log("🌐 Production Site: https://outofboxtools.com\n");

  } catch (err) {
    console.error(`\n❌ Deployment Failure: ${err.message}\n`);
    process.exit(1);
  } finally {
    client.close();
  }
}

deploy();
