import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * An Azure Cosmos DB database account.
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
    public static readonly __pulumiType = 'azure-native:documentdb/v20210401preview:DatabaseAccount';

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
     * API specific properties.
     */
    public /*out*/ readonly apiProperties!: pulumi.Output<types.outputs.ApiPropertiesResponse | undefined>;
    /**
     * The object representing the policy for taking backups on an account.
     */
    public /*out*/ readonly backupPolicy!: pulumi.Output<types.outputs.ContinuousModeBackupPolicyResponse | types.outputs.PeriodicModeBackupPolicyResponse | undefined>;
    /**
     * List of Cosmos DB capabilities for the account
     */
    public /*out*/ readonly capabilities!: pulumi.Output<types.outputs.CapabilityResponse[] | undefined>;
    /**
     * The cassandra connector offer type for the Cosmos DB database C* account.
     */
    public /*out*/ readonly connectorOffer!: pulumi.Output<string | undefined>;
    /**
     * The consistency policy for the Cosmos DB database account.
     */
    public /*out*/ readonly consistencyPolicy!: pulumi.Output<types.outputs.ConsistencyPolicyResponse | undefined>;
    /**
     * The CORS policy for the Cosmos DB database account.
     */
    public /*out*/ readonly cors!: pulumi.Output<types.outputs.CorsPolicyResponse[] | undefined>;
    /**
     * Enum to indicate the mode of account creation.
     */
    public /*out*/ readonly createMode!: pulumi.Output<string | undefined>;
    /**
     * The offer type for the Cosmos DB database account. Default value: Standard.
     */
    public /*out*/ readonly databaseAccountOfferType!: pulumi.Output<string>;
    /**
     * The default identity for accessing key vault used in features like customer managed keys. The default identity needs to be explicitly set by the users. It can be "FirstPartyIdentity", "SystemAssignedIdentity" and more.
     */
    public /*out*/ readonly defaultIdentity!: pulumi.Output<string | undefined>;
    /**
     * Disable write operations on metadata resources (databases, containers, throughput) via account keys
     */
    public /*out*/ readonly disableKeyBasedMetadataWriteAccess!: pulumi.Output<boolean | undefined>;
    /**
     * The connection endpoint for the Cosmos DB database account.
     */
    public /*out*/ readonly documentEndpoint!: pulumi.Output<string>;
    /**
     * Flag to indicate whether to enable storage analytics.
     */
    public /*out*/ readonly enableAnalyticalStorage!: pulumi.Output<boolean | undefined>;
    /**
     * Enables automatic failover of the write region in the rare event that the region is unavailable due to an outage. Automatic failover will result in a new write region for the account and is chosen based on the failover priorities configured for the account.
     */
    public /*out*/ readonly enableAutomaticFailover!: pulumi.Output<boolean | undefined>;
    /**
     * Enables the cassandra connector on the Cosmos DB C* account
     */
    public /*out*/ readonly enableCassandraConnector!: pulumi.Output<boolean | undefined>;
    /**
     * Flag to indicate whether Free Tier is enabled.
     */
    public /*out*/ readonly enableFreeTier!: pulumi.Output<boolean | undefined>;
    /**
     * Enables the account to write in multiple locations
     */
    public /*out*/ readonly enableMultipleWriteLocations!: pulumi.Output<boolean | undefined>;
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
    public /*out*/ readonly ipRules!: pulumi.Output<types.outputs.IpAddressOrRangeResponse[] | undefined>;
    /**
     * Flag to indicate whether to enable/disable Virtual Network ACL rules.
     */
    public /*out*/ readonly isVirtualNetworkFilterEnabled!: pulumi.Output<boolean | undefined>;
    /**
     * The URI of the key vault
     */
    public /*out*/ readonly keyVaultKeyUri!: pulumi.Output<string | undefined>;
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
    public /*out*/ readonly locations!: pulumi.Output<types.outputs.LocationResponse[]>;
    /**
     * The name of the ARM resource.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Indicates what services are allowed to bypass firewall checks.
     */
    public /*out*/ readonly networkAclBypass!: pulumi.Output<string | undefined>;
    /**
     * An array that contains the Resource Ids for Network Acl Bypass for the Cosmos DB account.
     */
    public /*out*/ readonly networkAclBypassResourceIds!: pulumi.Output<string[] | undefined>;
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
    public /*out*/ readonly publicNetworkAccess!: pulumi.Output<string | undefined>;
    /**
     * An array that contains of the read locations enabled for the Cosmos DB account.
     */
    public /*out*/ readonly readLocations!: pulumi.Output<types.outputs.LocationResponse[]>;
    /**
     * Parameters to indicate the information about the restore.
     */
    public /*out*/ readonly restoreParameters!: pulumi.Output<types.outputs.RestoreParametersResponse | undefined>;
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
    public /*out*/ readonly virtualNetworkRules!: pulumi.Output<types.outputs.VirtualNetworkRuleResponse[] | undefined>;
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
            if ((!args || args.properties === undefined) && !opts.urn) {
                throw new Error("Missing required property 'properties'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["accountName"] = args ? args.accountName : undefined;
            resourceInputs["identity"] = args ? args.identity : undefined;
            resourceInputs["kind"] = (args ? args.kind : undefined) ?? "GlobalDocumentDB";
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["properties"] = args ? args.properties : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["apiProperties"] = undefined /*out*/;
            resourceInputs["backupPolicy"] = undefined /*out*/;
            resourceInputs["capabilities"] = undefined /*out*/;
            resourceInputs["connectorOffer"] = undefined /*out*/;
            resourceInputs["consistencyPolicy"] = undefined /*out*/;
            resourceInputs["cors"] = undefined /*out*/;
            resourceInputs["createMode"] = undefined /*out*/;
            resourceInputs["databaseAccountOfferType"] = undefined /*out*/;
            resourceInputs["defaultIdentity"] = undefined /*out*/;
            resourceInputs["disableKeyBasedMetadataWriteAccess"] = undefined /*out*/;
            resourceInputs["documentEndpoint"] = undefined /*out*/;
            resourceInputs["enableAnalyticalStorage"] = undefined /*out*/;
            resourceInputs["enableAutomaticFailover"] = undefined /*out*/;
            resourceInputs["enableCassandraConnector"] = undefined /*out*/;
            resourceInputs["enableFreeTier"] = undefined /*out*/;
            resourceInputs["enableMultipleWriteLocations"] = undefined /*out*/;
            resourceInputs["failoverPolicies"] = undefined /*out*/;
            resourceInputs["instanceId"] = undefined /*out*/;
            resourceInputs["ipRules"] = undefined /*out*/;
            resourceInputs["isVirtualNetworkFilterEnabled"] = undefined /*out*/;
            resourceInputs["keyVaultKeyUri"] = undefined /*out*/;
            resourceInputs["locations"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["networkAclBypass"] = undefined /*out*/;
            resourceInputs["networkAclBypassResourceIds"] = undefined /*out*/;
            resourceInputs["privateEndpointConnections"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["publicNetworkAccess"] = undefined /*out*/;
            resourceInputs["readLocations"] = undefined /*out*/;
            resourceInputs["restoreParameters"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["virtualNetworkRules"] = undefined /*out*/;
            resourceInputs["writeLocations"] = undefined /*out*/;
        } else {
            resourceInputs["apiProperties"] = undefined /*out*/;
            resourceInputs["backupPolicy"] = undefined /*out*/;
            resourceInputs["capabilities"] = undefined /*out*/;
            resourceInputs["connectorOffer"] = undefined /*out*/;
            resourceInputs["consistencyPolicy"] = undefined /*out*/;
            resourceInputs["cors"] = undefined /*out*/;
            resourceInputs["createMode"] = undefined /*out*/;
            resourceInputs["databaseAccountOfferType"] = undefined /*out*/;
            resourceInputs["defaultIdentity"] = undefined /*out*/;
            resourceInputs["disableKeyBasedMetadataWriteAccess"] = undefined /*out*/;
            resourceInputs["documentEndpoint"] = undefined /*out*/;
            resourceInputs["enableAnalyticalStorage"] = undefined /*out*/;
            resourceInputs["enableAutomaticFailover"] = undefined /*out*/;
            resourceInputs["enableCassandraConnector"] = undefined /*out*/;
            resourceInputs["enableFreeTier"] = undefined /*out*/;
            resourceInputs["enableMultipleWriteLocations"] = undefined /*out*/;
            resourceInputs["failoverPolicies"] = undefined /*out*/;
            resourceInputs["identity"] = undefined /*out*/;
            resourceInputs["instanceId"] = undefined /*out*/;
            resourceInputs["ipRules"] = undefined /*out*/;
            resourceInputs["isVirtualNetworkFilterEnabled"] = undefined /*out*/;
            resourceInputs["keyVaultKeyUri"] = undefined /*out*/;
            resourceInputs["kind"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["locations"] = undefined /*out*/;
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
        const aliasOpts = { aliases: [{ type: "azure-native:documentdb:DatabaseAccount" }, { type: "azure-native:documentdb/v20150401:DatabaseAccount" }, { type: "azure-native:documentdb/v20150408:DatabaseAccount" }, { type: "azure-native:documentdb/v20151106:DatabaseAccount" }, { type: "azure-native:documentdb/v20160319:DatabaseAccount" }, { type: "azure-native:documentdb/v20160331:DatabaseAccount" }, { type: "azure-native:documentdb/v20190801:DatabaseAccount" }, { type: "azure-native:documentdb/v20191212:DatabaseAccount" }, { type: "azure-native:documentdb/v20200301:DatabaseAccount" }, { type: "azure-native:documentdb/v20200401:DatabaseAccount" }, { type: "azure-native:documentdb/v20200601preview:DatabaseAccount" }, { type: "azure-native:documentdb/v20200901:DatabaseAccount" }, { type: "azure-native:documentdb/v20210115:DatabaseAccount" }, { type: "azure-native:documentdb/v20210301preview:DatabaseAccount" }, { type: "azure-native:documentdb/v20210315:DatabaseAccount" }, { type: "azure-native:documentdb/v20210415:DatabaseAccount" }, { type: "azure-native:documentdb/v20210515:DatabaseAccount" }, { type: "azure-native:documentdb/v20210615:DatabaseAccount" }, { type: "azure-native:documentdb/v20210701preview:DatabaseAccount" }, { type: "azure-native:documentdb/v20211015:DatabaseAccount" }, { type: "azure-native:documentdb/v20211015preview:DatabaseAccount" }, { type: "azure-native:documentdb/v20211115preview:DatabaseAccount" }, { type: "azure-native:documentdb/v20220215preview:DatabaseAccount" }, { type: "azure-native:documentdb/v20220515:DatabaseAccount" }, { type: "azure-native:documentdb/v20220515preview:DatabaseAccount" }, { type: "azure-native:documentdb/v20220815:DatabaseAccount" }, { type: "azure-native:documentdb/v20220815preview:DatabaseAccount" }, { type: "azure-native:documentdb/v20221115:DatabaseAccount" }, { type: "azure-native:documentdb/v20221115preview:DatabaseAccount" }, { type: "azure-native:documentdb/v20230301preview:DatabaseAccount" }, { type: "azure-native:documentdb/v20230315:DatabaseAccount" }, { type: "azure-native:documentdb/v20230315preview:DatabaseAccount" }, { type: "azure-native:documentdb/v20230415:DatabaseAccount" }, { type: "azure-native:documentdb/v20230915:DatabaseAccount" }, { type: "azure-native:documentdb/v20230915preview:DatabaseAccount" }, { type: "azure-native:documentdb/v20231115:DatabaseAccount" }] };
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
     * Identity for the resource.
     */
    identity?: pulumi.Input<types.inputs.ManagedServiceIdentityArgs>;
    /**
     * Indicates the type of database account. This can only be set at database account creation.
     */
    kind?: pulumi.Input<string | types.enums.DatabaseAccountKind>;
    /**
     * The location of the resource group to which the resource belongs.
     */
    location?: pulumi.Input<string>;
    /**
     * Properties to create and update Azure Cosmos DB database accounts.
     */
    properties: pulumi.Input<types.inputs.DefaultRequestDatabaseAccountCreateUpdatePropertiesArgs | types.inputs.RestoreReqeustDatabaseAccountCreateUpdatePropertiesArgs>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Tags are a list of key-value pairs that describe the resource. These tags can be used in viewing and grouping this resource (across resource groups). A maximum of 15 tags can be provided for a resource. Each tag must have a key no greater than 128 characters and value no greater than 256 characters. For example, the default experience for a template type is set with "defaultExperience": "Cassandra". Current "defaultExperience" values also include "Table", "Graph", "DocumentDB", and "MongoDB".
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}
