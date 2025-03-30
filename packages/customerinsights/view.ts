import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * The view resource format.
 *
 * Uses Azure REST API version 2017-04-26. In version 1.x of the Azure Native provider, it used API version 2017-04-26.
 */
export class View extends pulumi.CustomResource {
    /**
     * Get an existing View resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): View {
        return new View(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:customerinsights:View';

    /**
     * Returns true if the given object is an instance of View.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is View {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === View.__pulumiType;
    }

    /**
     * Date time when view was last modified.
     */
    public /*out*/ readonly changed!: pulumi.Output<string>;
    /**
     * Date time when view was created.
     */
    public /*out*/ readonly created!: pulumi.Output<string>;
    /**
     * View definition.
     */
    public readonly definition!: pulumi.Output<string>;
    /**
     * Localized display name for the view.
     */
    public readonly displayName!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Resource name.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * the hub name.
     */
    public /*out*/ readonly tenantId!: pulumi.Output<string>;
    /**
     * Resource type.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * the user ID.
     */
    public readonly userId!: pulumi.Output<string | undefined>;
    /**
     * Name of the view.
     */
    public readonly viewName!: pulumi.Output<string>;

    /**
     * Create a View resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ViewArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.definition === undefined) && !opts.urn) {
                throw new Error("Missing required property 'definition'");
            }
            if ((!args || args.hubName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'hubName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["definition"] = args ? args.definition : undefined;
            resourceInputs["displayName"] = args ? args.displayName : undefined;
            resourceInputs["hubName"] = args ? args.hubName : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["userId"] = args ? args.userId : undefined;
            resourceInputs["viewName"] = args ? args.viewName : undefined;
            resourceInputs["changed"] = undefined /*out*/;
            resourceInputs["created"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["tenantId"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["changed"] = undefined /*out*/;
            resourceInputs["created"] = undefined /*out*/;
            resourceInputs["definition"] = undefined /*out*/;
            resourceInputs["displayName"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["tenantId"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["userId"] = undefined /*out*/;
            resourceInputs["viewName"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:customerinsights/v20170101:View" }, { type: "azure-native:customerinsights/v20170426:View" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(View.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a View resource.
 */
export interface ViewArgs {
    /**
     * View definition.
     */
    definition: pulumi.Input<string>;
    /**
     * Localized display name for the view.
     */
    displayName?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * The name of the hub.
     */
    hubName: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * the user ID.
     */
    userId?: pulumi.Input<string>;
    /**
     * The name of the view.
     */
    viewName?: pulumi.Input<string>;
}