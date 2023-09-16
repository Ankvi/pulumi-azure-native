import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * Gets a trigger.
 */
export function getTrigger(args: GetTriggerArgs, opts?: pulumi.InvokeOptions): Promise<GetTriggerResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:datafactory/v20180601:getTrigger", {
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
    readonly properties: types.outputs.datafactory.v20180601.BlobEventsTriggerResponse | types.outputs.datafactory.v20180601.BlobTriggerResponse | types.outputs.datafactory.v20180601.ChainingTriggerResponse | types.outputs.datafactory.v20180601.CustomEventsTriggerResponse | types.outputs.datafactory.v20180601.MultiplePipelineTriggerResponse | types.outputs.datafactory.v20180601.RerunTumblingWindowTriggerResponse | types.outputs.datafactory.v20180601.ScheduleTriggerResponse | types.outputs.datafactory.v20180601.TumblingWindowTriggerResponse;
    /**
     * The resource type.
     */
    readonly type: string;
}
/**
 * Gets a trigger.
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
