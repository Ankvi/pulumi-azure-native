import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * List stop sell notifications for both stop sell offers and stop sell plans
 *
 * Uses Azure REST API version 2023-01-01.
 *
 * Other available API versions: 2025-01-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native marketplace [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function listPrivateStoreStopSellOffersPlansNotifications(args: ListPrivateStoreStopSellOffersPlansNotificationsArgs, opts?: pulumi.InvokeOptions): Promise<ListPrivateStoreStopSellOffersPlansNotificationsResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:marketplace:listPrivateStoreStopSellOffersPlansNotifications", {
        "privateStoreId": args.privateStoreId,
        "subscriptions": args.subscriptions,
    }, opts);
}

export interface ListPrivateStoreStopSellOffersPlansNotificationsArgs {
    /**
     * The store ID - must use the tenant ID
     */
    privateStoreId: string;
    subscriptions?: string[];
}

/**
 * List of stop sell offers and plans notifications.
 */
export interface ListPrivateStoreStopSellOffersPlansNotificationsResult {
    readonly stopSellNotifications?: types.outputs.StopSellOffersPlansNotificationsListPropertiesResponse[];
}
/**
 * List stop sell notifications for both stop sell offers and stop sell plans
 *
 * Uses Azure REST API version 2023-01-01.
 *
 * Other available API versions: 2025-01-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native marketplace [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function listPrivateStoreStopSellOffersPlansNotificationsOutput(args: ListPrivateStoreStopSellOffersPlansNotificationsOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<ListPrivateStoreStopSellOffersPlansNotificationsResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:marketplace:listPrivateStoreStopSellOffersPlansNotifications", {
        "privateStoreId": args.privateStoreId,
        "subscriptions": args.subscriptions,
    }, opts);
}

export interface ListPrivateStoreStopSellOffersPlansNotificationsOutputArgs {
    /**
     * The store ID - must use the tenant ID
     */
    privateStoreId: pulumi.Input<string>;
    subscriptions?: pulumi.Input<pulumi.Input<string>[]>;
}