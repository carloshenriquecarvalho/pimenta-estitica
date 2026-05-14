'use client'

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { HubServiceItem } from "@/types/types";

interface HubServiceCardProps {
    service: HubServiceItem;
    index: number;
}

export default function HubServiceCard({ service, index }: HubServiceCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
        >
            <Link 
                href={`/${service.slug}`}
                className="group flex flex-col bg-card rounded-2xl overflow-hidden shadow-xl shadow-shadow/50 border border-shadow/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl h-full"
            >
                <div className="relative w-full aspect-[4/3] overflow-hidden bg-shadow">
                    {service.imgUrl ? (
                        <Image
                            alt={service.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                            src={service.imgUrl}
                        />
                    ) : (
                        <div className="w-full h-full flex items-center justify-center text-title/30">
                            Imagem {service.title}
                        </div>
                    )}
                    <div className="absolute inset-0 bg-title/10 group-hover:bg-transparent transition-colors duration-300" />
                </div>
                <div className="flex flex-col flex-grow p-8 gap-4 justify-between">
                    <div className="flex flex-col gap-3">
                        <h3 className="font-serif font-bold text-2xl text-title">{service.title}</h3>
                        <p className="text-title/70 leading-relaxed">{service.description}</p>
                    </div>
                    <div className="flex items-center gap-2 text-highlight font-semibold text-sm uppercase tracking-widest mt-4">
                        <span>Saiba Mais</span>
                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                </div>
            </Link>
        </motion.div>
    );
}
