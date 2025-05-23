export const AccessRights = {
    Manage: "Manage",
    Send: "Send",
    Listen: "Listen",
} as const;

export type AccessRights = (typeof AccessRights)[keyof typeof AccessRights];

export const ApplicationGroupPolicyType = {
    ThrottlingPolicy: "ThrottlingPolicy",
} as const;

/**
 * Application Group Policy types
 */
export type ApplicationGroupPolicyType = (typeof ApplicationGroupPolicyType)[keyof typeof ApplicationGroupPolicyType];

export const CaptureIdentityType = {
    SystemAssigned: "SystemAssigned",
    UserAssigned: "UserAssigned",
} as const;

/**
 * Type of Azure Active Directory Managed Identity.
 */
export type CaptureIdentityType = (typeof CaptureIdentityType)[keyof typeof CaptureIdentityType];

export const CleanupPolicyRetentionDescription = {
    Delete: "Delete",
    Compact: "Compact",
} as const;

/**
 * Enumerates the possible values for cleanup policy
 */
export type CleanupPolicyRetentionDescription = (typeof CleanupPolicyRetentionDescription)[keyof typeof CleanupPolicyRetentionDescription];

export const ClusterSkuName = {
    Dedicated: "Dedicated",
} as const;

/**
 * Name of this SKU.
 */
export type ClusterSkuName = (typeof ClusterSkuName)[keyof typeof ClusterSkuName];

export const DefaultAction = {
    Allow: "Allow",
    Deny: "Deny",
} as const;

/**
 * Default Action for Network Rule Set
 */
export type DefaultAction = (typeof DefaultAction)[keyof typeof DefaultAction];

export const EncodingCaptureDescription = {
    Avro: "Avro",
    AvroDeflate: "AvroDeflate",
} as const;

/**
 * Enumerates the possible values for the encoding format of capture description. Note: 'AvroDeflate' will be deprecated in New API Version
 */
export type EncodingCaptureDescription = (typeof EncodingCaptureDescription)[keyof typeof EncodingCaptureDescription];

export const EndPointProvisioningState = {
    Creating: "Creating",
    Updating: "Updating",
    Deleting: "Deleting",
    Succeeded: "Succeeded",
    Canceled: "Canceled",
    Failed: "Failed",
} as const;

/**
 * Provisioning state of the Private Endpoint Connection.
 */
export type EndPointProvisioningState = (typeof EndPointProvisioningState)[keyof typeof EndPointProvisioningState];

export const EntityStatus = {
    Active: "Active",
    Disabled: "Disabled",
    Restoring: "Restoring",
    SendDisabled: "SendDisabled",
    ReceiveDisabled: "ReceiveDisabled",
    Creating: "Creating",
    Deleting: "Deleting",
    Renaming: "Renaming",
    Unknown: "Unknown",
} as const;

/**
 * Enumerates the possible values for the status of the Event Hub.
 */
export type EntityStatus = (typeof EntityStatus)[keyof typeof EntityStatus];

export const IPAction = {
    Accept: "Accept",
    Reject: "Reject",
} as const;

/**
 * The IP Filter Action
 */
export type IPAction = (typeof IPAction)[keyof typeof IPAction];

export const KeySource = {
    Microsoft_KeyVault: "Microsoft.KeyVault",
} as const;

/**
 * Enumerates the possible value of keySource for Encryption
 */
export type KeySource = (typeof KeySource)[keyof typeof KeySource];

export const ManagedServiceIdentityType = {
    SystemAssigned: "SystemAssigned",
    UserAssigned: "UserAssigned",
    SystemAssigned_UserAssigned: "SystemAssigned, UserAssigned",
    None: "None",
} as const;

/**
 * Type of managed service identity.
 */
export type ManagedServiceIdentityType = (typeof ManagedServiceIdentityType)[keyof typeof ManagedServiceIdentityType];

export const MetricId = {
    IncomingBytes: "IncomingBytes",
    OutgoingBytes: "OutgoingBytes",
    IncomingMessages: "IncomingMessages",
    OutgoingMessages: "OutgoingMessages",
} as const;

/**
 * Metric Id on which the throttle limit should be set, MetricId can be discovered by hovering over Metric in the Metrics section of Event Hub Namespace inside Azure Portal
 */
export type MetricId = (typeof MetricId)[keyof typeof MetricId];

export const NetworkRuleIPAction = {
    Allow: "Allow",
} as const;

/**
 * The IP Filter Action
 */
export type NetworkRuleIPAction = (typeof NetworkRuleIPAction)[keyof typeof NetworkRuleIPAction];

export const PrivateLinkConnectionStatus = {
    Pending: "Pending",
    Approved: "Approved",
    Rejected: "Rejected",
    Disconnected: "Disconnected",
} as const;

/**
 * Status of the connection.
 */
export type PrivateLinkConnectionStatus = (typeof PrivateLinkConnectionStatus)[keyof typeof PrivateLinkConnectionStatus];

export const PublicNetworkAccess = {
    Enabled: "Enabled",
    Disabled: "Disabled",
    SecuredByPerimeter: "SecuredByPerimeter",
} as const;

/**
 * This determines if traffic is allowed over public network. By default it is enabled.
 */
export type PublicNetworkAccess = (typeof PublicNetworkAccess)[keyof typeof PublicNetworkAccess];

export const PublicNetworkAccessFlag = {
    Enabled: "Enabled",
    Disabled: "Disabled",
    SecuredByPerimeter: "SecuredByPerimeter",
} as const;

/**
 * This determines if traffic is allowed over public network. By default it is enabled. If value is SecuredByPerimeter then Inbound and Outbound communication is controlled by the network security perimeter and profile's access rules. 
 */
export type PublicNetworkAccessFlag = (typeof PublicNetworkAccessFlag)[keyof typeof PublicNetworkAccessFlag];

export const SchemaCompatibility = {
    None: "None",
    Backward: "Backward",
    Forward: "Forward",
} as const;

export type SchemaCompatibility = (typeof SchemaCompatibility)[keyof typeof SchemaCompatibility];

export const SchemaType = {
    Unknown: "Unknown",
    Avro: "Avro",
} as const;

export type SchemaType = (typeof SchemaType)[keyof typeof SchemaType];

export const SkuName = {
    Basic: "Basic",
    Standard: "Standard",
    Premium: "Premium",
} as const;

/**
 * Name of this SKU.
 */
export type SkuName = (typeof SkuName)[keyof typeof SkuName];

export const SkuTier = {
    Basic: "Basic",
    Standard: "Standard",
    Premium: "Premium",
} as const;

/**
 * The billing tier of this particular SKU.
 */
export type SkuTier = (typeof SkuTier)[keyof typeof SkuTier];

export const TlsVersion = {
    TlsVersion_1_0: "1.0",
    TlsVersion_1_1: "1.1",
    TlsVersion_1_2: "1.2",
} as const;

/**
 * The minimum TLS version for the cluster to support, e.g. '1.2'
 */
export type TlsVersion = (typeof TlsVersion)[keyof typeof TlsVersion];
