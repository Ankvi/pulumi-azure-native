import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
export namespace quantum {
    /**
     * Information about a Provider. A Provider is an entity that offers Targets to run Azure Quantum Jobs.
     */
    export interface ProviderArgs {
        /**
         * The provider's marketplace application display name.
         */
        applicationName?: pulumi.Input<string>;
        /**
         * A Uri identifying the specific instance of this provider.
         */
        instanceUri?: pulumi.Input<string>;
        /**
         * Unique id of this provider.
         */
        providerId?: pulumi.Input<string>;
        /**
         * The sku associated with pricing information for this provider.
         */
        providerSku?: pulumi.Input<string>;
        /**
         * Provisioning status field
         */
        provisioningState?: pulumi.Input<string | enums.Status>;
        /**
         * Id to track resource usage for the provider.
         */
        resourceUsageId?: pulumi.Input<string>;
    }

    /**
     * Managed Identity information.
     */
    export interface QuantumWorkspaceIdentityArgs {
        /**
         * The identity type.
         */
        type?: pulumi.Input<string | enums.ResourceIdentityType>;
    }

    export namespace v20220110preview {
        /**
         * Information about a Provider. A Provider is an entity that offers Targets to run Azure Quantum Jobs.
         */
        export interface ProviderArgs {
            /**
             * The provider's marketplace application display name.
             */
            applicationName?: pulumi.Input<string>;
            /**
             * A Uri identifying the specific instance of this provider.
             */
            instanceUri?: pulumi.Input<string>;
            /**
             * Unique id of this provider.
             */
            providerId?: pulumi.Input<string>;
            /**
             * The sku associated with pricing information for this provider.
             */
            providerSku?: pulumi.Input<string>;
            /**
             * Provisioning status field
             */
            provisioningState?: pulumi.Input<string | enums.v20220110preview.Status>;
            /**
             * Id to track resource usage for the provider.
             */
            resourceUsageId?: pulumi.Input<string>;
        }

        /**
         * Managed Identity information.
         */
        export interface QuantumWorkspaceIdentityArgs {
            /**
             * The identity type.
             */
            type?: pulumi.Input<string | enums.v20220110preview.ResourceIdentityType>;
        }

    }
}
