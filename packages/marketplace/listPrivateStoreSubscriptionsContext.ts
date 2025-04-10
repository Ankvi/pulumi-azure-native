import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * List all the subscriptions in the private store context
 *
 * Uses Azure REST API version 2023-01-01.
 *
 * Other available API versions: 2021-12-01, 2022-03-01, 2022-09-01.
 */
export function listPrivateStoreSubscriptionsContext(args: ListPrivateStoreSubscriptionsContextArgs, opts?: pulumi.InvokeOptions): Promise<ListPrivateStoreSubscriptionsContextResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:marketplace:listPrivateStoreSubscriptionsContext", {
        "privateStoreId": args.privateStoreId,
    }, opts);
}

export interface ListPrivateStoreSubscriptionsContextArgs {
    /**
     * The store ID - must use the tenant ID
     */
    privateStoreId: string;
}

/**
 * List of subscription Ids in the private store
 */
export interface ListPrivateStoreSubscriptionsContextResult {
    readonly subscriptionsIds?: string[];
}
/**
 * List all the subscriptions in the private store context
 *
 * Uses Azure REST API version 2023-01-01.
 *
 * Other available API versions: 2021-12-01, 2022-03-01, 2022-09-01.
 */
export function listPrivateStoreSubscriptionsContextOutput(args: ListPrivateStoreSubscriptionsContextOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<ListPrivateStoreSubscriptionsContextResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:marketplace:listPrivateStoreSubscriptionsContext", {
        "privateStoreId": args.privateStoreId,
    }, opts);
}

export interface ListPrivateStoreSubscriptionsContextOutputArgs {
    /**
     * The store ID - must use the tenant ID
     */
    privateStoreId: pulumi.Input<string>;
}