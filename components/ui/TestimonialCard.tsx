'use client'

import { motion } from "framer-motion";
import Image from "next/image";
import { Star, Quote } from "lucide-react";
import { TestimonialItem } from "@/types/types";

interface TestimonialCardProps {
    card: TestimonialItem;
    index: number;
}

export default function TestimonialCard({ card, index }: TestimonialCardProps) {
    return (
        <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="flex flex-col bg-card rounded-2xl shadow-xl shadow-shadow/50 border border-shadow overflow-hidden group h-full"
        >
            {card.videoUrl ? (
                <div className="relative w-full aspect-[9/16] md:aspect-video bg-shadow overflow-hidden">
                    <iframe 
                        src={card.videoUrl} 
                        title={`Depoimento de ${card.title}`}
                        className="absolute inset-0 w-full h-full border-0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowFullScreen
                    />
                </div>
            ) : (
                <div className="relative w-full aspect-video bg-shadow flex items-center justify-center overflow-hidden">
                    {card.patientImgUrl ? (
                        <Image 
                            src={card.patientImgUrl} 
                            alt={card.title} 
                            fill 
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                    ) : (
                        <div className="flex flex-col items-center justify-center h-full text-title/30 bg-shadow w-full">
                            <span className="font-serif">Sem Vídeo/Foto</span>
                        </div>
                    )}
                    <div className="absolute inset-0 bg-title/10" />
                </div>
            )}
            
            <div className="flex flex-col p-8 gap-6 flex-grow justify-between">
                <div>
                    <Quote className="text-highlight/30 mb-4" size={32} />
                    <p className="text-base md:text-lg text-title/80 font-serif italic leading-relaxed">
                        "Um atendimento excepcional e resultados que superaram minhas expectativas. Recomendo de olhos fechados."
                    </p>
                </div>
                
                <div className="flex items-center justify-between pt-6 border-t border-shadow/50">
                    <h4 className="font-sans font-bold text-base text-title tracking-wide">{card.title}</h4>
                    <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                            <Star key={i} size={14} className="fill-highlight text-highlight" />
                        ))}
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
