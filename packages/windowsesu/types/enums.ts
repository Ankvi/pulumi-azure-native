export const OsType = {
    Windows7: "Windows7",
    WindowsServer2008: "WindowsServer2008",
    WindowsServer2008R2: "WindowsServer2008R2",
} as const;

/**
 * Type of OS for which the key is requested.
 */
export type OsType = (typeof OsType)[keyof typeof OsType];

export const SupportType = {
    SupplementalServicing: "SupplementalServicing",
    PremiumAssurance: "PremiumAssurance",
} as const;

/**
 * Type of support
 */
export type SupportType = (typeof SupportType)[keyof typeof SupportType];
