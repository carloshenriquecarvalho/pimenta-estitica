'use client'

import { motion } from "framer-motion";
import Image from "next/image";
import Button from "@/components/ui/Button";
import { CtaProps } from "@/types/types";

export default function Cta({ title, imgUrl }: CtaProps) {
    return (
        <section className="relative w-full py-32 overflow-hidden flex items-center justify-center">
            {/* Background Image / Overlay */}
            <div className="absolute inset-0 z-0 bg-title">
                {imgUrl && (
                    <Image 
                        src={imgUrl} 
                        alt="CTA Background" 
                        fill 
                        className="object-cover opacity-30 mix-blend-overlay"
                        sizes="100vw"
                    />
                )}
            </div>

            <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative z-10 max-w-4xl mx-auto px-6 flex flex-col items-center text-center gap-10"
            >
                <h2 className="font-serif font-bold text-5xl md:text-6xl lg:text-[72px] text-white leading-tight">
                    {title}
                </h2>
                <Button text="Garantir Meu Horário" url="#contato" />
            </motion.div>
        </section>
    );
}
