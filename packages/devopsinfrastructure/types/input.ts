import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * The stand-by agent scheme is determined based on historical demand.
 */
export interface AutomaticResourcePredictionsProfileArgs {
    /**
     * Determines how the stand-by scheme should be provided.
     * Expected value is 'Automatic'.
     */
    kind: pulumi.Input<"Automatic">;
    /**
     * Determines the balance between cost and performance.
     */
    predictionPreference?: pulumi.Input<string | enums.PredictionPreference>;
}

/**
 * Azure DevOps organization profile
 */
export interface AzureDevOpsOrganizationProfileArgs {
    /**
     * Discriminator property for OrganizationProfile.
     * Expected value is 'AzureDevOps'.
     */
    kind: pulumi.Input<"AzureDevOps">;
    /**
     * The list of Azure DevOps organizations the pool should be present in.
     */
    organizations: pulumi.Input<pulumi.Input<OrganizationArgs>[]>;
    /**
     * The type of permission which determines which accounts are admins on the Azure DevOps pool.
     */
    permissionProfile?: pulumi.Input<AzureDevOpsPermissionProfileArgs>;
}

/**
 * Defines the type of Azure DevOps pool permission.
 */
export interface AzureDevOpsPermissionProfileArgs {
    /**
     * Group email addresses
     */
    groups?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Determines who has admin permissions to the Azure DevOps pool.
     */
    kind: pulumi.Input<string | enums.AzureDevOpsPermissionType>;
    /**
     * User email addresses
     */
    users?: pulumi.Input<pulumi.Input<string>[]>;
}

/**
 * The data disk of the VMSS.
 */
export interface DataDiskArgs {
    /**
     * The type of caching to be enabled for the data disks. The default value for caching is readwrite. For information about the caching options see: https://blogs.msdn.microsoft.com/windowsazurestorage/2012/06/27/exploring-windows-azure-drives-disks-and-images/.
     */
    caching?: pulumi.Input<string | enums.CachingType>;
    /**
     * The initial disk size in gigabytes.
     */
    diskSizeGiB?: pulumi.Input<number>;
    /**
     * The drive letter for the empty data disk. If not specified, it will be the first available letter.
     */
    driveLetter?: pulumi.Input<string>;
    /**
     * The storage Account type to be used for the data disk. If omitted, the default is "standard_lrs".
     */
    storageAccountType?: pulumi.Input<string | enums.StorageAccountType>;
}

/**
 * The Azure SKU of the machines in the pool.
 */
export interface DevOpsAzureSkuArgs {
    /**
     * The Azure SKU name of the machines in the pool.
     */
    name: pulumi.Input<string>;
}

/**
 * Defines a GitHub organization
 */
export interface GitHubOrganizationArgs {
    /**
     * Optional list of repositories in which the pool should be created.
     */
    repositories?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The GitHub organization URL in which the pool should be created.
     */
    url: pulumi.Input<string>;
}

/**
 * GitHub organization profile
 */
export interface GitHubOrganizationProfileArgs {
    /**
     * Discriminator property for OrganizationProfile.
     * Expected value is 'GitHub'.
     */
    kind: pulumi.Input<"GitHub">;
    /**
     * The list of GitHub organizations/repositories the pool should be present in.
     */
    organizations: pulumi.Input<pulumi.Input<GitHubOrganizationArgs>[]>;
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
 * Customer provides the stand-by agent scheme.
 */
export interface ManualResourcePredictionsProfileArgs {
    /**
     * Determines how the stand-by scheme should be provided.
     * Expected value is 'Manual'.
     */
    kind: pulumi.Input<"Manual">;
}

/**
 * The network profile of the machines in the pool.
 */
export interface NetworkProfileArgs {
    /**
     * The subnet id on which to put all machines created in the pool.
     */
    subnetId: pulumi.Input<string>;
}

/**
 * Defines an Azure DevOps organization.
 */
export interface OrganizationArgs {
    /**
     * Determines if the pool should have open access to all projects in this organization.
     */
    openAccess?: pulumi.Input<boolean>;
    /**
     * How many machines can be created at maximum in this organization out of the maximumConcurrency of the pool.
     */
    parallelism?: pulumi.Input<number>;
    /**
     * Optional list of projects in which the pool should be created.
     */
    projects?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The Azure DevOps organization URL in which the pool should be created.
     */
    url: pulumi.Input<string>;
}

/**
 * The OS profile of the machines in the pool.
 */
export interface OsProfileArgs {
    /**
     * Determines how the service should be run. By default, this will be set to Service.
     */
    logonType?: pulumi.Input<string | enums.LogonType>;
    /**
     * The secret management settings of the machines in the pool.
     */
    secretsManagementSettings?: pulumi.Input<SecretsManagementSettingsArgs>;
}

/**
 * The VM image of the machines in the pool.
 */
export interface PoolImageArgs {
    /**
     * List of aliases to reference the image by.
     */
    aliases?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The percentage of the buffer to be allocated to this image.
     */
    buffer?: pulumi.Input<string>;
    /**
     * The ephemeral type of the image.
     */
    ephemeralType?: pulumi.Input<string | enums.EphemeralType>;
    /**
     * The resource id of the image.
     */
    resourceId?: pulumi.Input<string>;
    /**
     * The image to use from a well-known set of images made available to customers.
     */
    wellKnownImageName?: pulumi.Input<string>;
}
/**
 * poolImageArgsProvideDefaults sets the appropriate defaults for PoolImageArgs
 */
export function poolImageArgsProvideDefaults(val: PoolImageArgs): PoolImageArgs {
    return {
        ...val,
        buffer: (val.buffer) ?? "*",
    };
}

/**
 * The secret management settings of the machines in the pool.
 */
export interface SecretsManagementSettingsArgs {
    /**
     * Where to store certificates on the machine.
     */
    certificateStoreLocation?: pulumi.Input<string>;
    /**
     * Name of the certificate store to use on the machine, currently 'My' and 'Root' are supported.
     */
    certificateStoreName?: pulumi.Input<string | enums.CertificateStoreNameOption>;
    /**
     * Defines if the key of the certificates should be exportable.
     */
    keyExportable: pulumi.Input<boolean>;
    /**
     * The list of certificates to install on all machines in the pool.
     */
    observedCertificates: pulumi.Input<pulumi.Input<string>[]>;
}

/**
 * Stateful profile meaning that the machines will be returned to the pool after running a job.
 */
export interface StatefulArgs {
    /**
     * How long should the machine be kept around after it ran a workload when there are no stand-by agents. The maximum is one week.
     */
    gracePeriodTimeSpan?: pulumi.Input<string>;
    /**
     * Discriminator property for AgentProfile.
     * Expected value is 'Stateful'.
     */
    kind: pulumi.Input<"Stateful">;
    /**
     * How long should stateful machines be kept around. The maximum is one week.
     */
    maxAgentLifetime?: pulumi.Input<string>;
    /**
     * Defines pool buffer/stand-by agents.
     */
    resourcePredictions?: any;
    /**
     * Defines how the pool buffer/stand-by agents is provided.
     */
    resourcePredictionsProfile?: pulumi.Input<AutomaticResourcePredictionsProfileArgs | ManualResourcePredictionsProfileArgs>;
}

/**
 * Stateless profile meaning that the machines will be cleaned up after running a job.
 */
export interface StatelessAgentProfileArgs {
    /**
     * Discriminator property for AgentProfile.
     * Expected value is 'Stateless'.
     */
    kind: pulumi.Input<"Stateless">;
    /**
     * Defines pool buffer/stand-by agents.
     */
    resourcePredictions?: any;
    /**
     * Defines how the pool buffer/stand-by agents is provided.
     */
    resourcePredictionsProfile?: pulumi.Input<AutomaticResourcePredictionsProfileArgs | ManualResourcePredictionsProfileArgs>;
}

/**
 * The storage profile of the VMSS.
 */
export interface StorageProfileArgs {
    /**
     * A list of empty data disks to attach.
     */
    dataDisks?: pulumi.Input<pulumi.Input<DataDiskArgs>[]>;
    /**
     * The Azure SKU name of the machines in the pool.
     */
    osDiskStorageAccountType?: pulumi.Input<string | enums.OsDiskStorageAccountType>;
}

/**
 * The agents will run on Virtual Machine Scale Sets.
 */
export interface VmssFabricProfileArgs {
    /**
     * The VM images of the machines in the pool.
     */
    images: pulumi.Input<pulumi.Input<PoolImageArgs>[]>;
    /**
     * Discriminator property for FabricProfile.
     * Expected value is 'Vmss'.
     */
    kind: pulumi.Input<"Vmss">;
    /**
     * The network profile of the machines in the pool.
     */
    networkProfile?: pulumi.Input<NetworkProfileArgs>;
    /**
     * The OS profile of the machines in the pool.
     */
    osProfile?: pulumi.Input<OsProfileArgs>;
    /**
     * The Azure SKU of the machines in the pool.
     */
    sku: pulumi.Input<DevOpsAzureSkuArgs>;
    /**
     * The storage profile of the machines in the pool.
     */
    storageProfile?: pulumi.Input<StorageProfileArgs>;
}
