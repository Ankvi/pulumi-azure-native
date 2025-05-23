import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * List new plans notifications
 *
 * Uses Azure REST API version 2023-01-01.
 *
 * Other available API versions: 2025-01-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native marketplace [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
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
 *
 * Uses Azure REST API version 2023-01-01.
 *
 * Other available API versions: 2025-01-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native marketplace [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function listPrivateStoreNewPlansNotificationsOutput(args: ListPrivateStoreNewPlansNotificationsOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<ListPrivateStoreNewPlansNotificationsResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:marketplace:listPrivateStoreNewPlansNotifications", {
        "privateStoreId": args.privateStoreId,
    }, opts);
}

export interface ListPrivateStoreNewPlansNotificationsOutputArgs {
    /**
     * The store ID - must use the tenant ID
     */
    privateStoreId: pulumi.Input<string>;
}