import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * Optional set of properties to configure geo replication for this database.
     */
    export interface DatabasePropertiesGeoReplicationArgs {
        /**
         * Name for the group of linked database resources
         */
        groupNickname?: pulumi.Input<string>;
        /**
         * List of database resources to link with this database
         */
        linkedDatabases?: pulumi.Input<pulumi.Input<LinkedDatabaseArgs>[]>;
    }

    /**
     * SKU parameters supplied to the create RedisEnterprise operation.
     */
    export interface EnterpriseSkuArgs {
        /**
         * The size of the RedisEnterprise cluster. Defaults to 2 or 3 depending on SKU. Valid values are (2, 4, 6, ...) for Enterprise SKUs and (3, 9, 15, ...) for Flash SKUs.
         */
        capacity?: pulumi.Input<number>;
        /**
         * The type of RedisEnterprise cluster to deploy. Possible values: (Enterprise_E10, EnterpriseFlash_F300 etc.)
         */
        name: pulumi.Input<string | enums.SkuName>;
    }

    /**
     * Specifies details of a linked database resource.
     */
    export interface LinkedDatabaseArgs {
        /**
         * Resource ID of a database resource to link with this database.
         */
        id?: pulumi.Input<string>;
    }

    /**
     * Specifies configuration of a redis module
     */
    export interface ModuleArgs {
        /**
         * Configuration options for the module, e.g. 'ERROR_RATE 0.01 INITIAL_SIZE 400'.
         */
        args?: pulumi.Input<string>;
        /**
         * The name of the module, e.g. 'RedisBloom', 'RediSearch', 'RedisTimeSeries'
         */
        name: pulumi.Input<string>;
    }

    /**
     * Persistence-related configuration for the RedisEnterprise database
     */
    export interface PersistenceArgs {
        /**
         * Sets whether AOF is enabled.
         */
        aofEnabled?: pulumi.Input<boolean>;
        /**
         * Sets the frequency at which data is written to disk.
         */
        aofFrequency?: pulumi.Input<string | enums.AofFrequency>;
        /**
         * Sets whether RDB is enabled.
         */
        rdbEnabled?: pulumi.Input<boolean>;
        /**
         * Sets the frequency at which a snapshot of the database is created.
         */
        rdbFrequency?: pulumi.Input<string | enums.RdbFrequency>;
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
