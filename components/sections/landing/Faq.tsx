'use client'

import { useState } from "react";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import { FaqProps } from "@/types/types";
import FaqAccordionItem from "@/components/ui/FaqAccordionItem";

export default function Faq({ title, cardContent, moreQuestions }: FaqProps) {
    // Filter out potential undefined elements from the mock data array
    const safeContent = cardContent?.filter(item => item !== undefined) || [];
    const [openId, setOpenId] = useState<number | null>(null);

    return (
        <section id="faq" className="py-24 bg-shadow/20">
            <div className="max-w-4xl mx-auto px-6 flex flex-col items-center">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col items-center text-center gap-4 mb-16"
                >
                    <span className="text-highlight font-semibold tracking-widest uppercase text-sm">Tire suas Dúvidas</span>
                    <h2 className="font-serif font-bold text-4xl md:text-5xl text-title leading-tight">{title}</h2>
                </motion.div>

                <div className="flex flex-col w-full gap-4 mb-16">
                    {safeContent.map((faq, index) => (
                        <FaqAccordionItem 
                            key={faq.id} 
                            faq={faq} 
                            index={index} 
                            isOpen={openId === faq.id}
                            onToggle={() => setOpenId(openId === faq.id ? null : faq.id)}
                        />
                    ))}
                </div>

                <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="bg-card p-10 rounded-2xl shadow-xl w-full flex flex-col items-center text-center gap-6 border border-shadow"
                >
                    <h3 className="font-serif font-bold text-2xl text-title">{moreQuestions.title}</h3>
                    <p className="text-title/70">{moreQuestions.cta}</p>
                    <Button text={moreQuestions.contactButton} url="#contato" variant="outline" />
                </motion.div>
            </div>
        </section>
    );
}
