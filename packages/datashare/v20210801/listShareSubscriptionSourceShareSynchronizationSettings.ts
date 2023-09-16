import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * Get synchronization settings set on a share
 */
export function listShareSubscriptionSourceShareSynchronizationSettings(args: ListShareSubscriptionSourceShareSynchronizationSettingsArgs, opts?: pulumi.InvokeOptions): Promise<ListShareSubscriptionSourceShareSynchronizationSettingsResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:datashare/v20210801:listShareSubscriptionSourceShareSynchronizationSettings", {
        "accountName": args.accountName,
        "resourceGroupName": args.resourceGroupName,
        "shareSubscriptionName": args.shareSubscriptionName,
        "skipToken": args.skipToken,
    }, opts);
}

export interface ListShareSubscriptionSourceShareSynchronizationSettingsArgs {
    /**
     * The name of the share account.
     */
    accountName: string;
    /**
     * The resource group name.
     */
    resourceGroupName: string;
    /**
     * The name of the shareSubscription.
     */
    shareSubscriptionName: string;
    /**
     * Continuation token
     */
    skipToken?: string;
}

/**
 * List response for get source share Synchronization settings
 */
export interface ListShareSubscriptionSourceShareSynchronizationSettingsResult {
    /**
     * The Url of next result page.
     */
    readonly nextLink?: string;
    /**
     * Collection of items of type DataTransferObjects.
     */
    readonly value: types.outputs.datashare.v20210801.ScheduledSourceSynchronizationSettingResponse[];
}
/**
 * Get synchronization settings set on a share
 */
export function listShareSubscriptionSourceShareSynchronizationSettingsOutput(args: ListShareSubscriptionSourceShareSynchronizationSettingsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<ListShareSubscriptionSourceShareSynchronizationSettingsResult> {
    return pulumi.output(args).apply((a: any) => listShareSubscriptionSourceShareSynchronizationSettings(a, opts))
}

export interface ListShareSubscriptionSourceShareSynchronizationSettingsOutputArgs {
    /**
     * The name of the share account.
     */
    accountName: pulumi.Input<string>;
    /**
     * The resource group name.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the shareSubscription.
     */
    shareSubscriptionName: pulumi.Input<string>;
    /**
     * Continuation token
     */
    skipToken?: pulumi.Input<string>;
}
