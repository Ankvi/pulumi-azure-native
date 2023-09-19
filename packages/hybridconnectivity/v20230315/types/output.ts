import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * Endpoint details
     */
    export interface EndpointPropertiesResponse {
        /**
         * The resource provisioning state.
         */
        provisioningState: string;
        /**
         * The resource Id of the connectivity endpoint (optional).
         */
        resourceId?: string;
        /**
         * The type of endpoint.
         */
        type: string;
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
