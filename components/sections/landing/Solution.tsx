'use client'

import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { SolutionProps } from "@/types/types";
import SolutionCard from "@/components/ui/SolutionCard";

export default function Solution({ cardContent }: SolutionProps) {
    if (!cardContent || cardContent.length === 0) return null;

    const mainItem = cardContent[0];
    const solutions = cardContent;

    return (
        <section className="py-24 bg-background overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
                <motion.div 
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative w-full h-[600px] rounded-3xl overflow-hidden shadow-2xl order-2 lg:order-1"
                >
                    <div className="absolute inset-0 bg-highlight/20 z-10 mix-blend-overlay" />
                    {mainItem.imgUrl ? (
                        <Image 
                            src={mainItem.imgUrl} 
                            alt="Solução" 
                            fill 
                            className="object-cover"
                            sizes="(max-width: 1024px) 100vw, 50vw"
                        />
                    ) : (
                        <div className="w-full h-full bg-shadow flex items-center justify-center text-title/50">
                            Imagem da Solução
                        </div>
                    )}
                </motion.div>

                <motion.div 
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col gap-8 order-1 lg:order-2"
                >
                    <div className="flex flex-col gap-4">
                        <span className="text-highlight font-semibold tracking-widest uppercase text-sm">
                            Nossa Abordagem
                        </span>
                        <h2 className="font-serif font-bold text-4xl md:text-5xl text-title leading-tight">
                            {mainItem.title || "Existe uma solução comprovada"}
                        </h2>
                        <p className="text-lg text-title/70 leading-relaxed">
                            {mainItem.description || "Combinamos tecnologia avançada com protocolos personalizados para garantir os melhores resultados para você."}
                        </p>
                    </div>

                    <div className="flex flex-col gap-6 mt-4">
                        {solutions.map((item, index) => (
                            <SolutionCard key={item.id} item={item} index={index} />
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
