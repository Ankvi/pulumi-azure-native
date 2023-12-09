import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * An Azure Cosmos DB userDefinedFunction.
 */
export class SqlResourceSqlUserDefinedFunction extends pulumi.CustomResource {
    /**
     * Get an existing SqlResourceSqlUserDefinedFunction resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): SqlResourceSqlUserDefinedFunction {
        return new SqlResourceSqlUserDefinedFunction(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:documentdb/v20231115:SqlResourceSqlUserDefinedFunction';

    /**
     * Returns true if the given object is an instance of SqlResourceSqlUserDefinedFunction.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is SqlResourceSqlUserDefinedFunction {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === SqlResourceSqlUserDefinedFunction.__pulumiType;
    }

    /**
     * The location of the resource group to which the resource belongs.
     */
    public readonly location!: pulumi.Output<string | undefined>;
    /**
     * The name of the ARM resource.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    public readonly resource!: pulumi.Output<types.outputs.SqlUserDefinedFunctionGetPropertiesResponseResource | undefined>;
    /**
     * Tags are a list of key-value pairs that describe the resource. These tags can be used in viewing and grouping this resource (across resource groups). A maximum of 15 tags can be provided for a resource. Each tag must have a key no greater than 128 characters and value no greater than 256 characters. For example, the default experience for a template type is set with "defaultExperience": "Cassandra". Current "defaultExperience" values also include "Table", "Graph", "DocumentDB", and "MongoDB".
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * The type of Azure resource.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a SqlResourceSqlUserDefinedFunction resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SqlResourceSqlUserDefinedFunctionArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.accountName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'accountName'");
            }
            if ((!args || args.containerName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'containerName'");
            }
            if ((!args || args.databaseName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'databaseName'");
            }
            if ((!args || args.resource === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resource'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["accountName"] = args ? args.accountName : undefined;
            resourceInputs["containerName"] = args ? args.containerName : undefined;
            resourceInputs["databaseName"] = args ? args.databaseName : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["options"] = args ? args.options : undefined;
            resourceInputs["resource"] = args ? args.resource : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["userDefinedFunctionName"] = args ? args.userDefinedFunctionName : undefined;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["resource"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:documentdb:SqlResourceSqlUserDefinedFunction" }, { type: "azure-native:documentdb/v20190801:SqlResourceSqlUserDefinedFunction" }, { type: "azure-native:documentdb/v20191212:SqlResourceSqlUserDefinedFunction" }, { type: "azure-native:documentdb/v20200301:SqlResourceSqlUserDefinedFunction" }, { type: "azure-native:documentdb/v20200401:SqlResourceSqlUserDefinedFunction" }, { type: "azure-native:documentdb/v20200601preview:SqlResourceSqlUserDefinedFunction" }, { type: "azure-native:documentdb/v20200901:SqlResourceSqlUserDefinedFunction" }, { type: "azure-native:documentdb/v20210115:SqlResourceSqlUserDefinedFunction" }, { type: "azure-native:documentdb/v20210301preview:SqlResourceSqlUserDefinedFunction" }, { type: "azure-native:documentdb/v20210315:SqlResourceSqlUserDefinedFunction" }, { type: "azure-native:documentdb/v20210401preview:SqlResourceSqlUserDefinedFunction" }, { type: "azure-native:documentdb/v20210415:SqlResourceSqlUserDefinedFunction" }, { type: "azure-native:documentdb/v20210515:SqlResourceSqlUserDefinedFunction" }, { type: "azure-native:documentdb/v20210615:SqlResourceSqlUserDefinedFunction" }, { type: "azure-native:documentdb/v20210701preview:SqlResourceSqlUserDefinedFunction" }, { type: "azure-native:documentdb/v20211015:SqlResourceSqlUserDefinedFunction" }, { type: "azure-native:documentdb/v20211015preview:SqlResourceSqlUserDefinedFunction" }, { type: "azure-native:documentdb/v20211115preview:SqlResourceSqlUserDefinedFunction" }, { type: "azure-native:documentdb/v20220215preview:SqlResourceSqlUserDefinedFunction" }, { type: "azure-native:documentdb/v20220515:SqlResourceSqlUserDefinedFunction" }, { type: "azure-native:documentdb/v20220515preview:SqlResourceSqlUserDefinedFunction" }, { type: "azure-native:documentdb/v20220815:SqlResourceSqlUserDefinedFunction" }, { type: "azure-native:documentdb/v20220815preview:SqlResourceSqlUserDefinedFunction" }, { type: "azure-native:documentdb/v20221115:SqlResourceSqlUserDefinedFunction" }, { type: "azure-native:documentdb/v20221115preview:SqlResourceSqlUserDefinedFunction" }, { type: "azure-native:documentdb/v20230301preview:SqlResourceSqlUserDefinedFunction" }, { type: "azure-native:documentdb/v20230315:SqlResourceSqlUserDefinedFunction" }, { type: "azure-native:documentdb/v20230315preview:SqlResourceSqlUserDefinedFunction" }, { type: "azure-native:documentdb/v20230415:SqlResourceSqlUserDefinedFunction" }, { type: "azure-native:documentdb/v20230915:SqlResourceSqlUserDefinedFunction" }, { type: "azure-native:documentdb/v20230915preview:SqlResourceSqlUserDefinedFunction" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(SqlResourceSqlUserDefinedFunction.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a SqlResourceSqlUserDefinedFunction resource.
 */
export interface SqlResourceSqlUserDefinedFunctionArgs {
    /**
     * Cosmos DB database account name.
     */
    accountName: pulumi.Input<string>;
    /**
     * Cosmos DB container name.
     */
    containerName: pulumi.Input<string>;
    /**
     * Cosmos DB database name.
     */
    databaseName: pulumi.Input<string>;
    /**
     * The location of the resource group to which the resource belongs.
     */
    location?: pulumi.Input<string>;
    /**
     * A key-value pair of options to be applied for the request. This corresponds to the headers sent with the request.
     */
    options?: pulumi.Input<types.inputs.CreateUpdateOptionsArgs>;
    /**
     * The standard JSON format of a userDefinedFunction
     */
    resource: pulumi.Input<types.inputs.SqlUserDefinedFunctionResourceArgs>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Tags are a list of key-value pairs that describe the resource. These tags can be used in viewing and grouping this resource (across resource groups). A maximum of 15 tags can be provided for a resource. Each tag must have a key no greater than 128 characters and value no greater than 256 characters. For example, the default experience for a template type is set with "defaultExperience": "Cassandra". Current "defaultExperience" values also include "Table", "Graph", "DocumentDB", and "MongoDB".
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Cosmos DB userDefinedFunction name.
     */
    userDefinedFunctionName?: pulumi.Input<string>;
}
