import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
export namespace quantum {
    /**
     * Information about a Provider. A Provider is an entity that offers Targets to run Azure Quantum Jobs.
     */
    export interface ProviderResponse {
        /**
         * The provider's marketplace application display name.
         */
        applicationName?: string;
        /**
         * A Uri identifying the specific instance of this provider.
         */
        instanceUri?: string;
        /**
         * Unique id of this provider.
         */
        providerId?: string;
        /**
         * The sku associated with pricing information for this provider.
         */
        providerSku?: string;
        /**
         * Provisioning status field
         */
        provisioningState?: string;
        /**
         * Id to track resource usage for the provider.
         */
        resourceUsageId?: string;
    }

    /**
     * Managed Identity information.
     */
    export interface QuantumWorkspaceResponseIdentity {
        /**
         * The principal ID of resource identity.
         */
        principalId: string;
        /**
         * The tenant ID of resource.
         */
        tenantId: string;
        /**
         * The identity type.
         */
        type?: string;
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

    export namespace v20220110preview {
        /**
         * Information about a Provider. A Provider is an entity that offers Targets to run Azure Quantum Jobs.
         */
        export interface ProviderResponse {
            /**
             * The provider's marketplace application display name.
             */
            applicationName?: string;
            /**
             * A Uri identifying the specific instance of this provider.
             */
            instanceUri?: string;
            /**
             * Unique id of this provider.
             */
            providerId?: string;
            /**
             * The sku associated with pricing information for this provider.
             */
            providerSku?: string;
            /**
             * Provisioning status field
             */
            provisioningState?: string;
            /**
             * Id to track resource usage for the provider.
             */
            resourceUsageId?: string;
        }

        /**
         * Managed Identity information.
         */
        export interface QuantumWorkspaceResponseIdentity {
            /**
             * The principal ID of resource identity.
             */
            principalId: string;
            /**
             * The tenant ID of resource.
             */
            tenantId: string;
            /**
             * The identity type.
             */
            type?: string;
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

    }
}
