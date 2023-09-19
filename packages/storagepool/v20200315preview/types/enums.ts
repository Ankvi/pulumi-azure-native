export const DiskPoolTier = {
    Basic: "Basic",
    Standard: "Standard",
    Premium: "Premium",
} as const;

export type DiskPoolTier = (typeof DiskPoolTier)[keyof typeof DiskPoolTier];
