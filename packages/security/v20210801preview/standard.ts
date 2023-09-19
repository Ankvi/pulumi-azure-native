import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Security Standard on a resource
 */
export class Standard extends pulumi.CustomResource {
    /**
     * Get an existing Standard resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Standard {
        return new Standard(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:security/v20210801preview:Standard';

    /**
     * Returns true if the given object is an instance of Standard.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Standard {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Standard.__pulumiType;
    }

    /**
     * category of the standard provided
     */
    public readonly category!: pulumi.Output<string | undefined>;
    /**
     * List of component objects containing component unique keys (such as assessment keys) to apply to standard scope.  Currently only supports assessment keys.
     */
    public readonly components!: pulumi.Output<types.outputs.StandardComponentPropertiesResponse[] | undefined>;
    /**
     * description of the standard
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * display name of the standard, equivalent to the standardId
     */
    public readonly displayName!: pulumi.Output<string | undefined>;
    /**
     * Entity tag is used for comparing two or more entities from the same requested resource.
     */
    public /*out*/ readonly etag!: pulumi.Output<string | undefined>;
    /**
     * Kind of the resource
     */
    public readonly kind!: pulumi.Output<string | undefined>;
    /**
     * Location where the resource is stored
     */
    public readonly location!: pulumi.Output<string | undefined>;
    /**
     * Resource name
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * standard type (Custom or BuiltIn only currently)
     */
    public /*out*/ readonly standardType!: pulumi.Output<string>;
    /**
     * List of all standard supported clouds.
     */
    public readonly supportedClouds!: pulumi.Output<string[] | undefined>;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * A list of key value pairs that describe the resource.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Resource type
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a Standard resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: StandardArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["category"] = args ? args.category : undefined;
            resourceInputs["components"] = args ? args.components : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["displayName"] = args ? args.displayName : undefined;
            resourceInputs["kind"] = args ? args.kind : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["standardId"] = args ? args.standardId : undefined;
            resourceInputs["supportedClouds"] = args ? args.supportedClouds : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["standardType"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["category"] = undefined /*out*/;
            resourceInputs["components"] = undefined /*out*/;
            resourceInputs["description"] = undefined /*out*/;
            resourceInputs["displayName"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["kind"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["standardType"] = undefined /*out*/;
            resourceInputs["supportedClouds"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:security:Standard" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(Standard.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a Standard resource.
 */
export interface StandardArgs {
    /**
     * category of the standard provided
     */
    category?: pulumi.Input<string>;
    /**
     * List of component objects containing component unique keys (such as assessment keys) to apply to standard scope.  Currently only supports assessment keys.
     */
    components?: pulumi.Input<pulumi.Input<types.inputs.StandardComponentPropertiesArgs>[]>;
    /**
     * description of the standard
     */
    description?: pulumi.Input<string>;
    /**
     * display name of the standard, equivalent to the standardId
     */
    displayName?: pulumi.Input<string>;
    /**
     * Kind of the resource
     */
    kind?: pulumi.Input<string>;
    /**
     * Location where the resource is stored
     */
    location?: pulumi.Input<string>;
    /**
     * The name of the resource group within the user's subscription. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The Security Standard key - unique key for the standard type
     */
    standardId?: pulumi.Input<string>;
    /**
     * List of all standard supported clouds.
     */
    supportedClouds?: pulumi.Input<pulumi.Input<types.enums.StandardSupportedClouds>[]>;
    /**
     * A list of key value pairs that describe the resource.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}
