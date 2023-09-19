import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * Lock owner properties.
     */
    export interface ManagementLockOwnerResponse {
        /**
         * The application ID of the lock owner.
         */
        applicationId?: string;
    }

    /**
     * Private Link Association Properties.
     */
    export interface PrivateLinkAssociationPropertiesExpandedResponse {
        /**
         * The rmpl Resource ID.
         */
        privateLink?: string;
        publicNetworkAccess?: string;
        /**
         * The scope of the private link association.
         */
        scope?: string;
        /**
         * The TenantID.
         */
        tenantID?: string;
    }

    export interface ResourceManagementPrivateLinkEndpointConnectionsResponse {
        /**
         * The private endpoint connections.
         */
        privateEndpointConnections?: string[];
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
