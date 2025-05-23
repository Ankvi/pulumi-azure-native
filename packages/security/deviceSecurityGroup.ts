import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * The device security group resource
 *
 * Uses Azure REST API version 2019-08-01. In version 2.x of the Azure Native provider, it used API version 2019-08-01.
 *
 * Other available API versions: 2017-08-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native security [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export class DeviceSecurityGroup extends pulumi.CustomResource {
    /**
     * Get an existing DeviceSecurityGroup resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): DeviceSecurityGroup {
        return new DeviceSecurityGroup(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:security:DeviceSecurityGroup';

    /**
     * Returns true if the given object is an instance of DeviceSecurityGroup.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is DeviceSecurityGroup {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === DeviceSecurityGroup.__pulumiType;
    }

    /**
     * The allow-list custom alert rules.
     */
    public readonly allowlistRules!: pulumi.Output<types.outputs.AllowlistCustomAlertRuleResponse[] | undefined>;
    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * The deny-list custom alert rules.
     */
    public readonly denylistRules!: pulumi.Output<types.outputs.DenylistCustomAlertRuleResponse[] | undefined>;
    /**
     * Resource name
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The list of custom alert threshold rules.
     */
    public readonly thresholdRules!: pulumi.Output<types.outputs.ThresholdCustomAlertRuleResponse[] | undefined>;
    /**
     * The list of custom alert time-window rules.
     */
    public readonly timeWindowRules!: pulumi.Output<types.outputs.TimeWindowCustomAlertRuleResponse[] | undefined>;
    /**
     * Resource type
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a DeviceSecurityGroup resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DeviceSecurityGroupArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceId'");
            }
            resourceInputs["allowlistRules"] = args ? args.allowlistRules : undefined;
            resourceInputs["denylistRules"] = args ? args.denylistRules : undefined;
            resourceInputs["deviceSecurityGroupName"] = args ? args.deviceSecurityGroupName : undefined;
            resourceInputs["resourceId"] = args ? args.resourceId : undefined;
            resourceInputs["thresholdRules"] = args ? args.thresholdRules : undefined;
            resourceInputs["timeWindowRules"] = args ? args.timeWindowRules : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["allowlistRules"] = undefined /*out*/;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["denylistRules"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["thresholdRules"] = undefined /*out*/;
            resourceInputs["timeWindowRules"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:security/v20170801preview:DeviceSecurityGroup" }, { type: "azure-native:security/v20190801:DeviceSecurityGroup" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(DeviceSecurityGroup.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a DeviceSecurityGroup resource.
 */
export interface DeviceSecurityGroupArgs {
    /**
     * The allow-list custom alert rules.
     */
    allowlistRules?: pulumi.Input<pulumi.Input<types.inputs.AllowlistCustomAlertRuleArgs>[]>;
    /**
     * The deny-list custom alert rules.
     */
    denylistRules?: pulumi.Input<pulumi.Input<types.inputs.DenylistCustomAlertRuleArgs>[]>;
    /**
     * The name of the device security group. Note that the name of the device security group is case insensitive.
     */
    deviceSecurityGroupName?: pulumi.Input<string>;
    /**
     * The identifier of the resource.
     */
    resourceId: pulumi.Input<string>;
    /**
     * The list of custom alert threshold rules.
     */
    thresholdRules?: pulumi.Input<pulumi.Input<types.inputs.ThresholdCustomAlertRuleArgs>[]>;
    /**
     * The list of custom alert time-window rules.
     */
    timeWindowRules?: pulumi.Input<pulumi.Input<types.inputs.TimeWindowCustomAlertRuleArgs>[]>;
}