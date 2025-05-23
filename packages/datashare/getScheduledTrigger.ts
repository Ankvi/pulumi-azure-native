import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a Trigger in a shareSubscription
 *
 * Uses Azure REST API version 2021-08-01.
 */
export function getScheduledTrigger(args: GetScheduledTriggerArgs, opts?: pulumi.InvokeOptions): Promise<GetScheduledTriggerResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:datashare:getScheduledTrigger", {
        "accountName": args.accountName,
        "resourceGroupName": args.resourceGroupName,
        "shareSubscriptionName": args.shareSubscriptionName,
        "triggerName": args.triggerName,
    }, opts);
}

export interface GetScheduledTriggerArgs {
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
     * The name of the trigger.
     */
    triggerName: string;
}

/**
 * A type of trigger based on schedule
 */
export interface GetScheduledTriggerResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * Time at which the trigger was created.
     */
    readonly createdAt: string;
    /**
     * The resource id of the azure resource
     */
    readonly id: string;
    /**
     * Kind of synchronization on trigger.
     * Expected value is 'ScheduleBased'.
     */
    readonly kind: "ScheduleBased";
    /**
     * Name of the azure resource
     */
    readonly name: string;
    /**
     * Gets the provisioning state
     */
    readonly provisioningState: string;
    /**
     * Recurrence Interval
     */
    readonly recurrenceInterval: string;
    /**
     * Synchronization mode
     */
    readonly synchronizationMode?: string;
    /**
     * Synchronization time
     */
    readonly synchronizationTime: string;
    /**
     * System Data of the Azure resource.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * Gets the trigger state
     */
    readonly triggerStatus: string;
    /**
     * Type of the azure resource
     */
    readonly type: string;
    /**
     * Name of the user who created the trigger.
     */
    readonly userName: string;
}
/**
 * Get a Trigger in a shareSubscription
 *
 * Uses Azure REST API version 2021-08-01.
 */
export function getScheduledTriggerOutput(args: GetScheduledTriggerOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetScheduledTriggerResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:datashare:getScheduledTrigger", {
        "accountName": args.accountName,
        "resourceGroupName": args.resourceGroupName,
        "shareSubscriptionName": args.shareSubscriptionName,
        "triggerName": args.triggerName,
    }, opts);
}

export interface GetScheduledTriggerOutputArgs {
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
     * The name of the trigger.
     */
    triggerName: pulumi.Input<string>;
}