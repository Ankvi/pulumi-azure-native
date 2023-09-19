import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    export interface ApiPropertiesArgs {
        /**
         * Describes the ServerVersion of an a MongoDB account.
         */
        serverVersion?: pulumi.Input<string | enums.ServerVersion>;
    }

    /**
     * Cosmos DB capability object
     */
    export interface CapabilityArgs {
        /**
         * Name of the Cosmos DB capability. For example, "name": "EnableCassandra". Current values also include "EnableTable" and "EnableGremlin".
         */
        name?: pulumi.Input<string>;
    }

    /**
     * The consistency policy for the Cosmos DB database account.
     */
    export interface ConsistencyPolicyArgs {
        /**
         * The default consistency level and configuration settings of the Cosmos DB account.
         */
        defaultConsistencyLevel: pulumi.Input<enums.DefaultConsistencyLevel>;
        /**
         * When used with the Bounded Staleness consistency level, this value represents the time amount of staleness (in seconds) tolerated. Accepted range for this value is 5 - 86400. Required when defaultConsistencyPolicy is set to 'BoundedStaleness'.
         */
        maxIntervalInSeconds?: pulumi.Input<number>;
        /**
         * When used with the Bounded Staleness consistency level, this value represents the number of stale requests tolerated. Accepted range for this value is 1 – 2,147,483,647. Required when defaultConsistencyPolicy is set to 'BoundedStaleness'.
         */
        maxStalenessPrefix?: pulumi.Input<number>;
    }

    /**
     * The object representing continuous mode backup policy.
     */
    export interface ContinuousModeBackupPolicyArgs {
        /**
         * Describes the mode of backups.
         * Expected value is 'Continuous'.
         */
        type: pulumi.Input<"Continuous">;
    }

    /**
     * The CORS policy for the Cosmos DB database account.
     */
    export interface CorsPolicyArgs {
        /**
         * The request headers that the origin domain may specify on the CORS request.
         */
        allowedHeaders?: pulumi.Input<string>;
        /**
         * The methods (HTTP request verbs) that the origin domain may use for a CORS request.
         */
        allowedMethods?: pulumi.Input<string>;
        /**
         * The origin domains that are permitted to make a request against the service via CORS.
         */
        allowedOrigins: pulumi.Input<string>;
        /**
         * The response headers that may be sent in the response to the CORS request and exposed by the browser to the request issuer.
         */
        exposedHeaders?: pulumi.Input<string>;
        /**
         * The maximum amount time that a browser should cache the preflight OPTIONS request.
         */
        maxAgeInSeconds?: pulumi.Input<number>;
    }

    /**
     * Specific Databases to restore.
     */
    export interface DatabaseRestoreResourceArgs {
        /**
         * The names of the collections available for restore.
         */
        collectionNames?: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * The name of the database available for restore.
         */
        databaseName?: pulumi.Input<string>;
    }

    /**
     * Properties for non-restore Azure Cosmos DB database account requests.
     */
    export interface DefaultRequestDatabaseAccountCreateUpdatePropertiesArgs {
        /**
         * API specific properties. Currently, supported only for MongoDB API.
         */
        apiProperties?: pulumi.Input<ApiPropertiesArgs>;
        /**
         * The object representing the policy for taking backups on an account.
         */
        backupPolicy?: pulumi.Input<ContinuousModeBackupPolicyArgs | PeriodicModeBackupPolicyArgs>;
        /**
         * List of Cosmos DB capabilities for the account
         */
        capabilities?: pulumi.Input<pulumi.Input<CapabilityArgs>[]>;
        /**
         * The cassandra connector offer type for the Cosmos DB database C* account.
         */
        connectorOffer?: pulumi.Input<string | enums.ConnectorOffer>;
        /**
         * The consistency policy for the Cosmos DB account.
         */
        consistencyPolicy?: pulumi.Input<ConsistencyPolicyArgs>;
        /**
         * The CORS policy for the Cosmos DB database account.
         */
        cors?: pulumi.Input<pulumi.Input<CorsPolicyArgs>[]>;
        /**
         * Enum to indicate the mode of account creation.
         * Expected value is 'Default'.
         */
        createMode: pulumi.Input<"Default">;
        /**
         * The offer type for the database
         */
        databaseAccountOfferType: pulumi.Input<enums.DatabaseAccountOfferType>;
        /**
         * The default identity for accessing key vault used in features like customer managed keys. The default identity needs to be explicitly set by the users. It can be "FirstPartyIdentity", "SystemAssignedIdentity" and more.
         */
        defaultIdentity?: pulumi.Input<string>;
        /**
         * Disable write operations on metadata resources (databases, containers, throughput) via account keys
         */
        disableKeyBasedMetadataWriteAccess?: pulumi.Input<boolean>;
        /**
         * Flag to indicate whether to enable storage analytics.
         */
        enableAnalyticalStorage?: pulumi.Input<boolean>;
        /**
         * Enables automatic failover of the write region in the rare event that the region is unavailable due to an outage. Automatic failover will result in a new write region for the account and is chosen based on the failover priorities configured for the account.
         */
        enableAutomaticFailover?: pulumi.Input<boolean>;
        /**
         * Enables the cassandra connector on the Cosmos DB C* account
         */
        enableCassandraConnector?: pulumi.Input<boolean>;
        /**
         * Flag to indicate whether Free Tier is enabled.
         */
        enableFreeTier?: pulumi.Input<boolean>;
        /**
         * Enables the account to write in multiple locations
         */
        enableMultipleWriteLocations?: pulumi.Input<boolean>;
        /**
         * List of IpRules.
         */
        ipRules?: pulumi.Input<pulumi.Input<IpAddressOrRangeArgs>[]>;
        /**
         * Flag to indicate whether to enable/disable Virtual Network ACL rules.
         */
        isVirtualNetworkFilterEnabled?: pulumi.Input<boolean>;
        /**
         * The URI of the key vault
         */
        keyVaultKeyUri?: pulumi.Input<string>;
        /**
         * An array that contains the georeplication locations enabled for the Cosmos DB account.
         */
        locations: pulumi.Input<pulumi.Input<LocationArgs>[]>;
        /**
         * Indicates what services are allowed to bypass firewall checks.
         */
        networkAclBypass?: pulumi.Input<enums.NetworkAclBypass>;
        /**
         * An array that contains the Resource Ids for Network Acl Bypass for the Cosmos DB account.
         */
        networkAclBypassResourceIds?: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * Whether requests from Public Network are allowed
         */
        publicNetworkAccess?: pulumi.Input<string | enums.PublicNetworkAccess>;
        /**
         * List of Virtual Network ACL rules configured for the Cosmos DB account.
         */
        virtualNetworkRules?: pulumi.Input<pulumi.Input<VirtualNetworkRuleArgs>[]>;
    }
    /**
     * defaultRequestDatabaseAccountCreateUpdatePropertiesArgsProvideDefaults sets the appropriate defaults for DefaultRequestDatabaseAccountCreateUpdatePropertiesArgs
     */
    export function defaultRequestDatabaseAccountCreateUpdatePropertiesArgsProvideDefaults(val: DefaultRequestDatabaseAccountCreateUpdatePropertiesArgs): DefaultRequestDatabaseAccountCreateUpdatePropertiesArgs {
        return {
            ...val,
            createMode: (val.createMode) ?? "Default",
        };
    }

    /**
     * IpAddressOrRange object
     */
    export interface IpAddressOrRangeArgs {
        /**
         * A single IPv4 address or a single IPv4 address range in CIDR format. Provided IPs must be well-formatted and cannot be contained in one of the following ranges: 10.0.0.0/8, 100.64.0.0/10, 172.16.0.0/12, 192.168.0.0/16, since these are not enforceable by the IP address filter. Example of valid inputs: “23.40.210.245” or “23.40.210.0/8”.
         */
        ipAddressOrRange?: pulumi.Input<string>;
    }

    /**
     * A region in which the Azure Cosmos DB database account is deployed.
     */
    export interface LocationArgs {
        /**
         * The failover priority of the region. A failover priority of 0 indicates a write region. The maximum value for a failover priority = (total number of regions - 1). Failover priority values must be unique for each of the regions in which the database account exists.
         */
        failoverPriority?: pulumi.Input<number>;
        /**
         * Flag to indicate whether or not this region is an AvailabilityZone region
         */
        isZoneRedundant?: pulumi.Input<boolean>;
        /**
         * The name of the region.
         */
        locationName?: pulumi.Input<string>;
    }

    /**
     * Identity for the resource.
     */
    export interface ManagedServiceIdentityArgs {
        /**
         * The type of identity used for the resource. The type 'SystemAssigned,UserAssigned' includes both an implicitly created identity and a set of user assigned identities. The type 'None' will remove any identities from the service.
         */
        type?: pulumi.Input<enums.ResourceIdentityType>;
        /**
         * The list of user identities associated with resource. The user identity dictionary key references will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'.
         */
        userAssignedIdentities?: pulumi.Input<pulumi.Input<string>[]>;
    }

    /**
     * The object representing periodic mode backup policy.
     */
    export interface PeriodicModeBackupPolicyArgs {
        /**
         * Configuration values for periodic mode backup
         */
        periodicModeProperties?: pulumi.Input<PeriodicModePropertiesArgs>;
        /**
         * Describes the mode of backups.
         * Expected value is 'Periodic'.
         */
        type: pulumi.Input<"Periodic">;
    }

    /**
     * Configuration values for periodic mode backup
     */
    export interface PeriodicModePropertiesArgs {
        /**
         * An integer representing the interval in minutes between two backups
         */
        backupIntervalInMinutes?: pulumi.Input<number>;
        /**
         * An integer representing the time (in hours) that each backup is retained
         */
        backupRetentionIntervalInHours?: pulumi.Input<number>;
        /**
         * Enum to indicate type of backup residency
         */
        backupStorageRedundancy?: pulumi.Input<string | enums.BackupStorageRedundancy>;
    }

    /**
     * Parameters to indicate the information about the restore.
     */
    export interface RestoreParametersArgs {
        /**
         * List of specific databases available for restore.
         */
        databasesToRestore?: pulumi.Input<pulumi.Input<DatabaseRestoreResourceArgs>[]>;
        /**
         * Describes the mode of the restore.
         */
        restoreMode?: pulumi.Input<string | enums.RestoreMode>;
        /**
         * The id of the restorable database account from which the restore has to be initiated. For example: /subscriptions/{subscriptionId}/providers/Microsoft.DocumentDB/locations/{location}/restorableDatabaseAccounts/{restorableDatabaseAccountName}
         */
        restoreSource?: pulumi.Input<string>;
        /**
         * Time to which the account has to be restored (ISO-8601 format).
         */
        restoreTimestampInUtc?: pulumi.Input<string>;
    }

    /**
     * Properties to restore Azure Cosmos DB database account.
     */
    export interface RestoreReqeustDatabaseAccountCreateUpdatePropertiesArgs {
        /**
         * API specific properties. Currently, supported only for MongoDB API.
         */
        apiProperties?: pulumi.Input<ApiPropertiesArgs>;
        /**
         * The object representing the policy for taking backups on an account.
         */
        backupPolicy?: pulumi.Input<ContinuousModeBackupPolicyArgs | PeriodicModeBackupPolicyArgs>;
        /**
         * List of Cosmos DB capabilities for the account
         */
        capabilities?: pulumi.Input<pulumi.Input<CapabilityArgs>[]>;
        /**
         * The cassandra connector offer type for the Cosmos DB database C* account.
         */
        connectorOffer?: pulumi.Input<string | enums.ConnectorOffer>;
        /**
         * The consistency policy for the Cosmos DB account.
         */
        consistencyPolicy?: pulumi.Input<ConsistencyPolicyArgs>;
        /**
         * The CORS policy for the Cosmos DB database account.
         */
        cors?: pulumi.Input<pulumi.Input<CorsPolicyArgs>[]>;
        /**
         * Enum to indicate the mode of account creation.
         * Expected value is 'Restore'.
         */
        createMode: pulumi.Input<"Restore">;
        /**
         * The offer type for the database
         */
        databaseAccountOfferType: pulumi.Input<enums.DatabaseAccountOfferType>;
        /**
         * The default identity for accessing key vault used in features like customer managed keys. The default identity needs to be explicitly set by the users. It can be "FirstPartyIdentity", "SystemAssignedIdentity" and more.
         */
        defaultIdentity?: pulumi.Input<string>;
        /**
         * Disable write operations on metadata resources (databases, containers, throughput) via account keys
         */
        disableKeyBasedMetadataWriteAccess?: pulumi.Input<boolean>;
        /**
         * Flag to indicate whether to enable storage analytics.
         */
        enableAnalyticalStorage?: pulumi.Input<boolean>;
        /**
         * Enables automatic failover of the write region in the rare event that the region is unavailable due to an outage. Automatic failover will result in a new write region for the account and is chosen based on the failover priorities configured for the account.
         */
        enableAutomaticFailover?: pulumi.Input<boolean>;
        /**
         * Enables the cassandra connector on the Cosmos DB C* account
         */
        enableCassandraConnector?: pulumi.Input<boolean>;
        /**
         * Flag to indicate whether Free Tier is enabled.
         */
        enableFreeTier?: pulumi.Input<boolean>;
        /**
         * Enables the account to write in multiple locations
         */
        enableMultipleWriteLocations?: pulumi.Input<boolean>;
        /**
         * List of IpRules.
         */
        ipRules?: pulumi.Input<pulumi.Input<IpAddressOrRangeArgs>[]>;
        /**
         * Flag to indicate whether to enable/disable Virtual Network ACL rules.
         */
        isVirtualNetworkFilterEnabled?: pulumi.Input<boolean>;
        /**
         * The URI of the key vault
         */
        keyVaultKeyUri?: pulumi.Input<string>;
        /**
         * An array that contains the georeplication locations enabled for the Cosmos DB account.
         */
        locations: pulumi.Input<pulumi.Input<LocationArgs>[]>;
        /**
         * Indicates what services are allowed to bypass firewall checks.
         */
        networkAclBypass?: pulumi.Input<enums.NetworkAclBypass>;
        /**
         * An array that contains the Resource Ids for Network Acl Bypass for the Cosmos DB account.
         */
        networkAclBypassResourceIds?: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * Whether requests from Public Network are allowed
         */
        publicNetworkAccess?: pulumi.Input<string | enums.PublicNetworkAccess>;
        /**
         * Parameters to indicate the information about the restore.
         */
        restoreParameters?: pulumi.Input<RestoreParametersArgs>;
        /**
         * List of Virtual Network ACL rules configured for the Cosmos DB account.
         */
        virtualNetworkRules?: pulumi.Input<pulumi.Input<VirtualNetworkRuleArgs>[]>;
    }
    /**
     * restoreReqeustDatabaseAccountCreateUpdatePropertiesArgsProvideDefaults sets the appropriate defaults for RestoreReqeustDatabaseAccountCreateUpdatePropertiesArgs
     */
    export function restoreReqeustDatabaseAccountCreateUpdatePropertiesArgsProvideDefaults(val: RestoreReqeustDatabaseAccountCreateUpdatePropertiesArgs): RestoreReqeustDatabaseAccountCreateUpdatePropertiesArgs {
        return {
            ...val,
            createMode: (val.createMode) ?? "Default",
        };
    }

    /**
     * Virtual Network ACL Rule object
     */
    export interface VirtualNetworkRuleArgs {
        /**
         * Resource ID of a subnet, for example: /subscriptions/{subscriptionId}/resourceGroups/{groupName}/providers/Microsoft.Network/virtualNetworks/{virtualNetworkName}/subnets/{subnetName}.
         */
        id?: pulumi.Input<string>;
        /**
         * Create firewall rule before the virtual network has vnet service endpoint enabled.
         */
        ignoreMissingVNetServiceEndpoint?: pulumi.Input<boolean>;
    }
