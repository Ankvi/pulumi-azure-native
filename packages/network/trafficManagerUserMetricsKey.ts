import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Class representing Traffic Manager User Metrics.
 *
 * Uses Azure REST API version 2022-04-01. In version 1.x of the Azure Native provider, it used API version 2018-08-01.
 *
 * Other available API versions: 2022-04-01-preview.
 */
export class TrafficManagerUserMetricsKey extends pulumi.CustomResource {
    /**
     * Get an existing TrafficManagerUserMetricsKey resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): TrafficManagerUserMetricsKey {
        return new TrafficManagerUserMetricsKey(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:network:TrafficManagerUserMetricsKey';

    /**
     * Returns true if the given object is an instance of TrafficManagerUserMetricsKey.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is TrafficManagerUserMetricsKey {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === TrafficManagerUserMetricsKey.__pulumiType;
    }

    /**
     * The key returned by the User Metrics operation.
     */
    public /*out*/ readonly key!: pulumi.Output<string | undefined>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string | undefined>;
    /**
     * The type of the resource. Ex- Microsoft.Network/trafficManagerProfiles.
     */
    public /*out*/ readonly type!: pulumi.Output<string | undefined>;

    /**
     * Create a TrafficManagerUserMetricsKey resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: TrafficManagerUserMetricsKeyArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            resourceInputs["key"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["key"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:network/v20180401:TrafficManagerUserMetricsKey" }, { type: "azure-native:network/v20180801:TrafficManagerUserMetricsKey" }, { type: "azure-native:network/v20220401:TrafficManagerUserMetricsKey" }, { type: "azure-native:network/v20220401preview:TrafficManagerUserMetricsKey" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(TrafficManagerUserMetricsKey.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a TrafficManagerUserMetricsKey resource.
 */
export interface TrafficManagerUserMetricsKeyArgs {
}