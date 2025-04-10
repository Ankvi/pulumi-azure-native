import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Graph Query entity definition.
 *
 * Uses Azure REST API version 2020-04-01-preview. In version 1.x of the Azure Native provider, it used API version 2018-09-01-preview.
 *
 * Other available API versions: 2018-09-01-preview, 2019-04-01, 2021-03-01, 2022-10-01, 2024-04-01.
 */
export class GraphQuery extends pulumi.CustomResource {
    /**
     * Get an existing GraphQuery resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): GraphQuery {
        return new GraphQuery(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:resourcegraph:GraphQuery';

    /**
     * Returns true if the given object is an instance of GraphQuery.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is GraphQuery {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === GraphQuery.__pulumiType;
    }

    /**
     * The description of a graph query.
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * This will be used to handle Optimistic Concurrency.
     */
    public /*out*/ readonly etag!: pulumi.Output<string | undefined>;
    /**
     * The location of the resource
     */
    public /*out*/ readonly location!: pulumi.Output<string>;
    /**
     * Azure resource name. This is GUID value. The display name should be assigned within properties field.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * KQL query that will be graph.
     */
    public readonly query!: pulumi.Output<string>;
    /**
     * Enum indicating a type of graph query.
     */
    public /*out*/ readonly resultKind!: pulumi.Output<string>;
    /**
     * Metadata pertaining to creation and last modification of the resource.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * Resource tags
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Date and time in UTC of the last modification that was made to this graph query definition.
     */
    public /*out*/ readonly timeModified!: pulumi.Output<string>;
    /**
     * Azure resource type
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a GraphQuery resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: GraphQueryArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.query === undefined) && !opts.urn) {
                throw new Error("Missing required property 'query'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["query"] = args ? args.query : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["resourceName"] = args ? args.resourceName : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["resultKind"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["timeModified"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["description"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["query"] = undefined /*out*/;
            resourceInputs["resultKind"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["timeModified"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:resourcegraph/v20180901preview:GraphQuery" }, { type: "azure-native:resourcegraph/v20190401:GraphQuery" }, { type: "azure-native:resourcegraph/v20200401preview:GraphQuery" }, { type: "azure-native:resourcegraph/v20210301:GraphQuery" }, { type: "azure-native:resourcegraph/v20221001:GraphQuery" }, { type: "azure-native:resourcegraph/v20240401:GraphQuery" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(GraphQuery.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a GraphQuery resource.
 */
export interface GraphQueryArgs {
    /**
     * The description of a graph query.
     */
    description?: pulumi.Input<string>;
    /**
     * KQL query that will be graph.
     */
    query: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the Graph Query resource.
     */
    resourceName?: pulumi.Input<string>;
    /**
     * Resource tags
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}