const ffmpegPath = require('@ffmpeg-installer/ffmpeg').path;
const { spawn } = require('child_process');
const path = require('path');
const fs = require('fs');

const videosDir = path.join(process.cwd(), 'public', 'videos');
const videos = ['facebook.mp4', 'instagram.mp4', 'tik tok.mp4'];

async function compressVideo(filename) {
    return new Promise((resolve, reject) => {
        const input = path.join(videosDir, filename);
        const output = path.join(videosDir, `compressed_${filename}`);
        
        console.log(`Starting compression for ${filename}...`);
        
        const ffmpeg = spawn(ffmpegPath, [
            '-y', // overwrite output if exists
            '-i', input,
            '-vcodec', 'libx264',
            '-crf', '28', // high compression, lower quality (smaller size)
            '-preset', 'fast',
            '-acodec', 'aac',
            output
        ]);

        ffmpeg.stderr.on('data', (data) => {
            // ffmpeg logs to stderr
        });

        ffmpeg.on('close', (code) => {
            if (code === 0) {
                console.log(`Successfully compressed ${filename}.`);
                
                // Replace original with compressed
                fs.renameSync(output, input);
                console.log(`Replaced original ${filename} with compressed version.`);
                
                resolve();
            } else {
                console.error(`Error compressing ${filename}. Exit code: ${code}`);
                reject(new Error(`Exit code ${code}`));
            }
        });
    });
}

async function main() {
    for (const v of videos) {
        try {
            await compressVideo(v);
        } catch (e) {
            console.error(`Failed on ${v}`, e);
        }
    }
    console.log("All compression tasks finished.");
}

main();
