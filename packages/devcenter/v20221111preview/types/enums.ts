export const HibernateSupport = {
    Disabled: "Disabled",
    Enabled: "Enabled",
} as const;

export type HibernateSupport = (typeof HibernateSupport)[keyof typeof HibernateSupport];

export const SkuTier = {
    Free: "Free",
    Basic: "Basic",
    Standard: "Standard",
    Premium: "Premium",
} as const;

export type SkuTier = (typeof SkuTier)[keyof typeof SkuTier];
