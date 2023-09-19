export const PolicyMode = {
    NotSpecified: "NotSpecified",
    Indexed: "Indexed",
    All: "All",
} as const;

export type PolicyMode = (typeof PolicyMode)[keyof typeof PolicyMode];

export const PolicyType = {
    NotSpecified: "NotSpecified",
    BuiltIn: "BuiltIn",
    Custom: "Custom",
} as const;

export type PolicyType = (typeof PolicyType)[keyof typeof PolicyType];
