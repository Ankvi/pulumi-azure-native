import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * List synchronization details
 *
 * Uses Azure REST API version 2021-08-01.
 */
export function listShareSubscriptionSynchronizationDetails(args: ListShareSubscriptionSynchronizationDetailsArgs, opts?: pulumi.InvokeOptions): Promise<ListShareSubscriptionSynchronizationDetailsResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:datashare:listShareSubscriptionSynchronizationDetails", {
        "accountName": args.accountName,
        "filter": args.filter,
        "orderby": args.orderby,
        "resourceGroupName": args.resourceGroupName,
        "shareSubscriptionName": args.shareSubscriptionName,
        "skipToken": args.skipToken,
        "synchronizationId": args.synchronizationId,
    }, opts);
}

export interface ListShareSubscriptionSynchronizationDetailsArgs {
    /**
     * The name of the share account.
     */
    accountName: string;
    /**
     * Filters the results using OData syntax.
     */
    filter?: string;
    /**
     * Sorts the results using OData syntax.
     */
    orderby?: string;
    /**
     * The resource group name.
     */
    resourceGroupName: string;
    /**
     * The name of the share subscription.
     */
    shareSubscriptionName: string;
    /**
     * Continuation token
     */
    skipToken?: string;
    /**
     * Synchronization id
     */
    synchronizationId: string;
}

/**
 * details of synchronization
 */
export interface ListShareSubscriptionSynchronizationDetailsResult {
    /**
     * The Url of next result page.
     */
    readonly nextLink?: string;
    /**
     * Collection of items of type DataTransferObjects.
     */
    readonly value: types.outputs.SynchronizationDetailsResponse[];
}
/**
 * List synchronization details
 *
 * Uses Azure REST API version 2021-08-01.
 */
export function listShareSubscriptionSynchronizationDetailsOutput(args: ListShareSubscriptionSynchronizationDetailsOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<ListShareSubscriptionSynchronizationDetailsResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:datashare:listShareSubscriptionSynchronizationDetails", {
        "accountName": args.accountName,
        "filter": args.filter,
        "orderby": args.orderby,
        "resourceGroupName": args.resourceGroupName,
        "shareSubscriptionName": args.shareSubscriptionName,
        "skipToken": args.skipToken,
        "synchronizationId": args.synchronizationId,
    }, opts);
}

export interface ListShareSubscriptionSynchronizationDetailsOutputArgs {
    /**
     * The name of the share account.
     */
    accountName: pulumi.Input<string>;
    /**
     * Filters the results using OData syntax.
     */
    filter?: pulumi.Input<string>;
    /**
     * Sorts the results using OData syntax.
     */
    orderby?: pulumi.Input<string>;
    /**
     * The resource group name.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the share subscription.
     */
    shareSubscriptionName: pulumi.Input<string>;
    /**
     * Continuation token
     */
    skipToken?: pulumi.Input<string>;
    /**
     * Synchronization id
     */
    synchronizationId: pulumi.Input<string>;
}