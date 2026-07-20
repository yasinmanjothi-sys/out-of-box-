'use client'

import React from 'react'
import { LayoutDashboard, Package, ImageOff, Settings, LogOut, ChevronRight } from 'lucide-react'
import Link from 'next/link'

interface SidebarProps {
    activeTab: string
    setActiveTab: (tab: string) => void
    onLogout: () => void
}

export default function AdminSidebar({ activeTab, setActiveTab, onLogout }: SidebarProps) {
    const navItems = [
        { id: 'dashboard', label: 'Dashboard', icon: <LayoutDashboard size={20} /> },
        { id: 'inventory', label: 'Inventory', icon: <Package size={20} /> },
        { id: 'audit', label: 'Missing Assets', icon: <ImageOff size={20} /> },
        { id: 'settings', label: 'Settings', icon: <Settings size={20} /> },
    ]

    return (
        <aside className="admin-sidebar shadow-2xl">
            <div className="admin-sidebar-header flex items-center gap-3">
                <img src="/logos/header-logo-cropped.svg" alt="OOB" className="h-8 brightness-0 invert" />
                <div>
                    <h1 className="font-black text-xl tracking-wider leading-none" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                        ADMIN <span className="text-orange-500">PRO</span>
                    </h1>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Staging Environment</p>
                </div>
            </div>

            <nav className="admin-nav">
                {navItems.map((item) => (
                    <button
                        key={item.id}
                        onClick={() => setActiveTab(item.id)}
                        className={`admin-nav-item group ${activeTab === item.id ? 'active' : ''}`}
                    >
                        {item.icon}
                        <span className="flex-1">{item.label}</span>
                        {activeTab === item.id && <ChevronRight size={14} className="opacity-50" />}
                    </button>
                ))}
            </nav>

            <div className="p-4 mt-auto border-t border-white/5">
                <button
                    onClick={onLogout}
                    className="admin-nav-item hover:bg-red-500/10 hover:text-red-400 text-red-100/40"
                >
                    <LogOut size={20} />
                    <span>Sign Out</span>
                </button>
            </div>
        </aside>
    )
}
