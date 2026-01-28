import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Icon from "@/components/ui/icon"
import ContactDialog from "./ContactDialog"
import type { SectionProps } from "@/types"

export default function Section({ id, title, subtitle, content, isActive, showButton, buttonText, gallery, steps }: SectionProps) {
  const [dialogOpen, setDialogOpen] = useState(false)
  return (
    <section id={id} className="relative h-screen w-full snap-start flex flex-col justify-center p-8 md:p-16 lg:p-24">
      {subtitle && (
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isActive ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          {subtitle}
        </motion.div>
      )}
      <motion.h2
        className="text-4xl md:text-6xl lg:text-[5rem] xl:text-[6rem] font-bold leading-[1.1] tracking-tight max-w-4xl text-white"
        initial={{ opacity: 0, y: 50 }}
        animate={isActive ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        {title}
      </motion.h2>
      {content && (
        <motion.p
          className="text-lg md:text-xl lg:text-2xl max-w-2xl mt-6 text-neutral-400"
          initial={{ opacity: 0, y: 50 }}
          animate={isActive ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {content}
        </motion.p>
      )}
      {steps && (
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 max-w-7xl"
          initial={{ opacity: 0, y: 50 }}
          animate={isActive ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="relative p-6 rounded-lg border border-neutral-800 bg-black/40 backdrop-blur-sm"
              initial={{ opacity: 0, y: 30 }}
              animate={isActive ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#FF4D00]/10 border border-[#FF4D00]/30 flex items-center justify-center">
                  <Icon name={step.icon} size={24} className="text-[#FF4D00]" />
                </div>
                <div className="flex-1">
                  <div className="text-neutral-500 text-sm font-mono mb-1">Шаг {index + 1}</div>
                  <h3 className="text-white font-semibold text-lg mb-2">{step.title}</h3>
                  <p className="text-neutral-400 text-sm">{step.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      )}
      {gallery && (
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 max-w-6xl"
          initial={{ opacity: 0, y: 50 }}
          animate={isActive ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {gallery.map((image, index) => (
            <motion.div
              key={index}
              className="relative aspect-[4/3] overflow-hidden rounded-lg border border-neutral-800"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isActive ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <p className="text-white font-medium">{image.title}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      )}
      {showButton && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isActive ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 md:mt-16"
        >
          <Button
            variant="outline"
            size="lg"
            onClick={() => setDialogOpen(true)}
            className="text-[#FF4D00] bg-transparent border-[#FF4D00] hover:bg-[#FF4D00] hover:text-black transition-colors"
          >
            {buttonText}
          </Button>
        </motion.div>
      )}
      <ContactDialog open={dialogOpen} onOpenChange={setDialogOpen} />
    </section>
  )
}