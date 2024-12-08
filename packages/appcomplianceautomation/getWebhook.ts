import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get the AppComplianceAutomation webhook and its properties.
 * Azure REST API version: 2024-06-27.
 */
export function getWebhook(args: GetWebhookArgs, opts?: pulumi.InvokeOptions): Promise<GetWebhookResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:appcomplianceautomation:getWebhook", {
        "reportName": args.reportName,
        "webhookName": args.webhookName,
    }, opts);
}

export interface GetWebhookArgs {
    /**
     * Report Name.
     */
    reportName: string;
    /**
     * Webhook Name.
     */
    webhookName: string;
}

/**
 * A class represent an AppComplianceAutomation webhook resource.
 */
export interface GetWebhookResult {
    /**
     * content type
     */
    readonly contentType?: string;
    /**
     * webhook deliveryStatus
     */
    readonly deliveryStatus: string;
    /**
     * whether to enable ssl verification
     */
    readonly enableSslVerification?: string;
    /**
     * under which event notification should be sent.
     */
    readonly events?: string[];
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * webhook payload url
     */
    readonly payloadUrl?: string;
    /**
     * Azure Resource Provisioning State
     */
    readonly provisioningState: string;
    /**
     * whether to send notification under any event.
     */
    readonly sendAllEvents?: string;
    /**
     * Webhook status.
     */
    readonly status?: string;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * Tenant id.
     */
    readonly tenantId: string;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
    /**
     * whether to update webhookKey.
     */
    readonly updateWebhookKey?: string;
    /**
     * Webhook id in database.
     */
    readonly webhookId: string;
    /**
     * webhook secret token. If not set, this field value is null; otherwise, please set a string value.
     */
    readonly webhookKey?: string;
    /**
     * whether webhookKey is enabled.
     */
    readonly webhookKeyEnabled: string;
}
/**
 * Get the AppComplianceAutomation webhook and its properties.
 * Azure REST API version: 2024-06-27.
 */
export function getWebhookOutput(args: GetWebhookOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetWebhookResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:appcomplianceautomation:getWebhook", {
        "reportName": args.reportName,
        "webhookName": args.webhookName,
    }, opts);
}

export interface GetWebhookOutputArgs {
    /**
     * Report Name.
     */
    reportName: pulumi.Input<string>;
    /**
     * Webhook Name.
     */
    webhookName: pulumi.Input<string>;
}