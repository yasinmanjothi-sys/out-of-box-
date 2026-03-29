'use client'

import { useState, useRef, useCallback, useEffect } from 'react'
import { catalogue, Tool } from '@/lib/catalogue'
import {
    Search, Save, Plus, Trash2, Star, Package,
    CheckCircle2, AlertCircle, Loader2, X, Tag, Zap,
    ImageOff, Upload, ChevronDown, Pencil, Check, Key, LogOut
} from 'lucide-react'
import Link from 'next/link'

/* ─────────────────────────────────
   SHARED CONSTANTS & CONFIG
───────────────────────────────── */
const REPO_OWNER = 'yasinmanjothi-sys';
const REPO_NAME = 'out-of-box-';
const FILE_PATH = 'src/lib/catalogue.ts';

const CATEGORIES = [
    'Accessories',
    'Consumables',
    'Gardening Equpiment and Gardening Tools',
    'Gasoline (Petrol) Machinery and Tools',
    'Hand Tools',
    'Insulated Tools',
    'Measuring Tools',
    'Pneumatic (Air Compressor) Tools',
    'Power Tools',
    'Safety Equipment (PPEs)',
    'Tool Sets (Tool Boxes)',
    'Water Pumps',
]

const LABEL = 'block text-xs font-bold text-slate-500 uppercase tracking-widest mb-1'
const INPUT = 'w-full px-4 py-3 bg-slate-50 border-2 border-slate-200 rounded-xl focus:border-orange-500 focus:bg-white outline-none transition-all text-base font-semibold text-slate-800 placeholder-slate-300'

/* ─────────────────────────────────
   UTILITY: GITHUB SAVE (CLIENT-SIDE)
───────────────────────────────── */
async function saveToGithubSync(updatedTools: Tool[], token: string, commitMessage: string) {
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
        // 1. Get current file SHA (if it exists)
        const getRes = await fetch(url, {
            headers: { 'Authorization': authHeader, 'Accept': 'application/vnd.github.v3+json' },
            cache: 'no-store'
        });

        if (getRes.ok) {
            const fileData = await getRes.json();
            sha = fileData.sha;
        }
        // If 404, we continue with sha = undefined (this creates the file for the first time)
    } catch (err) {
        console.error("SHA fetch error (likely initial commit):", err);
    }

    // 2. Update or Create file
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
            branch: 'main'
        })
    });

    if (!putRes.ok) {
        const err = await putRes.json();
        throw new Error(err.message || 'Failed to save to GitHub');
    }
    return true;
}

/* ─────────────────────────────────
   TOGGLE SWITCH
───────────────────────────────── */
function Toggle({ active, onToggle, label, color = 'orange' }: {
    active: boolean
    onToggle: () => void
    label: string
    color?: 'orange' | 'gold'
}) {
    const bg = active
        ? color === 'gold' ? '#FBBF24' : '#F37321'
        : '#CBD5E1'
    return (
        <button
            onClick={onToggle}
            className="flex items-center gap-3 group select-none"
            type="button"
            aria-pressed={active}
        >
            <span
                className="relative flex-shrink-0 transition-colors duration-200 rounded-full"
                style={{ width: 52, height: 28, background: bg }}
            >
                <span
                    className="absolute bg-white rounded-full shadow-md transition-transform duration-200"
                    style={{
                        width: 22, height: 22,
                        top: 3, left: 3,
                        transform: active ? 'translateX(24px)' : 'none'
                    }}
                />
            </span>
            <span className={`text-sm font-bold ${active ? 'text-slate-800' : 'text-slate-400'}`}>
                {label}
            </span>
        </button>
    )
}

/* ─────────────────────────────────
   TOOL IMAGE (with error state)
───────────────────────────────── */
function ToolImage({ src, alt }: { src?: string; alt: string }) {
    const [errored, setErrored] = useState(false)
    useEffect(() => { setErrored(false) }, [src])

    if (!src || errored) {
        return (
            <div className="w-full h-full flex flex-col items-center justify-center gap-2 bg-slate-100">
                <ImageOff size={32} className="text-slate-300" />
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">No Image</span>
            </div>
        )
    }
    return (
        <img
            src={src}
            alt={alt}
            className="w-full h-full object-contain p-3 transition-transform duration-300 group-hover:scale-105"
            onError={() => setErrored(true)}
        />
    )
}

/* ─────────────────────────────────
   DRAG & DROP IMAGE ZONE
───────────────────────────────── */
function ImageDropZone({ value, onChange }: { value: string; onChange: (v: string) => void }) {
    const [dragging, setDragging] = useState(false)
    const [preview, setPreview] = useState<string>('')
    const fileRef = useRef<HTMLInputElement>(null)

    const handleFile = (file: File) => {
        const reader = new FileReader()
        reader.onload = (e) => {
            const result = e.target?.result as string
            setPreview(result)
            onChange(result)
        }
        reader.readAsDataURL(file)
    }

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault()
        setDragging(false)
        const file = e.dataTransfer.files[0]
        if (file && file.type.startsWith('image/')) handleFile(file)
    }

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]
        if (file) handleFile(file)
    }

    const imgSrc = preview || value

    return (
        <div className="space-y-2">
            <label className={LABEL}>Product Image</label>

            <div
                onDragOver={e => { e.preventDefault(); setDragging(true) }}
                onDragLeave={() => setDragging(false)}
                onDrop={handleDrop}
                onClick={() => fileRef.current?.click()}
                className="relative cursor-pointer rounded-2xl border-2 border-dashed transition-all flex flex-col items-center justify-center"
                style={{
                    height: 160,
                    borderColor: dragging ? '#F37321' : '#CBD5E1',
                    background: dragging ? 'rgba(243,115,33,0.05)' : '#f8fafc',
                }}
            >
                {imgSrc ? (
                    <img src={imgSrc} alt="Preview" className="w-full h-full object-contain p-3 rounded-2xl" onError={() => setPreview('')} />
                ) : (
                    <>
                        <Upload size={32} className="text-slate-300 mb-2" />
                        <p className="text-sm font-bold text-slate-400">Drop image here, or tap to browse</p>
                        <p className="text-xs text-slate-300 mt-1">JPG, PNG, WEBP supported</p>
                    </>
                )}
                <input ref={fileRef} type="file" accept="image/*" className="hidden" onChange={handleInput} />
            </div>

            <div className="flex items-center gap-2">
                <div className="flex-1 h-px bg-slate-200" />
                <span className="text-xs text-slate-400 font-semibold">or paste image path</span>
                <div className="flex-1 h-px bg-slate-200" />
            </div>
            <input
                type="text"
                value={preview ? '' : value}
                onChange={e => { setPreview(''); onChange(e.target.value) }}
                className={INPUT}
                placeholder="/website%20products/Category/Product/image.jpg"
            />
        </div>
    )
}

/* ─────────────────────────────────
   EDIT MODAL for existing tools
───────────────────────────────── */
function EditModal({ tool, onSave, onClose }: {
    tool: Tool
    onSave: (updated: Tool) => void
    onClose: () => void
}) {
    const [draft, setDraft] = useState<Tool>({ ...tool })
    const [imgPreview, setImgPreview] = useState('')
    const fileRef = useRef<HTMLInputElement>(null)
    const [dragging, setDragging] = useState(false)

    const set = (key: keyof Tool, val: any) => setDraft(d => ({ ...d, [key]: val }))

    const handleFile = (file: File) => {
        const reader = new FileReader()
        reader.onload = e => {
            const result = e.target?.result as string
            setImgPreview(result)
            set('images', [{ name: file.name, url: result }])
        }
        reader.readAsDataURL(file)
    }

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault(); setDragging(false)
        const f = e.dataTransfer.files[0]
        if (f && f.type.startsWith('image/')) handleFile(f)
    }

    const currentImg = imgPreview || draft.images?.[0]?.url || ''
    const hasOffer = !!draft.isOnOffer
    const offerPriceNum = draft.offerPrice || 0
    const origPriceNum = draft.originalPrice || 0

    return (
        <div className="fixed inset-0 z-[200] flex items-end sm:items-center justify-center p-0 sm:p-4" style={{ background: 'rgba(15,30,50,0.75)' }}>
            <div className="bg-white w-full sm:max-w-2xl sm:rounded-3xl overflow-hidden flex flex-col shadow-2xl max-h-[96vh]" style={{ maxHeight: '96dvh' }}>
                <div className="px-6 py-4 flex items-center justify-between flex-shrink-0" style={{ background: '#1F4E79' }}>
                    <div>
                        <p className="text-white/60 text-xs font-bold uppercase tracking-widest">Editing Product</p>
                        <h2 className="text-white font-black text-lg leading-tight line-clamp-1" style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '1.4rem', letterSpacing: '1px' }}>
                            {tool.name}
                        </h2>
                    </div>
                    <button onClick={onClose} className="p-2 rounded-xl text-white/60 hover:text-white hover:bg-white/10 transition-all">
                        <X size={22} />
                    </button>
                </div>

                <div className="flex-1 overflow-y-auto p-6 space-y-5">
                    <div>
                        <label className={LABEL}>Product Image</label>
                        <div
                            onDragOver={e => { e.preventDefault(); setDragging(true) }}
                            onDragLeave={() => setDragging(false)}
                            onDrop={handleDrop}
                            onClick={() => fileRef.current?.click()}
                            className="relative cursor-pointer rounded-2xl border-2 border-dashed transition-all flex flex-col items-center justify-center overflow-hidden"
                            style={{ height: 180, borderColor: dragging ? '#F37321' : '#CBD5E1', background: '#f8fafc' }}
                        >
                            {currentImg ? (
                                <img src={currentImg} alt="Preview" className="w-full h-full object-contain p-3" onError={() => setImgPreview('')} />
                            ) : (
                                <>
                                    <Upload size={32} className="text-slate-300 mb-2" />
                                    <p className="text-sm font-bold text-slate-400">Drop a new image here, or tap to browse</p>
                                </>
                            )}
                            <input ref={fileRef} type="file" accept="image/*" className="hidden" onChange={e => { const f = e.target.files?.[0]; if (f) handleFile(f) }} />
                        </div>
                        <input
                            type="text"
                            value={imgPreview ? '' : (draft.images?.[0]?.url || '')}
                            onChange={e => { setImgPreview(''); set('images', [{ name: 'main', url: e.target.value }]) }}
                            className={`${INPUT} mt-2`}
                            placeholder="or paste URL here..."
                        />
                    </div>

                    <div>
                        <label className={LABEL}>Product Name *</label>
                        <input type="text" value={draft.name} onChange={e => set('name', e.target.value)} className={INPUT} placeholder="Product name" required />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                            <label className={LABEL}>Category *</label>
                            <select value={draft.category} onChange={e => set('category', e.target.value)} className={`${INPUT} appearance-none`} required>
                                <option value="">Choose category…</option>
                                {CATEGORIES.map(c => <option key={c} value={c}>{c}</option>)}
                            </select>
                        </div>
                        <div>
                            <label className={LABEL}>Subcategory</label>
                            <input type="text" value={draft.subcategory} onChange={e => set('subcategory', e.target.value)} className={INPUT} placeholder="e.g. Angle Grinders" />
                        </div>
                    </div>

                    <div>
                        <label className={LABEL}>Display Price</label>
                        <input type="text" value={draft.price || ''} onChange={e => set('price', e.target.value)} className={INPUT} placeholder="e.g. KSh 12,500" />
                    </div>

                    <div>
                        <label className={LABEL}>Description</label>
                        <textarea
                            value={draft.description || ''}
                            onChange={e => set('description', e.target.value)}
                            className={`${INPUT} h-28 resize-none`}
                            placeholder="Add specifications, features, dimensions…"
                        />
                    </div>

                    <hr className="border-slate-100" />

                    <div className="space-y-4">
                        <h3 className="font-black text-slate-700 uppercase tracking-widest text-sm">Status Flags</h3>
                        <Toggle active={!!draft.isBestseller} onToggle={() => set('isBestseller', !draft.isBestseller)} label="⭐  Mark as Bestseller" color="gold" />
                        <Toggle active={!!draft.isOnOffer} onToggle={() => set('isOnOffer', !draft.isOnOffer)} label="🏷️  Mark as On Offer / Sale" color="orange" />
                    </div>

                    {hasOffer && (
                        <div className="rounded-2xl p-5 space-y-4" style={{ background: 'rgba(243,115,33,0.06)', border: '2px solid rgba(243,115,33,0.18)' }}>
                            <p className="font-black text-orange-600 uppercase tracking-widest text-sm">Deal Pricing</p>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className={LABEL}>Original Price (KSh)</label>
                                    <input
                                        type="number" min="0" step="1"
                                        value={origPriceNum || ''}
                                        onChange={e => set('originalPrice', parseFloat(e.target.value) || 0)}
                                        className={INPUT} placeholder="e.g. 15000"
                                    />
                                </div>
                                <div>
                                    <label className={`${LABEL} text-orange-500`}>Offer Price (KSh)</label>
                                    <input
                                        type="number" min="0" step="1"
                                        value={offerPriceNum || ''}
                                        onChange={e => set('offerPrice', parseFloat(e.target.value) || 0)}
                                        className={`${INPUT} border-orange-300 focus:border-orange-500 text-orange-700`} placeholder="e.g. 11000"
                                    />
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                <div className="flex-shrink-0 px-6 py-4 border-t border-slate-100 flex flex-col sm:flex-row gap-3">
                    <button onClick={onClose} className="flex-1 sm:flex-none px-6 py-4 rounded-2xl font-bold text-slate-600 border-2 border-slate-200 hover:bg-slate-50 transition-all text-base">
                        Cancel
                    </button>
                    <button
                        onClick={() => onSave(draft)}
                        className="flex-1 flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-black text-white text-base shadow-lg transition-all active:scale-[0.98]"
                        style={{ background: '#1F4E79' }}
                    >
                        <Check size={20} />
                        Save Changes
                    </button>
                </div>
            </div>
        </div>
    )
}

/* ─────────────────────────────────
   TOOL CARD
───────────────────────────────── */
function ToolCard({ tool, onEdit, onDelete, onToggleBestseller, onToggleOffer }: {
    tool: Tool
    onEdit: () => void
    onDelete: () => void
    onToggleBestseller: () => void
    onToggleOffer: () => void
}) {
    const hasOffer = !!tool.isOnOffer
    const hasBestseller = !!tool.isBestseller
    const offerPriceNum = tool.offerPrice || 0
    const origPriceNum = tool.originalPrice || 0
    const hasValidOffer = hasOffer && offerPriceNum > 0
    const borderColor = hasBestseller ? '#FBBF24' : hasOffer ? '#F37321' : '#E2E8F0'

    const priceRaw = parseFloat(String(tool.price || '').replace(/[^0-9.]/g, ''))
    const displayPrice = tool.price
        ? (isNaN(priceRaw) ? tool.price : `KSh ${priceRaw.toLocaleString('en-KE', { maximumFractionDigits: 0 })}`)
        : null

    return (
        <div className="group bg-white rounded-2xl flex flex-col overflow-hidden transition-all duration-300 hover:shadow-2xl relative" style={{ border: `2px solid ${borderColor}` }}>
            <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-10 pointer-events-none">
                {hasBestseller && <span className="flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-black uppercase shadow-sm" style={{ background: '#FBBF24', color: '#713F12' }}><Star size={11} fill="currentColor" /> Bestseller</span>}
                {hasOffer && <span className="flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-black uppercase shadow text-white" style={{ background: '#F37321' }}><Tag size={11} /> On Sale</span>}
            </div>

            <div className="absolute top-3 right-3 z-10 flex flex-col gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
                <button onClick={onEdit} className="p-2 rounded-xl bg-white shadow-md text-slate-500 hover:text-blue-600 hover:bg-blue-50 transition-all"><Pencil size={17} /></button>
                <button onClick={onDelete} className="p-2 rounded-xl bg-white shadow-md text-slate-400 hover:text-red-600 hover:bg-red-50 transition-all"><Trash2 size={17} /></button>
            </div>

            <button onClick={onEdit} className="sm:hidden absolute top-3 right-3 z-10 p-2 rounded-xl bg-white shadow-md text-slate-500"><Pencil size={17} /></button>

            <div className="relative bg-slate-50 overflow-hidden flex-shrink-0" style={{ height: 180 }}>
                <ToolImage src={tool.images?.[0]?.url} alt={tool.name} />
            </div>

            <div className="flex flex-col flex-grow p-4 gap-3">
                <div>
                    <h3 className="font-black text-slate-800 leading-tight group-hover:text-orange-600 transition-colors line-clamp-2" style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '1.05rem', letterSpacing: '1px' }}>{tool.name}</h3>
                    <p className="text-xs font-bold text-slate-400 mt-1 uppercase tracking-wide line-clamp-1">{tool.category}{tool.subcategory && ` · ${tool.subcategory}`}</p>
                </div>

                {tool.description && <p className="text-xs text-slate-500 leading-relaxed line-clamp-2">{tool.description.replace(/\r\n/g, ' · ')}</p>}

                <div className="mt-auto">
                    {hasValidOffer ? (
                        <div className="flex items-baseline gap-2 flex-wrap">
                            <span className="font-black text-xl" style={{ color: '#F37321' }}>KSh {offerPriceNum.toLocaleString()}</span>
                            {origPriceNum > 0 && <span className="text-sm text-slate-400 line-through font-semibold">KSh {origPriceNum.toLocaleString()}</span>}
                        </div>
                    ) : (
                        <span className="font-black text-base text-slate-700">{displayPrice || <span className="text-slate-300 font-medium text-sm">No price set</span>}</span>
                    )}
                </div>

                <hr className="border-slate-100" />
                <div className="grid grid-cols-1 gap-2">
                    <Toggle active={hasBestseller} onToggle={onToggleBestseller} label="⭐  Bestseller" color="gold" />
                    <Toggle active={hasOffer} onToggle={onToggleOffer} label="🏷️  On Offer / Sale" color="orange" />
                </div>
            </div>
        </div>
    )
}

/* ─────────────────────────────────
   ADD NEW TOOL MODAL
───────────────────────────────── */
function AddToolModal({ onAdd, onClose }: { onAdd: (t: Tool) => void; onClose: () => void }) {
    const [form, setForm] = useState({ name: '', category: '', subcategory: '', price: '', imagePath: '', description: '' })
    const s = (k: keyof typeof form, v: string) => setForm(f => ({ ...f, [k]: v }))

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        const id = `${form.category}-${form.subcategory}-${form.name}`.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')
        onAdd({
            id,
            name: form.name,
            category: form.category,
            subcategory: form.subcategory,
            price: form.price,
            description: form.description,
            images: [{ name: 'main', url: form.imagePath }],
            isOnOffer: false,
            isBestseller: false,
            originalPrice: 0,
            offerPrice: 0,
        })
    }

    return (
        <div className="fixed inset-0 z-[200] flex items-end sm:items-center justify-center p-0 sm:p-4" style={{ background: 'rgba(15,30,50,0.75)' }}>
            <div className="bg-white w-full sm:max-w-xl sm:rounded-3xl overflow-hidden flex flex-col shadow-2xl max-h-[96vh]" style={{ maxHeight: '96dvh' }}>
                <div className="px-6 py-4 flex items-center justify-between flex-shrink-0" style={{ background: '#1F4E79' }}>
                    <div><p className="text-white/60 text-xs font-bold uppercase tracking-widest">New Product</p><h2 className="text-white font-black" style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '1.4rem', letterSpacing: '1px' }}>Add Tool to Catalogue</h2></div>
                    <button onClick={onClose} className="p-2 rounded-xl text-white/60 hover:text-white hover:bg-white/10 transition-all"><X size={22} /></button>
                </div>

                <form onSubmit={handleSubmit} className="flex-1 overflow-y-auto p-6 space-y-5">
                    <ImageDropZone value={form.imagePath} onChange={v => s('imagePath', v)} />
                    <div><label className={LABEL}>Product Name *</label><input type="text" value={form.name} onChange={e => s('name', e.target.value)} className={INPUT} placeholder="e.g. Yato 1/2″ Impact Wrench" required /></div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div><label className={LABEL}>Category *</label><select value={form.category} onChange={e => s('category', e.target.value)} className={`${INPUT} appearance-none`} required><option value="">Choose category…</option>{CATEGORIES.map(c => <option key={c} value={c}>{c}</option>)}</select></div>
                        <div><label className={LABEL}>Subcategory</label><input type="text" value={form.subcategory} onChange={e => s('subcategory', e.target.value)} className={INPUT} placeholder="e.g. Angle Grinders" /></div>
                    </div>
                    <div><label className={LABEL}>Display Price</label><input type="text" value={form.price} onChange={e => s('price', e.target.value)} className={INPUT} placeholder="e.g. KSh 12,500" /></div>
                    <div><label className={LABEL}>Description</label><textarea value={form.description} onChange={e => s('description', e.target.value)} className={`${INPUT} h-24 resize-none`} placeholder="Specifications, features, dimensions…" /></div>
                    <div className="flex flex-col sm:flex-row gap-3 pt-2">
                        <button type="button" onClick={onClose} className="flex-1 sm:flex-none px-6 py-4 rounded-2xl font-bold text-slate-600 border-2 border-slate-200 hover:bg-slate-50 transition-all text-base">Cancel</button>
                        <button type="submit" className="flex-1 flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-black text-white text-base shadow-lg transition-all active:scale-[0.98]" style={{ background: '#F37321' }}><Plus size={20} />Add to Catalogue</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

/* ─────────────────────────────────
   MAIN ADMIN DASHBOARD
───────────────────────────────── */
export default function AdminDashboard() {
    const [token, setToken] = useState('')
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [tools, setTools] = useState<Tool[]>(catalogue)
    const [searchQuery, setSearchQuery] = useState('')
    const [isSaving, setIsSaving] = useState(false)
    const [message, setMessage] = useState({ text: '', type: '' })
    const [showAddModal, setShowAddModal] = useState(false)
    const [editingTool, setEditingTool] = useState<Tool | null>(null)
    const [isVerifying, setIsVerifying] = useState(false)

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
        if (cleanToken.length < 10) {
            showMsg('❌ Invalid Token length.', 'error')
            return
        }
        setIsVerifying(true)
        try {
            // Verify token by reading the repository info (works even if catalogue.ts is missing)
            const url = `https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}`;
            const res = await fetch(url, {
                headers: { 'Authorization': `Bearer ${cleanToken}`, 'Accept': 'application/vnd.github.v3+json' },
                cache: 'no-store'
            });
            if (res.ok) {
                localStorage.setItem('OOB_ADMIN_TOKEN', cleanToken)
                setIsAuthenticated(true)
                showMsg('🔒 Access Authorized.', 'success')
            } else {
                throw new Error('Unauthorized')
            }
        } catch (err) {
            showMsg('❌ Invalid Token or Repository access denied.', 'error')
        } finally {
            setIsVerifying(false)
        }
    }

    const handleLogout = () => {
        localStorage.removeItem('OOB_ADMIN_TOKEN')
        setToken('')
        setIsAuthenticated(false)
    }

    const handleAddTool = (tool: Tool) => {
        setTools(prev => [tool, ...prev])
        setShowAddModal(false)
        showMsg(`✅  "${tool.name}" added locally. Click Save to deploy.`, 'success')
    }

    const handleSaveTool = (updated: Tool) => {
        setTools(prev => prev.map(t => t.id === updated.id ? updated : t))
        setEditingTool(null)
        showMsg(`✅  "${updated.name}" updated locally. Click Save to deploy.`, 'success')
    }

    const handleDeleteTool = (id: string) => {
        const tool = tools.find(t => t.id === id)
        if (confirm(`Remove "${tool?.name}"?\n(Requires Save to be permanent)`)) {
            setTools(prev => prev.filter(t => t.id !== id))
        }
    }

    const handleToggleBestseller = (id: string) =>
        setTools(prev => prev.map(t => t.id === id ? { ...t, isBestseller: !t.isBestseller } : t))

    const handleToggleOffer = (id: string) =>
        setTools(prev => prev.map(t => t.id === id ? { ...t, isOnOffer: !t.isOnOffer } : t))

    const handleSave = async () => {
        setIsSaving(true)
        showMsg('⏳  Deploying changes to GitHub...', 'info', 0)
        try {
            await saveToGithubSync(tools, token, `Admin: Updated ${tools.length} products`)
            showMsg('🚀  Deployment successful! Updating website...', 'success')
        } catch (err: any) {
            showMsg(`❌  Save failed: ${err.message}`, 'error', 0)
        } finally {
            setIsSaving(false)
        }
    }

    const filteredTools = tools.filter(t =>
        t.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        t.category.toLowerCase().includes(searchQuery.toLowerCase())
    )

    const msgStyle: Record<string, string> = {
        error: 'bg-red-50 border-red-200 text-red-700',
        success: 'bg-emerald-50 border-emerald-200 text-emerald-700',
        info: 'bg-blue-50 border-blue-200 text-blue-700',
    }

    if (!isAuthenticated) {
        return (
            <div className="min-h-screen w-full flex items-center justify-center p-5 bg-slate-900 overflow-hidden relative">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#1e3a5f,transparent)] opacity-40" />
                <div className="relative w-full max-w-md bg-white rounded-[2.5rem] shadow-2xl overflow-hidden p-8 sm:p-12">
                    <div className="text-center mb-10">
                        <img src="/logos/header-logo-cropped.svg" alt="OOB Tools" className="h-14 mx-auto mb-6" />
                        <h1 className="text-3xl font-black uppercase tracking-widest text-slate-800" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>Admin Login</h1>
                        <p className="text-slate-500 font-bold text-sm uppercase tracking-widest mt-2">Static Site Command Center</p>
                    </div>

                    <form onSubmit={handleLogin} className="space-y-6">
                        <div>
                            <label className={LABEL}>GitHub Access Key</label>
                            <div className="relative">
                                <Key className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                                <input
                                    type="password"
                                    value={token}
                                    onChange={e => setToken(e.target.value)}
                                    className={`${INPUT} pl-12 text-sm`}
                                    placeholder="ghp_xxxxxxxxxxxx"
                                    required
                                />
                            </div>
                            <p className="mt-3 text-[10px] text-slate-400 font-bold uppercase leading-relaxed">
                                Use your Personal Access Token with <span className="text-orange-500">repo</span> scope.
                            </p>
                        </div>

                        <button
                            type="submit"
                            disabled={isVerifying}
                            className="w-full py-5 rounded-2xl font-black text-white text-lg uppercase tracking-[0.2em] shadow-xl transition-all active:scale-95 disabled:opacity-50"
                            style={{ background: '#1F4E79' }}
                        >
                            {isVerifying ? 'Verifying...' : 'Authorize Access'}
                        </button>
                    </form>

                    {message.text && (
                        <div className={`mt-6 p-4 rounded-2xl border-2 flex items-center gap-3 text-sm font-bold ${msgStyle[message.type] || msgStyle.error}`}>
                            <AlertCircle size={18} /> {message.text}
                        </div>
                    )}
                </div>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-slate-50 flex flex-col w-full" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            {showAddModal && <AddToolModal onAdd={handleAddTool} onClose={() => setShowAddModal(false)} />}
            {editingTool && <EditModal tool={editingTool} onSave={handleSaveTool} onClose={() => setEditingTool(null)} />}

            <header className="sticky top-0 z-50 w-full shadow-xl" style={{ background: '#1F4E79' }}>
                <div className="w-full max-w-screen-2xl mx-auto px-4 sm:px-10 py-3 flex items-center gap-3">
                    <div className="flex items-center gap-3 flex-shrink-0">
                        <img src="/logos/header-logo-cropped.svg" alt="OOB" className="h-8 brightness-0 invert" />
                        <span className="hidden sm:block text-white font-black uppercase tracking-widest text-lg" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>Product Manager <span className="text-orange-500 ml-1">v2.1</span></span>
                    </div>

                    <div className="flex-1 min-w-0 relative">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50" size={18} />
                        <input
                            type="search"
                            placeholder="Find products..."
                            value={searchQuery}
                            onChange={e => setSearchQuery(e.target.value)}
                            className="w-full pl-11 pr-4 py-2.5 rounded-xl bg-white/10 border border-white/20 text-white outline-none"
                        />
                    </div>

                    <div className="hidden lg:flex items-center gap-2 px-3 py-2 rounded-xl bg-emerald-500/20 text-emerald-300 text-xs font-black uppercase tracking-widest">
                        <CheckCircle2 size={14} /> Static Ready
                    </div>

                    <button
                        onClick={handleSave}
                        disabled={isSaving}
                        className="flex items-center gap-2 px-6 py-2.5 rounded-xl font-black text-white text-xs uppercase tracking-widest shadow-lg transition-all active:scale-95 disabled:opacity-60"
                        style={{ background: '#F37321' }}
                    >
                        {isSaving ? <Loader2 size={16} className="animate-spin" /> : <Save size={16} />}
                        {isSaving ? 'Saving' : 'Save & Deploy'}
                    </button>

                    <button onClick={handleLogout} className="p-2.5 rounded-xl hover:bg-white/10 text-white/60 hover:text-white transition-all"><LogOut size={20} /></button>
                </div>
            </header>

            <main className="flex-1 w-full max-w-screen-2xl mx-auto px-4 sm:px-10 py-8">
                {message.text && (
                    <div className={`mb-8 p-5 rounded-3xl border-2 flex items-center gap-3 shadow-md ${msgStyle[message.type] || msgStyle.info}`}>
                        <span className="font-bold flex-1">{message.text}</span>
                        <button onClick={() => setMessage({ text: '', type: '' })}><X size={20} /></button>
                    </div>
                )}

                <div className="flex flex-wrap items-center justify-between gap-6 mb-8">
                    <div>
                        <h2 className="text-4xl font-black text-slate-800 uppercase" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>{searchQuery ? 'Search Results' : 'Inventory Overview'}</h2>
                        <p className="text-slate-500 font-bold uppercase text-xs tracking-[0.2em] mt-1">{filteredTools.length} Products displayed</p>
                    </div>
                    <button onClick={() => setShowAddModal(true)} className="px-8 py-4 rounded-2xl bg-slate-900 text-white font-black uppercase tracking-widest text-sm shadow-xl transition-all active:scale-95 flex items-center gap-2"><Plus size={20} /> Add New Tool</button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6">
                    {filteredTools.map(tool => (
                        <ToolCard
                            key={tool.id}
                            tool={tool}
                            onEdit={() => setEditingTool(tool)}
                            onDelete={() => handleDeleteTool(tool.id)}
                            onToggleBestseller={() => handleToggleBestseller(tool.id)}
                            onToggleOffer={() => handleToggleOffer(tool.id)}
                        />
                    ))}
                </div>
            </main>
        </div>
    )
}
