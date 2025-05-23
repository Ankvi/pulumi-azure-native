import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a synchronizationSetting in a share
 *
 * Uses Azure REST API version 2021-08-01.
 */
export function getScheduledSynchronizationSetting(args: GetScheduledSynchronizationSettingArgs, opts?: pulumi.InvokeOptions): Promise<GetScheduledSynchronizationSettingResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:datashare:getScheduledSynchronizationSetting", {
        "accountName": args.accountName,
        "resourceGroupName": args.resourceGroupName,
        "shareName": args.shareName,
        "synchronizationSettingName": args.synchronizationSettingName,
    }, opts);
}

export interface GetScheduledSynchronizationSettingArgs {
    /**
     * The name of the share account.
     */
    accountName: string;
    /**
     * The resource group name.
     */
    resourceGroupName: string;
    /**
     * The name of the share.
     */
    shareName: string;
    /**
     * The name of the synchronizationSetting.
     */
    synchronizationSettingName: string;
}

/**
 * A type of synchronization setting based on schedule
 */
export interface GetScheduledSynchronizationSettingResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * Time at which the synchronization setting was created.
     */
    readonly createdAt: string;
    /**
     * The resource id of the azure resource
     */
    readonly id: string;
    /**
     * Kind of synchronization setting.
     * Expected value is 'ScheduleBased'.
     */
    readonly kind: "ScheduleBased";
    /**
     * Name of the azure resource
     */
    readonly name: string;
    /**
     * Gets or sets the provisioning state
     */
    readonly provisioningState: string;
    /**
     * Recurrence Interval
     */
    readonly recurrenceInterval: string;
    /**
     * Synchronization time
     */
    readonly synchronizationTime: string;
    /**
     * System Data of the Azure resource.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * Type of the azure resource
     */
    readonly type: string;
    /**
     * Name of the user who created the synchronization setting.
     */
    readonly userName: string;
}
/**
 * Get a synchronizationSetting in a share
 *
 * Uses Azure REST API version 2021-08-01.
 */
export function getScheduledSynchronizationSettingOutput(args: GetScheduledSynchronizationSettingOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetScheduledSynchronizationSettingResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:datashare:getScheduledSynchronizationSetting", {
        "accountName": args.accountName,
        "resourceGroupName": args.resourceGroupName,
        "shareName": args.shareName,
        "synchronizationSettingName": args.synchronizationSettingName,
    }, opts);
}

export interface GetScheduledSynchronizationSettingOutputArgs {
    /**
     * The name of the share account.
     */
    accountName: pulumi.Input<string>;
    /**
     * The resource group name.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the share.
     */
    shareName: pulumi.Input<string>;
    /**
     * The name of the synchronizationSetting.
     */
    synchronizationSettingName: pulumi.Input<string>;
}