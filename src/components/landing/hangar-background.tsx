import { useRef, useEffect } from "react"

interface HangarBackgroundProps {
  className?: string
}

export function HangarBackground({ className }: HangarBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect()
      canvas.width = rect.width
      canvas.height = rect.height
      drawHangarFrames()
    }

    const drawHangarFrames = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const frames = [
        { x: canvas.width * 0.15, y: canvas.height * 0.3, scale: 1.2, opacity: 0.4 },
        { x: canvas.width * 0.6, y: canvas.height * 0.6, scale: 1.4, opacity: 0.35 },
        { x: canvas.width * 0.25, y: canvas.height * 0.75, scale: 1.0, opacity: 0.3 }
      ]

      frames.forEach(frame => {
        drawArchedHangar(ctx, frame.x, frame.y, frame.scale, frame.opacity)
      })
    }

    const drawArchedHangar = (
      ctx: CanvasRenderingContext2D,
      x: number,
      y: number,
      scale: number,
      opacity: number
    ) => {
      ctx.save()
      ctx.translate(x, y)
      ctx.scale(scale, scale)
      ctx.strokeStyle = `rgba(255, 77, 0, ${opacity})`
      ctx.lineWidth = 2

      const width = 200
      const height = 120
      const depth = 150
      const arches = 5

      for (let i = 0; i < arches; i++) {
        const archX = (i * depth) / (arches - 1)
        
        ctx.beginPath()
        ctx.moveTo(archX, 0)
        
        for (let angle = 0; angle <= Math.PI; angle += Math.PI / 20) {
          const px = archX + Math.cos(angle + Math.PI / 2) * (width / 2)
          const py = -Math.sin(angle) * height
          ctx.lineTo(px, py)
        }
        ctx.stroke()

        for (let j = 0; j < 3; j++) {
          const crossY = -(height * j) / 3
          ctx.beginPath()
          ctx.moveTo(archX - 5, crossY)
          ctx.lineTo(archX + 5, crossY)
          ctx.stroke()
        }
      }

      for (let i = 0; i < arches - 1; i++) {
        const x1 = (i * depth) / (arches - 1)
        const x2 = ((i + 1) * depth) / (arches - 1)
        
        ctx.beginPath()
        ctx.moveTo(x1 - width / 2, 0)
        ctx.lineTo(x2 - width / 2, 0)
        ctx.stroke()

        ctx.beginPath()
        ctx.moveTo(x1 + width / 2, 0)
        ctx.lineTo(x2 + width / 2, 0)
        ctx.stroke()
      }

      const trusses = 8
      for (let i = 0; i < arches; i++) {
        const archX = (i * depth) / (arches - 1)
        for (let j = 0; j < trusses; j++) {
          const angle = (Math.PI * j) / trusses
          const x1 = archX + Math.cos(angle + Math.PI / 2) * (width / 2)
          const y1 = -Math.sin(angle) * height
          const angle2 = (Math.PI * (j + 1)) / trusses
          const x2 = archX + Math.cos(angle2 + Math.PI / 2) * (width / 2)
          const y2 = -Math.sin(angle2) * height
          
          ctx.beginPath()
          ctx.moveTo(x1, y1)
          ctx.lineTo(x2, y2)
          ctx.stroke()
        }
      }

      ctx.restore()
    }

    window.addEventListener("resize", resizeCanvas)
    resizeCanvas()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className={`w-full h-full border-none block ${className}`}
      style={{ background: "#000000" }}
    />
  )
}