export const MdeIntegration = {
    Disabled: "Disabled",
    Enabled: "Enabled",
} as const;

export type MdeIntegration = (typeof MdeIntegration)[keyof typeof MdeIntegration];

export const OnboardingKind = {
    Default: "Default",
    MigratedToAzure: "MigratedToAzure",
    Evaluation: "Evaluation",
    Purchased: "Purchased",
} as const;

export type OnboardingKind = (typeof OnboardingKind)[keyof typeof OnboardingKind];

export const SensorType = {
    Ot: "Ot",
    Enterprise: "Enterprise",
} as const;

export type SensorType = (typeof SensorType)[keyof typeof SensorType];
