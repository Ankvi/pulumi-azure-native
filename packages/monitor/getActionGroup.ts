import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get an action group.
 *
 * Uses Azure REST API version 2024-10-01-preview.
 *
 * Other available API versions: 2018-03-01, 2022-06-01, 2023-09-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native monitor [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getActionGroup(args: GetActionGroupArgs, opts?: pulumi.InvokeOptions): Promise<GetActionGroupResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:monitor:getActionGroup", {
        "actionGroupName": args.actionGroupName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetActionGroupArgs {
    /**
     * The name of the action group.
     */
    actionGroupName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * An action group resource.
 */
export interface GetActionGroupResult {
    /**
     * The list of ARM role receivers that are part of this action group. Roles are Azure RBAC roles and only built-in roles are supported.
     */
    readonly armRoleReceivers?: types.outputs.ArmRoleReceiverResponse[];
    /**
     * The list of AutomationRunbook receivers that are part of this action group.
     */
    readonly automationRunbookReceivers?: types.outputs.AutomationRunbookReceiverResponse[];
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * The list of AzureAppPush receivers that are part of this action group.
     */
    readonly azureAppPushReceivers?: types.outputs.AzureAppPushReceiverResponse[];
    /**
     * The list of azure function receivers that are part of this action group.
     */
    readonly azureFunctionReceivers?: types.outputs.AzureFunctionReceiverResponse[];
    /**
     * The list of email receivers that are part of this action group.
     */
    readonly emailReceivers?: types.outputs.EmailReceiverResponse[];
    /**
     * Indicates whether this action group is enabled. If an action group is not enabled, then none of its receivers will receive communications.
     */
    readonly enabled: boolean;
    /**
     * The list of event hub receivers that are part of this action group.
     */
    readonly eventHubReceivers?: types.outputs.EventHubReceiverResponse[];
    /**
     * The short name of the action group. This will be used in SMS messages.
     */
    readonly groupShortName: string;
    /**
     * Azure resource Id
     */
    readonly id: string;
    /**
     * Managed service identity (system assigned and/or user assigned identities)
     */
    readonly identity?: types.outputs.ManagedServiceIdentityResponse;
    /**
     * The list of incident receivers that are part of this action group.
     */
    readonly incidentReceivers?: types.outputs.IncidentReceiverResponse[];
    /**
     * The list of ITSM receivers that are part of this action group.
     */
    readonly itsmReceivers?: types.outputs.ItsmReceiverResponse[];
    /**
     * Resource location
     */
    readonly location: string;
    /**
     * The list of logic app receivers that are part of this action group.
     */
    readonly logicAppReceivers?: types.outputs.LogicAppReceiverResponse[];
    /**
     * Azure resource name
     */
    readonly name: string;
    /**
     * The list of SMS receivers that are part of this action group.
     */
    readonly smsReceivers?: types.outputs.SmsReceiverResponse[];
    /**
     * Resource tags
     */
    readonly tags?: {[key: string]: string};
    /**
     * Azure resource type
     */
    readonly type: string;
    /**
     * The list of voice receivers that are part of this action group.
     */
    readonly voiceReceivers?: types.outputs.VoiceReceiverResponse[];
    /**
     * The list of webhook receivers that are part of this action group.
     */
    readonly webhookReceivers?: types.outputs.WebhookReceiverResponse[];
}
/**
 * Get an action group.
 *
 * Uses Azure REST API version 2024-10-01-preview.
 *
 * Other available API versions: 2018-03-01, 2022-06-01, 2023-09-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native monitor [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getActionGroupOutput(args: GetActionGroupOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetActionGroupResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:monitor:getActionGroup", {
        "actionGroupName": args.actionGroupName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetActionGroupOutputArgs {
    /**
     * The name of the action group.
     */
    actionGroupName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}