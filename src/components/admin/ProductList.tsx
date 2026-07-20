'use client'

import React, { useState } from 'react'
import { Search, Pencil, Trash2, ImageOff, Star, Tag, ChevronRight, ChevronLeft } from 'lucide-react'
import { Tool } from '@/lib/catalogue'

interface ProductListProps {
    tools: Tool[]
    onEdit: (tool: Tool) => void
    onDelete: (id: string) => void
}

export default function ProductList({ tools, onEdit, onDelete }: ProductListProps) {
    const [search, setSearch] = useState('')
    const [page, setPage] = useState(1)
    const itemsPerPage = 8

    const filtered = tools.filter(t => 
        t.name.toLowerCase().includes(search.toLowerCase()) ||
        t.category.toLowerCase().includes(search.toLowerCase())
    )

    const totalPages = Math.ceil(filtered.length / itemsPerPage)
    const paginated = filtered.slice((page - 1) * itemsPerPage, page * itemsPerPage)

    return (
        <div className="admin-table-container">
            <div className="p-4 border-b border-slate-100 flex items-center justify-between gap-4 bg-white">
                <div className="relative flex-1 max-w-md">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                    <input 
                        type="search" 
                        placeholder="Search inventory..." 
                        value={search}
                        onChange={(e) => { setSearch(e.target.value); setPage(1); }}
                        className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:border-orange-500 outline-none transition-all"
                    />
                </div>
                <div className="flex items-center gap-2">
                    <button 
                        onClick={() => setPage(p => Math.max(1, p - 1))}
                        disabled={page === 1}
                        className="p-2 rounded-lg hover:bg-slate-50 disabled:opacity-30 text-slate-400"
                    >
                        <ChevronLeft size={20} />
                    </button>
                    <span className="text-xs font-bold text-slate-500 px-2 uppercase tracking-widest">
                        Page {page} of {totalPages || 1}
                    </span>
                    <button 
                        onClick={() => setPage(p => Math.min(totalPages, p + 1))}
                        disabled={page === totalPages}
                        className="p-2 rounded-lg hover:bg-slate-50 disabled:opacity-30 text-slate-400"
                    >
                        <ChevronRight size={20} />
                    </button>
                </div>
            </div>

            <table className="admin-table">
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Category</th>
                        <th>Status</th>
                        <th>Price</th>
                        <th style={{ textAlign: 'right' }}>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {paginated.map((tool) => {
                        const hasImg = tool.images?.[0]?.url && !tool.images[0].url.includes('missing')
                        return (
                            <tr key={tool.id}>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="w-12 h-12 rounded-lg bg-slate-50 border border-slate-100 flex-shrink-0 flex items-center justify-center overflow-hidden">
                                            {hasImg ? (
                                                <img src={tool.images[0].url} alt="" className="w-8 h-8 object-contain" />
                                            ) : (
                                                <ImageOff size={16} className="text-slate-300" />
                                            )}
                                        </div>
                                        <div>
                                            <div className="font-bold text-slate-800 line-clamp-1">{tool.name}</div>
                                            <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{tool.id}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div className="text-xs font-bold text-slate-500 uppercase tracking-wide">{tool.category}</div>
                                    <div className="text-[10px] text-slate-400 mt-0.5 line-clamp-1">{tool.subcategory}</div>
                                </td>
                                <td>
                                    <div className="flex gap-2">
                                        {tool.isBestseller && <span className="badge badge-warning flex items-center gap-1"><Star size={10} fill="currentColor" /> Star</span>}
                                        {tool.isOnOffer && <span className="badge badge-success flex items-center gap-1"><Tag size={10} /> Offer</span>}
                                        {!hasImg && <span className="badge badge-danger">Missing Img</span>}
                                    </div>
                                </td>
                                <td>
                                    <div className="font-bold text-slate-700">{tool.price || '—'}</div>
                                </td>
                                <td style={{ textAlign: 'right' }}>
                                    <div className="flex items-center justify-end gap-2">
                                        <button onClick={() => onEdit(tool)} className="p-2 rounded-lg hover:bg-slate-100 text-slate-400 hover:text-blue-600 transition-colors">
                                            <Pencil size={18} />
                                        </button>
                                        <button onClick={() => onDelete(tool.id)} className="p-2 rounded-lg hover:bg-slate-100 text-slate-400 hover:text-red-600 transition-colors">
                                            <Trash2 size={18} />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            
            {filtered.length === 0 && (
                <div className="p-20 text-center">
                    <p className="text-slate-400 font-bold uppercase tracking-widest text-sm">No products found matching your search</p>
                </div>
            )}
        </div>
    )
}
