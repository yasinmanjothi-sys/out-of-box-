'use client'

import React from 'react'
import { Package, ImageOff, ShoppingCart, TrendingUp } from 'lucide-react'
import { Tool } from '@/lib/catalogue'

interface StatsProps {
    tools: Tool[]
}

export default function DashboardStats({ tools }: StatsProps) {
    const totalProducts = tools.length
    const missingImages = tools.filter(t => !t.images || t.images.length === 0 || t.images[0].url.includes('missing')).length
    const onOffer = tools.filter(t => t.isOnOffer).length
    const bestsellers = tools.filter(t => t.isBestseller).length

    const stats = [
        { label: 'Total Products', value: totalProducts, icon: <Package size={24} />, color: '#1F4E79' },
        { label: 'Missing Assets', value: missingImages, icon: <ImageOff size={24} />, color: '#EF4444' },
        { label: 'Flash Offers', value: onOffer, icon: <ShoppingCart size={24} />, color: '#F37321' },
        { label: 'Best Sellers', value: bestsellers, icon: <TrendingUp size={24} />, color: '#FBBF24' },
    ]

    return (
        <div className="admin-stats-grid">
            {stats.map((stat, idx) => (
                <div key={idx} className="admin-stat-card group hover:scale-[1.02] transition-transform duration-300 pointer-events-none select-none">
                    <div className="admin-stat-icon" style={{ backgroundColor: `${stat.color}15`, color: stat.color }}>
                        {stat.icon}
                    </div>
                    <div>
                        <div className="admin-stat-value" style={{ color: stat.color }}>{stat.value}</div>
                        <div className="admin-stat-label">{stat.label}</div>
                    </div>
                </div>
            ))}
        </div>
    )
}
