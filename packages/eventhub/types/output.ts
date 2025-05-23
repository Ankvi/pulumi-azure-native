import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * Properties to configure capture description for eventhub
 */
export interface CaptureDescriptionResponse {
    /**
     * Properties of Destination where capture will be stored. (Storage Account, Blob Names)
     */
    destination?: DestinationResponse;
    /**
     * A value that indicates whether capture description is enabled. 
     */
    enabled?: boolean;
    /**
     * Enumerates the possible values for the encoding format of capture description. Note: 'AvroDeflate' will be deprecated in New API Version
     */
    encoding?: string;
    /**
     * The time window allows you to set the frequency with which the capture to Azure Blobs will happen, value should between 60 to 900 seconds
     */
    intervalInSeconds?: number;
    /**
     * The size window defines the amount of data built up in your Event Hub before an capture operation, value should be between 10485760 to 524288000 bytes
     */
    sizeLimitInBytes?: number;
    /**
     * A value that indicates whether to Skip Empty Archives
     */
    skipEmptyArchives?: boolean;
}

/**
 * A value that indicates whether capture description is enabled.
 */
export interface CaptureIdentityResponse {
    /**
     * Type of Azure Active Directory Managed Identity.
     */
    type?: string;
    /**
     * ARM ID of Managed User Identity. This property is required is the type is UserAssignedIdentity. If type is SystemAssigned, then the System Assigned Identity Associated with the namespace will be used.
     */
    userAssignedIdentity?: string;
}

/**
 * SKU parameters particular to a cluster instance.
 */
export interface ClusterSkuResponse {
    /**
     * The quantity of Event Hubs Cluster Capacity Units contained in this cluster.
     */
    capacity?: number;
    /**
     * Name of this SKU.
     */
    name: string;
}

/**
 * ConnectionState information.
 */
export interface ConnectionStateResponse {
    /**
     * Description of the connection state.
     */
    description?: string;
    /**
     * Status of the connection.
     */
    status?: string;
}

/**
 * Capture storage details for capture description
 */
export interface DestinationResponse {
    /**
     * Blob naming convention for archive, e.g. {Namespace}/{EventHub}/{PartitionId}/{Year}/{Month}/{Day}/{Hour}/{Minute}/{Second}. Here all the parameters (Namespace,EventHub .. etc) are mandatory irrespective of order
     */
    archiveNameFormat?: string;
    /**
     * Blob container Name
     */
    blobContainer?: string;
    /**
     * The Azure Data Lake Store name for the captured events
     */
    dataLakeAccountName?: string;
    /**
     * The destination folder path for the captured events
     */
    dataLakeFolderPath?: string;
    /**
     * Subscription Id of Azure Data Lake Store
     */
    dataLakeSubscriptionId?: string;
    /**
     * A value that indicates whether capture description is enabled.
     */
    identity?: CaptureIdentityResponse;
    /**
     * Name for capture destination
     */
    name?: string;
    /**
     * Resource id of the storage account to be used to create the blobs
     */
    storageAccountResourceId?: string;
}

/**
 * Properties to configure Encryption
 */
export interface EncryptionResponse {
    /**
     * Enumerates the possible value of keySource for Encryption
     */
    keySource?: string;
    /**
     * Properties of KeyVault
     */
    keyVaultProperties?: KeyVaultPropertiesResponse[];
    /**
     * Enable Infrastructure Encryption (Double Encryption)
     */
    requireInfrastructureEncryption?: boolean;
}
/**
 * encryptionResponseProvideDefaults sets the appropriate defaults for EncryptionResponse
 */
export function encryptionResponseProvideDefaults(val: EncryptionResponse): EncryptionResponse {
    return {
        ...val,
        keySource: (val.keySource) ?? "Microsoft.KeyVault",
    };
}

/**
 * Properties to configure Identity for Bring your Own Keys
 */
export interface IdentityResponse {
    /**
     * ObjectId from the KeyVault
     */
    principalId: string;
    /**
     * TenantId from the KeyVault
     */
    tenantId: string;
    /**
     * Type of managed service identity.
     */
    type?: string;
    /**
     * Properties for User Assigned Identities
     */
    userAssignedIdentities?: {[key: string]: UserAssignedIdentityResponse};
}

/**
 * Properties to configure keyVault Properties
 */
export interface KeyVaultPropertiesResponse {
    identity?: UserAssignedIdentityPropertiesResponse;
    /**
     * Name of the Key from KeyVault
     */
    keyName?: string;
    /**
     * Uri of KeyVault
     */
    keyVaultUri?: string;
    /**
     * Key Version
     */
    keyVersion?: string;
}

/**
 * The response from the List namespace operation.
 */
export interface NWRuleSetIpRulesResponse {
    /**
     * The IP Filter Action
     */
    action?: string;
    /**
     * IP Mask
     */
    ipMask?: string;
}

/**
 * The response from the List namespace operation.
 */
export interface NWRuleSetVirtualNetworkRulesResponse {
    /**
     * Value that indicates whether to ignore missing Vnet Service Endpoint
     */
    ignoreMissingVnetServiceEndpoint?: boolean;
    /**
     * Subnet properties
     */
    subnet?: SubnetResponse;
}

/**
 * Properties of the PrivateEndpointConnection.
 */
export interface PrivateEndpointConnectionResponse {
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    id: string;
    /**
     * The geo-location where the resource lives
     */
    location: string;
    /**
     * The name of the resource
     */
    name: string;
    /**
     * The Private Endpoint resource for this Connection.
     */
    privateEndpoint?: PrivateEndpointResponse;
    /**
     * Details about the state of the connection.
     */
    privateLinkServiceConnectionState?: ConnectionStateResponse;
    /**
     * Provisioning state of the Private Endpoint Connection.
     */
    provisioningState?: string;
    /**
     * The system meta data relating to this resource.
     */
    systemData: SystemDataResponse;
    /**
     * The type of the resource. E.g. "Microsoft.EventHub/Namespaces" or "Microsoft.EventHub/Namespaces/EventHubs"
     */
    type: string;
}

/**
 * PrivateEndpoint information.
 */
export interface PrivateEndpointResponse {
    /**
     * The ARM identifier for Private Endpoint.
     */
    id?: string;
}

/**
 * Properties to configure retention settings for the  eventhub
 */
export interface RetentionDescriptionResponse {
    /**
     * Enumerates the possible values for cleanup policy
     */
    cleanupPolicy?: string;
    /**
     * Number of hours to retain the events for this Event Hub. This value is only used when cleanupPolicy is Delete. If cleanupPolicy is Compact the returned value of this property is Long.MaxValue 
     */
    retentionTimeInHours?: number;
    /**
     * Number of hours to retain the tombstone markers of a compacted Event Hub. This value is only used when cleanupPolicy is Compact. Consumer must complete reading the tombstone marker within this specified amount of time if consumer begins from starting offset to ensure they get a valid snapshot for the specific key described by the tombstone marker within the compacted Event Hub
     */
    tombstoneRetentionTimeInHours?: number;
}

/**
 * SKU parameters supplied to the create namespace operation
 */
export interface SkuResponse {
    /**
     * The Event Hubs throughput units for Basic or Standard tiers, where value should be 0 to 20 throughput units. The Event Hubs premium units for Premium tier, where value should be 0 to 10 premium units.
     */
    capacity?: number;
    /**
     * Name of this SKU.
     */
    name: string;
    /**
     * The billing tier of this particular SKU.
     */
    tier?: string;
}

/**
 * Properties supplied for Subnet
 */
export interface SubnetResponse {
    /**
     * Resource ID of Virtual Network Subnet
     */
    id?: string;
}

/**
 * Metadata pertaining to creation and last modification of the resource.
 */
export interface SystemDataResponse {
    /**
     * The timestamp of resource creation (UTC).
     */
    createdAt?: string;
    /**
     * The identity that created the resource.
     */
    createdBy?: string;
    /**
     * The type of identity that created the resource.
     */
    createdByType?: string;
    /**
     * The type of identity that last modified the resource.
     */
    lastModifiedAt?: string;
    /**
     * The identity that last modified the resource.
     */
    lastModifiedBy?: string;
    /**
     * The type of identity that last modified the resource.
     */
    lastModifiedByType?: string;
}

/**
 * Properties of the throttling policy
 */
export interface ThrottlingPolicyResponse {
    /**
     * Metric Id on which the throttle limit should be set, MetricId can be discovered by hovering over Metric in the Metrics section of Event Hub Namespace inside Azure Portal
     */
    metricId: string;
    /**
     * The Name of this policy
     */
    name: string;
    /**
     * The Threshold limit above which the application group will be throttled.Rate limit is always per second.
     */
    rateLimitThreshold: number;
    /**
     * Application Group Policy types
     * Expected value is 'ThrottlingPolicy'.
     */
    type: "ThrottlingPolicy";
}

export interface UserAssignedIdentityPropertiesResponse {
    /**
     * ARM ID of user Identity selected for encryption
     */
    userAssignedIdentity?: string;
}

/**
 * Recognized Dictionary value.
 */
export interface UserAssignedIdentityResponse {
    /**
     * Client Id of user assigned identity
     */
    clientId: string;
    /**
     * Principal Id of user assigned identity
     */
    principalId: string;
}
