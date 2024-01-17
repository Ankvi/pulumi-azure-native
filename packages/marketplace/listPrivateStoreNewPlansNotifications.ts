import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * List new plans notifications
 * Azure REST API version: 2023-01-01.
 *
 * Other available API versions: 2021-12-01, 2022-03-01, 2022-09-01.
 */
export function listPrivateStoreNewPlansNotifications(args: ListPrivateStoreNewPlansNotificationsArgs, opts?: pulumi.InvokeOptions): Promise<ListPrivateStoreNewPlansNotificationsResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:marketplace:listPrivateStoreNewPlansNotifications", {
        "privateStoreId": args.privateStoreId,
    }, opts);
}

export interface ListPrivateStoreNewPlansNotificationsArgs {
    /**
     * The store ID - must use the tenant ID
     */
    privateStoreId: string;
}

/**
 * List of all new plans notifications for public offers
 */
export interface ListPrivateStoreNewPlansNotificationsResult {
    readonly newPlansNotifications?: types.outputs.NewNotificationsResponse[];
}
/**
 * List new plans notifications
 * Azure REST API version: 2023-01-01.
 *
 * Other available API versions: 2021-12-01, 2022-03-01, 2022-09-01.
 */
export function listPrivateStoreNewPlansNotificationsOutput(args: ListPrivateStoreNewPlansNotificationsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<ListPrivateStoreNewPlansNotificationsResult> {
    return pulumi.output(args).apply((a: any) => listPrivateStoreNewPlansNotifications(a, opts))
}

export interface ListPrivateStoreNewPlansNotificationsOutputArgs {
    /**
     * The store ID - must use the tenant ID
     */
    privateStoreId: pulumi.Input<string>;
}