import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * The AutoUpgradeProfile resource.
 * Azure REST API version: 2024-05-02-preview.
 */
export class AutoUpgradeProfile extends pulumi.CustomResource {
    /**
     * Get an existing AutoUpgradeProfile resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): AutoUpgradeProfile {
        return new AutoUpgradeProfile(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:containerservice:AutoUpgradeProfile';

    /**
     * Returns true if the given object is an instance of AutoUpgradeProfile.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is AutoUpgradeProfile {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === AutoUpgradeProfile.__pulumiType;
    }

    /**
     * Configures how auto-upgrade will be run.
     */
    public readonly channel!: pulumi.Output<string>;
    /**
     * If set to False: the auto upgrade has effect - target managed clusters will be upgraded on schedule.
     * If set to True: the auto upgrade has no effect - no upgrade will be run on the target managed clusters.
     * This is a boolean and not an enum because enabled/disabled are all available states of the auto upgrade profile.
     * By default, this is set to False.
     */
    public readonly disabled!: pulumi.Output<boolean | undefined>;
    /**
     * If eTag is provided in the response body, it may also be provided as a header per the normal etag convention.  Entity tags are used for comparing two or more entities from the same requested resource. HTTP/1.1 uses entity tags in the etag (section 14.19), If-Match (section 14.24), If-None-Match (section 14.26), and If-Range (section 14.27) header fields.
     */
    public /*out*/ readonly eTag!: pulumi.Output<string>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The node image upgrade to be applied to the target clusters in auto upgrade.
     */
    public readonly nodeImageSelection!: pulumi.Output<types.outputs.AutoUpgradeNodeImageSelectionResponse | undefined>;
    /**
     * The provisioning state of the AutoUpgradeProfile resource.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * The resource id of the UpdateStrategy resource to reference. If not specified, the auto upgrade will run on all clusters which are members of the fleet.
     */
    public readonly updateStrategyId!: pulumi.Output<string | undefined>;

    /**
     * Create a AutoUpgradeProfile resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: AutoUpgradeProfileArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.channel === undefined) && !opts.urn) {
                throw new Error("Missing required property 'channel'");
            }
            if ((!args || args.fleetName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'fleetName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["autoUpgradeProfileName"] = args ? args.autoUpgradeProfileName : undefined;
            resourceInputs["channel"] = args ? args.channel : undefined;
            resourceInputs["disabled"] = args ? args.disabled : undefined;
            resourceInputs["fleetName"] = args ? args.fleetName : undefined;
            resourceInputs["nodeImageSelection"] = args ? args.nodeImageSelection : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["updateStrategyId"] = args ? args.updateStrategyId : undefined;
            resourceInputs["eTag"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["channel"] = undefined /*out*/;
            resourceInputs["disabled"] = undefined /*out*/;
            resourceInputs["eTag"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["nodeImageSelection"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["updateStrategyId"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:containerservice/v20240502preview:AutoUpgradeProfile" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(AutoUpgradeProfile.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a AutoUpgradeProfile resource.
 */
export interface AutoUpgradeProfileArgs {
    /**
     * The name of the AutoUpgradeProfile resource.
     */
    autoUpgradeProfileName?: pulumi.Input<string>;
    /**
     * Configures how auto-upgrade will be run.
     */
    channel: pulumi.Input<string | types.enums.UpgradeChannel>;
    /**
     * If set to False: the auto upgrade has effect - target managed clusters will be upgraded on schedule.
     * If set to True: the auto upgrade has no effect - no upgrade will be run on the target managed clusters.
     * This is a boolean and not an enum because enabled/disabled are all available states of the auto upgrade profile.
     * By default, this is set to False.
     */
    disabled?: pulumi.Input<boolean>;
    /**
     * The name of the Fleet resource.
     */
    fleetName: pulumi.Input<string>;
    /**
     * The node image upgrade to be applied to the target clusters in auto upgrade.
     */
    nodeImageSelection?: pulumi.Input<types.inputs.AutoUpgradeNodeImageSelectionArgs>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The resource id of the UpdateStrategy resource to reference. If not specified, the auto upgrade will run on all clusters which are members of the fleet.
     */
    updateStrategyId?: pulumi.Input<string>;
}