import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
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
    }

    /**
     * The Azure SKU of the machines in the pool.
     */
    export interface DevOpsAzureSkuResponse {
        /**
         * The Azure SKU name of the machines in the pool.
         */
        name: string;
        /**
         * The Azure SKU tier of the machines in the pool.
         */
        tier?: string;
    }
    /**
     * devOpsAzureSkuResponseProvideDefaults sets the appropriate defaults for DevOpsAzureSkuResponse
     */
    export function devOpsAzureSkuResponseProvideDefaults(val: DevOpsAzureSkuResponse): DevOpsAzureSkuResponse {
        return {
            ...val,
            tier: (val.tier) ?? "Standard",
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
         * The secret management settings of the machines in the pool.
         */
        secretsManagementSettings: SecretsManagementSettingsResponse;
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
         * The resource id of the image.
         */
        resourceId: string;
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
         * Discriminator property for AgentProfile.
         * Expected value is 'Stateful'.
         */
        kind: "Stateful";
        /**
         * How long should stateful machines be kept around. The maximum is one week.
         */
        maxAgentLifetime: string;
        /**
         * Defines pool buffer.
         */
        resourcePredictions?: any;
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
         * Defines pool buffer.
         */
        resourcePredictions?: any;
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
    }
    /**
     * vmssFabricProfileResponseProvideDefaults sets the appropriate defaults for VmssFabricProfileResponse
     */
    export function vmssFabricProfileResponseProvideDefaults(val: VmssFabricProfileResponse): VmssFabricProfileResponse {
        return {
            ...val,
            sku: devOpsAzureSkuResponseProvideDefaults(val.sku),
        };
    }
