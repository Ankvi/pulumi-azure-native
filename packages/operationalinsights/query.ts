import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * A Log Analytics QueryPack-Query definition.
 * Azure REST API version: 2019-09-01. Prior API version in Azure Native 1.x: 2019-09-01.
 *
 * Other available API versions: 2019-09-01-preview.
 */
export class Query extends pulumi.CustomResource {
    /**
     * Get an existing Query resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Query {
        return new Query(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:operationalinsights:Query';

    /**
     * Returns true if the given object is an instance of Query.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Query {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Query.__pulumiType;
    }

    /**
     * Object Id of user creating the query.
     */
    public /*out*/ readonly author!: pulumi.Output<string>;
    /**
     * Body of the query.
     */
    public readonly body!: pulumi.Output<string>;
    /**
     * Description of the query.
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * Unique display name for your query within the Query Pack.
     */
    public readonly displayName!: pulumi.Output<string>;
    /**
     * Azure resource name
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Additional properties that can be set for the query.
     */
    public readonly properties!: pulumi.Output<any>;
    /**
     * The related metadata items for the function.
     */
    public readonly related!: pulumi.Output<types.outputs.LogAnalyticsQueryPackQueryPropertiesResponseRelated | undefined>;
    /**
     * Read only system data
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * Tags associated with the query.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string[]} | undefined>;
    /**
     * Creation Date for the Log Analytics Query, in ISO 8601 format.
     */
    public /*out*/ readonly timeCreated!: pulumi.Output<string>;
    /**
     * Last modified date of the Log Analytics Query, in ISO 8601 format.
     */
    public /*out*/ readonly timeModified!: pulumi.Output<string>;
    /**
     * Azure resource type
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a Query resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: QueryArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.body === undefined) && !opts.urn) {
                throw new Error("Missing required property 'body'");
            }
            if ((!args || args.displayName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'displayName'");
            }
            if ((!args || args.queryPackName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'queryPackName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["body"] = args ? args.body : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["displayName"] = args ? args.displayName : undefined;
            resourceInputs["id"] = args ? args.id : undefined;
            resourceInputs["properties"] = args ? args.properties : undefined;
            resourceInputs["queryPackName"] = args ? args.queryPackName : undefined;
            resourceInputs["related"] = args ? args.related : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["author"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["timeCreated"] = undefined /*out*/;
            resourceInputs["timeModified"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["author"] = undefined /*out*/;
            resourceInputs["body"] = undefined /*out*/;
            resourceInputs["description"] = undefined /*out*/;
            resourceInputs["displayName"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["properties"] = undefined /*out*/;
            resourceInputs["related"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["timeCreated"] = undefined /*out*/;
            resourceInputs["timeModified"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:operationalinsights/v20190901:Query" }, { type: "azure-native:operationalinsights/v20190901preview:Query" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(Query.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a Query resource.
 */
export interface QueryArgs {
    /**
     * Body of the query.
     */
    body: pulumi.Input<string>;
    /**
     * Description of the query.
     */
    description?: pulumi.Input<string>;
    /**
     * Unique display name for your query within the Query Pack.
     */
    displayName: pulumi.Input<string>;
    /**
     * The id of a specific query defined in the Log Analytics QueryPack
     */
    id?: pulumi.Input<string>;
    /**
     * Additional properties that can be set for the query.
     */
    properties?: any;
    /**
     * The name of the Log Analytics QueryPack resource.
     */
    queryPackName: pulumi.Input<string>;
    /**
     * The related metadata items for the function.
     */
    related?: pulumi.Input<types.inputs.LogAnalyticsQueryPackQueryPropertiesRelatedArgs>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Tags associated with the query.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<pulumi.Input<string>[]>}>;
}
