import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * The request to update subscriptions needed to be monitored by the Elastic monitor resource.
 * Azure REST API version: 2024-05-01-preview.
 *
 * Other available API versions: 2024-06-15-preview, 2024-10-01-preview.
 */
export function getMonitoredSubscription(args: GetMonitoredSubscriptionArgs, opts?: pulumi.InvokeOptions): Promise<GetMonitoredSubscriptionResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:elastic:getMonitoredSubscription", {
        "configurationName": args.configurationName,
        "monitorName": args.monitorName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetMonitoredSubscriptionArgs {
    /**
     * The configuration name. Only 'default' value is supported.
     */
    configurationName: string;
    /**
     * Monitor resource name
     */
    monitorName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * The request to update subscriptions needed to be monitored by the Elastic monitor resource.
 */
export interface GetMonitoredSubscriptionResult {
    /**
     * The id of the monitored subscription resource.
     */
    readonly id: string;
    /**
     * Name of the monitored subscription resource.
     */
    readonly name: string;
    /**
     * The request to update subscriptions needed to be monitored by the Elastic monitor resource.
     */
    readonly properties: types.outputs.SubscriptionListResponse;
    /**
     * The type of the monitored subscription resource.
     */
    readonly type: string;
}
/**
 * The request to update subscriptions needed to be monitored by the Elastic monitor resource.
 * Azure REST API version: 2024-05-01-preview.
 *
 * Other available API versions: 2024-06-15-preview, 2024-10-01-preview.
 */
export function getMonitoredSubscriptionOutput(args: GetMonitoredSubscriptionOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetMonitoredSubscriptionResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:elastic:getMonitoredSubscription", {
        "configurationName": args.configurationName,
        "monitorName": args.monitorName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetMonitoredSubscriptionOutputArgs {
    /**
     * The configuration name. Only 'default' value is supported.
     */
    configurationName: pulumi.Input<string>;
    /**
     * Monitor resource name
     */
    monitorName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}