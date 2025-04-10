import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * List synchronization details
 *
 * Uses Azure REST API version 2021-08-01.
 */
export function listShareSynchronizationDetails(args: ListShareSynchronizationDetailsArgs, opts?: pulumi.InvokeOptions): Promise<ListShareSynchronizationDetailsResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:datashare:listShareSynchronizationDetails", {
        "accountName": args.accountName,
        "consumerEmail": args.consumerEmail,
        "consumerName": args.consumerName,
        "consumerTenantName": args.consumerTenantName,
        "durationMs": args.durationMs,
        "endTime": args.endTime,
        "filter": args.filter,
        "message": args.message,
        "orderby": args.orderby,
        "resourceGroupName": args.resourceGroupName,
        "shareName": args.shareName,
        "skipToken": args.skipToken,
        "startTime": args.startTime,
        "status": args.status,
        "synchronizationId": args.synchronizationId,
    }, opts);
}

export interface ListShareSynchronizationDetailsArgs {
    /**
     * The name of the share account.
     */
    accountName: string;
    /**
     * Email of the user who created the synchronization
     */
    consumerEmail?: string;
    /**
     * Name of the user who created the synchronization
     */
    consumerName?: string;
    /**
     * Tenant name of the consumer who created the synchronization
     */
    consumerTenantName?: string;
    /**
     * synchronization duration
     */
    durationMs?: number;
    /**
     * End time of synchronization
     */
    endTime?: string;
    /**
     * Filters the results using OData syntax.
     */
    filter?: string;
    /**
     * message of synchronization
     */
    message?: string;
    /**
     * Sorts the results using OData syntax.
     */
    orderby?: string;
    /**
     * The resource group name.
     */
    resourceGroupName: string;
    /**
     * The name of the share.
     */
    shareName: string;
    /**
     * Continuation token
     */
    skipToken?: string;
    /**
     * start time of synchronization
     */
    startTime?: string;
    /**
     * Raw Status
     */
    status?: string;
    /**
     * Synchronization id
     */
    synchronizationId?: string;
}

/**
 * details of synchronization
 */
export interface ListShareSynchronizationDetailsResult {
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
export function listShareSynchronizationDetailsOutput(args: ListShareSynchronizationDetailsOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<ListShareSynchronizationDetailsResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:datashare:listShareSynchronizationDetails", {
        "accountName": args.accountName,
        "consumerEmail": args.consumerEmail,
        "consumerName": args.consumerName,
        "consumerTenantName": args.consumerTenantName,
        "durationMs": args.durationMs,
        "endTime": args.endTime,
        "filter": args.filter,
        "message": args.message,
        "orderby": args.orderby,
        "resourceGroupName": args.resourceGroupName,
        "shareName": args.shareName,
        "skipToken": args.skipToken,
        "startTime": args.startTime,
        "status": args.status,
        "synchronizationId": args.synchronizationId,
    }, opts);
}

export interface ListShareSynchronizationDetailsOutputArgs {
    /**
     * The name of the share account.
     */
    accountName: pulumi.Input<string>;
    /**
     * Email of the user who created the synchronization
     */
    consumerEmail?: pulumi.Input<string>;
    /**
     * Name of the user who created the synchronization
     */
    consumerName?: pulumi.Input<string>;
    /**
     * Tenant name of the consumer who created the synchronization
     */
    consumerTenantName?: pulumi.Input<string>;
    /**
     * synchronization duration
     */
    durationMs?: pulumi.Input<number>;
    /**
     * End time of synchronization
     */
    endTime?: pulumi.Input<string>;
    /**
     * Filters the results using OData syntax.
     */
    filter?: pulumi.Input<string>;
    /**
     * message of synchronization
     */
    message?: pulumi.Input<string>;
    /**
     * Sorts the results using OData syntax.
     */
    orderby?: pulumi.Input<string>;
    /**
     * The resource group name.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the share.
     */
    shareName: pulumi.Input<string>;
    /**
     * Continuation token
     */
    skipToken?: pulumi.Input<string>;
    /**
     * start time of synchronization
     */
    startTime?: pulumi.Input<string>;
    /**
     * Raw Status
     */
    status?: pulumi.Input<string>;
    /**
     * Synchronization id
     */
    synchronizationId?: pulumi.Input<string>;
}