export const CloudServiceSlotType = {
    Production: "Production",
    Staging: "Staging",
} as const;

export type CloudServiceSlotType = (typeof CloudServiceSlotType)[keyof typeof CloudServiceSlotType];

export const CloudServiceUpgradeMode = {
    Auto: "Auto",
    Manual: "Manual",
    Simultaneous: "Simultaneous",
} as const;

export type CloudServiceUpgradeMode = (typeof CloudServiceUpgradeMode)[keyof typeof CloudServiceUpgradeMode];
