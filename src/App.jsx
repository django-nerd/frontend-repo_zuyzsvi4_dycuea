import { useRef } from 'react'
import Hero from './components/Hero'
import VideoGallery from './components/VideoGallery'
import Team from './components/Team'
import Dashboard from './components/Dashboard'
import HelpDesk from './components/HelpDesk'
import OfficesMap from './components/OfficesMap'

const VIDEOS = [
  "https://youtu.be/zPsoFhUDLuU?si=68awzlUi5kGZcO_H",
  "https://youtu.be/yDGdpWkGmFU?si=FHNWvO9hRhdXE2rz",
  "https://youtu.be/wWYpj9aqTr0?si=sjx9UuzusNmHM8t2",
  "https://youtu.be/1E39jpNN9eQ?si=ZK4SHR-KMFjTtu7v",
  "https://youtu.be/1f0eSejlzLo?si=jBOMC8hKLuoKaQzx",
  "https://youtu.be/YNOnFsnjYhY?si=mYJjH7Vzczz5MP73",
]

export default function App() {
  const galleryRef = useRef(null)

  return (
    <div className="min-h-screen bg-[#f5ead7]">
      <header className="sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-[#f5ead7]/80 bg-[#f5ead7] border-b border-[#e3d2b2]">
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
          <div className="text-lg font-extrabold tracking-tight text-[#5b4636]">Naithika Foundations</div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#videos" className="text-[#6f5a49] hover:text-[#5b4636]">Videos</a>
            <a href="#dashboard" className="text-[#6f5a49] hover:text-[#5b4636]">Dashboard</a>
            <a href="#team" className="text-[#6f5a49] hover:text-[#5b4636]">Team</a>
            <a href="#offices" className="text-[#6f5a49] hover:text-[#5b4636]">Offices</a>
            <a href="#help" className="text-[#6f5a49] hover:text-[#5b4636]">Help Desk</a>
          </nav>
        </div>
      </header>

      <Hero onWatch={() => document.getElementById('videos')?.scrollIntoView({ behavior: 'smooth' })} />
      <VideoGallery videos={VIDEOS} ref={galleryRef} />
      <Dashboard />
      <OfficesMap />
      <Team />
      <HelpDesk />

      <footer className="mt-16 border-t border-[#e3d2b2]">
        <div className="max-w-6xl mx-auto px-6 py-10 text-sm text-[#6f5a49]">
          <div>Operating in Guntur. Visiting up to 5 villages a day to teach ethics and human values in govt schools.</div>
          <div className="mt-2">General contact: <a className="underline text-[#7c5f44]" href="mailto:naithikafoundations@edu.in">naithikafoundations@edu.in</a></div>
        </div>
      </footer>
    </div>
  )
}
