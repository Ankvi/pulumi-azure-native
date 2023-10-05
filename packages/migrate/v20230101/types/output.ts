import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * Defines Private link service group connectivity.
     */
    export interface GroupConnectivityInformationResponse {
        customerVisibleFqdns?: string[];
        groupId?: string;
        id?: string;
        internalFqdn?: string;
        memberName?: string;
        privateLinkServiceArmRegion?: string;
        redirectMapId?: string;
    }

    /**
     * Defines Private link IP configuration.
     */
    export interface IpConfigurationResponse {
        groupId?: string;
        id?: string;
        linkIdentifier?: string;
        memberName?: string;
        privateIpAddress?: string;
    }

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
        /**
         * Defines resource ID of a private endpoint connection.
         */
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
     * Properties of a private endpoint connection proxy.
     */
    export interface PrivateEndpointConnectionProxyPropertiesResponse {
        /**
         * Defines Private endpoint additional details.
         */
        remotePrivateEndpoint: PrivateEndpointDetailsResponse;
        status: string;
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
        properties?: PrivateEndpointConnectionPropertiesResponse;
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
     * Defines Private endpoint additional details.
     */
    export interface PrivateEndpointDetailsResponse {
        connectionDetails?: IpConfigurationResponse[];
        id?: string;
        manualPrivateLinkServiceConnections?: PrivateLinkServiceConnectionResponse[];
        privateLinkServiceConnections?: PrivateLinkServiceConnectionResponse[];
        privateLinkServiceProxies?: PrivateLinkServiceProxyResponse[];
    }

    /**
     * Defines Private link service connection.
     */
    export interface PrivateLinkServiceConnectionResponse {
        groupIds?: string[];
        id?: string;
        name?: string;
        requestMessage?: string;
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
     * Defines Private link service proxy.
     */
    export interface PrivateLinkServiceProxyResponse {
        groupConnectivityInformation?: GroupConnectivityInformationResponse[];
        id?: string;
        /**
         * Defines resource ID of a private endpoint connection.
         */
        remotePrivateEndpointConnection?: ResourceIdResponse;
        /**
         * Private endpoint connection state.
         */
        remotePrivateLinkServiceConnectionState?: PrivateLinkServiceConnectionStateResponse;
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

    /**
     * Defines resource ID of a private endpoint connection.
     */
    export interface ResourceIdResponse {
        id: string;
    }

    /**
     * Class representing the details of the solution.
     */
    export interface SolutionDetailsResponse {
        /**
         * Gets or sets the count of assessments reported by the solution.
         */
        assessmentCount?: number;
        /**
         * Gets or sets the extended details reported by the solution.
         */
        extendedDetails?: {[key: string]: string};
        /**
         * Gets or sets the count of groups reported by the solution.
         */
        groupCount?: number;
    }

    /**
     * Class for solution properties.
     */
    export interface SolutionPropertiesResponse {
        /**
         * Gets or sets the cleanup state of the solution.
         */
        cleanupState?: string;
        /**
         * Gets or sets the details of the solution.
         */
        details?: SolutionDetailsResponse;
        /**
         * Gets or sets the goal of the solution.
         */
        goal?: string;
        /**
         * Gets or sets the purpose of the solution.
         */
        purpose?: string;
        /**
         * Gets or sets the current status of the solution.
         */
        status?: string;
        /**
         * Gets or sets the summary of the solution.
         */
        summary?: SolutionSummaryResponse;
        /**
         * Gets or sets the tool being used in the solution.
         */
        tool?: string;
    }

    /**
     * The solution summary class.
     */
    export interface SolutionSummaryResponse {
        /**
         * Gets the Instance type.
         */
        instanceType: string;
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
