import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * Customer Managed Identity
     */
    export interface MyWorkbookManagedIdentityResponse {
        /**
         * The identity type.
         */
        type?: string;
        /**
         * Customer Managed Identity
         */
        userAssignedIdentities?: MyWorkbookUserAssignedIdentitiesResponse;
    }

    /**
     * Customer Managed Identity
     */
    export interface MyWorkbookUserAssignedIdentitiesResponse {
        /**
         * The principal ID of resource identity.
         */
        principalId: string;
        /**
         * The tenant ID of resource.
         */
        tenantId: string;
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
     * Customer Managed Identity
     */
    export interface WorkbookManagedIdentityResponse {
        /**
         * The identity type.
         */
        type?: string;
        /**
         * Customer Managed Identity
         */
        userAssignedIdentities?: WorkbookUserAssignedIdentitiesResponse;
    }

    /**
     * Customer Managed Identity
     */
    export interface WorkbookUserAssignedIdentitiesResponse {
        /**
         * The client ID of resource.
         */
        clientId: string;
        /**
         * The principal ID of resource identity.
         */
        principalId: string;
        /**
         * The tenant ID of resource.
         */
        tenantId: string;
    }
