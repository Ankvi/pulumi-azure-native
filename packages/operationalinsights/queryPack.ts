import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * An Log Analytics QueryPack definition.
 *
 * Uses Azure REST API version 2019-09-01. In version 1.x of the Azure Native provider, it used API version 2019-09-01.
 *
 * Other available API versions: 2019-09-01-preview, 2023-09-01, 2025-02-01.
 */
export class QueryPack extends pulumi.CustomResource {
    /**
     * Get an existing QueryPack resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): QueryPack {
        return new QueryPack(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:operationalinsights:QueryPack';

    /**
     * Returns true if the given object is an instance of QueryPack.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is QueryPack {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === QueryPack.__pulumiType;
    }

    /**
     * Resource location
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * Azure resource name
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Current state of this QueryPack: whether or not is has been provisioned within the resource group it is defined. Users cannot change this value but are able to read from it. Values will include Succeeded, Deploying, Canceled, and Failed.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * The unique ID of your application. This field cannot be changed.
     */
    public /*out*/ readonly queryPackId!: pulumi.Output<string>;
    /**
     * Resource tags
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Creation Date for the Log Analytics QueryPack, in ISO 8601 format.
     */
    public /*out*/ readonly timeCreated!: pulumi.Output<string>;
    /**
     * Last modified date of the Log Analytics QueryPack, in ISO 8601 format.
     */
    public /*out*/ readonly timeModified!: pulumi.Output<string>;
    /**
     * Azure resource type
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a QueryPack resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: QueryPackArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["queryPackName"] = args ? args.queryPackName : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["queryPackId"] = undefined /*out*/;
            resourceInputs["timeCreated"] = undefined /*out*/;
            resourceInputs["timeModified"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["queryPackId"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["timeCreated"] = undefined /*out*/;
            resourceInputs["timeModified"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:operationalinsights/v20190901:QueryPack" }, { type: "azure-native:operationalinsights/v20190901preview:QueryPack" }, { type: "azure-native:operationalinsights/v20230901:QueryPack" }, { type: "azure-native:operationalinsights/v20250201:QueryPack" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(QueryPack.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a QueryPack resource.
 */
export interface QueryPackArgs {
    /**
     * Resource location
     */
    location?: pulumi.Input<string>;
    /**
     * The name of the Log Analytics QueryPack resource.
     */
    queryPackName?: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Resource tags
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}