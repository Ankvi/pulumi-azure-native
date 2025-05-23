import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Get a trigger's event subscription status.
 *
 * Uses Azure REST API version 2018-06-01.
 */
export function getTriggerEventSubscriptionStatus(args: GetTriggerEventSubscriptionStatusArgs, opts?: pulumi.InvokeOptions): Promise<GetTriggerEventSubscriptionStatusResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:datafactory:getTriggerEventSubscriptionStatus", {
        "factoryName": args.factoryName,
        "resourceGroupName": args.resourceGroupName,
        "triggerName": args.triggerName,
    }, opts);
}

export interface GetTriggerEventSubscriptionStatusArgs {
    /**
     * The factory name.
     */
    factoryName: string;
    /**
     * The resource group name.
     */
    resourceGroupName: string;
    /**
     * The trigger name.
     */
    triggerName: string;
}

/**
 * Defines the response of a trigger subscription operation.
 */
export interface GetTriggerEventSubscriptionStatusResult {
    /**
     * Event Subscription Status.
     */
    readonly status: string;
    /**
     * Trigger name.
     */
    readonly triggerName: string;
}
/**
 * Get a trigger's event subscription status.
 *
 * Uses Azure REST API version 2018-06-01.
 */
export function getTriggerEventSubscriptionStatusOutput(args: GetTriggerEventSubscriptionStatusOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetTriggerEventSubscriptionStatusResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:datafactory:getTriggerEventSubscriptionStatus", {
        "factoryName": args.factoryName,
        "resourceGroupName": args.resourceGroupName,
        "triggerName": args.triggerName,
    }, opts);
}

export interface GetTriggerEventSubscriptionStatusOutputArgs {
    /**
     * The factory name.
     */
    factoryName: pulumi.Input<string>;
    /**
     * The resource group name.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The trigger name.
     */
    triggerName: pulumi.Input<string>;
}