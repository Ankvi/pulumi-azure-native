import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * Identity for the resource.
     */
    export interface IdentityArgs {
        /**
         * The identity type.
         */
        type?: pulumi.Input<enums.ResourceIdentityType>;
    }

    /**
     * The policy definition reference.
     */
    export interface PolicyDefinitionReferenceArgs {
        /**
         * Required if a parameter is used in policy rule.
         */
        parameters?: any;
        /**
         * The ID of the policy definition or policy set definition.
         */
        policyDefinitionId?: pulumi.Input<string>;
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
