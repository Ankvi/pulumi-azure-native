import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * All Customer-managed key encryption properties for the resource. Set this to an empty object to use Microsoft-managed key encryption.
     */
    export interface ClusterPropertiesCustomerManagedKeyEncryptionArgs {
        /**
         * All identity configuration for Customer-managed key settings defining which identity should be used to auth to Key Vault.
         */
        keyEncryptionKeyIdentity?: pulumi.Input<ClusterPropertiesKeyEncryptionKeyIdentityArgs>;
        /**
         * Key encryption key Url, versioned only. Ex: https://contosovault.vault.azure.net/keys/contosokek/562a4bb76b524a1493a6afe8e536ee78
         */
        keyEncryptionKeyUrl?: pulumi.Input<string>;
    }

    /**
     * Encryption-at-rest configuration for the cluster.
     */
    export interface ClusterPropertiesEncryptionArgs {
        /**
         * All Customer-managed key encryption properties for the resource. Set this to an empty object to use Microsoft-managed key encryption.
         */
        customerManagedKeyEncryption?: pulumi.Input<ClusterPropertiesCustomerManagedKeyEncryptionArgs>;
    }

    /**
     * All identity configuration for Customer-managed key settings defining which identity should be used to auth to Key Vault.
     */
    export interface ClusterPropertiesKeyEncryptionKeyIdentityArgs {
        /**
         * Only userAssignedIdentity is supported in this API version; other types may be supported in the future
         */
        identityType?: pulumi.Input<string | enums.CmkIdentityType>;
        /**
         * User assigned identity to use for accessing key encryption key Url. Ex: /subscriptions/<sub uuid>/resourceGroups/<resource group>/providers/Microsoft.ManagedIdentity/userAssignedIdentities/myId.
         */
        userAssignedIdentityResourceId?: pulumi.Input<string>;
    }

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
     * Managed service identity (system assigned and/or user assigned identities)
     */
    export interface ManagedServiceIdentityArgs {
        /**
         * Type of managed service identity (where both SystemAssigned and UserAssigned types are allowed).
         */
        type: pulumi.Input<string | enums.ManagedServiceIdentityType>;
        /**
         * The set of user assigned identities associated with the resource. The userAssignedIdentities dictionary keys will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}. The dictionary values can be empty objects ({}) in requests.
         */
        userAssignedIdentities?: pulumi.Input<pulumi.Input<string>[]>;
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
