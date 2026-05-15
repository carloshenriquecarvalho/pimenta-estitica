'use client'

import Button from "@/components/ui/Button";
import { motion } from "framer-motion";
import Image from "next/image";
import { HeroProps } from "@/types/types";

export default function Hero({ title, subtitle, buttonText, buttonUrl, imgUrl }: HeroProps) {
    return (
        <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-background pt-2">
            <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center w-full">
                <motion.div 
                    initial={{ opacity: 1, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="flex flex-col gap-6 z-10"
                >
                    <div className="inline-block px-4 py-1.5 rounded-full border border-button/30 bg-button/5 w-fit">
                        <span className="text-button text-xs font-semibold uppercase tracking-widest">
                            Estética Avançada
                        </span>
                    </div>
                    <h1 className="font-serif font-bold text-5xl md:text-6xl lg:text-[72px] leading-[1.1] text-title">
                        {title}
                    </h1>
                    <p className="text-lg md:text-xl text-title/70 max-w-lg font-light leading-relaxed">
                        {subtitle}
                    </p>
                    <div className="pt-4">
                        <Button text={buttonText} url={buttonUrl} />
                    </div>
                </motion.div>
                
                <motion.div 
                    initial={{ opacity: 1, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                    className="relative w-full h-[500px] md:h-[600px] lg:h-[700px] rounded-2xl overflow-hidden shadow-2xl"
                >
                    <div className="absolute inset-0 bg-title/10 z-10 rounded-2xl" />
                    {imgUrl ? (
                        <Image 
                            src={imgUrl} 
                            alt={title} 
                            fill 
                            className="object-cover"
                            priority
                            fetchPriority="high"
                            sizes="(max-width: 1024px) 100vw, 50vw"
                        />
                    ) : (
                        <div className="w-full h-full bg-shadow flex items-center justify-center">
                            <span className="text-title/50">Imagem Hero</span>
                        </div>
                    )}
                </motion.div>
            </div>
        </section>
    )
}