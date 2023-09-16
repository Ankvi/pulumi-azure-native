import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
export namespace resourceconnector {
    /**
     * Contains infrastructure information about the Appliance
     */
    export interface AppliancePropertiesInfrastructureConfigArgs {
        /**
         * Information about the connected appliance.
         */
        provider?: pulumi.Input<string | enums.Provider>;
    }

    /**
     * Identity for the resource.
     */
    export interface IdentityArgs {
        /**
         * The identity type.
         */
        type?: pulumi.Input<string | enums.ResourceIdentityType>;
    }

    export namespace v20211031preview {
        /**
         * Contains infrastructure information about the Appliance
         */
        export interface AppliancePropertiesInfrastructureConfigArgs {
            /**
             * Information about the connected appliance.
             */
            provider?: pulumi.Input<string | enums.v20211031preview.Provider>;
        }

        /**
         * Identity for the resource.
         */
        export interface IdentityArgs {
            /**
             * The identity type.
             */
            type?: pulumi.Input<string | enums.v20211031preview.ResourceIdentityType>;
        }

    }

    export namespace v20220415preview {
    }

    export namespace v20221027 {
        /**
         * Contains infrastructure information about the Appliance
         */
        export interface AppliancePropertiesInfrastructureConfigArgs {
            /**
             * Information about the connected appliance.
             */
            provider?: pulumi.Input<string | enums.v20221027.Provider>;
        }

        /**
         * Identity for the resource.
         */
        export interface IdentityArgs {
            /**
             * The identity type.
             */
            type?: pulumi.Input<string | enums.v20221027.ResourceIdentityType>;
        }

    }
}
