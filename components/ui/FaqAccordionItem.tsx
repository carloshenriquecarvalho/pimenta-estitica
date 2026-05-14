'use client'

import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { FaqItem } from "@/types/types";

interface FaqAccordionItemProps {
    faq: FaqItem;
    isOpen: boolean;
    onToggle: () => void;
    index: number;
}

export default function FaqAccordionItem({ faq, isOpen, onToggle, index }: FaqAccordionItemProps) {
    return (
        <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="bg-card rounded-xl shadow-sm border border-shadow/50 overflow-hidden"
        >
            <button 
                onClick={onToggle}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-shadow/10 transition-colors cursor-pointer"
            >
                <span className="font-serif font-bold text-lg text-title pr-8">{faq.question}</span>
                <ChevronDown 
                    className={`text-highlight shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
                />
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="px-6 pb-5 pt-0 text-title/70">
                            {faq.answer}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}
