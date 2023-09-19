import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * The storage configuration provides the connection details that allows the Time Series Insights service to connect to the customer storage account that is used to store the environment's data.
     */
    export interface Gen2StorageConfigurationInputArgs {
        /**
         * The name of the storage account that will hold the environment's Gen2 data.
         */
        accountName: pulumi.Input<string>;
        /**
         * The value of the management key that grants the Time Series Insights service write access to the storage account. This property is not shown in environment responses.
         */
        managementKey: pulumi.Input<string>;
    }

    /**
     * A collection of information about the state of the connection between service consumer and provider.
     */
    export interface PrivateLinkServiceConnectionStateArgs {
        /**
         * A message indicating if changes on the service provider require any updates on the consumer.
         */
        actionsRequired?: pulumi.Input<string>;
        /**
         * The reason for approval/rejection of the connection.
         */
        description?: pulumi.Input<string>;
        /**
         * Indicates whether the connection has been Approved/Rejected/Removed by the owner of the service.
         */
        status?: pulumi.Input<string | enums.PrivateEndpointServiceConnectionStatus>;
    }

    /**
     * The sku determines the type of environment, either Gen1 (S1 or S2) or Gen2 (L1). For Gen1 environments the sku determines the capacity of the environment, the ingress rate, and the billing rate.
     */
    export interface SkuArgs {
        /**
         * The capacity of the sku. For Gen1 environments, this value can be changed to support scale out of environments after they have been created.
         */
        capacity: pulumi.Input<number>;
        /**
         * The name of this SKU.
         */
        name: pulumi.Input<string | enums.SkuName>;
    }

    /**
     * The structure of the property that a time series id can have. An environment can have multiple such properties.
     */
    export interface TimeSeriesIdPropertyArgs {
        /**
         * The name of the property.
         */
        name?: pulumi.Input<string>;
        /**
         * The type of the property.
         */
        type?: pulumi.Input<string | enums.PropertyType>;
    }

    /**
     * The warm store configuration provides the details to create a warm store cache that will retain a copy of the environment's data available for faster query.
     */
    export interface WarmStoreConfigurationPropertiesArgs {
        /**
         * ISO8601 timespan specifying the number of days the environment's events will be available for query from the warm store.
         */
        dataRetention: pulumi.Input<string>;
    }
