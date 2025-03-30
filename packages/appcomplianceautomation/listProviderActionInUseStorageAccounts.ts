import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * List the storage accounts which are in use by related reports
 *
 * Uses Azure REST API version 2024-06-27.
 */
export function listProviderActionInUseStorageAccounts(args?: ListProviderActionInUseStorageAccountsArgs, opts?: pulumi.InvokeOptions): Promise<ListProviderActionInUseStorageAccountsResult> {
    args = args || {};
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:appcomplianceautomation:listProviderActionInUseStorageAccounts", {
        "subscriptionIds": args.subscriptionIds,
    }, opts);
}

export interface ListProviderActionInUseStorageAccountsArgs {
    /**
     * List of subscription ids to be query. If the list is null or empty, the API will query all the subscriptions of the user.
     */
    subscriptionIds?: string[];
}

/**
 * Parameters for listing in use storage accounts operation. If subscription list is null, it will check the user's all subscriptions.
 */
export interface ListProviderActionInUseStorageAccountsResult {
    /**
     * The storage account list which in use in related reports.
     */
    readonly storageAccountList?: types.outputs.StorageInfoResponse[];
}
/**
 * List the storage accounts which are in use by related reports
 *
 * Uses Azure REST API version 2024-06-27.
 */
export function listProviderActionInUseStorageAccountsOutput(args?: ListProviderActionInUseStorageAccountsOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<ListProviderActionInUseStorageAccountsResult> {
    args = args || {};
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:appcomplianceautomation:listProviderActionInUseStorageAccounts", {
        "subscriptionIds": args.subscriptionIds,
    }, opts);
}

export interface ListProviderActionInUseStorageAccountsOutputArgs {
    /**
     * List of subscription ids to be query. If the list is null or empty, the API will query all the subscriptions of the user.
     */
    subscriptionIds?: pulumi.Input<pulumi.Input<string>[]>;
}