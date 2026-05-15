'use client'

import { motion } from "framer-motion";
import Image from "next/image";
import { BenefitsProps } from "@/types/types";

export default function Benefits({ title, subtitle, imgUrls }: BenefitsProps) {
    return (
        <section id="resultados" className="py-24 bg-shadow/30">
            <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col items-center text-center gap-4 mb-16"
                >
                    <span className="text-highlight font-semibold tracking-widest uppercase text-sm">Transformação</span>
                    <h2 className="font-serif font-bold text-4xl md:text-5xl text-title leading-tight">{title}</h2>
                    <p className="text-lg text-title/70 max-w-2xl">{subtitle}</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
                    {imgUrls.map((url, index) => (
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            key={index} 
                            className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden shadow-xl group"
                        >
                            {url ? (
                                <Image 
                                    src={url} 
                                    alt={`Benefício ${index + 1}`} 
                                    fill 
                                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                />
                            ) : (
                                <div className="w-full h-full bg-shadow flex items-center justify-center text-title/40">
                                    Imagem {index + 1}
                                </div>
                            )}
                            <div className="absolute inset-0 bg-gradient-to-t from-title/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
