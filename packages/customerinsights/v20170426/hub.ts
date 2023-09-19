import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Hub resource.
 */
export class Hub extends pulumi.CustomResource {
    /**
     * Get an existing Hub resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Hub {
        return new Hub(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:customerinsights/v20170426:Hub';

    /**
     * Returns true if the given object is an instance of Hub.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Hub {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Hub.__pulumiType;
    }

    /**
     * API endpoint URL of the hub.
     */
    public /*out*/ readonly apiEndpoint!: pulumi.Output<string>;
    /**
     * Billing settings of the hub.
     */
    public readonly hubBillingInfo!: pulumi.Output<types.outputs.HubBillingInfoFormatResponse | undefined>;
    /**
     * Resource location.
     */
    public readonly location!: pulumi.Output<string | undefined>;
    /**
     * Resource name.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Provisioning state of the hub.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * Resource tags.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * The bit flags for enabled hub features. Bit 0 is set to 1 indicates graph is enabled, or disabled if set to 0. Bit 1 is set to 1 indicates the hub is disabled, or enabled if set to 0.
     */
    public readonly tenantFeatures!: pulumi.Output<number | undefined>;
    /**
     * Resource type.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * Web endpoint URL of the hub.
     */
    public /*out*/ readonly webEndpoint!: pulumi.Output<string>;

    /**
     * Create a Hub resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: HubArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["hubBillingInfo"] = args ? args.hubBillingInfo : undefined;
            resourceInputs["hubName"] = args ? args.hubName : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["tenantFeatures"] = args ? args.tenantFeatures : undefined;
            resourceInputs["apiEndpoint"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["webEndpoint"] = undefined /*out*/;
        } else {
            resourceInputs["apiEndpoint"] = undefined /*out*/;
            resourceInputs["hubBillingInfo"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["tenantFeatures"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["webEndpoint"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:customerinsights:Hub" }, { type: "azure-native:customerinsights/v20170101:Hub" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(Hub.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a Hub resource.
 */
export interface HubArgs {
    /**
     * Billing settings of the hub.
     */
    hubBillingInfo?: pulumi.Input<types.inputs.HubBillingInfoFormatArgs>;
    /**
     * The name of the Hub.
     */
    hubName?: pulumi.Input<string>;
    /**
     * Resource location.
     */
    location?: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * The bit flags for enabled hub features. Bit 0 is set to 1 indicates graph is enabled, or disabled if set to 0. Bit 1 is set to 1 indicates the hub is disabled, or enabled if set to 0.
     */
    tenantFeatures?: pulumi.Input<number>;
}
