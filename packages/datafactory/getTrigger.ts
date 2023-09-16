import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets a trigger.
 * Azure REST API version: 2018-06-01.
 */
export function getTrigger(args: GetTriggerArgs, opts?: pulumi.InvokeOptions): Promise<GetTriggerResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:datafactory:getTrigger", {
        "factoryName": args.factoryName,
        "resourceGroupName": args.resourceGroupName,
        "triggerName": args.triggerName,
    }, opts);
}

export interface GetTriggerArgs {
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
 * Trigger resource type.
 */
export interface GetTriggerResult {
    /**
     * Etag identifies change in the resource.
     */
    readonly etag: string;
    /**
     * The resource identifier.
     */
    readonly id: string;
    /**
     * The resource name.
     */
    readonly name: string;
    /**
     * Properties of the trigger.
     */
    readonly properties: types.outputs.datafactory.BlobEventsTriggerResponse | types.outputs.datafactory.BlobTriggerResponse | types.outputs.datafactory.ChainingTriggerResponse | types.outputs.datafactory.CustomEventsTriggerResponse | types.outputs.datafactory.MultiplePipelineTriggerResponse | types.outputs.datafactory.RerunTumblingWindowTriggerResponse | types.outputs.datafactory.ScheduleTriggerResponse | types.outputs.datafactory.TumblingWindowTriggerResponse;
    /**
     * The resource type.
     */
    readonly type: string;
}
/**
 * Gets a trigger.
 * Azure REST API version: 2018-06-01.
 */
export function getTriggerOutput(args: GetTriggerOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetTriggerResult> {
    return pulumi.output(args).apply((a: any) => getTrigger(a, opts))
}

export interface GetTriggerOutputArgs {
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
