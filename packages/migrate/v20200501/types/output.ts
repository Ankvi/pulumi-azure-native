import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * Properties of a migrate project.
     */
    export interface MigrateProjectPropertiesResponse {
        /**
         * Last summary refresh time.
         */
        lastSummaryRefreshedTime: string;
        /**
         * Gets the private endpoint connections.
         */
        privateEndpointConnections: PrivateEndpointConnectionResponse[];
        /**
         * Gets or sets the state of public network access.
         */
        publicNetworkAccess?: string;
        /**
         * Refresh summary state.
         */
        refreshSummaryState: string;
        /**
         * Register tools inside project.
         */
        registeredTools: string[];
        /**
         * Service endpoint.
         */
        serviceEndpoint?: string;
        /**
         * Project summary.
         */
        summary: {[key: string]: ProjectSummaryResponse};
        /**
         * Utility storage account id.
         */
        utilityStorageAccountId?: string;
    }

    /**
     * Properties of a private endpoint connection.
     */
    export interface PrivateEndpointConnectionPropertiesResponse {
        privateEndpoint: ResourceIdResponse;
        /**
         * Gets the properties of the object.
         */
        privateLinkServiceConnectionState?: PrivateLinkServiceConnectionStateResponse;
        /**
         * Provisioning state.
         */
        provisioningState: string;
    }

    /**
     * REST model used to encapsulate the user visible state of a PrivateEndpoint.
     */
    export interface PrivateEndpointConnectionResponse {
        /**
         * Gets the tag for optimistic concurrency control.
         */
        eTag: string;
        /**
         * Relative URL to get this Sites.
         */
        id: string;
        /**
         * Gets the name of the resource.
         */
        name: string;
        /**
         * Gets the properties of the object.
         */
        properties: PrivateEndpointConnectionPropertiesResponse;
        /**
         * Metadata pertaining to creation and last modification of the resource.
         */
        systemData: SystemDataResponse;
        /**
         * Gets the resource type.
         */
        type: string;
    }

    /**
     * Private endpoint connection state.
     */
    export interface PrivateLinkServiceConnectionStateResponse {
        /**
         * Action required.
         */
        actionsRequired?: string;
        /**
         * Description of the object.
         */
        description?: string;
        /**
         * Private link connection state.
         */
        status?: string;
    }

    /**
     * Project summary.
     */
    export interface ProjectSummaryResponse {
        /**
         * Extended summary.
         */
        extendedSummary?: {[key: string]: string};
        /**
         * Instance type.
         */
        instanceType: string;
        /**
         * Last summary refresh time.
         */
        lastSummaryRefreshedTime?: string;
        /**
         * Refresh summary state.
         */
        refreshSummaryState?: string;
    }

    export interface ResourceIdResponse {
        id: string;
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
         * The type of identity that last modified the resource.
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
