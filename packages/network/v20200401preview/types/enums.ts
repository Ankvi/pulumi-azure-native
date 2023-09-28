export const IpAllocationMethod = {
    Static: "Static",
    Dynamic: "Dynamic",
} as const;

/**
 * Private IP address allocation method.
 */
export type IpAllocationMethod = (typeof IpAllocationMethod)[keyof typeof IpAllocationMethod];
