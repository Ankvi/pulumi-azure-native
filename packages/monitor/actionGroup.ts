import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * An action group resource.
 *
 * Uses Azure REST API version 2024-10-01-preview.
 *
 * Other available API versions: 2018-03-01, 2022-06-01, 2023-09-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native monitor [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export class ActionGroup extends pulumi.CustomResource {
    /**
     * Get an existing ActionGroup resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): ActionGroup {
        return new ActionGroup(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:monitor:ActionGroup';

    /**
     * Returns true if the given object is an instance of ActionGroup.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ActionGroup {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ActionGroup.__pulumiType;
    }

    /**
     * The list of ARM role receivers that are part of this action group. Roles are Azure RBAC roles and only built-in roles are supported.
     */
    public readonly armRoleReceivers!: pulumi.Output<types.outputs.ArmRoleReceiverResponse[] | undefined>;
    /**
     * The list of AutomationRunbook receivers that are part of this action group.
     */
    public readonly automationRunbookReceivers!: pulumi.Output<types.outputs.AutomationRunbookReceiverResponse[] | undefined>;
    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * The list of AzureAppPush receivers that are part of this action group.
     */
    public readonly azureAppPushReceivers!: pulumi.Output<types.outputs.AzureAppPushReceiverResponse[] | undefined>;
    /**
     * The list of azure function receivers that are part of this action group.
     */
    public readonly azureFunctionReceivers!: pulumi.Output<types.outputs.AzureFunctionReceiverResponse[] | undefined>;
    /**
     * The list of email receivers that are part of this action group.
     */
    public readonly emailReceivers!: pulumi.Output<types.outputs.EmailReceiverResponse[] | undefined>;
    /**
     * Indicates whether this action group is enabled. If an action group is not enabled, then none of its receivers will receive communications.
     */
    public readonly enabled!: pulumi.Output<boolean>;
    /**
     * The list of event hub receivers that are part of this action group.
     */
    public readonly eventHubReceivers!: pulumi.Output<types.outputs.EventHubReceiverResponse[] | undefined>;
    /**
     * The short name of the action group. This will be used in SMS messages.
     */
    public readonly groupShortName!: pulumi.Output<string>;
    /**
     * Managed service identity (system assigned and/or user assigned identities)
     */
    public readonly identity!: pulumi.Output<types.outputs.ManagedServiceIdentityResponse | undefined>;
    /**
     * The list of incident receivers that are part of this action group.
     */
    public readonly incidentReceivers!: pulumi.Output<types.outputs.IncidentReceiverResponse[] | undefined>;
    /**
     * The list of ITSM receivers that are part of this action group.
     */
    public readonly itsmReceivers!: pulumi.Output<types.outputs.ItsmReceiverResponse[] | undefined>;
    /**
     * Resource location
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * The list of logic app receivers that are part of this action group.
     */
    public readonly logicAppReceivers!: pulumi.Output<types.outputs.LogicAppReceiverResponse[] | undefined>;
    /**
     * Azure resource name
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The list of SMS receivers that are part of this action group.
     */
    public readonly smsReceivers!: pulumi.Output<types.outputs.SmsReceiverResponse[] | undefined>;
    /**
     * Resource tags
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Azure resource type
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * The list of voice receivers that are part of this action group.
     */
    public readonly voiceReceivers!: pulumi.Output<types.outputs.VoiceReceiverResponse[] | undefined>;
    /**
     * The list of webhook receivers that are part of this action group.
     */
    public readonly webhookReceivers!: pulumi.Output<types.outputs.WebhookReceiverResponse[] | undefined>;

    /**
     * Create a ActionGroup resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ActionGroupArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.enabled === undefined) && !opts.urn) {
                throw new Error("Missing required property 'enabled'");
            }
            if ((!args || args.groupShortName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'groupShortName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["actionGroupName"] = args ? args.actionGroupName : undefined;
            resourceInputs["armRoleReceivers"] = args ? args.armRoleReceivers : undefined;
            resourceInputs["automationRunbookReceivers"] = args ? args.automationRunbookReceivers : undefined;
            resourceInputs["azureAppPushReceivers"] = args ? args.azureAppPushReceivers : undefined;
            resourceInputs["azureFunctionReceivers"] = args ? args.azureFunctionReceivers : undefined;
            resourceInputs["emailReceivers"] = args ? args.emailReceivers : undefined;
            resourceInputs["enabled"] = (args ? args.enabled : undefined) ?? true;
            resourceInputs["eventHubReceivers"] = args ? args.eventHubReceivers : undefined;
            resourceInputs["groupShortName"] = args ? args.groupShortName : undefined;
            resourceInputs["identity"] = args ? args.identity : undefined;
            resourceInputs["incidentReceivers"] = args ? args.incidentReceivers : undefined;
            resourceInputs["itsmReceivers"] = args ? args.itsmReceivers : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["logicAppReceivers"] = args ? args.logicAppReceivers : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["smsReceivers"] = args ? args.smsReceivers : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["voiceReceivers"] = args ? args.voiceReceivers : undefined;
            resourceInputs["webhookReceivers"] = args ? args.webhookReceivers : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["armRoleReceivers"] = undefined /*out*/;
            resourceInputs["automationRunbookReceivers"] = undefined /*out*/;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["azureAppPushReceivers"] = undefined /*out*/;
            resourceInputs["azureFunctionReceivers"] = undefined /*out*/;
            resourceInputs["emailReceivers"] = undefined /*out*/;
            resourceInputs["enabled"] = undefined /*out*/;
            resourceInputs["eventHubReceivers"] = undefined /*out*/;
            resourceInputs["groupShortName"] = undefined /*out*/;
            resourceInputs["identity"] = undefined /*out*/;
            resourceInputs["incidentReceivers"] = undefined /*out*/;
            resourceInputs["itsmReceivers"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["logicAppReceivers"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["smsReceivers"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["voiceReceivers"] = undefined /*out*/;
            resourceInputs["webhookReceivers"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:insights/v20230101:ActionGroup" }, { type: "azure-native:insights/v20230901preview:ActionGroup" }, { type: "azure-native:insights/v20241001preview:ActionGroup" }, { type: "azure-native:insights:ActionGroup" }, { type: "azure-native:monitor/v20170401:ActionGroup" }, { type: "azure-native:monitor/v20180301:ActionGroup" }, { type: "azure-native:monitor/v20180901:ActionGroup" }, { type: "azure-native:monitor/v20190301:ActionGroup" }, { type: "azure-native:monitor/v20190601:ActionGroup" }, { type: "azure-native:monitor/v20210901:ActionGroup" }, { type: "azure-native:monitor/v20220401:ActionGroup" }, { type: "azure-native:monitor/v20220601:ActionGroup" }, { type: "azure-native:monitor/v20230101:ActionGroup" }, { type: "azure-native:monitor/v20230901preview:ActionGroup" }, { type: "azure-native:monitor/v20241001preview:ActionGroup" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(ActionGroup.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a ActionGroup resource.
 */
export interface ActionGroupArgs {
    /**
     * The name of the action group.
     */
    actionGroupName?: pulumi.Input<string>;
    /**
     * The list of ARM role receivers that are part of this action group. Roles are Azure RBAC roles and only built-in roles are supported.
     */
    armRoleReceivers?: pulumi.Input<pulumi.Input<types.inputs.ArmRoleReceiverArgs>[]>;
    /**
     * The list of AutomationRunbook receivers that are part of this action group.
     */
    automationRunbookReceivers?: pulumi.Input<pulumi.Input<types.inputs.AutomationRunbookReceiverArgs>[]>;
    /**
     * The list of AzureAppPush receivers that are part of this action group.
     */
    azureAppPushReceivers?: pulumi.Input<pulumi.Input<types.inputs.AzureAppPushReceiverArgs>[]>;
    /**
     * The list of azure function receivers that are part of this action group.
     */
    azureFunctionReceivers?: pulumi.Input<pulumi.Input<types.inputs.AzureFunctionReceiverArgs>[]>;
    /**
     * The list of email receivers that are part of this action group.
     */
    emailReceivers?: pulumi.Input<pulumi.Input<types.inputs.EmailReceiverArgs>[]>;
    /**
     * Indicates whether this action group is enabled. If an action group is not enabled, then none of its receivers will receive communications.
     */
    enabled: pulumi.Input<boolean>;
    /**
     * The list of event hub receivers that are part of this action group.
     */
    eventHubReceivers?: pulumi.Input<pulumi.Input<types.inputs.EventHubReceiverArgs>[]>;
    /**
     * The short name of the action group. This will be used in SMS messages.
     */
    groupShortName: pulumi.Input<string>;
    /**
     * Managed service identity (system assigned and/or user assigned identities)
     */
    identity?: pulumi.Input<types.inputs.ManagedServiceIdentityArgs>;
    /**
     * The list of incident receivers that are part of this action group.
     */
    incidentReceivers?: pulumi.Input<pulumi.Input<types.inputs.IncidentReceiverArgs>[]>;
    /**
     * The list of ITSM receivers that are part of this action group.
     */
    itsmReceivers?: pulumi.Input<pulumi.Input<types.inputs.ItsmReceiverArgs>[]>;
    /**
     * Resource location
     */
    location?: pulumi.Input<string>;
    /**
     * The list of logic app receivers that are part of this action group.
     */
    logicAppReceivers?: pulumi.Input<pulumi.Input<types.inputs.LogicAppReceiverArgs>[]>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The list of SMS receivers that are part of this action group.
     */
    smsReceivers?: pulumi.Input<pulumi.Input<types.inputs.SmsReceiverArgs>[]>;
    /**
     * Resource tags
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * The list of voice receivers that are part of this action group.
     */
    voiceReceivers?: pulumi.Input<pulumi.Input<types.inputs.VoiceReceiverArgs>[]>;
    /**
     * The list of webhook receivers that are part of this action group.
     */
    webhookReceivers?: pulumi.Input<pulumi.Input<types.inputs.WebhookReceiverArgs>[]>;
}