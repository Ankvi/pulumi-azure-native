import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets a trigger.
 *
 * Uses Azure REST API version 2018-06-01.
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
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
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
    readonly properties: types.outputs.BlobEventsTriggerResponse | types.outputs.BlobTriggerResponse | types.outputs.ChainingTriggerResponse | types.outputs.CustomEventsTriggerResponse | types.outputs.MultiplePipelineTriggerResponse | types.outputs.RerunTumblingWindowTriggerResponse | types.outputs.ScheduleTriggerResponse | types.outputs.TumblingWindowTriggerResponse;
    /**
     * The resource type.
     */
    readonly type: string;
}
/**
 * Gets a trigger.
 *
 * Uses Azure REST API version 2018-06-01.
 */
export function getTriggerOutput(args: GetTriggerOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetTriggerResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:datafactory:getTrigger", {
        "factoryName": args.factoryName,
        "resourceGroupName": args.resourceGroupName,
        "triggerName": args.triggerName,
    }, opts);
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