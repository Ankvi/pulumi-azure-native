import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * Assignment Properties
     */
    export interface AssignmentResponse {
        /**
         * Resource id for the assigned resource
         */
        id: string;
        /**
         * Indicates if the assignment is in a usable state
         */
        status: AssignmentStatusResponse;
    }

    /**
     * Status of the assignment resource
     */
    export interface AssignmentStatusResponse {
        /**
         * Reason for the status
         */
        message?: string;
        /**
         * State of the assignment resource
         */
        state: string;
    }

    /**
     * Azure Disk Pool Properties
     */
    export interface AzureDiskResponse {
        /**
         * Only required if individual disk selection is desired. Path to disk, e.g. <nodename>:/dev/sda or WWN. Supports specifying multiple disks (same syntax as tags).
         */
        disks?: DiskResponse[];
        /**
         * Encryption specifies the encryption configuration for the Azure Disk pool
         */
        encryption?: EncryptionResponse;
        /**
         * Managed resource group for the pool.
         */
        resourceGroup: string;
        /**
         * Sku name
         */
        skuName?: string;
    }

    /**
     * Model for disk for that pool is using
     */
    export interface DiskResponse {
        /**
         * ID is the disk identifier visible to the OS. It is typically the WWN or disk ID in formats such as eui.e8238fa6bf530001001b448b45263379 or 0x5002cf6cbc5dd460
         */
        id: string;
        /**
         * Reference is the location of the disk in an external system.
         */
        reference: string;
    }

    /**
     * Elastic San Pool Properties
     */
    export interface ElasticSanResponse {
        /**
         * Encryption specifies the encryption configuration for the Azure Disk pool
         */
        encryption?: EncryptionResponse;
        /**
         * Managed resource group for the pool.
         */
        resourceGroup: string;
        /**
         * Sku name
         */
        skuName?: string;
    }

    /**
     * Properties of the ElasticSAN iSCSI target
     */
    export interface ElasticSanVolumePropertiesResponse {
        /**
         * iSCSI Target IQN (iSCSI Qualified Name); example: "iqn.2005-03.org.iscsi:server"
         */
        targetIqn: string;
        /**
         * iSCSI Target Portal Host Name
         */
        targetPortalHostname: string;
        /**
         * iSCSI Target Portal Port
         */
        targetPortalPort: number;
    }

    /**
     * Encryption key properties for the pool.
     */
    export interface EncryptionResponse {
        /**
         * The managed service identities assigned to this resource.
         */
        identity?: ManagedServiceIdentityResponse;
        /**
         * The name of the key vault key.
         */
        keyName: string;
        /**
         * The URI of the key vault.
         */
        keyVaultUri: string;
    }

    /**
     * Ephemeral Disk Pool Properties
     */
    export interface EphemeralDiskResponse {
        /**
         * Only required if individual disk selection is desired. Path to disk, e.g. <nodename>:/dev/sda or WWN. Supports specifying multiple disks (same syntax as tags).
         */
        disks?: DiskResponse[];
        /**
         * The number of data copies. Default 3.
         */
        replicas?: number;
    }
    /**
     * ephemeralDiskResponseProvideDefaults sets the appropriate defaults for EphemeralDiskResponse
     */
    export function ephemeralDiskResponseProvideDefaults(val: EphemeralDiskResponse): EphemeralDiskResponse {
        return {
            ...val,
            replicas: (val.replicas) ?? 3,
        };
    }

    /**
     * Managed service identity (system assigned and/or user assigned identities)
     */
    export interface ManagedServiceIdentityResponse {
        /**
         * The service principal ID of the system assigned identity. This property will only be provided for a system assigned identity.
         */
        principalId: string;
        /**
         * The tenant ID of the system assigned identity. This property will only be provided for a system assigned identity.
         */
        tenantId: string;
        /**
         * Type of managed service identity (where both SystemAssigned and UserAssigned types are allowed).
         */
        type: string;
        /**
         * The set of user assigned identities associated with the resource. The userAssignedIdentities dictionary keys will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}. The dictionary values can be empty objects ({}) in requests.
         */
        userAssignedIdentities?: {[key: string]: UserAssignedIdentityResponse};
    }

    /**
     * Type of the Pool: ephemeralDisk, azureDisk, or elasticsan
     */
    export interface PoolTypeResponse {
        /**
         * Disk Pool Properties
         */
        azureDisk?: AzureDiskResponse;
        /**
         * Elastic San Pool Properties
         */
        elasticSan?: ElasticSanResponse;
        /**
         * Ephemeral Pool Properties
         */
        ephemeralDisk?: EphemeralDiskResponse;
    }
    /**
     * poolTypeResponseProvideDefaults sets the appropriate defaults for PoolTypeResponse
     */
    export function poolTypeResponseProvideDefaults(val: PoolTypeResponse): PoolTypeResponse {
        return {
            ...val,
            ephemeralDisk: (val.ephemeralDisk ? ephemeralDiskResponseProvideDefaults(val.ephemeralDisk) : undefined),
        };
    }

    /**
     * Requests for capacity for the pool.
     */
    export interface RequestsResponse {
        /**
         * Requested capacity of the pool in GiB.
         */
        storage?: number;
    }
    /**
     * requestsResponseProvideDefaults sets the appropriate defaults for RequestsResponse
     */
    export function requestsResponseProvideDefaults(val: RequestsResponse): RequestsResponse {
        return {
            ...val,
            storage: (val.storage) ?? 1024,
        };
    }

    /**
     * Status of the resource
     */
    export interface ResourceOperationalStatusResponse {
        /**
         * Reason for state.
         */
        message?: string;
        /**
         * state of the resource
         */
        state: string;
    }

    /**
     * Resource Requests for the pool.
     */
    export interface ResourcesResponse {
        /**
         * Requests for capacity for the pool.
         */
        requests?: RequestsResponse;
    }
    /**
     * resourcesResponseProvideDefaults sets the appropriate defaults for ResourcesResponse
     */
    export function resourcesResponseProvideDefaults(val: ResourcesResponse): ResourcesResponse {
        return {
            ...val,
            requests: (val.requests ? requestsResponseProvideDefaults(val.requests) : undefined),
        };
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
         * The timestamp of resource last modification (UTC)
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
     * User assigned identity properties
     */
    export interface UserAssignedIdentityResponse {
        /**
         * The client ID of the assigned identity.
         */
        clientId: string;
        /**
         * The principal ID of the assigned identity.
         */
        principalId: string;
    }

    /**
     * Properties of the volume
     */
    export interface VolumeTypeResponse {
        /**
         * Properties of the ElasticSAN iSCSI target
         */
        elasticSan: ElasticSanVolumePropertiesResponse;
    }
