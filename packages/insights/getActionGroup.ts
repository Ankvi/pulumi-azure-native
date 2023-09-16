import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get an action group.
 * Azure REST API version: 2023-01-01.
 */
export function getActionGroup(args: GetActionGroupArgs, opts?: pulumi.InvokeOptions): Promise<GetActionGroupResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:insights:getActionGroup", {
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
    readonly armRoleReceivers?: types.outputs.insights.ArmRoleReceiverResponse[];
    /**
     * The list of AutomationRunbook receivers that are part of this action group.
     */
    readonly automationRunbookReceivers?: types.outputs.insights.AutomationRunbookReceiverResponse[];
    /**
     * The list of AzureAppPush receivers that are part of this action group.
     */
    readonly azureAppPushReceivers?: types.outputs.insights.AzureAppPushReceiverResponse[];
    /**
     * The list of azure function receivers that are part of this action group.
     */
    readonly azureFunctionReceivers?: types.outputs.insights.AzureFunctionReceiverResponse[];
    /**
     * The list of email receivers that are part of this action group.
     */
    readonly emailReceivers?: types.outputs.insights.EmailReceiverResponse[];
    /**
     * Indicates whether this action group is enabled. If an action group is not enabled, then none of its receivers will receive communications.
     */
    readonly enabled: boolean;
    /**
     * The list of event hub receivers that are part of this action group.
     */
    readonly eventHubReceivers?: types.outputs.insights.EventHubReceiverResponse[];
    /**
     * The short name of the action group. This will be used in SMS messages.
     */
    readonly groupShortName: string;
    /**
     * Azure resource Id
     */
    readonly id: string;
    /**
     * The list of ITSM receivers that are part of this action group.
     */
    readonly itsmReceivers?: types.outputs.insights.ItsmReceiverResponse[];
    /**
     * Resource location
     */
    readonly location: string;
    /**
     * The list of logic app receivers that are part of this action group.
     */
    readonly logicAppReceivers?: types.outputs.insights.LogicAppReceiverResponse[];
    /**
     * Azure resource name
     */
    readonly name: string;
    /**
     * The list of SMS receivers that are part of this action group.
     */
    readonly smsReceivers?: types.outputs.insights.SmsReceiverResponse[];
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
    readonly voiceReceivers?: types.outputs.insights.VoiceReceiverResponse[];
    /**
     * The list of webhook receivers that are part of this action group.
     */
    readonly webhookReceivers?: types.outputs.insights.WebhookReceiverResponse[];
}
/**
 * Get an action group.
 * Azure REST API version: 2023-01-01.
 */
export function getActionGroupOutput(args: GetActionGroupOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetActionGroupResult> {
    return pulumi.output(args).apply((a: any) => getActionGroup(a, opts))
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
