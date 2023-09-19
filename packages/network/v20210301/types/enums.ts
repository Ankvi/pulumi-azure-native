export const CommissionedState = {
    Provisioning: "Provisioning",
    Provisioned: "Provisioned",
    Commissioning: "Commissioning",
    Commissioned: "Commissioned",
    Decommissioning: "Decommissioning",
    Deprovisioning: "Deprovisioning",
} as const;

export type CommissionedState = (typeof CommissionedState)[keyof typeof CommissionedState];

export const ExtendedLocationTypes = {
    EdgeZone: "EdgeZone",
} as const;

export type ExtendedLocationTypes = (typeof ExtendedLocationTypes)[keyof typeof ExtendedLocationTypes];
