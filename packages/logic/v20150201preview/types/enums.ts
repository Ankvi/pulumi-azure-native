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

/**
 * Gets or sets the type.
 */
export type ParameterType = (typeof ParameterType)[keyof typeof ParameterType];

export const SkuName = {
    NotSpecified: "NotSpecified",
    Free: "Free",
    Shared: "Shared",
    Basic: "Basic",
    Standard: "Standard",
    Premium: "Premium",
} as const;

/**
 * Gets or sets the name.
 */
export type SkuName = (typeof SkuName)[keyof typeof SkuName];

export const WorkflowState = {
    NotSpecified: "NotSpecified",
    Enabled: "Enabled",
    Disabled: "Disabled",
    Deleted: "Deleted",
    Suspended: "Suspended",
} as const;

/**
 * Gets or sets the state.
 */
export type WorkflowState = (typeof WorkflowState)[keyof typeof WorkflowState];
