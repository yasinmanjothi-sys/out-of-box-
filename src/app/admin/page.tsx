'use client'

import { useState, useEffect, useMemo } from 'react'
import { catalogue, Tool } from '@/lib/catalogue'
import { 
    AlertCircle, Loader2, Save, Plus, 
    ImageOff, Package, Star, Tag, X,
    ChevronRight, LayoutDashboard, Settings
} from 'lucide-react'
import './admin-staging.css' // We'll link the new CSS

// Modular Components
import AdminSidebar from '@/components/admin/AdminSidebar'
import DashboardStats from '@/components/admin/DashboardStats'
import ProductList from '@/components/admin/ProductList'

/* ─────────────────────────────────
   SHARED CONSTANTS & CONFIG
───────────────────────────────── */
const REPO_OWNER = 'yasinmanjothi-sys';
const REPO_NAME = 'out-of-box-';
const FILE_PATH = 'src/lib/catalogue.ts';

/* ─────────────────────────────────
   UTILITY: GITHUB SAVE
───────────────────────────────── */
async function saveToGithubSync(updatedTools: Tool[], token: string, commitMessage: string, branch: string = 'admin-staging') {
    const fileContent = `export interface ProductImage {
    url: string;
    name: string;
}

export interface Tool {
    id: string;
    name: string;
    description?: string;
    category: string;
    subcategory: string;
    images: ProductImage[];
    price?: string;
    isOnOffer?: boolean;
    originalPrice?: number;
    offerPrice?: number;
    isBestseller?: boolean;
}

export const catalogue: Tool[] = ${JSON.stringify(updatedTools, null, 4)};
`;

    const authHeader = `Bearer ${token.trim()}`;
    const url = `https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/contents/${FILE_PATH}`;

    let sha = undefined;
    try {
        const getRes = await fetch(`${url}?ref=${branch}`, {
            headers: { 'Authorization': authHeader, 'Accept': 'application/vnd.github.v3+json' },
            cache: 'no-store'
        });

        if (getRes.ok) {
            const fileData = await getRes.json();
            sha = fileData.sha;
        }
    } catch (err) {
        console.error("SHA fetch error:", err);
    }

    const putRes = await fetch(url, {
        method: 'PUT',
        headers: {
            'Authorization': authHeader,
            'Accept': 'application/vnd.github.v3+json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            message: commitMessage || 'Admin Update: Inventory Management',
            content: btoa(unescape(encodeURIComponent(fileContent))), 
            sha: sha,
            branch: branch
        })
    });

    if (!putRes.ok) {
        const err = await putRes.json();
        throw new Error(err.message || 'Failed to save to GitHub');
    }
    return true;
}

export default function AdminDashboard() {
    const [token, setToken] = useState('')
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [activeTab, setActiveTab] = useState('dashboard')
    const [tools, setTools] = useState<Tool[]>(catalogue)
    const [isSaving, setIsSaving] = useState(false)
    const [message, setMessage] = useState({ text: '', type: '' })
    const [isVerifying, setIsVerifying] = useState(false)

    // Auth Persistence
    useEffect(() => {
        const saved = localStorage.getItem('OOB_ADMIN_TOKEN')
        if (saved) {
            setToken(saved);
            setIsAuthenticated(true);
        }
    }, [])

    const showMsg = (text: string, type: string, dur = 6000) => {
        setMessage({ text, type })
        if (dur > 0) setTimeout(() => setMessage({ text: '', type: '' }), dur)
    }

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault()
        const cleanToken = token.trim()
        if (cleanToken.length < 10) return
        setIsVerifying(true)
        try {
            const url = `https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}`;
            const res = await fetch(url, {
                headers: { 'Authorization': `Bearer ${cleanToken}` }
            });
            if (res.ok) {
                localStorage.setItem('OOB_ADMIN_TOKEN', cleanToken)
                setIsAuthenticated(true)
            }
        } catch (err) {
            showMsg('❌ Authorization failed.', 'error')
        } finally {
            setIsVerifying(false)
        }
    }

    const handleLogout = () => {
        localStorage.removeItem('OOB_ADMIN_TOKEN')
        setIsAuthenticated(false)
    }

    const handleSave = async () => {
        setIsSaving(true)
        showMsg('⏳ Saving to staging branch...', 'info', 0)
        try {
            await saveToGithubSync(tools, token, `Draft: Inventory Update v2`, 'admin-staging')
            showMsg('🚀 Staging updated! Vercel will refresh in a few minutes.', 'success')
        } catch (err: any) {
            showMsg(`❌ Save failed: ${err.message}`, 'error', 0)
        } finally {
            setIsSaving(false)
        }
    }

    if (!isAuthenticated) {
        return (
            <div className="min-h-screen bg-slate-950 flex items-center justify-center p-6 text-white font-sans">
                <div className="w-full max-w-md bg-slate-900 rounded-3xl p-10 border border-slate-800 shadow-2xl">
                    <div className="text-center mb-10">
                        <img src="/logos/header-logo-cropped.svg" alt="OOB" className="h-10 mx-auto mb-6 brightness-0 invert" />
                        <h1 className="text-3xl font-black uppercase tracking-widest" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>Console Login</h1>
                    </div>
                    <form onSubmit={handleLogin} className="space-y-6">
                        <input 
                            type="password" 
                            className="w-full bg-slate-800 border-none rounded-xl px-5 py-4 text-white focus:ring-2 focus:ring-orange-500 outline-none"
                            placeholder="Enter GitHub PAT"
                            value={token}
                            onChange={e => setToken(e.target.value)}
                        />
                        <button type="submit" className="w-full bg-orange-600 hover:bg-orange-700 py-4 rounded-xl font-bold transition-all">
                            {isVerifying ? 'Verifying...' : 'Authenticate'}
                        </button>
                    </form>
                </div>
            </div>
        )
    }

    return (
        <div className="admin-dashboard-root">
            <AdminSidebar activeTab={activeTab} setActiveTab={setActiveTab} onLogout={handleLogout} />
            
            <main className="admin-main">
                <div className="flex items-center justify-between mb-8">
                    <h2 className="admin-section-title">
                        {activeTab === 'dashboard' ? 'Overview' : activeTab === 'inventory' ? 'Inventory' : 'Dashboard'}
                    </h2>
                    
                    <button 
                        onClick={handleSave} 
                        disabled={isSaving}
                        className="flex items-center gap-2 px-6 py-2.5 rounded-xl font-black text-white text-xs uppercase tracking-widest shadow-lg bg-orange-600 hover:bg-orange-700 transition-all disabled:opacity-50"
                    >
                        {isSaving ? <Loader2 size={16} className="animate-spin" /> : <Save size={16} />}
                        Save Staging
                    </button>
                </div>

                {message.text && (
                    <div className={`mb-6 p-4 rounded-xl border flex items-center justify-between text-sm font-bold bg-white shadow-sm`}>
                        <span>{message.text}</span>
                        <button onClick={() => setMessage({ text: '', type: '' })} className="opacity-50 hover:opacity-100"><X size={16} /></button>
                    </div>
                )}

                {activeTab === 'dashboard' && (
                    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <DashboardStats tools={tools} />
                        
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-4">
                            <div className="bg-white p-6 rounded-2xl border border-slate-200">
                                <h3 className="font-black uppercase tracking-widest text-slate-400 text-xs mb-4">Quick Actions</h3>
                                <div className="grid grid-cols-2 gap-4">
                                    <button onClick={() => setActiveTab('inventory')} className="flex flex-col items-center gap-3 p-6 rounded-xl bg-slate-50 border border-slate-100 hover:border-orange-200 transition-all group">
                                        <Package className="text-slate-400 group-hover:text-orange-500 transition-colors" size={24} />
                                        <span className="text-xs font-bold text-slate-800">Products</span>
                                    </button>
                                    <button onClick={() => setActiveTab('audit')} className="flex flex-col items-center gap-3 p-6 rounded-xl bg-slate-50 border border-slate-100 hover:border-red-200 transition-all group">
                                        <ImageOff className="text-slate-400 group-hover:text-red-500 transition-colors" size={24} />
                                        <span className="text-xs font-bold text-slate-800">Missing Assets</span>
                                    </button>
                                </div>
                            </div>
                            
                            <div className="bg-white p-6 rounded-2xl border border-slate-200 flex flex-col items-center justify-center text-center">
                                <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-500 flex items-center justify-center mb-4">
                                    <LayoutDashboard size={32} />
                                </div>
                                <h3 className="font-bold text-slate-800 mb-1">Staging Active</h3>
                                <p className="text-xs text-slate-400 max-w-[240px]">This environment is isolated on Vercel. Pushes here will not affect your HostPinnacle site.</p>
                            </div>
                        </div>
                    </div>
                )}

                {activeTab === 'inventory' && (
                    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <ProductList 
                            tools={tools} 
                            onEdit={(t) => console.log('Edit', t)} 
                            onDelete={(id) => setTools(t => t.filter(x => x.id !== id))} 
                        />
                    </div>
                )}

                {activeTab === 'audit' && (
                    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <ProductList 
                            tools={tools.filter(t => !t.images || t.images.length === 0 || t.images[0].url.includes('missing'))} 
                            onEdit={(t) => console.log('Edit', t)} 
                            onDelete={(id) => setTools(t => t.filter(x => x.id !== id))} 
                        />
                    </div>
                )}
            </main>
        </div>
    )
}
