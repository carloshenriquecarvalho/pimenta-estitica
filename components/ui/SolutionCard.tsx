'use client'

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { SolutionItem } from "@/types/types";

interface SolutionCardProps {
    item: SolutionItem;
    index: number;
}

export default function SolutionCard({ item, index }: SolutionCardProps) {
    return (
        <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex gap-4 items-start"
        >
            <CheckCircle2 className="text-highlight shrink-0 mt-1" size={24} />
            <div className="flex flex-col">
                <h4 className="font-serif font-bold text-xl text-title">{item.solutionTitle}</h4>
                <p className="text-title/70 text-sm mt-1">{item.solutionDescription}</p>
            </div>
        </motion.div>
    );
}
