"use client";

import { useRef } from "react";
import Image from "next/image";
import {
    motion,
    useReducedMotion,
    useScroll,
    useTransform,
} from "motion/react";

interface ParallaxImageProps {
    src: string;
    alt: string;
    sizes: string;
    className?: string;
    imageClassName?: string;
    // Max drift as a % of the frame height, applied in both directions.
    strength?: number;
    priority?: boolean;
    zoomOnHover?: boolean;
}

export function ParallaxImage({
    src,
    alt,
    sizes,
    className = "",
    imageClassName = "object-cover",
    strength = 6,
    priority = false,
    zoomOnHover = true,
}: ParallaxImageProps) {
    const ref = useRef<HTMLDivElement>(null);
    const reduce = useReducedMotion();
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });
    const y = useTransform(
        scrollYProgress,
        [0, 1],
        [`-${strength}%`, `${strength}%`],
    );

    return (
        <div ref={ref} className={`relative overflow-hidden ${className}`}>
            <motion.div
                className="absolute inset-x-0"
                // Headroom above/below so the drift never exposes an empty edge.
                style={
                    reduce
                        ? { top: 0, bottom: 0 }
                        : {
                              y,
                              top: `-${strength + 2}%`,
                              bottom: `-${strength + 2}%`,
                          }
                }
            >
                <Image
                    src={src}
                    alt={alt}
                    fill
                    priority={priority}
                    sizes={sizes}
                    className={`${imageClassName} ${
                        zoomOnHover
                            ? "transition-transform duration-[1400ms] ease-out group-hover:scale-[1.04]"
                            : ""
                    }`}
                />
            </motion.div>
        </div>
    );
}
