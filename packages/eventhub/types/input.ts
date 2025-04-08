import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * Properties to configure capture description for eventhub
 */
export interface CaptureDescriptionArgs {
    /**
     * Properties of Destination where capture will be stored. (Storage Account, Blob Names)
     */
    destination?: pulumi.Input<DestinationArgs>;
    /**
     * A value that indicates whether capture description is enabled. 
     */
    enabled?: pulumi.Input<boolean>;
    /**
     * Enumerates the possible values for the encoding format of capture description. Note: 'AvroDeflate' will be deprecated in New API Version
     */
    encoding?: pulumi.Input<enums.EncodingCaptureDescription>;
    /**
     * The time window allows you to set the frequency with which the capture to Azure Blobs will happen, value should between 60 to 900 seconds
     */
    intervalInSeconds?: pulumi.Input<number>;
    /**
     * The size window defines the amount of data built up in your Event Hub before an capture operation, value should be between 10485760 to 524288000 bytes
     */
    sizeLimitInBytes?: pulumi.Input<number>;
    /**
     * A value that indicates whether to Skip Empty Archives
     */
    skipEmptyArchives?: pulumi.Input<boolean>;
}

/**
 * A value that indicates whether capture description is enabled.
 */
export interface CaptureIdentityArgs {
    /**
     * Type of Azure Active Directory Managed Identity.
     */
    type?: pulumi.Input<enums.CaptureIdentityType>;
    /**
     * ARM ID of Managed User Identity. This property is required is the type is UserAssignedIdentity. If type is SystemAssigned, then the System Assigned Identity Associated with the namespace will be used.
     */
    userAssignedIdentity?: pulumi.Input<string>;
}

/**
 * SKU parameters particular to a cluster instance.
 */
export interface ClusterSkuArgs {
    /**
     * The quantity of Event Hubs Cluster Capacity Units contained in this cluster.
     */
    capacity?: pulumi.Input<number>;
    /**
     * Name of this SKU.
     */
    name: pulumi.Input<string | enums.ClusterSkuName>;
}

/**
 * ConnectionState information.
 */
export interface ConnectionStateArgs {
    /**
     * Description of the connection state.
     */
    description?: pulumi.Input<string>;
    /**
     * Status of the connection.
     */
    status?: pulumi.Input<string | enums.PrivateLinkConnectionStatus>;
}

/**
 * Capture storage details for capture description
 */
export interface DestinationArgs {
    /**
     * Blob naming convention for archive, e.g. {Namespace}/{EventHub}/{PartitionId}/{Year}/{Month}/{Day}/{Hour}/{Minute}/{Second}. Here all the parameters (Namespace,EventHub .. etc) are mandatory irrespective of order
     */
    archiveNameFormat?: pulumi.Input<string>;
    /**
     * Blob container Name
     */
    blobContainer?: pulumi.Input<string>;
    /**
     * The Azure Data Lake Store name for the captured events
     */
    dataLakeAccountName?: pulumi.Input<string>;
    /**
     * The destination folder path for the captured events
     */
    dataLakeFolderPath?: pulumi.Input<string>;
    /**
     * Subscription Id of Azure Data Lake Store
     */
    dataLakeSubscriptionId?: pulumi.Input<string>;
    /**
     * A value that indicates whether capture description is enabled.
     */
    identity?: pulumi.Input<CaptureIdentityArgs>;
    /**
     * Name for capture destination
     */
    name?: pulumi.Input<string>;
    /**
     * Resource id of the storage account to be used to create the blobs
     */
    storageAccountResourceId?: pulumi.Input<string>;
}

/**
 * Properties to configure Encryption
 */
export interface EncryptionArgs {
    /**
     * Enumerates the possible value of keySource for Encryption
     */
    keySource?: pulumi.Input<enums.KeySource>;
    /**
     * Properties of KeyVault
     */
    keyVaultProperties?: pulumi.Input<pulumi.Input<KeyVaultPropertiesArgs>[]>;
    /**
     * Enable Infrastructure Encryption (Double Encryption)
     */
    requireInfrastructureEncryption?: pulumi.Input<boolean>;
}
/**
 * encryptionArgsProvideDefaults sets the appropriate defaults for EncryptionArgs
 */
export function encryptionArgsProvideDefaults(val: EncryptionArgs): EncryptionArgs {
    return {
        ...val,
        keySource: (val.keySource) ?? "Microsoft.KeyVault",
    };
}

/**
 * Properties to configure Identity for Bring your Own Keys
 */
export interface IdentityArgs {
    /**
     * Type of managed service identity.
     */
    type?: pulumi.Input<enums.ManagedServiceIdentityType>;
    /**
     * Properties for User Assigned Identities
     */
    userAssignedIdentities?: pulumi.Input<pulumi.Input<string>[]>;
}

/**
 * Properties to configure keyVault Properties
 */
export interface KeyVaultPropertiesArgs {
    identity?: pulumi.Input<UserAssignedIdentityPropertiesArgs>;
    /**
     * Name of the Key from KeyVault
     */
    keyName?: pulumi.Input<string>;
    /**
     * Uri of KeyVault
     */
    keyVaultUri?: pulumi.Input<string>;
    /**
     * Key Version
     */
    keyVersion?: pulumi.Input<string>;
}

/**
 * The response from the List namespace operation.
 */
export interface NWRuleSetIpRulesArgs {
    /**
     * The IP Filter Action
     */
    action?: pulumi.Input<string | enums.NetworkRuleIPAction>;
    /**
     * IP Mask
     */
    ipMask?: pulumi.Input<string>;
}

/**
 * The response from the List namespace operation.
 */
export interface NWRuleSetVirtualNetworkRulesArgs {
    /**
     * Value that indicates whether to ignore missing Vnet Service Endpoint
     */
    ignoreMissingVnetServiceEndpoint?: pulumi.Input<boolean>;
    /**
     * Subnet properties
     */
    subnet?: pulumi.Input<SubnetArgs>;
}

/**
 * PrivateEndpoint information.
 */
export interface PrivateEndpointArgs {
    /**
     * The ARM identifier for Private Endpoint.
     */
    id?: pulumi.Input<string>;
}

/**
 * Properties of the PrivateEndpointConnection.
 */
export interface PrivateEndpointConnectionArgs {
    /**
     * The Private Endpoint resource for this Connection.
     */
    privateEndpoint?: pulumi.Input<PrivateEndpointArgs>;
    /**
     * Details about the state of the connection.
     */
    privateLinkServiceConnectionState?: pulumi.Input<ConnectionStateArgs>;
    /**
     * Provisioning state of the Private Endpoint Connection.
     */
    provisioningState?: pulumi.Input<string | enums.EndPointProvisioningState>;
}

/**
 * Properties to configure retention settings for the  eventhub
 */
export interface RetentionDescriptionArgs {
    /**
     * Enumerates the possible values for cleanup policy
     */
    cleanupPolicy?: pulumi.Input<string | enums.CleanupPolicyRetentionDescription>;
    /**
     * Number of hours to retain the events for this Event Hub. This value is only used when cleanupPolicy is Delete. If cleanupPolicy is Compact the returned value of this property is Long.MaxValue 
     */
    retentionTimeInHours?: pulumi.Input<number>;
    /**
     * Number of hours to retain the tombstone markers of a compacted Event Hub. This value is only used when cleanupPolicy is Compact. Consumer must complete reading the tombstone marker within this specified amount of time if consumer begins from starting offset to ensure they get a valid snapshot for the specific key described by the tombstone marker within the compacted Event Hub
     */
    tombstoneRetentionTimeInHours?: pulumi.Input<number>;
}

/**
 * SKU parameters supplied to the create namespace operation
 */
export interface SkuArgs {
    /**
     * The Event Hubs throughput units for Basic or Standard tiers, where value should be 0 to 20 throughput units. The Event Hubs premium units for Premium tier, where value should be 0 to 10 premium units.
     */
    capacity?: pulumi.Input<number>;
    /**
     * Name of this SKU.
     */
    name: pulumi.Input<string | enums.SkuName>;
    /**
     * The billing tier of this particular SKU.
     */
    tier?: pulumi.Input<string | enums.SkuTier>;
}

/**
 * Properties supplied for Subnet
 */
export interface SubnetArgs {
    /**
     * Resource ID of Virtual Network Subnet
     */
    id?: pulumi.Input<string>;
}

/**
 * Properties of the throttling policy
 */
export interface ThrottlingPolicyArgs {
    /**
     * Metric Id on which the throttle limit should be set, MetricId can be discovered by hovering over Metric in the Metrics section of Event Hub Namespace inside Azure Portal
     */
    metricId: pulumi.Input<string | enums.MetricId>;
    /**
     * The Name of this policy
     */
    name: pulumi.Input<string>;
    /**
     * The Threshold limit above which the application group will be throttled.Rate limit is always per second.
     */
    rateLimitThreshold: pulumi.Input<number>;
    /**
     * Application Group Policy types
     * Expected value is 'ThrottlingPolicy'.
     */
    type: pulumi.Input<"ThrottlingPolicy">;
}

export interface UserAssignedIdentityPropertiesArgs {
    /**
     * ARM ID of user Identity selected for encryption
     */
    userAssignedIdentity?: pulumi.Input<string>;
}
