import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * List synchronizations of a share
 * Azure REST API version: 2021-08-01.
 */
export function listShareSynchronizations(args: ListShareSynchronizationsArgs, opts?: pulumi.InvokeOptions): Promise<ListShareSynchronizationsResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:datashare:listShareSynchronizations", {
        "accountName": args.accountName,
        "filter": args.filter,
        "orderby": args.orderby,
        "resourceGroupName": args.resourceGroupName,
        "shareName": args.shareName,
        "skipToken": args.skipToken,
    }, opts);
}

export interface ListShareSynchronizationsArgs {
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
     * The name of the share.
     */
    shareName: string;
    /**
     * Continuation token
     */
    skipToken?: string;
}

/**
 * List response for get ShareSynchronization.
 */
export interface ListShareSynchronizationsResult {
    /**
     * The Url of next result page.
     */
    readonly nextLink?: string;
    /**
     * Collection of items of type DataTransferObjects.
     */
    readonly value: types.outputs.ShareSynchronizationResponse[];
}
/**
 * List synchronizations of a share
 * Azure REST API version: 2021-08-01.
 */
export function listShareSynchronizationsOutput(args: ListShareSynchronizationsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<ListShareSynchronizationsResult> {
    return pulumi.output(args).apply((a: any) => listShareSynchronizations(a, opts))
}

export interface ListShareSynchronizationsOutputArgs {
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
     * The name of the share.
     */
    shareName: pulumi.Input<string>;
    /**
     * Continuation token
     */
    skipToken?: pulumi.Input<string>;
}
