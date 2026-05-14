'use client'

import Image from "next/image";
import { PainCardProps } from "@/types/types";
import { motion, Variants } from "framer-motion";

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

export default function PainCard({ card, index }: PainCardProps) {
    return (
        <motion.div
            variants={itemVariants}
            className="group flex flex-col rounded-2xl overflow-hidden bg-card hover:shadow-2xl shadow-shadow/50 border border-shadow/50 transition-all duration-300"
        >
            <div className="relative w-full aspect-square overflow-hidden bg-shadow">
                {card.imgUrl ? (
                    <Image
                        alt={card.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        src={card.imgUrl}
                    />
                ) : (
                    <div className="w-full h-full flex items-center justify-center text-title/30">
                        Imagem {card.id}
                    </div>
                )}
            </div>
            <div className="flex flex-col gap-3 p-6 flex-grow">
                <h3 className="font-serif font-bold text-xl text-title">{card.title}</h3>
                <p className="text-title/70 text-sm leading-relaxed">{card.desc}</p>
            </div>
        </motion.div>
    )
}