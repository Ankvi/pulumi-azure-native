export const ParameterType = {
    NotSpecified: "NotSpecified",
    String: "String",
    SecureString: "SecureString",
    Int: "Int",
    Float: "Float",
    Bool: "Bool",
    Array: "Array",
    Object: "Object",
    SecureObject: "SecureObject",
} as const;

export type ParameterType = (typeof ParameterType)[keyof typeof ParameterType];

export const SkuName = {
    NotSpecified: "NotSpecified",
    Free: "Free",
    Shared: "Shared",
    Basic: "Basic",
    Standard: "Standard",
    Premium: "Premium",
} as const;

export type SkuName = (typeof SkuName)[keyof typeof SkuName];

export const WorkflowState = {
    NotSpecified: "NotSpecified",
    Enabled: "Enabled",
    Disabled: "Disabled",
    Deleted: "Deleted",
    Suspended: "Suspended",
} as const;

export type WorkflowState = (typeof WorkflowState)[keyof typeof WorkflowState];
