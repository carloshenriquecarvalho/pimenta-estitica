'use client'

import { motion } from "framer-motion";
import { HubServiceItem } from "@/types/types";
import HubServiceCard from "@/components/ui/HubServiceCard";

interface HubServicesProps {
    services: HubServiceItem[];
}

export default function HubServices({ services }: HubServicesProps) {
    return (
        <section id="servicos" className="py-24 bg-shadow/20">
            <div className="max-w-7xl mx-auto px-6 flex flex-col">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col items-center text-center gap-4 mb-16"
                >
                    <span className="text-highlight font-semibold tracking-widest uppercase text-sm">Nossas Especialidades</span>
                    <h2 className="font-serif font-bold text-4xl md:text-5xl text-title leading-tight">
                        Equipamentos Premium
                    </h2>
                    <p className="text-lg text-title/70 max-w-2xl">
                        Explore nossos equipamentos exclusivos que entregam resultados seguros, naturais e duradouros.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <HubServiceCard key={service.id} service={service} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}
