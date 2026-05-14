'use client'

import { motion } from "framer-motion";
import Image from "next/image";
import { HubAboutProps } from "@/types/types";

export default function HubAbout({ title, description, aestheticianName, imgUrl }: HubAboutProps) {
    return (
        <section id="sobre" className="py-24 bg-background">
            <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
                <motion.div 
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative w-full aspect-[4/5] max-w-md mx-auto lg:mx-0 rounded-3xl overflow-hidden shadow-2xl"
                >
                    <div className="absolute inset-0 bg-title/10 z-10" />
                    {imgUrl ? (
                        <Image 
                            src={imgUrl} 
                            alt={aestheticianName} 
                            fill 
                            className="object-cover"
                        />
                    ) : (
                        <div className="w-full h-full bg-shadow flex items-center justify-center text-title/50">
                            Foto {aestheticianName}
                        </div>
                    )}
                </motion.div>

                <motion.div 
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col gap-6"
                >
                    <span className="text-highlight font-semibold tracking-widest uppercase text-sm">
                        {title}
                    </span>
                    <h2 className="font-serif font-bold text-4xl md:text-5xl text-title leading-tight">
                        {aestheticianName}
                    </h2>
                    <div className="h-1 w-20 bg-highlight rounded-full" />
                    <p className="text-lg text-title/70 leading-relaxed mt-4">
                        {description}
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
