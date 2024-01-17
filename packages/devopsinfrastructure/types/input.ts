import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
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
}

/**
 * The Azure SKU of the machines in the pool.
 */
export interface DevOpsAzureSkuArgs {
    /**
     * The Azure SKU name of the machines in the pool.
     */
    name: pulumi.Input<string>;
    /**
     * The Azure SKU tier of the machines in the pool.
     */
    tier?: pulumi.Input<string>;
}
/**
 * devOpsAzureSkuArgsProvideDefaults sets the appropriate defaults for DevOpsAzureSkuArgs
 */
export function devOpsAzureSkuArgsProvideDefaults(val: DevOpsAzureSkuArgs): DevOpsAzureSkuArgs {
    return {
        ...val,
        tier: (val.tier) ?? "Standard",
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
     * The secret management settings of the machines in the pool.
     */
    secretsManagementSettings: pulumi.Input<SecretsManagementSettingsArgs>;
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
     * The resource id of the image.
     */
    resourceId: pulumi.Input<string>;
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
     * Discriminator property for AgentProfile.
     * Expected value is 'Stateful'.
     */
    kind: pulumi.Input<"Stateful">;
    /**
     * How long should stateful machines be kept around. The maximum is one week.
     */
    maxAgentLifetime: pulumi.Input<string>;
    /**
     * Defines pool buffer.
     */
    resourcePredictions?: any;
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
     * Defines pool buffer.
     */
    resourcePredictions?: any;
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
}
/**
 * vmssFabricProfileArgsProvideDefaults sets the appropriate defaults for VmssFabricProfileArgs
 */
export function vmssFabricProfileArgsProvideDefaults(val: VmssFabricProfileArgs): VmssFabricProfileArgs {
    return {
        ...val,
        sku: pulumi.output(val.sku).apply(devOpsAzureSkuArgsProvideDefaults),
    };
}

