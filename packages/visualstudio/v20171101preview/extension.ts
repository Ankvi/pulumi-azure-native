import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * The response to an extension resource GET request.
 */
export class Extension extends pulumi.CustomResource {
    /**
     * Get an existing Extension resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Extension {
        return new Extension(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:visualstudio/v20171101preview:Extension';

    /**
     * Returns true if the given object is an instance of Extension.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Extension {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Extension.__pulumiType;
    }

    /**
     * Resource location.
     */
    public readonly location!: pulumi.Output<string | undefined>;
    /**
     * Resource name.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The extension plan that was purchased.
     */
    public readonly plan!: pulumi.Output<types.outputs.visualstudio.v20171101preview.ExtensionResourcePlanResponse | undefined>;
    /**
     * Resource properties.
     */
    public readonly properties!: pulumi.Output<{[key: string]: string}>;
    /**
     * Resource tags.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Resource type.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a Extension resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ExtensionArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.accountResourceName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'accountResourceName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["accountResourceName"] = args ? args.accountResourceName : undefined;
            resourceInputs["extensionResourceName"] = args ? args.extensionResourceName : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["plan"] = args ? args.plan : undefined;
            resourceInputs["properties"] = args ? args.properties : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["plan"] = undefined /*out*/;
            resourceInputs["properties"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:visualstudio:Extension" }, { type: "azure-native:visualstudio/v20140401preview:Extension" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(Extension.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a Extension resource.
 */
export interface ExtensionArgs {
    /**
     * The name of the Visual Studio Team Services account resource.
     */
    accountResourceName: pulumi.Input<string>;
    /**
     * The name of the extension.
     */
    extensionResourceName?: pulumi.Input<string>;
    /**
     * The Azure region of the Visual Studio account associated with this request (i.e 'southcentralus'.)
     */
    location?: pulumi.Input<string>;
    /**
     * Extended information about the plan being purchased for this extension resource.
     */
    plan?: pulumi.Input<types.inputs.visualstudio.v20171101preview.ExtensionResourcePlanArgs>;
    /**
     * A dictionary of extended properties. This property is currently unused.
     */
    properties?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Name of the resource group within the Azure subscription.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * A dictionary of user-defined tags to be stored with the extension resource.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}
