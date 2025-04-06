import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * An Azure Cosmos DB Cassandra keyspace.
 *
 * Uses Azure REST API version 2016-03-31.
 *
 * Other available API versions: 2015-04-01, 2015-04-08, 2015-11-06, 2016-03-19. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native cosmosdb [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export class DatabaseAccountCassandraKeyspace extends pulumi.CustomResource {
    /**
     * Get an existing DatabaseAccountCassandraKeyspace resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): DatabaseAccountCassandraKeyspace {
        return new DatabaseAccountCassandraKeyspace(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:cosmosdb:DatabaseAccountCassandraKeyspace';

    /**
     * Returns true if the given object is an instance of DatabaseAccountCassandraKeyspace.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is DatabaseAccountCassandraKeyspace {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === DatabaseAccountCassandraKeyspace.__pulumiType;
    }

    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * The location of the resource group to which the resource belongs.
     */
    public /*out*/ readonly location!: pulumi.Output<string | undefined>;
    /**
     * The name of the database account.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Tags are a list of key-value pairs that describe the resource. These tags can be used in viewing and grouping this resource (across resource groups). A maximum of 15 tags can be provided for a resource. Each tag must have a key no greater than 128 characters and value no greater than 256 characters. For example, the default experience for a template type is set with "defaultExperience": "Cassandra". Current "defaultExperience" values also include "Table", "Graph", "DocumentDB", and "MongoDB".
     */
    public /*out*/ readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * The type of Azure resource.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a DatabaseAccountCassandraKeyspace resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DatabaseAccountCassandraKeyspaceArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.accountName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'accountName'");
            }
            if ((!args || args.options === undefined) && !opts.urn) {
                throw new Error("Missing required property 'options'");
            }
            if ((!args || args.resource === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resource'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["accountName"] = args ? args.accountName : undefined;
            resourceInputs["keyspaceName"] = args ? args.keyspaceName : undefined;
            resourceInputs["options"] = args ? args.options : undefined;
            resourceInputs["resource"] = args ? args.resource : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:cosmosdb/v20150401:DatabaseAccountCassandraKeyspace" }, { type: "azure-native:cosmosdb/v20150408:DatabaseAccountCassandraKeyspace" }, { type: "azure-native:cosmosdb/v20151106:DatabaseAccountCassandraKeyspace" }, { type: "azure-native:cosmosdb/v20160319:DatabaseAccountCassandraKeyspace" }, { type: "azure-native:cosmosdb/v20160331:DatabaseAccountCassandraKeyspace" }, { type: "azure-native:cosmosdb/v20190801:DatabaseAccountCassandraKeyspace" }, { type: "azure-native:cosmosdb/v20191212:DatabaseAccountCassandraKeyspace" }, { type: "azure-native:cosmosdb/v20200301:DatabaseAccountCassandraKeyspace" }, { type: "azure-native:cosmosdb/v20200401:DatabaseAccountCassandraKeyspace" }, { type: "azure-native:cosmosdb/v20200601preview:DatabaseAccountCassandraKeyspace" }, { type: "azure-native:cosmosdb/v20200901:DatabaseAccountCassandraKeyspace" }, { type: "azure-native:cosmosdb/v20210115:DatabaseAccountCassandraKeyspace" }, { type: "azure-native:cosmosdb/v20210301preview:DatabaseAccountCassandraKeyspace" }, { type: "azure-native:cosmosdb/v20210315:DatabaseAccountCassandraKeyspace" }, { type: "azure-native:cosmosdb/v20210401preview:DatabaseAccountCassandraKeyspace" }, { type: "azure-native:cosmosdb/v20210415:DatabaseAccountCassandraKeyspace" }, { type: "azure-native:cosmosdb/v20210515:DatabaseAccountCassandraKeyspace" }, { type: "azure-native:cosmosdb/v20210615:DatabaseAccountCassandraKeyspace" }, { type: "azure-native:cosmosdb/v20210701preview:DatabaseAccountCassandraKeyspace" }, { type: "azure-native:cosmosdb/v20211015:DatabaseAccountCassandraKeyspace" }, { type: "azure-native:cosmosdb/v20211015preview:DatabaseAccountCassandraKeyspace" }, { type: "azure-native:cosmosdb/v20211115preview:DatabaseAccountCassandraKeyspace" }, { type: "azure-native:cosmosdb/v20220215preview:DatabaseAccountCassandraKeyspace" }, { type: "azure-native:cosmosdb/v20220515:DatabaseAccountCassandraKeyspace" }, { type: "azure-native:cosmosdb/v20220515preview:DatabaseAccountCassandraKeyspace" }, { type: "azure-native:cosmosdb/v20220815:DatabaseAccountCassandraKeyspace" }, { type: "azure-native:cosmosdb/v20220815preview:DatabaseAccountCassandraKeyspace" }, { type: "azure-native:cosmosdb/v20221115:DatabaseAccountCassandraKeyspace" }, { type: "azure-native:cosmosdb/v20221115preview:DatabaseAccountCassandraKeyspace" }, { type: "azure-native:cosmosdb/v20230301preview:DatabaseAccountCassandraKeyspace" }, { type: "azure-native:cosmosdb/v20230315:DatabaseAccountCassandraKeyspace" }, { type: "azure-native:cosmosdb/v20230315preview:DatabaseAccountCassandraKeyspace" }, { type: "azure-native:cosmosdb/v20230415:DatabaseAccountCassandraKeyspace" }, { type: "azure-native:cosmosdb/v20230915:DatabaseAccountCassandraKeyspace" }, { type: "azure-native:cosmosdb/v20230915preview:DatabaseAccountCassandraKeyspace" }, { type: "azure-native:cosmosdb/v20231115:DatabaseAccountCassandraKeyspace" }, { type: "azure-native:cosmosdb/v20231115preview:DatabaseAccountCassandraKeyspace" }, { type: "azure-native:cosmosdb/v20240215preview:DatabaseAccountCassandraKeyspace" }, { type: "azure-native:cosmosdb/v20240515:DatabaseAccountCassandraKeyspace" }, { type: "azure-native:cosmosdb/v20240515preview:DatabaseAccountCassandraKeyspace" }, { type: "azure-native:cosmosdb/v20240815:DatabaseAccountCassandraKeyspace" }, { type: "azure-native:cosmosdb/v20240901preview:DatabaseAccountCassandraKeyspace" }, { type: "azure-native:cosmosdb/v20241115:DatabaseAccountCassandraKeyspace" }, { type: "azure-native:cosmosdb/v20241201preview:DatabaseAccountCassandraKeyspace" }, { type: "azure-native:documentdb/v20230315preview:CassandraResourceCassandraKeyspace" }, { type: "azure-native:documentdb/v20230415:CassandraResourceCassandraKeyspace" }, { type: "azure-native:documentdb/v20230915:CassandraResourceCassandraKeyspace" }, { type: "azure-native:documentdb/v20230915preview:CassandraResourceCassandraKeyspace" }, { type: "azure-native:documentdb/v20231115:CassandraResourceCassandraKeyspace" }, { type: "azure-native:documentdb/v20231115preview:CassandraResourceCassandraKeyspace" }, { type: "azure-native:documentdb/v20240215preview:CassandraResourceCassandraKeyspace" }, { type: "azure-native:documentdb/v20240515:CassandraResourceCassandraKeyspace" }, { type: "azure-native:documentdb/v20240515preview:CassandraResourceCassandraKeyspace" }, { type: "azure-native:documentdb/v20240815:CassandraResourceCassandraKeyspace" }, { type: "azure-native:documentdb/v20240901preview:CassandraResourceCassandraKeyspace" }, { type: "azure-native:documentdb/v20241115:CassandraResourceCassandraKeyspace" }, { type: "azure-native:documentdb/v20241201preview:CassandraResourceCassandraKeyspace" }, { type: "azure-native:documentdb:CassandraResourceCassandraKeyspace" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(DatabaseAccountCassandraKeyspace.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a DatabaseAccountCassandraKeyspace resource.
 */
export interface DatabaseAccountCassandraKeyspaceArgs {
    /**
     * Cosmos DB database account name.
     */
    accountName: pulumi.Input<string>;
    /**
     * Cosmos DB keyspace name.
     */
    keyspaceName?: pulumi.Input<string>;
    /**
     * A key-value pair of options to be applied for the request. This corresponds to the headers sent with the request.
     */
    options: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * The standard JSON format of a Cassandra keyspace
     */
    resource: pulumi.Input<types.inputs.CassandraKeyspaceResourceArgs>;
    /**
     * Name of an Azure resource group.
     */
    resourceGroupName: pulumi.Input<string>;
}