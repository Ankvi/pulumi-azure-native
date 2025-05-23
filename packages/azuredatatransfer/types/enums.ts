export const DataType = {
    Blob: "Blob",
    Table: "Table",
} as const;

/**
 * Transfer Storage Blobs or Tables
 */
export type DataType = (typeof DataType)[keyof typeof DataType];

export const Direction = {
    Send: "Send",
    Receive: "Receive",
} as const;

/**
 * Direction of data movement
 */
export type Direction = (typeof Direction)[keyof typeof Direction];

export const FlowBillingTier = {
    BlobTransport: "BlobTransport",
    Standard: "Standard",
    Premium: "Premium",
} as const;

/**
 * Billing tier for this messaging flow
 */
export type FlowBillingTier = (typeof FlowBillingTier)[keyof typeof FlowBillingTier];

export const FlowStatus = {
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

/**
 * Status of the current flow
 */
export type FlowStatus = (typeof FlowStatus)[keyof typeof FlowStatus];

export const FlowType = {
    Unknown: "Unknown",
    Complex: "Complex",
    DevSecOps: "DevSecOps",
    Messaging: "Messaging",
    Mission: "Mission",
    MicrosoftInternal: "MicrosoftInternal",
    BasicFiles: "BasicFiles",
    Data: "Data",
    Standard: "Standard",
    StreamingVideo: "StreamingVideo",
    Opaque: "Opaque",
    MissionOpaqueXML: "MissionOpaqueXML",
} as const;

/**
 * Flow type for the specified resource
 */
export type FlowType = (typeof FlowType)[keyof typeof FlowType];

export const ListApprovedSchemasDirection = {
    Send: "Send",
    Receive: "Receive",
} as const;

/**
 * The direction pipeline to filter approved schemas.
 */
export type ListApprovedSchemasDirection = (typeof ListApprovedSchemasDirection)[keyof typeof ListApprovedSchemasDirection];

export const ManagedServiceIdentityType = {
    None: "None",
    SystemAssigned: "SystemAssigned",
    UserAssigned: "UserAssigned",
    SystemAssigned_UserAssigned: "SystemAssigned,UserAssigned",
} as const;

/**
 * Type of managed service identity (where both SystemAssigned and UserAssigned types are allowed).
 */
export type ManagedServiceIdentityType = (typeof ManagedServiceIdentityType)[keyof typeof ManagedServiceIdentityType];

export const SchemaDirection = {
    Send: "Send",
    Receive: "Receive",
} as const;

/**
 * The direction of the schema.
 */
export type SchemaDirection = (typeof SchemaDirection)[keyof typeof SchemaDirection];

export const SchemaStatus = {
    New: "New",
    Approved: "Approved",
} as const;

/**
 * Status of the schema
 */
export type SchemaStatus = (typeof SchemaStatus)[keyof typeof SchemaStatus];

export const SchemaType = {
    Xsd: "Xsd",
    Zip: "Zip",
} as const;

/**
 * The Schema Type
 */
export type SchemaType = (typeof SchemaType)[keyof typeof SchemaType];

export const StreamProtocol = {
    UDP: "UDP",
    SRT: "SRT",
    RTP: "RTP",
} as const;

/**
 * The protocol of the stream
 */
export type StreamProtocol = (typeof StreamProtocol)[keyof typeof StreamProtocol];
