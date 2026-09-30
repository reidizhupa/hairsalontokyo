// Shared motion tokens (from the "animation-systems" / "masked-reveal"
// guidance): one ease family, a few durations, small stagger. Reuse these
// instead of inventing per-component numbers.
export const EASE_OUT = [0.16, 1, 0.3, 1] as const;

export const DURATION = {
    micro: 0.18, // hover / press
    reveal: 0.8, // section entrances, text masks
    image: 1.2, // photo unveil
    hero: 1.1,
} as const;

export const STAGGER = {
    word: 0.05,
    line: 0.1,
    item: 0.08,
} as const;

// Fire once when ~20% visible, slightly biased toward the lower viewport.
export const VIEWPORT = { once: true, amount: 0.2 } as const;
