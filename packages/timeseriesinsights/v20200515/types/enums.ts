export const AccessPolicyRole = {
    Reader: "Reader",
    Contributor: "Contributor",
} as const;

/**
 * A role defining the data plane operations that a principal can perform on a Time Series Insights client.
 */
export type AccessPolicyRole = (typeof AccessPolicyRole)[keyof typeof AccessPolicyRole];

export const DataStringComparisonBehavior = {
    Ordinal: "Ordinal",
    OrdinalIgnoreCase: "OrdinalIgnoreCase",
} as const;

/**
 * The reference data set key comparison behavior can be set using this property. By default, the value is 'Ordinal' - which means case sensitive key comparison will be performed while joining reference data with events or while adding new reference data. When 'OrdinalIgnoreCase' is set, case insensitive comparison will be used.
 */
export type DataStringComparisonBehavior = (typeof DataStringComparisonBehavior)[keyof typeof DataStringComparisonBehavior];

export const ReferenceDataKeyPropertyType = {
    String: "String",
    Double: "Double",
    Bool: "Bool",
    DateTime: "DateTime",
} as const;

/**
 * The type of the key property.
 */
export type ReferenceDataKeyPropertyType = (typeof ReferenceDataKeyPropertyType)[keyof typeof ReferenceDataKeyPropertyType];
