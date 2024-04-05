import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * List synchronizations of a share subscription
 */
export function listShareSubscriptionSynchronizations(args: ListShareSubscriptionSynchronizationsArgs, opts?: pulumi.InvokeOptions): Promise<ListShareSubscriptionSynchronizationsResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:datashare/v20210801:listShareSubscriptionSynchronizations", {
        "accountName": args.accountName,
        "filter": args.filter,
        "orderby": args.orderby,
        "resourceGroupName": args.resourceGroupName,
        "shareSubscriptionName": args.shareSubscriptionName,
        "skipToken": args.skipToken,
    }, opts);
}

export interface ListShareSubscriptionSynchronizationsArgs {
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
}

/**
 * A consumer side list of share subscription synchronizations
 */
export interface ListShareSubscriptionSynchronizationsResult {
    /**
     * The Url of next result page.
     */
    readonly nextLink?: string;
    /**
     * Collection of items of type DataTransferObjects.
     */
    readonly value: types.outputs.ShareSubscriptionSynchronizationResponse[];
}
/**
 * List synchronizations of a share subscription
 */
export function listShareSubscriptionSynchronizationsOutput(args: ListShareSubscriptionSynchronizationsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<ListShareSubscriptionSynchronizationsResult> {
    return pulumi.output(args).apply((a: any) => listShareSubscriptionSynchronizations(a, opts))
}

export interface ListShareSubscriptionSynchronizationsOutputArgs {
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
}