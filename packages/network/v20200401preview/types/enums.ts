export const IpAllocationMethod = {
    Static: "Static",
    Dynamic: "Dynamic",
} as const;

export type IpAllocationMethod = (typeof IpAllocationMethod)[keyof typeof IpAllocationMethod];
