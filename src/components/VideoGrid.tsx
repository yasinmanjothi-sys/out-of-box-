import { Play } from 'lucide-react'
import './videogrid.css'

export default function VideoGrid() {
    // Using placeholders for the videos as per the current asset availability
    // In the future, these would map to real video files and their respective social links
    const socialVideos = [
        { id: 1, platform: 'Instagram', label: 'Watch on Instagram', color: '#E1306C' },
        { id: 2, platform: 'Facebook', label: 'Watch on Facebook', color: '#1877F2' },
        { id: 3, platform: 'TikTok', label: 'Watch on TikTok', color: '#000000' },
    ]

    return (
        <section className="video-grid-section faded-ruler">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">See Our Tools In Action</h2>
                    <p className="section-subtitle">Real performance. Real results. Check out our social media demonstrations.</p>
                </div>

                <div className="video-grid">
                    {socialVideos.map((video) => (
                        <a
                            key={video.id}
                            href="#"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="video-card"
                            aria-label={video.label}
                        >
                            <div className="video-placeholder">
                                <Play size={48} className="play-icon" />
                                <span className="platform-badge" style={{ backgroundColor: video.color }}>
                                    {video.platform}
                                </span>
                                <p className="placeholder-text">Video coming soon</p>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    )
}
