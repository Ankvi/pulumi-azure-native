export const IdentityType = {
    None: "None",
    SystemAssigned: "SystemAssigned",
    UserAssigned: "UserAssigned",
    SystemAssigned_UserAssigned: "SystemAssigned, UserAssigned",
} as const;

export type IdentityType = (typeof IdentityType)[keyof typeof IdentityType];

export const InputSchema = {
    EventGridSchema: "EventGridSchema",
    CustomEventSchema: "CustomEventSchema",
    CloudEventSchemaV1_0: "CloudEventSchemaV1_0",
} as const;

export type InputSchema = (typeof InputSchema)[keyof typeof InputSchema];

export const InputSchemaMappingType = {
    Json: "Json",
} as const;

export type InputSchemaMappingType = (typeof InputSchemaMappingType)[keyof typeof InputSchemaMappingType];

export const IpActionType = {
    Allow: "Allow",
} as const;

export type IpActionType = (typeof IpActionType)[keyof typeof IpActionType];

export const PersistedConnectionStatus = {
    Pending: "Pending",
    Approved: "Approved",
    Rejected: "Rejected",
    Disconnected: "Disconnected",
} as const;

export type PersistedConnectionStatus = (typeof PersistedConnectionStatus)[keyof typeof PersistedConnectionStatus];

export const PublicNetworkAccess = {
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

export type PublicNetworkAccess = (typeof PublicNetworkAccess)[keyof typeof PublicNetworkAccess];

export const ResourceProvisioningState = {
    Creating: "Creating",
    Updating: "Updating",
    Deleting: "Deleting",
    Succeeded: "Succeeded",
    Canceled: "Canceled",
    Failed: "Failed",
} as const;

export type ResourceProvisioningState = (typeof ResourceProvisioningState)[keyof typeof ResourceProvisioningState];

export const Sku = {
    Basic: "Basic",
    Premium: "Premium",
} as const;

export type Sku = (typeof Sku)[keyof typeof Sku];