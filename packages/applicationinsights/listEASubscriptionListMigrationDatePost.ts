import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * list date to migrate to new pricing model.
 *
 * Uses Azure REST API version 2017-10-01.
 */
export function listEASubscriptionListMigrationDatePost(args?: ListEASubscriptionListMigrationDatePostArgs, opts?: pulumi.InvokeOptions): Promise<ListEASubscriptionListMigrationDatePostResult> {
    args = args || {};
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:applicationinsights:listEASubscriptionListMigrationDatePost", {
    }, opts);
}

export interface ListEASubscriptionListMigrationDatePostArgs {
}

/**
 * Subscription migrate date information properties
 */
export interface ListEASubscriptionListMigrationDatePostResult {
    /**
     * Is subscription in the grand fatherable subscription list.
     */
    readonly isGrandFatherableSubscription?: boolean;
    /**
     * Time to start using new pricing model.
     */
    readonly optedInDate?: string;
}
/**
 * list date to migrate to new pricing model.
 *
 * Uses Azure REST API version 2017-10-01.
 */
export function listEASubscriptionListMigrationDatePostOutput(opts?: pulumi.InvokeOutputOptions): pulumi.Output<ListEASubscriptionListMigrationDatePostResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:applicationinsights:listEASubscriptionListMigrationDatePost", {
    }, opts);
}