import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Dapr PubSub Event Subscription.
 */
export function getDaprSubscription(args: GetDaprSubscriptionArgs, opts?: pulumi.InvokeOptions): Promise<GetDaprSubscriptionResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:app/v20230801preview:getDaprSubscription", {
        "environmentName": args.environmentName,
        "name": args.name,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetDaprSubscriptionArgs {
    /**
     * Name of the Managed Environment.
     */
    environmentName: string;
    /**
     * Name of the Dapr subscription.
     */
    name: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * Dapr PubSub Event Subscription.
 */
export interface GetDaprSubscriptionResult {
    /**
     * Bulk subscription options
     */
    readonly bulkSubscribe?: types.outputs.DaprSubscriptionBulkSubscribeOptionsResponse;
    /**
     * Deadletter topic name
     */
    readonly deadLetterTopic?: string;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * Subscription metadata
     */
    readonly metadata?: {[key: string]: string};
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Dapr PubSub component name
     */
    readonly pubsubName?: string;
    /**
     * Subscription routes
     */
    readonly routes?: types.outputs.DaprSubscriptionRoutesResponse;
    /**
     * Application scopes to restrict the subscription to specific apps.
     */
    readonly scopes?: string[];
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * Topic name
     */
    readonly topic?: string;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Dapr PubSub Event Subscription.
 */
export function getDaprSubscriptionOutput(args: GetDaprSubscriptionOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetDaprSubscriptionResult> {
    return pulumi.output(args).apply((a: any) => getDaprSubscription(a, opts))
}

export interface GetDaprSubscriptionOutputArgs {
    /**
     * Name of the Managed Environment.
     */
    environmentName: pulumi.Input<string>;
    /**
     * Name of the Dapr subscription.
     */
    name: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}