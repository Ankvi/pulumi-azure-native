import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Get a trigger's event subscription status.
 */
export function getTriggerEventSubscriptionStatus(args: GetTriggerEventSubscriptionStatusArgs, opts?: pulumi.InvokeOptions): Promise<GetTriggerEventSubscriptionStatusResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:datafactory/v20180601:getTriggerEventSubscriptionStatus", {
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
 */
export function getTriggerEventSubscriptionStatusOutput(args: GetTriggerEventSubscriptionStatusOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetTriggerEventSubscriptionStatusResult> {
    return pulumi.output(args).apply((a: any) => getTriggerEventSubscriptionStatus(a, opts))
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
