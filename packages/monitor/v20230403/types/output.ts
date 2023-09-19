import * as pulumi from "@pulumi/pulumi";
    /**
     * The Data Collection Rule and Endpoint used for ingestion by default.
     */
    export interface AzureMonitorWorkspaceResponseDefaultIngestionSettings {
        /**
         * The Azure resource Id of the default data collection endpoint for this Azure Monitor Workspace.
         */
        dataCollectionEndpointResourceId: string;
        /**
         * The Azure resource Id of the default data collection rule for this Azure Monitor Workspace.
         */
        dataCollectionRuleResourceId: string;
    }

    /**
     * Properties related to the metrics container in the Azure Monitor Workspace
     */
    export interface AzureMonitorWorkspaceResponseMetrics {
        /**
         * An internal identifier for the metrics container. Only to be used by the system
         */
        internalId: string;
        /**
         * The Prometheus query endpoint for the Azure Monitor Workspace
         */
        prometheusQueryEndpoint: string;
    }

    /**
     * The private endpoint connection resource.
     */
    export interface PrivateEndpointConnectionResponse {
        /**
         * The group ids for the private endpoint resource.
         */
        groupIds: string[];
        /**
         * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
         */
        id: string;
        /**
         * The name of the resource
         */
        name: string;
        /**
         * The private endpoint resource.
         */
        privateEndpoint?: PrivateEndpointResponse;
        /**
         * A collection of information about the state of the connection between service consumer and provider.
         */
        privateLinkServiceConnectionState: PrivateLinkServiceConnectionStateResponse;
        /**
         * The provisioning state of the private endpoint connection resource.
         */
        provisioningState: string;
        /**
         * Azure Resource Manager metadata containing createdBy and modifiedBy information.
         */
        systemData: SystemDataResponse;
        /**
         * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
         */
        type: string;
    }

    /**
     * The private endpoint resource.
     */
    export interface PrivateEndpointResponse {
        /**
         * The ARM identifier for private endpoint.
         */
        id: string;
    }

    /**
     * A collection of information about the state of the connection between service consumer and provider.
     */
    export interface PrivateLinkServiceConnectionStateResponse {
        /**
         * A message indicating if changes on the service provider require any updates on the consumer.
         */
        actionsRequired?: string;
        /**
         * The reason for approval/rejection of the connection.
         */
        description?: string;
        /**
         * Indicates whether the connection has been Approved/Rejected/Removed by the owner of the service.
         */
        status?: string;
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
