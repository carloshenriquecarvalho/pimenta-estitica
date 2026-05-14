'use client'

import { motion } from "framer-motion";
import { TestimonialsProps } from "@/types/types";
import TestimonialCard from "@/components/ui/TestimonialCard";

export default function Testimonials({ title, cardContent }: TestimonialsProps) {
    return (
        <section id="depoimentos" className="py-24 bg-background">
            <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col items-center text-center gap-4 mb-16"
                >
                    <span className="text-highlight font-semibold tracking-widest uppercase text-sm">Experiências Reais</span>
                    <h2 className="font-serif font-bold text-4xl md:text-5xl text-title leading-tight">{title}</h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
                    {cardContent.map((card, index) => (
                        <TestimonialCard key={card.id} card={card} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}
