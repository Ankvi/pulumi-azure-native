import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * IoT Defender settings
 */
export class DefenderSetting extends pulumi.CustomResource {
    /**
     * Get an existing DefenderSetting resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): DefenderSetting {
        return new DefenderSetting(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:iotsecurity/v20210201preview:DefenderSetting';

    /**
     * Returns true if the given object is an instance of DefenderSetting.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is DefenderSetting {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === DefenderSetting.__pulumiType;
    }

    /**
     * Size of the device quota. Value is required to be in multiples of 100.
     */
    public readonly deviceQuota!: pulumi.Output<number>;
    /**
     * End time of the evaluation period, if such exist
     */
    public /*out*/ readonly evaluationEndTime!: pulumi.Output<string>;
    /**
     * MDE integration configuration
     */
    public readonly mdeIntegration!: pulumi.Output<types.outputs.iotsecurity.v20210201preview.DefenderSettingsPropertiesResponseMdeIntegration>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The kind of onboarding for the subscription
     */
    public readonly onboardingKind!: pulumi.Output<string>;
    /**
     * Sentinel Workspace Resource Ids
     */
    public readonly sentinelWorkspaceResourceIds!: pulumi.Output<string[]>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a DefenderSetting resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DefenderSettingArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.deviceQuota === undefined) && !opts.urn) {
                throw new Error("Missing required property 'deviceQuota'");
            }
            if ((!args || args.mdeIntegration === undefined) && !opts.urn) {
                throw new Error("Missing required property 'mdeIntegration'");
            }
            if ((!args || args.onboardingKind === undefined) && !opts.urn) {
                throw new Error("Missing required property 'onboardingKind'");
            }
            if ((!args || args.sentinelWorkspaceResourceIds === undefined) && !opts.urn) {
                throw new Error("Missing required property 'sentinelWorkspaceResourceIds'");
            }
            resourceInputs["deviceQuota"] = args ? args.deviceQuota : undefined;
            resourceInputs["mdeIntegration"] = args ? args.mdeIntegration : undefined;
            resourceInputs["onboardingKind"] = args ? args.onboardingKind : undefined;
            resourceInputs["sentinelWorkspaceResourceIds"] = args ? args.sentinelWorkspaceResourceIds : undefined;
            resourceInputs["evaluationEndTime"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["deviceQuota"] = undefined /*out*/;
            resourceInputs["evaluationEndTime"] = undefined /*out*/;
            resourceInputs["mdeIntegration"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["onboardingKind"] = undefined /*out*/;
            resourceInputs["sentinelWorkspaceResourceIds"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:iotsecurity:DefenderSetting" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(DefenderSetting.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a DefenderSetting resource.
 */
export interface DefenderSettingArgs {
    /**
     * Size of the device quota. Value is required to be in multiples of 100.
     */
    deviceQuota: pulumi.Input<number>;
    /**
     * MDE integration configuration
     */
    mdeIntegration: pulumi.Input<types.inputs.iotsecurity.v20210201preview.DefenderSettingsPropertiesMdeIntegrationArgs>;
    /**
     * The kind of onboarding for the subscription
     */
    onboardingKind: pulumi.Input<string | types.enums.v20210201preview.OnboardingKind>;
    /**
     * Sentinel Workspace Resource Ids
     */
    sentinelWorkspaceResourceIds: pulumi.Input<pulumi.Input<string>[]>;
}
