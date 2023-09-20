export const AppSku = {
    ST0: "ST0",
    ST1: "ST1",
    ST2: "ST2",
} as const;

export type AppSku = (typeof AppSku)[keyof typeof AppSku];

export const SystemAssignedServiceIdentityType = {
    None: "None",
    SystemAssigned: "SystemAssigned",
} as const;

export type SystemAssignedServiceIdentityType = (typeof SystemAssignedServiceIdentityType)[keyof typeof SystemAssignedServiceIdentityType];