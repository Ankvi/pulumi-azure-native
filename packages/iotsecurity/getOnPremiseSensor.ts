import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get on-premise IoT sensor
 * Azure REST API version: 2021-02-01-preview.
 */
export function getOnPremiseSensor(args: GetOnPremiseSensorArgs, opts?: pulumi.InvokeOptions): Promise<GetOnPremiseSensorResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:iotsecurity:getOnPremiseSensor", {
        "onPremiseSensorName": args.onPremiseSensorName,
    }, opts);
}

export interface GetOnPremiseSensorArgs {
    /**
     * Name of the on-premise IoT sensor
     */
    onPremiseSensorName: string;
}

/**
 * On-premise IoT sensor
 */
export interface GetOnPremiseSensorResult {
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.iotsecurity.SystemDataResponse;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Get on-premise IoT sensor
 * Azure REST API version: 2021-02-01-preview.
 */
export function getOnPremiseSensorOutput(args: GetOnPremiseSensorOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetOnPremiseSensorResult> {
    return pulumi.output(args).apply((a: any) => getOnPremiseSensor(a, opts))
}

export interface GetOnPremiseSensorOutputArgs {
    /**
     * Name of the on-premise IoT sensor
     */
    onPremiseSensorName: pulumi.Input<string>;
}
