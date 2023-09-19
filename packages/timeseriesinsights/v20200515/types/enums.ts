export const AccessPolicyRole = {
    Reader: "Reader",
    Contributor: "Contributor",
} as const;

export type AccessPolicyRole = (typeof AccessPolicyRole)[keyof typeof AccessPolicyRole];

export const DataStringComparisonBehavior = {
    Ordinal: "Ordinal",
    OrdinalIgnoreCase: "OrdinalIgnoreCase",
} as const;

export type DataStringComparisonBehavior = (typeof DataStringComparisonBehavior)[keyof typeof DataStringComparisonBehavior];

export const ReferenceDataKeyPropertyType = {
    String: "String",
    Double: "Double",
    Bool: "Bool",
    DateTime: "DateTime",
} as const;

export type ReferenceDataKeyPropertyType = (typeof ReferenceDataKeyPropertyType)[keyof typeof ReferenceDataKeyPropertyType];
