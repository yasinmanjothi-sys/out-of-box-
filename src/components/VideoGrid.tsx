"use client"
import { useState } from 'react'
import { Play, X, ExternalLink } from 'lucide-react'
import './videogrid.css'

interface SocialVideo {
    id: number;
    platform: string;
    url: string;
    src: string;
    color: string;
}

export default function VideoGrid() {
    const socialVideos: SocialVideo[] = [
        { id: 1, platform: 'Instagram', url: 'https://www.instagram.com/outofboxtools/', src: '/videos/instagram.mp4', color: '#E1306C' },
        { id: 2, platform: 'TikTok', url: 'https://www.tiktok.com/@outofboxtools', src: '/videos/tik tok.mp4', color: '#000000' },
        { id: 3, platform: 'Facebook', url: 'https://www.facebook.com/OutofBoxTools/', src: '/videos/facebook.mp4', color: '#1877F2' },
    ]

    const [activeVideo, setActiveVideo] = useState<SocialVideo | null>(null)

    return (
        <section className="video-grid-section faded-ruler">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">See Our Tools In Action</h2>
                    <p className="section-subtitle">Real performance. Real results. Check out our social media demonstrations.</p>
                </div>

                <div className="video-grid">
                    {socialVideos.map((video) => (
                        <div
                            key={video.id}
                            className="video-card"
                            onClick={() => setActiveVideo(video)}
                            role="button"
                            tabIndex={0}
                            onKeyDown={(e) => { if (e.key === 'Enter') setActiveVideo(video) }}
                        >
                            <div className="video-thumbnail-container">
                                <video 
                                    src={video.src} 
                                    className="video-thumbnail" 
                                    autoPlay 
                                    loop 
                                    muted 
                                    playsInline 
                                />
                                <div className="video-overlay">
                                    <Play size={48} className="play-icon" />
                                    <span className="platform-badge" style={{ backgroundColor: video.color }}>
                                        {video.platform}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Lightbox */}
            {activeVideo && (
                <div className="video-lightbox" onClick={() => setActiveVideo(null)}>
                    <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
                        <button className="close-btn" onClick={() => setActiveVideo(null)} aria-label="Close Video">
                            <X size={24} />
                        </button>
                        
                        <div className="lightbox-video-container">
                            <video 
                                src={activeVideo.src} 
                                className="lightbox-video" 
                                autoPlay 
                                controls 
                                playsInline 
                            />
                        </div>

                        <div className="lightbox-actions">
                            <a 
                                href={activeVideo.url} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="see-more-btn"
                                style={{ backgroundColor: activeVideo.color }}
                            >
                                See More on {activeVideo.platform} <ExternalLink size={18} className="ml-2 inline" style={{ marginLeft: '8px' }} />
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </section>
    )
}
