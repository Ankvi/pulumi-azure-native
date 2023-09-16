import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * A tenant action group resource.
 */
export class TenantActionGroup extends pulumi.CustomResource {
    /**
     * Get an existing TenantActionGroup resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): TenantActionGroup {
        return new TenantActionGroup(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:insights/v20230501preview:TenantActionGroup';

    /**
     * Returns true if the given object is an instance of TenantActionGroup.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is TenantActionGroup {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === TenantActionGroup.__pulumiType;
    }

    /**
     * The list of AzureAppPush receivers that are part of this tenant action group.
     */
    public readonly azureAppPushReceivers!: pulumi.Output<types.outputs.insights.v20230501preview.AzureAppPushReceiverResponse[] | undefined>;
    /**
     * The list of email receivers that are part of this tenant action group.
     */
    public readonly emailReceivers!: pulumi.Output<types.outputs.insights.v20230501preview.EmailReceiverResponse[] | undefined>;
    /**
     * Indicates whether this tenant action group is enabled. If a tenant action group is not enabled, then none of its receivers will receive communications.
     */
    public readonly enabled!: pulumi.Output<boolean>;
    /**
     * The short name of the action group. This will be used in SMS messages.
     */
    public readonly groupShortName!: pulumi.Output<string>;
    /**
     * Resource location
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * Azure resource name
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The list of SMS receivers that are part of this tenant action group.
     */
    public readonly smsReceivers!: pulumi.Output<types.outputs.insights.v20230501preview.SmsReceiverResponse[] | undefined>;
    /**
     * Resource tags
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Azure resource type
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * The list of voice receivers that are part of this tenant action group.
     */
    public readonly voiceReceivers!: pulumi.Output<types.outputs.insights.v20230501preview.VoiceReceiverResponse[] | undefined>;
    /**
     * The list of webhook receivers that are part of this tenant action group.
     */
    public readonly webhookReceivers!: pulumi.Output<types.outputs.insights.v20230501preview.WebhookReceiverResponse[] | undefined>;

    /**
     * Create a TenantActionGroup resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: TenantActionGroupArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.enabled === undefined) && !opts.urn) {
                throw new Error("Missing required property 'enabled'");
            }
            if ((!args || args.groupShortName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'groupShortName'");
            }
            if ((!args || args.managementGroupId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'managementGroupId'");
            }
            resourceInputs["azureAppPushReceivers"] = args ? args.azureAppPushReceivers : undefined;
            resourceInputs["emailReceivers"] = args ? args.emailReceivers : undefined;
            resourceInputs["enabled"] = (args ? args.enabled : undefined) ?? true;
            resourceInputs["groupShortName"] = args ? args.groupShortName : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["managementGroupId"] = args ? args.managementGroupId : undefined;
            resourceInputs["smsReceivers"] = args ? args.smsReceivers : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["tenantActionGroupName"] = args ? args.tenantActionGroupName : undefined;
            resourceInputs["voiceReceivers"] = args ? args.voiceReceivers : undefined;
            resourceInputs["webhookReceivers"] = args ? args.webhookReceivers : undefined;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["azureAppPushReceivers"] = undefined /*out*/;
            resourceInputs["emailReceivers"] = undefined /*out*/;
            resourceInputs["enabled"] = undefined /*out*/;
            resourceInputs["groupShortName"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["smsReceivers"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["voiceReceivers"] = undefined /*out*/;
            resourceInputs["webhookReceivers"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:insights:TenantActionGroup" }, { type: "azure-native:insights/v20230301preview:TenantActionGroup" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(TenantActionGroup.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a TenantActionGroup resource.
 */
export interface TenantActionGroupArgs {
    /**
     * The list of AzureAppPush receivers that are part of this tenant action group.
     */
    azureAppPushReceivers?: pulumi.Input<pulumi.Input<types.inputs.insights.v20230501preview.AzureAppPushReceiverArgs>[]>;
    /**
     * The list of email receivers that are part of this tenant action group.
     */
    emailReceivers?: pulumi.Input<pulumi.Input<types.inputs.insights.v20230501preview.EmailReceiverArgs>[]>;
    /**
     * Indicates whether this tenant action group is enabled. If a tenant action group is not enabled, then none of its receivers will receive communications.
     */
    enabled: pulumi.Input<boolean>;
    /**
     * The short name of the action group. This will be used in SMS messages.
     */
    groupShortName: pulumi.Input<string>;
    /**
     * Resource location
     */
    location?: pulumi.Input<string>;
    /**
     * The management group id.
     */
    managementGroupId: pulumi.Input<string>;
    /**
     * The list of SMS receivers that are part of this tenant action group.
     */
    smsReceivers?: pulumi.Input<pulumi.Input<types.inputs.insights.v20230501preview.SmsReceiverArgs>[]>;
    /**
     * Resource tags
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * The name of the action group.
     */
    tenantActionGroupName?: pulumi.Input<string>;
    /**
     * The list of voice receivers that are part of this tenant action group.
     */
    voiceReceivers?: pulumi.Input<pulumi.Input<types.inputs.insights.v20230501preview.VoiceReceiverArgs>[]>;
    /**
     * The list of webhook receivers that are part of this tenant action group.
     */
    webhookReceivers?: pulumi.Input<pulumi.Input<types.inputs.insights.v20230501preview.WebhookReceiverArgs>[]>;
}
