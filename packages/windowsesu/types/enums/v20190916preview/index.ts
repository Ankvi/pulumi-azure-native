// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***


export const OsType = {
    Windows7: "Windows7",
    WindowsServer2008: "WindowsServer2008",
    WindowsServer2008R2: "WindowsServer2008R2",
} as const;

export type OsType = (typeof OsType)[keyof typeof OsType];

export const SupportType = {
    SupplementalServicing: "SupplementalServicing",
    PremiumAssurance: "PremiumAssurance",
} as const;

export type SupportType = (typeof SupportType)[keyof typeof SupportType];
