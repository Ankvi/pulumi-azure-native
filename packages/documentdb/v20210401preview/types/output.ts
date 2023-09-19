import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    export interface ApiPropertiesResponse {
        /**
         * Describes the ServerVersion of an a MongoDB account.
         */
        serverVersion?: string;
    }

    /**
     * Cosmos DB capability object
     */
    export interface CapabilityResponse {
        /**
         * Name of the Cosmos DB capability. For example, "name": "EnableCassandra". Current values also include "EnableTable" and "EnableGremlin".
         */
        name?: string;
    }

    /**
     * The consistency policy for the Cosmos DB database account.
     */
    export interface ConsistencyPolicyResponse {
        /**
         * The default consistency level and configuration settings of the Cosmos DB account.
         */
        defaultConsistencyLevel: string;
        /**
         * When used with the Bounded Staleness consistency level, this value represents the time amount of staleness (in seconds) tolerated. Accepted range for this value is 5 - 86400. Required when defaultConsistencyPolicy is set to 'BoundedStaleness'.
         */
        maxIntervalInSeconds?: number;
        /**
         * When used with the Bounded Staleness consistency level, this value represents the number of stale requests tolerated. Accepted range for this value is 1 – 2,147,483,647. Required when defaultConsistencyPolicy is set to 'BoundedStaleness'.
         */
        maxStalenessPrefix?: number;
    }

    /**
     * The object representing continuous mode backup policy.
     */
    export interface ContinuousModeBackupPolicyResponse {
        /**
         * Describes the mode of backups.
         * Expected value is 'Continuous'.
         */
        type: "Continuous";
    }

    /**
     * The CORS policy for the Cosmos DB database account.
     */
    export interface CorsPolicyResponse {
        /**
         * The request headers that the origin domain may specify on the CORS request.
         */
        allowedHeaders?: string;
        /**
         * The methods (HTTP request verbs) that the origin domain may use for a CORS request.
         */
        allowedMethods?: string;
        /**
         * The origin domains that are permitted to make a request against the service via CORS.
         */
        allowedOrigins: string;
        /**
         * The response headers that may be sent in the response to the CORS request and exposed by the browser to the request issuer.
         */
        exposedHeaders?: string;
        /**
         * The maximum amount time that a browser should cache the preflight OPTIONS request.
         */
        maxAgeInSeconds?: number;
    }

    /**
     * Connection string for the Cosmos DB account
     */
    export interface DatabaseAccountConnectionStringResponse {
        /**
         * Value of the connection string
         */
        connectionString: string;
        /**
         * Description of the connection string
         */
        description: string;
    }

    /**
     * Specific Databases to restore.
     */
    export interface DatabaseRestoreResourceResponse {
        /**
         * The names of the collections available for restore.
         */
        collectionNames?: string[];
        /**
         * The name of the database available for restore.
         */
        databaseName?: string;
    }

    /**
     * The failover policy for a given region of a database account.
     */
    export interface FailoverPolicyResponse {
        /**
         * The failover priority of the region. A failover priority of 0 indicates a write region. The maximum value for a failover priority = (total number of regions - 1). Failover priority values must be unique for each of the regions in which the database account exists.
         */
        failoverPriority?: number;
        /**
         * The unique identifier of the region in which the database account replicates to. Example: &lt;accountName&gt;-&lt;locationName&gt;.
         */
        id: string;
        /**
         * The name of the region in which the database account exists.
         */
        locationName?: string;
    }

    /**
     * IpAddressOrRange object
     */
    export interface IpAddressOrRangeResponse {
        /**
         * A single IPv4 address or a single IPv4 address range in CIDR format. Provided IPs must be well-formatted and cannot be contained in one of the following ranges: 10.0.0.0/8, 100.64.0.0/10, 172.16.0.0/12, 192.168.0.0/16, since these are not enforceable by the IP address filter. Example of valid inputs: “23.40.210.245” or “23.40.210.0/8”.
         */
        ipAddressOrRange?: string;
    }

    /**
     * A region in which the Azure Cosmos DB database account is deployed.
     */
    export interface LocationResponse {
        /**
         * The connection endpoint for the specific region. Example: https://&lt;accountName&gt;-&lt;locationName&gt;.documents.azure.com:443/
         */
        documentEndpoint: string;
        /**
         * The failover priority of the region. A failover priority of 0 indicates a write region. The maximum value for a failover priority = (total number of regions - 1). Failover priority values must be unique for each of the regions in which the database account exists.
         */
        failoverPriority?: number;
        /**
         * The unique identifier of the region within the database account. Example: &lt;accountName&gt;-&lt;locationName&gt;.
         */
        id: string;
        /**
         * Flag to indicate whether or not this region is an AvailabilityZone region
         */
        isZoneRedundant?: boolean;
        /**
         * The name of the region.
         */
        locationName?: string;
        /**
         * The status of the Cosmos DB account at the time the operation was called. The status can be one of following. 'Creating' – the Cosmos DB account is being created. When an account is in Creating state, only properties that are specified as input for the Create Cosmos DB account operation are returned. 'Succeeded' – the Cosmos DB account is active for use. 'Updating' – the Cosmos DB account is being updated. 'Deleting' – the Cosmos DB account is being deleted. 'Failed' – the Cosmos DB account failed creation. 'DeletionFailed' – the Cosmos DB account deletion failed.
         */
        provisioningState: string;
    }

    /**
     * Identity for the resource.
     */
    export interface ManagedServiceIdentityResponse {
        /**
         * The principal id of the system assigned identity. This property will only be provided for a system assigned identity.
         */
        principalId: string;
        /**
         * The tenant id of the system assigned identity. This property will only be provided for a system assigned identity.
         */
        tenantId: string;
        /**
         * The type of identity used for the resource. The type 'SystemAssigned,UserAssigned' includes both an implicitly created identity and a set of user assigned identities. The type 'None' will remove any identities from the service.
         */
        type?: string;
        /**
         * The list of user identities associated with resource. The user identity dictionary key references will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'.
         */
        userAssignedIdentities?: {[key: string]: ManagedServiceIdentityResponseUserAssignedIdentities};
    }

    export interface ManagedServiceIdentityResponseUserAssignedIdentities {
        /**
         * The client id of user assigned identity.
         */
        clientId: string;
        /**
         * The principal id of user assigned identity.
         */
        principalId: string;
    }

    /**
     * The object representing periodic mode backup policy.
     */
    export interface PeriodicModeBackupPolicyResponse {
        /**
         * Configuration values for periodic mode backup
         */
        periodicModeProperties?: PeriodicModePropertiesResponse;
        /**
         * Describes the mode of backups.
         * Expected value is 'Periodic'.
         */
        type: "Periodic";
    }

    /**
     * Configuration values for periodic mode backup
     */
    export interface PeriodicModePropertiesResponse {
        /**
         * An integer representing the interval in minutes between two backups
         */
        backupIntervalInMinutes?: number;
        /**
         * An integer representing the time (in hours) that each backup is retained
         */
        backupRetentionIntervalInHours?: number;
        /**
         * Enum to indicate type of backup residency
         */
        backupStorageRedundancy?: string;
    }

    /**
     * A private endpoint connection
     */
    export interface PrivateEndpointConnectionResponse {
        /**
         * Group id of the private endpoint.
         */
        groupId?: string;
        /**
         * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
         */
        id: string;
        /**
         * The name of the resource
         */
        name: string;
        /**
         * Private endpoint which the connection belongs to.
         */
        privateEndpoint?: PrivateEndpointPropertyResponse;
        /**
         * Connection State of the Private Endpoint Connection.
         */
        privateLinkServiceConnectionState?: PrivateLinkServiceConnectionStatePropertyResponse;
        /**
         * Provisioning state of the private endpoint.
         */
        provisioningState?: string;
        /**
         * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
         */
        type: string;
    }

    /**
     * Private endpoint which the connection belongs to.
     */
    export interface PrivateEndpointPropertyResponse {
        /**
         * Resource id of the private endpoint.
         */
        id?: string;
    }

    /**
     * Connection State of the Private Endpoint Connection.
     */
    export interface PrivateLinkServiceConnectionStatePropertyResponse {
        /**
         * Any action that is required beyond basic workflow (approve/ reject/ disconnect)
         */
        actionsRequired: string;
        /**
         * The private link service connection description.
         */
        description?: string;
        /**
         * The private link service connection status.
         */
        status?: string;
    }

    /**
     * Parameters to indicate the information about the restore.
     */
    export interface RestoreParametersResponse {
        /**
         * List of specific databases available for restore.
         */
        databasesToRestore?: DatabaseRestoreResourceResponse[];
        /**
         * Describes the mode of the restore.
         */
        restoreMode?: string;
        /**
         * The id of the restorable database account from which the restore has to be initiated. For example: /subscriptions/{subscriptionId}/providers/Microsoft.DocumentDB/locations/{location}/restorableDatabaseAccounts/{restorableDatabaseAccountName}
         */
        restoreSource?: string;
        /**
         * Time to which the account has to be restored (ISO-8601 format).
         */
        restoreTimestampInUtc?: string;
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

    /**
     * Virtual Network ACL Rule object
     */
    export interface VirtualNetworkRuleResponse {
        /**
         * Resource ID of a subnet, for example: /subscriptions/{subscriptionId}/resourceGroups/{groupName}/providers/Microsoft.Network/virtualNetworks/{virtualNetworkName}/subnets/{subnetName}.
         */
        id?: string;
        /**
         * Create firewall rule before the virtual network has vnet service endpoint enabled.
         */
        ignoreMissingVNetServiceEndpoint?: boolean;
    }
