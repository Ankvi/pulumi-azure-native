import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * An object that contains the details about an environment's state.
     */
    export interface EnvironmentStateDetailsResponse {
        /**
         * Contains the code that represents the reason of an environment being in a particular state. Can be used to programmatically handle specific cases.
         */
        code?: string;
        /**
         * A message that describes the state in detail.
         */
        message?: string;
    }

    /**
     * An object that represents the status of the environment, and its internal state in the Time Series Insights service.
     */
    export interface EnvironmentStatusResponse {
        /**
         * An object that represents the status of ingress on an environment.
         */
        ingress: IngressEnvironmentStatusResponse;
        /**
         * An object that represents the status of warm storage on an environment.
         */
        warmStorage: WarmStorageEnvironmentStatusResponse;
    }

    /**
     * The storage configuration provides the non-secret connection details about the customer storage account that is used to store the environment's data.
     */
    export interface Gen2StorageConfigurationOutputResponse {
        /**
         * The name of the storage account that will hold the environment's Gen2 data.
         */
        accountName: string;
    }

    /**
     * An object that represents the status of ingress on an environment.
     */
    export interface IngressEnvironmentStatusResponse {
        /**
         * This string represents the state of ingress operations on an environment. It can be "Disabled", "Ready", "Running", "Paused" or "Unknown"
         */
        state?: string;
        /**
         * An object that contains the details about an environment's state.
         */
        stateDetails: EnvironmentStateDetailsResponse;
    }

    /**
     * The Private Endpoint Connection resource.
     */
    export interface PrivateEndpointConnectionResponse {
        /**
         * The provisioning state of the private endpoint connection resource.
         */
        groupIds?: string[];
        /**
         * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
         */
        id: string;
        /**
         * The name of the resource
         */
        name: string;
        /**
         * The resource of private end point.
         */
        privateEndpoint?: PrivateEndpointResponse;
        /**
         * A collection of information about the state of the connection between service consumer and provider.
         */
        privateLinkServiceConnectionState: PrivateLinkServiceConnectionStateResponse;
        /**
         * Provisioning state of the private endpoint connection.
         */
        provisioningState: string;
        /**
         * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
         */
        type: string;
    }

    /**
     * The Private Endpoint resource.
     */
    export interface PrivateEndpointResponse {
        /**
         * The ARM identifier for Private Endpoint
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
     * The sku determines the type of environment, either Gen1 (S1 or S2) or Gen2 (L1). For Gen1 environments the sku determines the capacity of the environment, the ingress rate, and the billing rate.
     */
    export interface SkuResponse {
        /**
         * The capacity of the sku. For Gen1 environments, this value can be changed to support scale out of environments after they have been created.
         */
        capacity: number;
        /**
         * The name of this SKU.
         */
        name: string;
    }

    /**
     * The structure of the property that a time series id can have. An environment can have multiple such properties.
     */
    export interface TimeSeriesIdPropertyResponse {
        /**
         * The name of the property.
         */
        name?: string;
        /**
         * The type of the property.
         */
        type?: string;
    }

    /**
     * An object that represents the status of warm storage on an environment.
     */
    export interface WarmStorageEnvironmentStatusResponse {
        /**
         * A value that represents the number of properties used by the environment for S1/S2 SKU and number of properties used by Warm Store for PAYG SKU
         */
        currentCount?: number;
        /**
         * A value that represents the maximum number of properties used allowed by the environment for S1/S2 SKU and maximum number of properties allowed by Warm Store for PAYG SKU.
         */
        maxCount?: number;
        /**
         * This string represents the state of warm storage properties usage. It can be "Ok", "Error", "Unknown".
         */
        state?: string;
    }

    /**
     * The warm store configuration provides the details to create a warm store cache that will retain a copy of the environment's data available for faster query.
     */
    export interface WarmStoreConfigurationPropertiesResponse {
        /**
         * ISO8601 timespan specifying the number of days the environment's events will be available for query from the warm store.
         */
        dataRetention: string;
    }
