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
         * The identity type.
         */
        type?: string;
    }

    /**
     * The policy definition reference.
     */
    export interface PolicyDefinitionReferenceResponse {
        /**
         * Required if a parameter is used in policy rule.
         */
        parameters?: any;
        /**
         * The ID of the policy definition or policy set definition.
         */
        policyDefinitionId?: string;
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
