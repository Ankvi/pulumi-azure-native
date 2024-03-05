import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * An Azure Cosmos DB database account.
 * Azure REST API version: 2023-04-15. Prior API version in Azure Native 1.x: 2021-03-15.
 *
 * Other available API versions: 2020-03-01, 2020-06-01-preview, 2020-09-01, 2021-04-01-preview, 2023-03-15-preview, 2023-09-15, 2023-09-15-preview, 2023-11-15, 2023-11-15-preview, 2024-02-15-preview.
 */
export class DatabaseAccount extends pulumi.CustomResource {
    /**
     * Get an existing DatabaseAccount resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): DatabaseAccount {
        return new DatabaseAccount(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:documentdb:DatabaseAccount';

    /**
     * Returns true if the given object is an instance of DatabaseAccount.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is DatabaseAccount {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === DatabaseAccount.__pulumiType;
    }

    /**
     * Analytical storage specific properties.
     */
    public readonly analyticalStorageConfiguration!: pulumi.Output<types.outputs.AnalyticalStorageConfigurationResponse | undefined>;
    /**
     * API specific properties.
     */
    public readonly apiProperties!: pulumi.Output<types.outputs.ApiPropertiesResponse | undefined>;
    /**
     * The object representing the policy for taking backups on an account.
     */
    public readonly backupPolicy!: pulumi.Output<types.outputs.ContinuousModeBackupPolicyResponse | types.outputs.PeriodicModeBackupPolicyResponse | undefined>;
    /**
     * List of Cosmos DB capabilities for the account
     */
    public readonly capabilities!: pulumi.Output<types.outputs.CapabilityResponse[] | undefined>;
    /**
     * The object that represents all properties related to capacity enforcement on an account.
     */
    public readonly capacity!: pulumi.Output<types.outputs.CapacityResponse | undefined>;
    /**
     * The cassandra connector offer type for the Cosmos DB database C* account.
     */
    public readonly connectorOffer!: pulumi.Output<string | undefined>;
    /**
     * The consistency policy for the Cosmos DB database account.
     */
    public readonly consistencyPolicy!: pulumi.Output<types.outputs.ConsistencyPolicyResponse | undefined>;
    /**
     * The CORS policy for the Cosmos DB database account.
     */
    public readonly cors!: pulumi.Output<types.outputs.CorsPolicyResponse[] | undefined>;
    /**
     * Enum to indicate the mode of account creation.
     */
    public readonly createMode!: pulumi.Output<string | undefined>;
    /**
     * The offer type for the Cosmos DB database account. Default value: Standard.
     */
    public readonly databaseAccountOfferType!: pulumi.Output<string>;
    /**
     * The default identity for accessing key vault used in features like customer managed keys. The default identity needs to be explicitly set by the users. It can be "FirstPartyIdentity", "SystemAssignedIdentity" and more.
     */
    public readonly defaultIdentity!: pulumi.Output<string | undefined>;
    /**
     * Disable write operations on metadata resources (databases, containers, throughput) via account keys
     */
    public readonly disableKeyBasedMetadataWriteAccess!: pulumi.Output<boolean | undefined>;
    /**
     * Opt-out of local authentication and ensure only MSI and AAD can be used exclusively for authentication.
     */
    public readonly disableLocalAuth!: pulumi.Output<boolean | undefined>;
    /**
     * The connection endpoint for the Cosmos DB database account.
     */
    public /*out*/ readonly documentEndpoint!: pulumi.Output<string>;
    /**
     * Flag to indicate whether to enable storage analytics.
     */
    public readonly enableAnalyticalStorage!: pulumi.Output<boolean | undefined>;
    /**
     * Enables automatic failover of the write region in the rare event that the region is unavailable due to an outage. Automatic failover will result in a new write region for the account and is chosen based on the failover priorities configured for the account.
     */
    public readonly enableAutomaticFailover!: pulumi.Output<boolean | undefined>;
    /**
     * Enables the cassandra connector on the Cosmos DB C* account
     */
    public readonly enableCassandraConnector!: pulumi.Output<boolean | undefined>;
    /**
     * Flag to indicate whether Free Tier is enabled.
     */
    public readonly enableFreeTier!: pulumi.Output<boolean | undefined>;
    /**
     * Enables the account to write in multiple locations
     */
    public readonly enableMultipleWriteLocations!: pulumi.Output<boolean | undefined>;
    /**
     * Flag to indicate enabling/disabling of Partition Merge feature on the account
     */
    public readonly enablePartitionMerge!: pulumi.Output<boolean | undefined>;
    /**
     * An array that contains the regions ordered by their failover priorities.
     */
    public /*out*/ readonly failoverPolicies!: pulumi.Output<types.outputs.FailoverPolicyResponse[]>;
    /**
     * Identity for the resource.
     */
    public readonly identity!: pulumi.Output<types.outputs.ManagedServiceIdentityResponse | undefined>;
    /**
     * A unique identifier assigned to the database account
     */
    public /*out*/ readonly instanceId!: pulumi.Output<string>;
    /**
     * List of IpRules.
     */
    public readonly ipRules!: pulumi.Output<types.outputs.IpAddressOrRangeResponse[] | undefined>;
    /**
     * Flag to indicate whether to enable/disable Virtual Network ACL rules.
     */
    public readonly isVirtualNetworkFilterEnabled!: pulumi.Output<boolean | undefined>;
    /**
     * The URI of the key vault
     */
    public readonly keyVaultKeyUri!: pulumi.Output<string | undefined>;
    /**
     * The object that represents the metadata for the Account Keys of the Cosmos DB account.
     */
    public /*out*/ readonly keysMetadata!: pulumi.Output<types.outputs.DatabaseAccountKeysMetadataResponse>;
    /**
     * Indicates the type of database account. This can only be set at database account creation.
     */
    public readonly kind!: pulumi.Output<string | undefined>;
    /**
     * The location of the resource group to which the resource belongs.
     */
    public readonly location!: pulumi.Output<string | undefined>;
    /**
     * An array that contains all of the locations enabled for the Cosmos DB account.
     */
    public readonly locations!: pulumi.Output<types.outputs.LocationResponse[]>;
    /**
     * Indicates the minimum allowed Tls version. The default value is Tls 1.2. Cassandra and Mongo APIs only work with Tls 1.2.
     */
    public readonly minimalTlsVersion!: pulumi.Output<string | undefined>;
    /**
     * The name of the ARM resource.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Indicates what services are allowed to bypass firewall checks.
     */
    public readonly networkAclBypass!: pulumi.Output<string | undefined>;
    /**
     * An array that contains the Resource Ids for Network Acl Bypass for the Cosmos DB account.
     */
    public readonly networkAclBypassResourceIds!: pulumi.Output<string[] | undefined>;
    /**
     * List of Private Endpoint Connections configured for the Cosmos DB account.
     */
    public /*out*/ readonly privateEndpointConnections!: pulumi.Output<types.outputs.PrivateEndpointConnectionResponse[]>;
    /**
     * The status of the Cosmos DB account at the time the operation was called. The status can be one of following. 'Creating' – the Cosmos DB account is being created. When an account is in Creating state, only properties that are specified as input for the Create Cosmos DB account operation are returned. 'Succeeded' – the Cosmos DB account is active for use. 'Updating' – the Cosmos DB account is being updated. 'Deleting' – the Cosmos DB account is being deleted. 'Failed' – the Cosmos DB account failed creation. 'DeletionFailed' – the Cosmos DB account deletion failed.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * Whether requests from Public Network are allowed
     */
    public readonly publicNetworkAccess!: pulumi.Output<string | undefined>;
    /**
     * An array that contains of the read locations enabled for the Cosmos DB account.
     */
    public /*out*/ readonly readLocations!: pulumi.Output<types.outputs.LocationResponse[]>;
    /**
     * Parameters to indicate the information about the restore.
     */
    public readonly restoreParameters!: pulumi.Output<types.outputs.RestoreParametersResponse | undefined>;
    /**
     * The system meta data relating to this resource.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * Tags are a list of key-value pairs that describe the resource. These tags can be used in viewing and grouping this resource (across resource groups). A maximum of 15 tags can be provided for a resource. Each tag must have a key no greater than 128 characters and value no greater than 256 characters. For example, the default experience for a template type is set with "defaultExperience": "Cassandra". Current "defaultExperience" values also include "Table", "Graph", "DocumentDB", and "MongoDB".
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * The type of Azure resource.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * List of Virtual Network ACL rules configured for the Cosmos DB account.
     */
    public readonly virtualNetworkRules!: pulumi.Output<types.outputs.VirtualNetworkRuleResponse[] | undefined>;
    /**
     * An array that contains the write location for the Cosmos DB account.
     */
    public /*out*/ readonly writeLocations!: pulumi.Output<types.outputs.LocationResponse[]>;

    /**
     * Create a DatabaseAccount resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DatabaseAccountArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.databaseAccountOfferType === undefined) && !opts.urn) {
                throw new Error("Missing required property 'databaseAccountOfferType'");
            }
            if ((!args || args.locations === undefined) && !opts.urn) {
                throw new Error("Missing required property 'locations'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["accountName"] = args ? args.accountName : undefined;
            resourceInputs["analyticalStorageConfiguration"] = args ? args.analyticalStorageConfiguration : undefined;
            resourceInputs["apiProperties"] = args ? args.apiProperties : undefined;
            resourceInputs["backupPolicy"] = args ? args.backupPolicy : undefined;
            resourceInputs["capabilities"] = args ? args.capabilities : undefined;
            resourceInputs["capacity"] = args ? args.capacity : undefined;
            resourceInputs["connectorOffer"] = args ? args.connectorOffer : undefined;
            resourceInputs["consistencyPolicy"] = args ? args.consistencyPolicy : undefined;
            resourceInputs["cors"] = args ? args.cors : undefined;
            resourceInputs["createMode"] = (args ? args.createMode : undefined) ?? "Default";
            resourceInputs["databaseAccountOfferType"] = args ? args.databaseAccountOfferType : undefined;
            resourceInputs["defaultIdentity"] = args ? args.defaultIdentity : undefined;
            resourceInputs["disableKeyBasedMetadataWriteAccess"] = args ? args.disableKeyBasedMetadataWriteAccess : undefined;
            resourceInputs["disableLocalAuth"] = args ? args.disableLocalAuth : undefined;
            resourceInputs["enableAnalyticalStorage"] = args ? args.enableAnalyticalStorage : undefined;
            resourceInputs["enableAutomaticFailover"] = args ? args.enableAutomaticFailover : undefined;
            resourceInputs["enableCassandraConnector"] = args ? args.enableCassandraConnector : undefined;
            resourceInputs["enableFreeTier"] = args ? args.enableFreeTier : undefined;
            resourceInputs["enableMultipleWriteLocations"] = args ? args.enableMultipleWriteLocations : undefined;
            resourceInputs["enablePartitionMerge"] = args ? args.enablePartitionMerge : undefined;
            resourceInputs["identity"] = args ? args.identity : undefined;
            resourceInputs["ipRules"] = args ? args.ipRules : undefined;
            resourceInputs["isVirtualNetworkFilterEnabled"] = args ? args.isVirtualNetworkFilterEnabled : undefined;
            resourceInputs["keyVaultKeyUri"] = args ? args.keyVaultKeyUri : undefined;
            resourceInputs["kind"] = (args ? args.kind : undefined) ?? "GlobalDocumentDB";
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["locations"] = args ? args.locations : undefined;
            resourceInputs["minimalTlsVersion"] = args ? args.minimalTlsVersion : undefined;
            resourceInputs["networkAclBypass"] = args ? args.networkAclBypass : undefined;
            resourceInputs["networkAclBypassResourceIds"] = args ? args.networkAclBypassResourceIds : undefined;
            resourceInputs["publicNetworkAccess"] = args ? args.publicNetworkAccess : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["restoreParameters"] = args ? args.restoreParameters : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["virtualNetworkRules"] = args ? args.virtualNetworkRules : undefined;
            resourceInputs["documentEndpoint"] = undefined /*out*/;
            resourceInputs["failoverPolicies"] = undefined /*out*/;
            resourceInputs["instanceId"] = undefined /*out*/;
            resourceInputs["keysMetadata"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["privateEndpointConnections"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["readLocations"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["writeLocations"] = undefined /*out*/;
        } else {
            resourceInputs["analyticalStorageConfiguration"] = undefined /*out*/;
            resourceInputs["apiProperties"] = undefined /*out*/;
            resourceInputs["backupPolicy"] = undefined /*out*/;
            resourceInputs["capabilities"] = undefined /*out*/;
            resourceInputs["capacity"] = undefined /*out*/;
            resourceInputs["connectorOffer"] = undefined /*out*/;
            resourceInputs["consistencyPolicy"] = undefined /*out*/;
            resourceInputs["cors"] = undefined /*out*/;
            resourceInputs["createMode"] = undefined /*out*/;
            resourceInputs["databaseAccountOfferType"] = undefined /*out*/;
            resourceInputs["defaultIdentity"] = undefined /*out*/;
            resourceInputs["disableKeyBasedMetadataWriteAccess"] = undefined /*out*/;
            resourceInputs["disableLocalAuth"] = undefined /*out*/;
            resourceInputs["documentEndpoint"] = undefined /*out*/;
            resourceInputs["enableAnalyticalStorage"] = undefined /*out*/;
            resourceInputs["enableAutomaticFailover"] = undefined /*out*/;
            resourceInputs["enableCassandraConnector"] = undefined /*out*/;
            resourceInputs["enableFreeTier"] = undefined /*out*/;
            resourceInputs["enableMultipleWriteLocations"] = undefined /*out*/;
            resourceInputs["enablePartitionMerge"] = undefined /*out*/;
            resourceInputs["failoverPolicies"] = undefined /*out*/;
            resourceInputs["identity"] = undefined /*out*/;
            resourceInputs["instanceId"] = undefined /*out*/;
            resourceInputs["ipRules"] = undefined /*out*/;
            resourceInputs["isVirtualNetworkFilterEnabled"] = undefined /*out*/;
            resourceInputs["keyVaultKeyUri"] = undefined /*out*/;
            resourceInputs["keysMetadata"] = undefined /*out*/;
            resourceInputs["kind"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["locations"] = undefined /*out*/;
            resourceInputs["minimalTlsVersion"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["networkAclBypass"] = undefined /*out*/;
            resourceInputs["networkAclBypassResourceIds"] = undefined /*out*/;
            resourceInputs["privateEndpointConnections"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["publicNetworkAccess"] = undefined /*out*/;
            resourceInputs["readLocations"] = undefined /*out*/;
            resourceInputs["restoreParameters"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["virtualNetworkRules"] = undefined /*out*/;
            resourceInputs["writeLocations"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:documentdb/v20150401:DatabaseAccount" }, { type: "azure-native:documentdb/v20150408:DatabaseAccount" }, { type: "azure-native:documentdb/v20151106:DatabaseAccount" }, { type: "azure-native:documentdb/v20160319:DatabaseAccount" }, { type: "azure-native:documentdb/v20160331:DatabaseAccount" }, { type: "azure-native:documentdb/v20190801:DatabaseAccount" }, { type: "azure-native:documentdb/v20191212:DatabaseAccount" }, { type: "azure-native:documentdb/v20200301:DatabaseAccount" }, { type: "azure-native:documentdb/v20200401:DatabaseAccount" }, { type: "azure-native:documentdb/v20200601preview:DatabaseAccount" }, { type: "azure-native:documentdb/v20200901:DatabaseAccount" }, { type: "azure-native:documentdb/v20210115:DatabaseAccount" }, { type: "azure-native:documentdb/v20210301preview:DatabaseAccount" }, { type: "azure-native:documentdb/v20210315:DatabaseAccount" }, { type: "azure-native:documentdb/v20210401preview:DatabaseAccount" }, { type: "azure-native:documentdb/v20210415:DatabaseAccount" }, { type: "azure-native:documentdb/v20210515:DatabaseAccount" }, { type: "azure-native:documentdb/v20210615:DatabaseAccount" }, { type: "azure-native:documentdb/v20210701preview:DatabaseAccount" }, { type: "azure-native:documentdb/v20211015:DatabaseAccount" }, { type: "azure-native:documentdb/v20211015preview:DatabaseAccount" }, { type: "azure-native:documentdb/v20211115preview:DatabaseAccount" }, { type: "azure-native:documentdb/v20220215preview:DatabaseAccount" }, { type: "azure-native:documentdb/v20220515:DatabaseAccount" }, { type: "azure-native:documentdb/v20220515preview:DatabaseAccount" }, { type: "azure-native:documentdb/v20220815:DatabaseAccount" }, { type: "azure-native:documentdb/v20220815preview:DatabaseAccount" }, { type: "azure-native:documentdb/v20221115:DatabaseAccount" }, { type: "azure-native:documentdb/v20221115preview:DatabaseAccount" }, { type: "azure-native:documentdb/v20230301preview:DatabaseAccount" }, { type: "azure-native:documentdb/v20230315:DatabaseAccount" }, { type: "azure-native:documentdb/v20230315preview:DatabaseAccount" }, { type: "azure-native:documentdb/v20230415:DatabaseAccount" }, { type: "azure-native:documentdb/v20230915:DatabaseAccount" }, { type: "azure-native:documentdb/v20230915preview:DatabaseAccount" }, { type: "azure-native:documentdb/v20231115:DatabaseAccount" }, { type: "azure-native:documentdb/v20231115preview:DatabaseAccount" }, { type: "azure-native:documentdb/v20240215preview:DatabaseAccount" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(DatabaseAccount.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a DatabaseAccount resource.
 */
export interface DatabaseAccountArgs {
    /**
     * Cosmos DB database account name.
     */
    accountName?: pulumi.Input<string>;
    /**
     * Analytical storage specific properties.
     */
    analyticalStorageConfiguration?: pulumi.Input<types.inputs.AnalyticalStorageConfigurationArgs>;
    /**
     * API specific properties. Currently, supported only for MongoDB API.
     */
    apiProperties?: pulumi.Input<types.inputs.ApiPropertiesArgs>;
    /**
     * The object representing the policy for taking backups on an account.
     */
    backupPolicy?: pulumi.Input<types.inputs.ContinuousModeBackupPolicyArgs | types.inputs.PeriodicModeBackupPolicyArgs>;
    /**
     * List of Cosmos DB capabilities for the account
     */
    capabilities?: pulumi.Input<pulumi.Input<types.inputs.CapabilityArgs>[]>;
    /**
     * The object that represents all properties related to capacity enforcement on an account.
     */
    capacity?: pulumi.Input<types.inputs.CapacityArgs>;
    /**
     * The cassandra connector offer type for the Cosmos DB database C* account.
     */
    connectorOffer?: pulumi.Input<string | types.enums.ConnectorOffer>;
    /**
     * The consistency policy for the Cosmos DB account.
     */
    consistencyPolicy?: pulumi.Input<types.inputs.ConsistencyPolicyArgs>;
    /**
     * The CORS policy for the Cosmos DB database account.
     */
    cors?: pulumi.Input<pulumi.Input<types.inputs.CorsPolicyArgs>[]>;
    /**
     * Enum to indicate the mode of account creation.
     */
    createMode?: pulumi.Input<string | types.enums.CreateMode>;
    /**
     * The offer type for the database
     */
    databaseAccountOfferType: pulumi.Input<types.enums.DatabaseAccountOfferType>;
    /**
     * The default identity for accessing key vault used in features like customer managed keys. The default identity needs to be explicitly set by the users. It can be "FirstPartyIdentity", "SystemAssignedIdentity" and more.
     */
    defaultIdentity?: pulumi.Input<string>;
    /**
     * Disable write operations on metadata resources (databases, containers, throughput) via account keys
     */
    disableKeyBasedMetadataWriteAccess?: pulumi.Input<boolean>;
    /**
     * Opt-out of local authentication and ensure only MSI and AAD can be used exclusively for authentication.
     */
    disableLocalAuth?: pulumi.Input<boolean>;
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
     * Flag to indicate enabling/disabling of Partition Merge feature on the account
     */
    enablePartitionMerge?: pulumi.Input<boolean>;
    /**
     * Identity for the resource.
     */
    identity?: pulumi.Input<types.inputs.ManagedServiceIdentityArgs>;
    /**
     * List of IpRules.
     */
    ipRules?: pulumi.Input<pulumi.Input<types.inputs.IpAddressOrRangeArgs>[]>;
    /**
     * Flag to indicate whether to enable/disable Virtual Network ACL rules.
     */
    isVirtualNetworkFilterEnabled?: pulumi.Input<boolean>;
    /**
     * The URI of the key vault
     */
    keyVaultKeyUri?: pulumi.Input<string>;
    /**
     * Indicates the type of database account. This can only be set at database account creation.
     */
    kind?: pulumi.Input<string | types.enums.DatabaseAccountKind>;
    /**
     * The location of the resource group to which the resource belongs.
     */
    location?: pulumi.Input<string>;
    /**
     * An array that contains the georeplication locations enabled for the Cosmos DB account.
     */
    locations: pulumi.Input<pulumi.Input<types.inputs.LocationArgs>[]>;
    /**
     * Indicates the minimum allowed Tls version. The default value is Tls 1.2. Cassandra and Mongo APIs only work with Tls 1.2.
     */
    minimalTlsVersion?: pulumi.Input<string | types.enums.MinimalTlsVersion>;
    /**
     * Indicates what services are allowed to bypass firewall checks.
     */
    networkAclBypass?: pulumi.Input<types.enums.NetworkAclBypass>;
    /**
     * An array that contains the Resource Ids for Network Acl Bypass for the Cosmos DB account.
     */
    networkAclBypassResourceIds?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Whether requests from Public Network are allowed
     */
    publicNetworkAccess?: pulumi.Input<string | types.enums.PublicNetworkAccess>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Parameters to indicate the information about the restore.
     */
    restoreParameters?: pulumi.Input<types.inputs.RestoreParametersArgs>;
    /**
     * Tags are a list of key-value pairs that describe the resource. These tags can be used in viewing and grouping this resource (across resource groups). A maximum of 15 tags can be provided for a resource. Each tag must have a key no greater than 128 characters and value no greater than 256 characters. For example, the default experience for a template type is set with "defaultExperience": "Cassandra". Current "defaultExperience" values also include "Table", "Graph", "DocumentDB", and "MongoDB".
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * List of Virtual Network ACL rules configured for the Cosmos DB account.
     */
    virtualNetworkRules?: pulumi.Input<pulumi.Input<types.inputs.VirtualNetworkRuleArgs>[]>;
}