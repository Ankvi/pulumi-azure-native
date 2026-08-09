import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Use this function to list all subscriptions for the authenticated account. See https://learn.microsoft.com/en-us/rest/api/resources/subscriptions/list for details.
 */
export function listSubscriptions(args?: ListSubscriptionsArgs, opts?: pulumi.InvokeOptions): Promise<ListSubscriptionsResult> {
    args = args || {};
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:authorization:listSubscriptions", {
        "apiVersion": args.apiVersion,
    }, opts);
}

export interface ListSubscriptionsArgs {
    /**
     * The API version to use for the request. Defaults to '2022-12-01'.
     */
    apiVersion?: string;
}

/**
 * Subscription list operation response.
 */
export interface ListSubscriptionsResult {
    /**
     * The URL to get the next set of results.
     */
    readonly nextLink?: string;
    /**
     * An array of subscriptions.
     */
    readonly value?: types.outputs.SubscriptionResponse[];
}
/**
 * Use this function to list all subscriptions for the authenticated account. See https://learn.microsoft.com/en-us/rest/api/resources/subscriptions/list for details.
 */
export function listSubscriptionsOutput(args?: ListSubscriptionsOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<ListSubscriptionsResult> {
    args = args || {};
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:authorization:listSubscriptions", {
        "apiVersion": args.apiVersion,
    }, opts);
}

export interface ListSubscriptionsOutputArgs {
    /**
     * The API version to use for the request. Defaults to '2022-12-01'.
     */
    apiVersion?: pulumi.Input<string | undefined>;
}