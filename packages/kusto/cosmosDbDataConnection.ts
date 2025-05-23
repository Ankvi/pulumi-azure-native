import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Class representing a CosmosDb data connection.
 *
 * Uses Azure REST API version 2024-04-13. In version 2.x of the Azure Native provider, it used API version 2022-12-29.
 */
export class CosmosDbDataConnection extends pulumi.CustomResource {
    /**
     * Get an existing CosmosDbDataConnection resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): CosmosDbDataConnection {
        return new CosmosDbDataConnection(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:kusto:CosmosDbDataConnection';

    /**
     * Returns true if the given object is an instance of CosmosDbDataConnection.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is CosmosDbDataConnection {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === CosmosDbDataConnection.__pulumiType;
    }

    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * The resource ID of the Cosmos DB account used to create the data connection.
     */
    public readonly cosmosDbAccountResourceId!: pulumi.Output<string>;
    /**
     * The name of an existing container in the Cosmos DB database.
     */
    public readonly cosmosDbContainer!: pulumi.Output<string>;
    /**
     * The name of an existing database in the Cosmos DB account.
     */
    public readonly cosmosDbDatabase!: pulumi.Output<string>;
    /**
     * Kind of the endpoint for the data connection
     * Expected value is 'CosmosDb'.
     */
    public readonly kind!: pulumi.Output<"CosmosDb">;
    /**
     * Resource location.
     */
    public readonly location!: pulumi.Output<string | undefined>;
    /**
     * The object ID of the managed identity resource.
     */
    public /*out*/ readonly managedIdentityObjectId!: pulumi.Output<string>;
    /**
     * The resource ID of a managed system or user-assigned identity. The identity is used to authenticate with Cosmos DB.
     */
    public readonly managedIdentityResourceId!: pulumi.Output<string>;
    /**
     * The name of an existing mapping rule to use when ingesting the retrieved data.
     */
    public readonly mappingRuleName!: pulumi.Output<string | undefined>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The provisioned state of the resource.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * Optional. If defined, the data connection retrieves Cosmos DB documents created or updated after the specified retrieval start date.
     */
    public readonly retrievalStartDate!: pulumi.Output<string | undefined>;
    /**
     * The case-sensitive name of the existing target table in your cluster. Retrieved data is ingested into this table.
     */
    public readonly tableName!: pulumi.Output<string>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a CosmosDbDataConnection resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: CosmosDbDataConnectionArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.clusterName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'clusterName'");
            }
            if ((!args || args.cosmosDbAccountResourceId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'cosmosDbAccountResourceId'");
            }
            if ((!args || args.cosmosDbContainer === undefined) && !opts.urn) {
                throw new Error("Missing required property 'cosmosDbContainer'");
            }
            if ((!args || args.cosmosDbDatabase === undefined) && !opts.urn) {
                throw new Error("Missing required property 'cosmosDbDatabase'");
            }
            if ((!args || args.databaseName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'databaseName'");
            }
            if ((!args || args.kind === undefined) && !opts.urn) {
                throw new Error("Missing required property 'kind'");
            }
            if ((!args || args.managedIdentityResourceId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'managedIdentityResourceId'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.tableName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'tableName'");
            }
            resourceInputs["clusterName"] = args ? args.clusterName : undefined;
            resourceInputs["cosmosDbAccountResourceId"] = args ? args.cosmosDbAccountResourceId : undefined;
            resourceInputs["cosmosDbContainer"] = args ? args.cosmosDbContainer : undefined;
            resourceInputs["cosmosDbDatabase"] = args ? args.cosmosDbDatabase : undefined;
            resourceInputs["dataConnectionName"] = args ? args.dataConnectionName : undefined;
            resourceInputs["databaseName"] = args ? args.databaseName : undefined;
            resourceInputs["kind"] = "CosmosDb";
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["managedIdentityResourceId"] = args ? args.managedIdentityResourceId : undefined;
            resourceInputs["mappingRuleName"] = args ? args.mappingRuleName : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["retrievalStartDate"] = args ? args.retrievalStartDate : undefined;
            resourceInputs["tableName"] = args ? args.tableName : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["managedIdentityObjectId"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["cosmosDbAccountResourceId"] = undefined /*out*/;
            resourceInputs["cosmosDbContainer"] = undefined /*out*/;
            resourceInputs["cosmosDbDatabase"] = undefined /*out*/;
            resourceInputs["kind"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["managedIdentityObjectId"] = undefined /*out*/;
            resourceInputs["managedIdentityResourceId"] = undefined /*out*/;
            resourceInputs["mappingRuleName"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["retrievalStartDate"] = undefined /*out*/;
            resourceInputs["tableName"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:kusto/v20190121:CosmosDbDataConnection" }, { type: "azure-native:kusto/v20190515:CosmosDbDataConnection" }, { type: "azure-native:kusto/v20190907:CosmosDbDataConnection" }, { type: "azure-native:kusto/v20191109:CosmosDbDataConnection" }, { type: "azure-native:kusto/v20200215:CosmosDbDataConnection" }, { type: "azure-native:kusto/v20200215:EventGridDataConnection" }, { type: "azure-native:kusto/v20200614:CosmosDbDataConnection" }, { type: "azure-native:kusto/v20200918:CosmosDbDataConnection" }, { type: "azure-native:kusto/v20210101:CosmosDbDataConnection" }, { type: "azure-native:kusto/v20210827:CosmosDbDataConnection" }, { type: "azure-native:kusto/v20220201:CosmosDbDataConnection" }, { type: "azure-native:kusto/v20220707:CosmosDbDataConnection" }, { type: "azure-native:kusto/v20221111:CosmosDbDataConnection" }, { type: "azure-native:kusto/v20221229:CosmosDbDataConnection" }, { type: "azure-native:kusto/v20221229:EventGridDataConnection" }, { type: "azure-native:kusto/v20221229:EventHubDataConnection" }, { type: "azure-native:kusto/v20221229:IotHubDataConnection" }, { type: "azure-native:kusto/v20230502:CosmosDbDataConnection" }, { type: "azure-native:kusto/v20230502:EventGridDataConnection" }, { type: "azure-native:kusto/v20230502:EventHubDataConnection" }, { type: "azure-native:kusto/v20230502:IotHubDataConnection" }, { type: "azure-native:kusto/v20230815:CosmosDbDataConnection" }, { type: "azure-native:kusto/v20230815:EventGridDataConnection" }, { type: "azure-native:kusto/v20230815:EventHubDataConnection" }, { type: "azure-native:kusto/v20230815:IotHubDataConnection" }, { type: "azure-native:kusto/v20240413:CosmosDbDataConnection" }, { type: "azure-native:kusto/v20240413:EventGridDataConnection" }, { type: "azure-native:kusto/v20240413:EventHubDataConnection" }, { type: "azure-native:kusto/v20240413:IotHubDataConnection" }, { type: "azure-native:kusto:EventGridDataConnection" }, { type: "azure-native:kusto:EventHubDataConnection" }, { type: "azure-native:kusto:IotHubDataConnection" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(CosmosDbDataConnection.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a CosmosDbDataConnection resource.
 */
export interface CosmosDbDataConnectionArgs {
    /**
     * The name of the Kusto cluster.
     */
    clusterName: pulumi.Input<string>;
    /**
     * The resource ID of the Cosmos DB account used to create the data connection.
     */
    cosmosDbAccountResourceId: pulumi.Input<string>;
    /**
     * The name of an existing container in the Cosmos DB database.
     */
    cosmosDbContainer: pulumi.Input<string>;
    /**
     * The name of an existing database in the Cosmos DB account.
     */
    cosmosDbDatabase: pulumi.Input<string>;
    /**
     * The name of the data connection.
     */
    dataConnectionName?: pulumi.Input<string>;
    /**
     * The name of the database in the Kusto cluster.
     */
    databaseName: pulumi.Input<string>;
    /**
     * Kind of the endpoint for the data connection
     * Expected value is 'CosmosDb'.
     */
    kind: pulumi.Input<"CosmosDb">;
    /**
     * Resource location.
     */
    location?: pulumi.Input<string>;
    /**
     * The resource ID of a managed system or user-assigned identity. The identity is used to authenticate with Cosmos DB.
     */
    managedIdentityResourceId: pulumi.Input<string>;
    /**
     * The name of an existing mapping rule to use when ingesting the retrieved data.
     */
    mappingRuleName?: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Optional. If defined, the data connection retrieves Cosmos DB documents created or updated after the specified retrieval start date.
     */
    retrievalStartDate?: pulumi.Input<string>;
    /**
     * The case-sensitive name of the existing target table in your cluster. Retrieved data is ingested into this table.
     */
    tableName: pulumi.Input<string>;
}