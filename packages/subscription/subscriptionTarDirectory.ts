import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Subscription Response for Changed Target Directory.
 *
 * Uses Azure REST API version 2024-08-01-preview. In version 2.x of the Azure Native provider, it used API version 2024-08-01-preview.
 */
export class SubscriptionTarDirectory extends pulumi.CustomResource {
    /**
     * Get an existing SubscriptionTarDirectory resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): SubscriptionTarDirectory {
        return new SubscriptionTarDirectory(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:subscription:SubscriptionTarDirectory';

    /**
     * Returns true if the given object is an instance of SubscriptionTarDirectory.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is SubscriptionTarDirectory {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === SubscriptionTarDirectory.__pulumiType;
    }

    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * Subscription Name.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Subscription Changed Target Directory response properties.
     */
    public readonly properties!: pulumi.Output<types.outputs.TargetDirectoryResultPropertiesResponse>;
    /**
     * Resource type, Microsoft.Subscription/changeTenantRequest.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a SubscriptionTarDirectory resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: SubscriptionTarDirectoryArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            resourceInputs["properties"] = args ? args.properties : undefined;
            resourceInputs["subscriptionId"] = args ? args.subscriptionId : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["properties"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:subscription/v20240801preview:SubscriptionTarDirectory" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(SubscriptionTarDirectory.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a SubscriptionTarDirectory resource.
 */
export interface SubscriptionTarDirectoryArgs {
    /**
     * Target Directory request properties.
     */
    properties?: pulumi.Input<types.inputs.TargetDirectoryRequestPropertiesArgs>;
    /**
     * Subscription Id.
     */
    subscriptionId?: pulumi.Input<string>;
}