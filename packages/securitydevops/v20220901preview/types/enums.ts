export const AutoDiscovery = {
    Disabled: "Disabled",
    Enabled: "Enabled",
} as const;

export type AutoDiscovery = (typeof AutoDiscovery)[keyof typeof AutoDiscovery];
