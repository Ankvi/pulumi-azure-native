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

export const EnvironmentKind = {
    Gen1: "Gen1",
    Gen2: "Gen2",
} as const;

export type EnvironmentKind = (typeof EnvironmentKind)[keyof typeof EnvironmentKind];

export const EventSourceKind = {
    Microsoft_EventHub: "Microsoft.EventHub",
    Microsoft_IoTHub: "Microsoft.IoTHub",
} as const;

export type EventSourceKind = (typeof EventSourceKind)[keyof typeof EventSourceKind];

export const IngressStartAtType = {
    EarliestAvailable: "EarliestAvailable",
    EventSourceCreationTime: "EventSourceCreationTime",
    CustomEnqueuedTime: "CustomEnqueuedTime",
} as const;

export type IngressStartAtType = (typeof IngressStartAtType)[keyof typeof IngressStartAtType];

export const LocalTimestampFormat = {
    Embedded: "Embedded",
} as const;

export type LocalTimestampFormat = (typeof LocalTimestampFormat)[keyof typeof LocalTimestampFormat];

export const PropertyType = {
    String: "String",
} as const;

export type PropertyType = (typeof PropertyType)[keyof typeof PropertyType];

export const ReferenceDataKeyPropertyType = {
    String: "String",
    Double: "Double",
    Bool: "Bool",
    DateTime: "DateTime",
} as const;

export type ReferenceDataKeyPropertyType = (typeof ReferenceDataKeyPropertyType)[keyof typeof ReferenceDataKeyPropertyType];

export const SkuName = {
    S1: "S1",
    S2: "S2",
    P1: "P1",
    L1: "L1",
} as const;

export type SkuName = (typeof SkuName)[keyof typeof SkuName];

export const StorageLimitExceededBehavior = {
    PurgeOldData: "PurgeOldData",
    PauseIngress: "PauseIngress",
} as const;

export type StorageLimitExceededBehavior = (typeof StorageLimitExceededBehavior)[keyof typeof StorageLimitExceededBehavior];
