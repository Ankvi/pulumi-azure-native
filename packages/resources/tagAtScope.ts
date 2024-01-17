import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Wrapper resource for tags API requests and responses.
 * Azure REST API version: 2022-09-01. Prior API version in Azure Native 1.x: 2019-10-01.
 *
 * Other available API versions: 2023-07-01.
 */
export class TagAtScope extends pulumi.CustomResource {
    /**
     * Get an existing TagAtScope resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): TagAtScope {
        return new TagAtScope(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:resources:TagAtScope';

    /**
     * Returns true if the given object is an instance of TagAtScope.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is TagAtScope {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === TagAtScope.__pulumiType;
    }

    /**
     * The name of the tags wrapper resource.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The set of tags.
     */
    public readonly properties!: pulumi.Output<types.outputs.TagsResponse>;
    /**
     * The type of the tags wrapper resource.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a TagAtScope resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: TagAtScopeArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.properties === undefined) && !opts.urn) {
                throw new Error("Missing required property 'properties'");
            }
            if ((!args || args.scope === undefined) && !opts.urn) {
                throw new Error("Missing required property 'scope'");
            }
            resourceInputs["properties"] = args ? args.properties : undefined;
            resourceInputs["scope"] = args ? args.scope : undefined;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["properties"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:resources/v20191001:TagAtScope" }, { type: "azure-native:resources/v20200601:TagAtScope" }, { type: "azure-native:resources/v20200801:TagAtScope" }, { type: "azure-native:resources/v20201001:TagAtScope" }, { type: "azure-native:resources/v20210101:TagAtScope" }, { type: "azure-native:resources/v20210401:TagAtScope" }, { type: "azure-native:resources/v20220901:TagAtScope" }, { type: "azure-native:resources/v20230701:TagAtScope" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(TagAtScope.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a TagAtScope resource.
 */
export interface TagAtScopeArgs {
    /**
     * The set of tags.
     */
    properties: pulumi.Input<types.inputs.TagsArgs>;
    /**
     * The resource scope.
     */
    scope: pulumi.Input<string>;
}