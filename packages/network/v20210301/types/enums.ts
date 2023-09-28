export const CommissionedState = {
    Provisioning: "Provisioning",
    Provisioned: "Provisioned",
    Commissioning: "Commissioning",
    Commissioned: "Commissioned",
    Decommissioning: "Decommissioning",
    Deprovisioning: "Deprovisioning",
} as const;

/**
 * The commissioned state of the Custom IP Prefix.
 */
export type CommissionedState = (typeof CommissionedState)[keyof typeof CommissionedState];

export const ExtendedLocationTypes = {
    EdgeZone: "EdgeZone",
} as const;

/**
 * The type of the extended location.
 */
export type ExtendedLocationTypes = (typeof ExtendedLocationTypes)[keyof typeof ExtendedLocationTypes];
