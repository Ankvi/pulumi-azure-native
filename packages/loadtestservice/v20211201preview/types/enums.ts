export const SystemAssignedServiceIdentityType = {
    None: "None",
    SystemAssigned: "SystemAssigned",
} as const;

export type SystemAssignedServiceIdentityType = (typeof SystemAssignedServiceIdentityType)[keyof typeof SystemAssignedServiceIdentityType];
