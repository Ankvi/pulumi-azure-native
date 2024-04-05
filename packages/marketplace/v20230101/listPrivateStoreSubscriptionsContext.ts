import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * List all the subscriptions in the private store context
 */
export function listPrivateStoreSubscriptionsContext(args: ListPrivateStoreSubscriptionsContextArgs, opts?: pulumi.InvokeOptions): Promise<ListPrivateStoreSubscriptionsContextResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:marketplace/v20230101:listPrivateStoreSubscriptionsContext", {
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
 */
export function listPrivateStoreSubscriptionsContextOutput(args: ListPrivateStoreSubscriptionsContextOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<ListPrivateStoreSubscriptionsContextResult> {
    return pulumi.output(args).apply((a: any) => listPrivateStoreSubscriptionsContext(a, opts))
}

export interface ListPrivateStoreSubscriptionsContextOutputArgs {
    /**
     * The store ID - must use the tenant ID
     */
    privateStoreId: pulumi.Input<string>;
}