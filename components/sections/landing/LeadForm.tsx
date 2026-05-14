'use client'

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { LeadFormProps } from "@/types/types";
import FormButton from "@/components/ui/FormButton";

export default function LeadForm({ title, subtitle, locationUrl, campaign }: LeadFormProps) {
    return (
        <section id="contato" className="py-24 bg-background">
            <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-start">
                
                <motion.div 
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col gap-8 h-full"
                >
                    <div className="flex flex-col gap-4">
                        <span className="text-highlight font-semibold tracking-widest uppercase text-sm">Visite-nos</span>
                        <h2 className="font-serif font-bold text-4xl text-title">{title}</h2>
                        <p className="text-lg text-title/70">{subtitle}</p>
                    </div>
                    
                    <div className="w-full h-80 lg:h-full min-h-[300px] bg-shadow rounded-2xl overflow-hidden relative border border-shadow">

                        <div className="absolute inset-0 flex flex-col items-center justify-center text-title/50 gap-3">
                            <MapPin size={48} className="text-highlight" />
                            <span className="font-serif text-xl">Nossa Localização</span>
                        </div>
                    </div>
                </motion.div>

                <motion.div 
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="bg-card p-10 md:p-12 rounded-3xl shadow-2xl shadow-shadow/50 border border-shadow/50"
                >
                    <h3 className="font-serif font-bold text-2xl text-title mb-8">Agende sua avaliação</h3>
                    <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
                        <div className="flex flex-col gap-2">
                            <label className="text-sm font-medium text-title/80 uppercase tracking-widest">Nome Completo</label>
                            <input 
                                type="text" 
                                className="w-full bg-transparent border-b-2 border-shadow py-3 focus:outline-none focus:border-highlight transition-colors text-title placeholder:text-title/30"
                                placeholder="Como gostaria de ser chamada?"
                            />
                        </div>
                        
                        <div className="flex flex-col gap-2">
                            <label className="text-sm font-medium text-title/80 uppercase tracking-widest">Telefone / WhatsApp</label>
                            <input 
                                type="tel" 
                                className="w-full bg-transparent border-b-2 border-shadow py-3 focus:outline-none focus:border-highlight transition-colors text-title placeholder:text-title/30"
                                placeholder="(00) 00000-0000"
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="text-sm font-medium text-title/80 uppercase tracking-widest">Qual procedimento tem interesse?</label>
                            <select className="w-full bg-transparent border-b-2 border-shadow py-3 focus:outline-none focus:border-highlight transition-colors text-title appearance-none cursor-pointer">
                                <option value="">Selecione uma opção</option>
                                <option value="botox">Aplicação de Toxina Botulínica</option>
                                <option value="harmonizacao">Harmonização Facial</option>
                                <option value="bioestimulador">Bioestimuladores de Colágeno</option>
                                <option value="outro">Outros / Não sei ainda</option>
                            </select>
                        </div>

                        <div className="mt-6">
                            <FormButton campaign={campaign} />
                        </div>
                        <p className="text-xs text-title/50 text-center mt-4">
                            Seus dados estão seguros conosco. Retornaremos o contato em até 24 horas.
                        </p>
                    </form>
                </motion.div>
            </div>
        </section>
    );
}
