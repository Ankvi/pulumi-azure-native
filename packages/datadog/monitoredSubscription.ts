import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * The request to update subscriptions needed to be monitored by the Datadog monitor resource.
 * Azure REST API version: 2023-01-01.
 */
export class MonitoredSubscription extends pulumi.CustomResource {
    /**
     * Get an existing MonitoredSubscription resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): MonitoredSubscription {
        return new MonitoredSubscription(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:datadog:MonitoredSubscription';

    /**
     * Returns true if the given object is an instance of MonitoredSubscription.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is MonitoredSubscription {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === MonitoredSubscription.__pulumiType;
    }

    /**
     * Name of the monitored subscription resource.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The request to update subscriptions needed to be monitored by the Datadog monitor resource.
     */
    public readonly properties!: pulumi.Output<types.outputs.SubscriptionListResponse>;
    /**
     * The type of the monitored subscription resource.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a MonitoredSubscription resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: MonitoredSubscriptionArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.monitorName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'monitorName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["configurationName"] = args ? args.configurationName : undefined;
            resourceInputs["monitorName"] = args ? args.monitorName : undefined;
            resourceInputs["properties"] = args ? args.properties : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["properties"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:datadog/v20230101:MonitoredSubscription" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(MonitoredSubscription.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a MonitoredSubscription resource.
 */
export interface MonitoredSubscriptionArgs {
    /**
     * The configuration name. Only 'default' value is supported.
     */
    configurationName?: pulumi.Input<string>;
    /**
     * Monitor resource name
     */
    monitorName: pulumi.Input<string>;
    /**
     * The request to update subscriptions needed to be monitored by the Datadog monitor resource.
     */
    properties?: pulumi.Input<types.inputs.SubscriptionListArgs>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}