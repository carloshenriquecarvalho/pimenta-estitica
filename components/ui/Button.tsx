'use client';

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ButtonProps } from "@/types/types";
import { whatsappLink } from "@/data/content";
import { sendGTMEvent } from "@next/third-parties/google";

export default function Button({ text, variant = "primary" }: ButtonProps) {
    const whatsAppTag = () => {
        sendGTMEvent({ event: "whatsapp_click", value: "whatsapp" });
    }

    const baseStyle = "group inline-flex items-center justify-center gap-2 px-8 py-4 font-sans font-medium uppercase tracking-widest text-sm transition-all duration-300 w-fit";
    
    const variants = {
        primary: "bg-button text-buttonText hover:bg-hover shadow-lg shadow-highlight/20",
        outline: "border border-button text-button hover:bg-button hover:text-buttonText"
    };

    return (
        <Link className={`${baseStyle} ${variants[variant]}`}
            target="_blank"
            href={whatsappLink}
            onClick={whatsAppTag}
        >
            {text}
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
        </Link>
    )
}