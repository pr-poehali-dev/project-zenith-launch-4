import { ReactNode } from 'react'
import { Squares } from "./squares-background"
import Icon from '@/components/ui/icon'

interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="h-screen overflow-hidden bg-black relative">
      <div className="absolute inset-0 z-10">
        <Squares
          direction="diagonal"
          speed={0.5}
          squareSize={40}
          borderColor="#333"
          hoverFillColor="#222"
        />
      </div>
      <header className="fixed top-0 left-0 right-0 z-30 p-6">
        <div className="flex justify-between items-center">
          <h1 className="text-white text-xl md:text-2xl font-bold">ООО "Констрактор-НН"</h1>
          <div className="hidden md:flex items-center gap-6 text-white text-sm">
            <a href="tel:89302157155" className="flex items-center gap-2 hover:text-[#FF4D00] transition-colors">
              <Icon name="Phone" size={16} />
              <span>8 930 215 71 55</span>
            </a>
            <a href="mailto:constructor-nn@bk.ru" className="flex items-center gap-2 hover:text-[#FF4D00] transition-colors">
              <Icon name="Mail" size={16} />
              <span>constructor-nn@bk.ru</span>
            </a>
          </div>
        </div>
      </header>
      <div className="relative z-20 h-full">
        {children}
      </div>
      <footer className="fixed bottom-0 left-0 right-0 z-30 p-6 bg-gradient-to-t from-black/80 to-transparent">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-neutral-400 text-sm">
          <p>© 2025 ООО "Констрактор-НН". Все права защищены</p>
          <div className="flex flex-col md:flex-row items-center gap-4">
            <a href="tel:89302157155" className="flex items-center gap-2 hover:text-white transition-colors">
              <Icon name="Phone" size={16} />
              <span>8 930 215 71 55</span>
            </a>
            <a href="mailto:constructor-nn@bk.ru" className="flex items-center gap-2 hover:text-white transition-colors">
              <Icon name="Mail" size={16} />
              <span>constructor-nn@bk.ru</span>
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}