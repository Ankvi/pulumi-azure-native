import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * Identity for the resource.
     */
    export interface IdentityResponse {
        /**
         * The principal ID of the resource identity.
         */
        principalId: string;
        /**
         * The tenant ID of the resource identity.
         */
        tenantId: string;
        /**
         * The identity type. This is the only required field when adding a system assigned identity to a resource.
         */
        type?: string;
    }

    /**
     * The value of a parameter.
     */
    export interface ParameterValuesValueResponse {
        /**
         * The value of the parameter.
         */
        value?: any;
    }

    /**
     * The policy sku. This property is optional, obsolete, and will be ignored.
     */
    export interface PolicySkuResponse {
        /**
         * The name of the policy sku. Possible values are A0 and A1.
         */
        name: string;
        /**
         * The policy sku tier. Possible values are Free and Standard.
         */
        tier?: string;
    }
