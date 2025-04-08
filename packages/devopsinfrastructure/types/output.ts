import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * The stand-by agent scheme is determined based on historical demand.
 */
export interface AutomaticResourcePredictionsProfileResponse {
    /**
     * Determines how the stand-by scheme should be provided.
     * Expected value is 'Automatic'.
     */
    kind: "Automatic";
    /**
     * Determines the balance between cost and performance.
     */
    predictionPreference?: string;
}

/**
 * Azure DevOps organization profile
 */
export interface AzureDevOpsOrganizationProfileResponse {
    /**
     * Discriminator property for OrganizationProfile.
     * Expected value is 'AzureDevOps'.
     */
    kind: "AzureDevOps";
    /**
     * The list of Azure DevOps organizations the pool should be present in.
     */
    organizations: OrganizationResponse[];
    /**
     * The type of permission which determines which accounts are admins on the Azure DevOps pool.
     */
    permissionProfile?: AzureDevOpsPermissionProfileResponse;
}

/**
 * Defines the type of Azure DevOps pool permission.
 */
export interface AzureDevOpsPermissionProfileResponse {
    /**
     * Group email addresses
     */
    groups?: string[];
    /**
     * Determines who has admin permissions to the Azure DevOps pool.
     */
    kind: string;
    /**
     * User email addresses
     */
    users?: string[];
}

/**
 * The data disk of the VMSS.
 */
export interface DataDiskResponse {
    /**
     * The type of caching to be enabled for the data disks. The default value for caching is readwrite. For information about the caching options see: https://blogs.msdn.microsoft.com/windowsazurestorage/2012/06/27/exploring-windows-azure-drives-disks-and-images/.
     */
    caching?: string;
    /**
     * The initial disk size in gigabytes.
     */
    diskSizeGiB?: number;
    /**
     * The drive letter for the empty data disk. If not specified, it will be the first available letter.
     */
    driveLetter?: string;
    /**
     * The storage Account type to be used for the data disk. If omitted, the default is "standard_lrs".
     */
    storageAccountType?: string;
}

/**
 * The Azure SKU of the machines in the pool.
 */
export interface DevOpsAzureSkuResponse {
    /**
     * The Azure SKU name of the machines in the pool.
     */
    name: string;
}

/**
 * GitHub organization profile
 */
export interface GitHubOrganizationProfileResponse {
    /**
     * Discriminator property for OrganizationProfile.
     * Expected value is 'GitHub'.
     */
    kind: "GitHub";
    /**
     * The list of GitHub organizations/repositories the pool should be present in.
     */
    organizations: GitHubOrganizationResponse[];
}

/**
 * Defines a GitHub organization
 */
export interface GitHubOrganizationResponse {
    /**
     * Optional list of repositories in which the pool should be created.
     */
    repositories?: string[];
    /**
     * The GitHub organization URL in which the pool should be created.
     */
    url: string;
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
 * Customer provides the stand-by agent scheme.
 */
export interface ManualResourcePredictionsProfileResponse {
    /**
     * Determines how the stand-by scheme should be provided.
     * Expected value is 'Manual'.
     */
    kind: "Manual";
}

/**
 * The network profile of the machines in the pool.
 */
export interface NetworkProfileResponse {
    /**
     * The subnet id on which to put all machines created in the pool.
     */
    subnetId: string;
}

/**
 * Defines an Azure DevOps organization.
 */
export interface OrganizationResponse {
    /**
     * Determines if the pool should have open access to all projects in this organization.
     */
    openAccess?: boolean;
    /**
     * How many machines can be created at maximum in this organization out of the maximumConcurrency of the pool.
     */
    parallelism?: number;
    /**
     * Optional list of projects in which the pool should be created.
     */
    projects?: string[];
    /**
     * The Azure DevOps organization URL in which the pool should be created.
     */
    url: string;
}

/**
 * The OS profile of the machines in the pool.
 */
export interface OsProfileResponse {
    /**
     * Determines how the service should be run. By default, this will be set to Service.
     */
    logonType?: string;
    /**
     * The secret management settings of the machines in the pool.
     */
    secretsManagementSettings?: SecretsManagementSettingsResponse;
}

/**
 * The VM image of the machines in the pool.
 */
export interface PoolImageResponse {
    /**
     * List of aliases to reference the image by.
     */
    aliases?: string[];
    /**
     * The percentage of the buffer to be allocated to this image.
     */
    buffer?: string;
    /**
     * The ephemeral type of the image.
     */
    ephemeralType?: string;
    /**
     * The resource id of the image.
     */
    resourceId?: string;
    /**
     * The image to use from a well-known set of images made available to customers.
     */
    wellKnownImageName?: string;
}
/**
 * poolImageResponseProvideDefaults sets the appropriate defaults for PoolImageResponse
 */
export function poolImageResponseProvideDefaults(val: PoolImageResponse): PoolImageResponse {
    return {
        ...val,
        buffer: (val.buffer) ?? "*",
    };
}

/**
 * The secret management settings of the machines in the pool.
 */
export interface SecretsManagementSettingsResponse {
    /**
     * Where to store certificates on the machine.
     */
    certificateStoreLocation?: string;
    /**
     * Name of the certificate store to use on the machine, currently 'My' and 'Root' are supported.
     */
    certificateStoreName?: string;
    /**
     * Defines if the key of the certificates should be exportable.
     */
    keyExportable: boolean;
    /**
     * The list of certificates to install on all machines in the pool.
     */
    observedCertificates: string[];
}

/**
 * Stateful profile meaning that the machines will be returned to the pool after running a job.
 */
export interface StatefulResponse {
    /**
     * How long should the machine be kept around after it ran a workload when there are no stand-by agents. The maximum is one week.
     */
    gracePeriodTimeSpan?: string;
    /**
     * Discriminator property for AgentProfile.
     * Expected value is 'Stateful'.
     */
    kind: "Stateful";
    /**
     * How long should stateful machines be kept around. The maximum is one week.
     */
    maxAgentLifetime?: string;
    /**
     * Defines pool buffer/stand-by agents.
     */
    resourcePredictions?: any;
    /**
     * Defines how the pool buffer/stand-by agents is provided.
     */
    resourcePredictionsProfile?: AutomaticResourcePredictionsProfileResponse | ManualResourcePredictionsProfileResponse;
}

/**
 * Stateless profile meaning that the machines will be cleaned up after running a job.
 */
export interface StatelessAgentProfileResponse {
    /**
     * Discriminator property for AgentProfile.
     * Expected value is 'Stateless'.
     */
    kind: "Stateless";
    /**
     * Defines pool buffer/stand-by agents.
     */
    resourcePredictions?: any;
    /**
     * Defines how the pool buffer/stand-by agents is provided.
     */
    resourcePredictionsProfile?: AutomaticResourcePredictionsProfileResponse | ManualResourcePredictionsProfileResponse;
}

/**
 * The storage profile of the VMSS.
 */
export interface StorageProfileResponse {
    /**
     * A list of empty data disks to attach.
     */
    dataDisks?: DataDiskResponse[];
    /**
     * The Azure SKU name of the machines in the pool.
     */
    osDiskStorageAccountType?: string;
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
 * The agents will run on Virtual Machine Scale Sets.
 */
export interface VmssFabricProfileResponse {
    /**
     * The VM images of the machines in the pool.
     */
    images: PoolImageResponse[];
    /**
     * Discriminator property for FabricProfile.
     * Expected value is 'Vmss'.
     */
    kind: "Vmss";
    /**
     * The network profile of the machines in the pool.
     */
    networkProfile?: NetworkProfileResponse;
    /**
     * The OS profile of the machines in the pool.
     */
    osProfile?: OsProfileResponse;
    /**
     * The Azure SKU of the machines in the pool.
     */
    sku: DevOpsAzureSkuResponse;
    /**
     * The storage profile of the machines in the pool.
     */
    storageProfile?: StorageProfileResponse;
}
