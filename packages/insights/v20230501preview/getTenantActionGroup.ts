import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a tenant action group.
 */
export function getTenantActionGroup(args: GetTenantActionGroupArgs, opts?: pulumi.InvokeOptions): Promise<GetTenantActionGroupResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:insights/v20230501preview:getTenantActionGroup", {
        "managementGroupId": args.managementGroupId,
        "tenantActionGroupName": args.tenantActionGroupName,
    }, opts);
}

export interface GetTenantActionGroupArgs {
    /**
     * The management group id.
     */
    managementGroupId: string;
    /**
     * The name of the action group.
     */
    tenantActionGroupName: string;
}

/**
 * A tenant action group resource.
 */
export interface GetTenantActionGroupResult {
    /**
     * The list of AzureAppPush receivers that are part of this tenant action group.
     */
    readonly azureAppPushReceivers?: types.outputs.AzureAppPushReceiverResponse[];
    /**
     * The list of email receivers that are part of this tenant action group.
     */
    readonly emailReceivers?: types.outputs.EmailReceiverResponse[];
    /**
     * Indicates whether this tenant action group is enabled. If a tenant action group is not enabled, then none of its receivers will receive communications.
     */
    readonly enabled: boolean;
    /**
     * The short name of the action group. This will be used in SMS messages.
     */
    readonly groupShortName: string;
    /**
     * Azure resource Id
     */
    readonly id: string;
    /**
     * Resource location
     */
    readonly location: string;
    /**
     * Azure resource name
     */
    readonly name: string;
    /**
     * The list of SMS receivers that are part of this tenant action group.
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
     * The list of voice receivers that are part of this tenant action group.
     */
    readonly voiceReceivers?: types.outputs.VoiceReceiverResponse[];
    /**
     * The list of webhook receivers that are part of this tenant action group.
     */
    readonly webhookReceivers?: types.outputs.WebhookReceiverResponse[];
}
/**
 * Get a tenant action group.
 */
export function getTenantActionGroupOutput(args: GetTenantActionGroupOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetTenantActionGroupResult> {
    return pulumi.output(args).apply((a: any) => getTenantActionGroup(a, opts))
}

export interface GetTenantActionGroupOutputArgs {
    /**
     * The management group id.
     */
    managementGroupId: pulumi.Input<string>;
    /**
     * The name of the action group.
     */
    tenantActionGroupName: pulumi.Input<string>;
}