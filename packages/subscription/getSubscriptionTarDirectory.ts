import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * The operation to view Initiator Subscription Changed Request
 *
 * Uses Azure REST API version 2024-08-01-preview.
 */
export function getSubscriptionTarDirectory(args?: GetSubscriptionTarDirectoryArgs, opts?: pulumi.InvokeOptions): Promise<GetSubscriptionTarDirectoryResult> {
    args = args || {};
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:subscription:getSubscriptionTarDirectory", {
        "subscriptionId": args.subscriptionId,
    }, opts);
}

export interface GetSubscriptionTarDirectoryArgs {
    /**
     * Subscription Id.
     */
    subscriptionId?: string;
}

/**
 * Subscription Response for Changed Target Directory.
 */
export interface GetSubscriptionTarDirectoryResult {
    /**
     * Fully qualified ID for the Subscription Changed Directory resource.
     */
    readonly id: string;
    /**
     * Subscription Name.
     */
    readonly name: string;
    /**
     * Subscription Changed Target Directory response properties.
     */
    readonly properties: types.outputs.TargetDirectoryResultPropertiesResponse;
    /**
     * Resource type, Microsoft.Subscription/changeTenantRequest.
     */
    readonly type: string;
}
/**
 * The operation to view Initiator Subscription Changed Request
 *
 * Uses Azure REST API version 2024-08-01-preview.
 */
export function getSubscriptionTarDirectoryOutput(args?: GetSubscriptionTarDirectoryOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSubscriptionTarDirectoryResult> {
    args = args || {};
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:subscription:getSubscriptionTarDirectory", {
        "subscriptionId": args.subscriptionId,
    }, opts);
}

export interface GetSubscriptionTarDirectoryOutputArgs {
    /**
     * Subscription Id.
     */
    subscriptionId?: pulumi.Input<string>;
}