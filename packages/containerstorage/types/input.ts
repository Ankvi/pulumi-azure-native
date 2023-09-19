import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * Assignment Properties
 */
export interface AssignmentArgs {
    /**
     * Resource id for the assigned resource
     */
    id: pulumi.Input<string>;
}

/**
 * Azure Disk Pool Properties
 */
export interface AzureDiskArgs {
    /**
     * Only required if individual disk selection is desired. Path to disk, e.g. <nodename>:/dev/sda or WWN. Supports specifying multiple disks (same syntax as tags).
     */
    disks?: pulumi.Input<pulumi.Input<DiskArgs>[]>;
    /**
     * Encryption specifies the encryption configuration for the Azure Disk pool
     */
    encryption?: pulumi.Input<EncryptionArgs>;
    /**
     * Sku name
     */
    skuName?: pulumi.Input<string | enums.AzureDiskSkuName>;
}

/**
 * Model for disk for that pool is using
 */
export interface DiskArgs {
    /**
     * ID is the disk identifier visible to the OS. It is typically the WWN or disk ID in formats such as eui.e8238fa6bf530001001b448b45263379 or 0x5002cf6cbc5dd460
     */
    id: pulumi.Input<string>;
    /**
     * Reference is the location of the disk in an external system.
     */
    reference: pulumi.Input<string>;
}

/**
 * Elastic San Pool Properties
 */
export interface ElasticSanArgs {
    /**
     * Encryption specifies the encryption configuration for the Azure Disk pool
     */
    encryption?: pulumi.Input<EncryptionArgs>;
    /**
     * Sku name
     */
    skuName?: pulumi.Input<string | enums.ElasticSanSkuName>;
}

/**
 * Encryption key properties for the pool.
 */
export interface EncryptionArgs {
    /**
     * The managed service identities assigned to this resource.
     */
    identity?: pulumi.Input<ManagedServiceIdentityArgs>;
    /**
     * The name of the key vault key.
     */
    keyName: pulumi.Input<string>;
    /**
     * The URI of the key vault.
     */
    keyVaultUri: pulumi.Input<string>;
}

/**
 * Ephemeral Disk Pool Properties
 */
export interface EphemeralDiskArgs {
    /**
     * Only required if individual disk selection is desired. Path to disk, e.g. <nodename>:/dev/sda or WWN. Supports specifying multiple disks (same syntax as tags).
     */
    disks?: pulumi.Input<pulumi.Input<DiskArgs>[]>;
    /**
     * The number of data copies. Default 3.
     */
    replicas?: pulumi.Input<number>;
}
/**
 * ephemeralDiskArgsProvideDefaults sets the appropriate defaults for EphemeralDiskArgs
 */
export function ephemeralDiskArgsProvideDefaults(val: EphemeralDiskArgs): EphemeralDiskArgs {
    return {
        ...val,
        replicas: (val.replicas) ?? 3,
    };
}

/**
 * Managed service identity (system assigned and/or user assigned identities)
 */
export interface ManagedServiceIdentityArgs {
    /**
     * Type of managed service identity (where both SystemAssigned and UserAssigned types are allowed).
     */
    type: pulumi.Input<string | enums.ManagedServiceIdentityType>;
    /**
     * The set of user assigned identities associated with the resource. The userAssignedIdentities dictionary keys will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}. The dictionary values can be empty objects ({}) in requests.
     */
    userAssignedIdentities?: pulumi.Input<pulumi.Input<string>[]>;
}

/**
 * Type of the Pool: ephemeralDisk, azureDisk, or elasticsan
 */
export interface PoolTypeArgs {
    /**
     * Disk Pool Properties
     */
    azureDisk?: pulumi.Input<AzureDiskArgs>;
    /**
     * Elastic San Pool Properties
     */
    elasticSan?: pulumi.Input<ElasticSanArgs>;
    /**
     * Ephemeral Pool Properties
     */
    ephemeralDisk?: pulumi.Input<EphemeralDiskArgs>;
}
/**
 * poolTypeArgsProvideDefaults sets the appropriate defaults for PoolTypeArgs
 */
export function poolTypeArgsProvideDefaults(val: PoolTypeArgs): PoolTypeArgs {
    return {
        ...val,
        ephemeralDisk: (val.ephemeralDisk ? pulumi.output(val.ephemeralDisk).apply(ephemeralDiskArgsProvideDefaults) : undefined),
    };
}

/**
 * Requests for capacity for the pool.
 */
export interface RequestsArgs {
    /**
     * Requested capacity of the pool in GiB.
     */
    storage?: pulumi.Input<number>;
}
/**
 * requestsArgsProvideDefaults sets the appropriate defaults for RequestsArgs
 */
export function requestsArgsProvideDefaults(val: RequestsArgs): RequestsArgs {
    return {
        ...val,
        storage: (val.storage) ?? 1024,
    };
}

/**
 * Resource Requests for the pool.
 */
export interface ResourcesArgs {
    /**
     * Requests for capacity for the pool.
     */
    requests?: pulumi.Input<RequestsArgs>;
}
/**
 * resourcesArgsProvideDefaults sets the appropriate defaults for ResourcesArgs
 */
export function resourcesArgsProvideDefaults(val: ResourcesArgs): ResourcesArgs {
    return {
        ...val,
        requests: (val.requests ? pulumi.output(val.requests).apply(requestsArgsProvideDefaults) : undefined),
    };
}
