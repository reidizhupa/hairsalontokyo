"use client";

import { useRef } from "react";
import Image from "next/image";
import {
    motion,
    useReducedMotion,
    useScroll,
    useTransform,
    type Variants,
} from "motion/react";
import { DURATION, EASE_OUT, VIEWPORT } from "@/lib/motion";

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
    // Unveil the photo upward (clip) with a small settle-in zoom, once.
    reveal?: boolean;
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
    reveal = true,
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
        // Reduced motion holds the start offset: static, and identical to
        // the server-rendered value so hydration matches.
        [`-${strength}%`, reduce ? `-${strength}%` : `${strength}%`],
    );

    const unveil: Variants = {
        hidden: { clipPath: "inset(100% 0% 0% 0%)" },
        shown: {
            clipPath: "inset(0% 0% 0% 0%)",
            transition: reduce
                ? { duration: 0 }
                : { duration: DURATION.image, ease: EASE_OUT },
        },
    };
    const settle: Variants = {
        hidden: { scale: 1.12 },
        shown: {
            scale: 1,
            transition: reduce
                ? { duration: 0 }
                : { duration: DURATION.image + 0.4, ease: EASE_OUT },
        },
    };

    // The in-view trigger sits on the unclipped frame; the clip lives on an
    // inner layer. A fully clipped element never counts as intersecting, so
    // observing the clipped layer itself would leave the photo hidden forever.
    return (
        <motion.div
            ref={ref}
            className={`relative overflow-hidden ${className}`}
            initial={reveal ? "hidden" : false}
            whileInView="shown"
            viewport={VIEWPORT}
        >
            <motion.div className="absolute inset-0" variants={unveil}>
                <motion.div
                    className="absolute inset-x-0"
                    // Headroom above/below so the drift never exposes an empty
                    // edge. Markup never branches on `reduce` (null during SSR);
                    // reduced motion flattens `y` and makes the unveil instant.
                    style={{
                        y,
                        top: `-${strength + 2}%`,
                        bottom: `-${strength + 2}%`,
                    }}
                >
                    <motion.div className="absolute inset-0" variants={settle}>
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
                </motion.div>
            </motion.div>
        </motion.div>
    );
}
