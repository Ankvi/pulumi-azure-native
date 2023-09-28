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

export const EnvironmentKind = {
    Gen1: "Gen1",
    Gen2: "Gen2",
} as const;

/**
 * The kind of the environment.
 */
export type EnvironmentKind = (typeof EnvironmentKind)[keyof typeof EnvironmentKind];

export const EventSourceKind = {
    Microsoft_EventHub: "Microsoft.EventHub",
    Microsoft_IoTHub: "Microsoft.IoTHub",
} as const;

/**
 * The kind of the event source.
 */
export type EventSourceKind = (typeof EventSourceKind)[keyof typeof EventSourceKind];

export const IngressStartAtType = {
    EarliestAvailable: "EarliestAvailable",
    EventSourceCreationTime: "EventSourceCreationTime",
    CustomEnqueuedTime: "CustomEnqueuedTime",
} as const;

/**
 * The type of the ingressStartAt, It can be "EarliestAvailable", "EventSourceCreationTime", "CustomEnqueuedTime".
 */
export type IngressStartAtType = (typeof IngressStartAtType)[keyof typeof IngressStartAtType];

export const LocalTimestampFormat = {
    Embedded: "Embedded",
} as const;

/**
 * An enum that represents the format of the local timestamp property that needs to be set.
 */
export type LocalTimestampFormat = (typeof LocalTimestampFormat)[keyof typeof LocalTimestampFormat];

export const PrivateEndpointServiceConnectionStatus = {
    Pending: "Pending",
    Approved: "Approved",
    Rejected: "Rejected",
} as const;

/**
 * Indicates whether the connection has been Approved/Rejected/Removed by the owner of the service.
 */
export type PrivateEndpointServiceConnectionStatus = (typeof PrivateEndpointServiceConnectionStatus)[keyof typeof PrivateEndpointServiceConnectionStatus];

export const PropertyType = {
    String: "String",
} as const;

/**
 * The type of the property.
 */
export type PropertyType = (typeof PropertyType)[keyof typeof PropertyType];

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

export const SkuName = {
    S1: "S1",
    S2: "S2",
    P1: "P1",
    L1: "L1",
} as const;

/**
 * The name of this SKU.
 */
export type SkuName = (typeof SkuName)[keyof typeof SkuName];

export const StorageLimitExceededBehavior = {
    PurgeOldData: "PurgeOldData",
    PauseIngress: "PauseIngress",
} as const;

/**
 * The behavior the Time Series Insights service should take when the environment's capacity has been exceeded. If "PauseIngress" is specified, new events will not be read from the event source. If "PurgeOldData" is specified, new events will continue to be read and old events will be deleted from the environment. The default behavior is PurgeOldData.
 */
export type StorageLimitExceededBehavior = (typeof StorageLimitExceededBehavior)[keyof typeof StorageLimitExceededBehavior];
