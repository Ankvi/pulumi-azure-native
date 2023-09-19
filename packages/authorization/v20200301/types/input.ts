import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * Identity for the resource.
     */
    export interface IdentityArgs {
        /**
         * The identity type. This is the only required field when adding a system assigned identity to a resource.
         */
        type?: pulumi.Input<enums.ResourceIdentityType>;
    }

    /**
     * The value of a parameter.
     */
    export interface ParameterValuesValueArgs {
        /**
         * The value of the parameter.
         */
        value?: any;
    }

    /**
     * The policy sku. This property is optional, obsolete, and will be ignored.
     */
    export interface PolicySkuArgs {
        /**
         * The name of the policy sku. Possible values are A0 and A1.
         */
        name: pulumi.Input<string>;
        /**
         * The policy sku tier. Possible values are Free and Standard.
         */
        tier?: pulumi.Input<string>;
    }
