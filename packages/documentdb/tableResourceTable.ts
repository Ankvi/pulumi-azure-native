import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * An Azure Cosmos DB Table.
 *
 * Uses Azure REST API version 2023-04-15. In version 1.x of the Azure Native provider, it used API version 2021-03-15.
 *
 * Other available API versions: 2023-03-15-preview, 2023-09-15, 2023-09-15-preview, 2023-11-15, 2023-11-15-preview, 2024-02-15-preview, 2024-05-15, 2024-05-15-preview, 2024-08-15, 2024-09-01-preview, 2024-11-15, 2024-12-01-preview.
 */
export class TableResourceTable extends pulumi.CustomResource {
    /**
     * Get an existing TableResourceTable resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): TableResourceTable {
        return new TableResourceTable(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:documentdb:TableResourceTable';

    /**
     * Returns true if the given object is an instance of TableResourceTable.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is TableResourceTable {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === TableResourceTable.__pulumiType;
    }

    /**
     * The location of the resource group to which the resource belongs.
     */
    public readonly location!: pulumi.Output<string | undefined>;
    /**
     * The name of the ARM resource.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    public readonly options!: pulumi.Output<types.outputs.TableGetPropertiesResponseOptions | undefined>;
    public readonly resource!: pulumi.Output<types.outputs.TableGetPropertiesResponseResource | undefined>;
    /**
     * Tags are a list of key-value pairs that describe the resource. These tags can be used in viewing and grouping this resource (across resource groups). A maximum of 15 tags can be provided for a resource. Each tag must have a key no greater than 128 characters and value no greater than 256 characters. For example, the default experience for a template type is set with "defaultExperience": "Cassandra". Current "defaultExperience" values also include "Table", "Graph", "DocumentDB", and "MongoDB".
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * The type of Azure resource.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a TableResourceTable resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: TableResourceTableArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.accountName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'accountName'");
            }
            if ((!args || args.resource === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resource'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["accountName"] = args ? args.accountName : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["options"] = args ? args.options : undefined;
            resourceInputs["resource"] = args ? args.resource : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["tableName"] = args ? args.tableName : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["options"] = undefined /*out*/;
            resourceInputs["resource"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:documentdb/v20150401:TableResourceTable" }, { type: "azure-native:documentdb/v20150408:TableResourceTable" }, { type: "azure-native:documentdb/v20151106:TableResourceTable" }, { type: "azure-native:documentdb/v20160319:TableResourceTable" }, { type: "azure-native:documentdb/v20160331:TableResourceTable" }, { type: "azure-native:documentdb/v20190801:TableResourceTable" }, { type: "azure-native:documentdb/v20191212:TableResourceTable" }, { type: "azure-native:documentdb/v20200301:TableResourceTable" }, { type: "azure-native:documentdb/v20200401:TableResourceTable" }, { type: "azure-native:documentdb/v20200601preview:TableResourceTable" }, { type: "azure-native:documentdb/v20200901:TableResourceTable" }, { type: "azure-native:documentdb/v20210115:TableResourceTable" }, { type: "azure-native:documentdb/v20210301preview:TableResourceTable" }, { type: "azure-native:documentdb/v20210315:TableResourceTable" }, { type: "azure-native:documentdb/v20210401preview:TableResourceTable" }, { type: "azure-native:documentdb/v20210415:TableResourceTable" }, { type: "azure-native:documentdb/v20210515:TableResourceTable" }, { type: "azure-native:documentdb/v20210615:TableResourceTable" }, { type: "azure-native:documentdb/v20210701preview:TableResourceTable" }, { type: "azure-native:documentdb/v20211015:TableResourceTable" }, { type: "azure-native:documentdb/v20211015preview:TableResourceTable" }, { type: "azure-native:documentdb/v20211115preview:TableResourceTable" }, { type: "azure-native:documentdb/v20220215preview:TableResourceTable" }, { type: "azure-native:documentdb/v20220515:TableResourceTable" }, { type: "azure-native:documentdb/v20220515preview:TableResourceTable" }, { type: "azure-native:documentdb/v20220815:TableResourceTable" }, { type: "azure-native:documentdb/v20220815preview:TableResourceTable" }, { type: "azure-native:documentdb/v20221115:TableResourceTable" }, { type: "azure-native:documentdb/v20221115preview:TableResourceTable" }, { type: "azure-native:documentdb/v20230301preview:TableResourceTable" }, { type: "azure-native:documentdb/v20230315:TableResourceTable" }, { type: "azure-native:documentdb/v20230315preview:TableResourceTable" }, { type: "azure-native:documentdb/v20230415:TableResourceTable" }, { type: "azure-native:documentdb/v20230915:TableResourceTable" }, { type: "azure-native:documentdb/v20230915preview:TableResourceTable" }, { type: "azure-native:documentdb/v20231115:TableResourceTable" }, { type: "azure-native:documentdb/v20231115preview:TableResourceTable" }, { type: "azure-native:documentdb/v20240215preview:TableResourceTable" }, { type: "azure-native:documentdb/v20240515:TableResourceTable" }, { type: "azure-native:documentdb/v20240515preview:TableResourceTable" }, { type: "azure-native:documentdb/v20240815:TableResourceTable" }, { type: "azure-native:documentdb/v20240901preview:TableResourceTable" }, { type: "azure-native:documentdb/v20241115:TableResourceTable" }, { type: "azure-native:documentdb/v20241201preview:TableResourceTable" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(TableResourceTable.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a TableResourceTable resource.
 */
export interface TableResourceTableArgs {
    /**
     * Cosmos DB database account name.
     */
    accountName: pulumi.Input<string>;
    /**
     * The location of the resource group to which the resource belongs.
     */
    location?: pulumi.Input<string>;
    /**
     * A key-value pair of options to be applied for the request. This corresponds to the headers sent with the request.
     */
    options?: pulumi.Input<types.inputs.CreateUpdateOptionsArgs>;
    /**
     * The standard JSON format of a Table
     */
    resource: pulumi.Input<types.inputs.TableResourceArgs>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Cosmos DB table name.
     */
    tableName?: pulumi.Input<string>;
    /**
     * Tags are a list of key-value pairs that describe the resource. These tags can be used in viewing and grouping this resource (across resource groups). A maximum of 15 tags can be provided for a resource. Each tag must have a key no greater than 128 characters and value no greater than 256 characters. For example, the default experience for a template type is set with "defaultExperience": "Cassandra". Current "defaultExperience" values also include "Table", "Graph", "DocumentDB", and "MongoDB".
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}