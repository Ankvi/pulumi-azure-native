import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * Properties of a active directory administrator.
     */
    export interface ManagedInstanceExternalAdministratorArgs {
        /**
         * Type of the sever administrator.
         */
        administratorType?: pulumi.Input<string | enums.AdministratorType>;
        /**
         * Azure Active Directory only Authentication enabled.
         */
        azureADOnlyAuthentication?: pulumi.Input<boolean>;
        /**
         * Login name of the server administrator.
         */
        login?: pulumi.Input<string>;
        /**
         * Principal Type of the sever administrator.
         */
        principalType?: pulumi.Input<string | enums.PrincipalType>;
        /**
         * SID (object ID) of the server administrator.
         */
        sid?: pulumi.Input<string>;
        /**
         * Tenant ID of the administrator.
         */
        tenantId?: pulumi.Input<string>;
    }

    /**
     * Azure Active Directory identity configuration for a resource.
     */
    export interface ResourceIdentityArgs {
        /**
         * The identity type. Set this to 'SystemAssigned' in order to automatically create and assign an Azure Active Directory principal for the resource.
         */
        type?: pulumi.Input<string | enums.IdentityType>;
        /**
         * The resource ids of the user assigned identities to use
         */
        userAssignedIdentities?: pulumi.Input<pulumi.Input<string>[]>;
    }

    /**
     * An ARM Resource SKU.
     */
    export interface SkuArgs {
        /**
         * Capacity of the particular SKU.
         */
        capacity?: pulumi.Input<number>;
        /**
         * If the service has different generations of hardware, for the same SKU, then that can be captured here.
         */
        family?: pulumi.Input<string>;
        /**
         * The name of the SKU, typically, a letter + Number code, e.g. P3.
         */
        name: pulumi.Input<string>;
        /**
         * Size of the particular SKU
         */
        size?: pulumi.Input<string>;
        /**
         * The tier or edition of the particular SKU, e.g. Basic, Premium.
         */
        tier?: pulumi.Input<string>;
    }
