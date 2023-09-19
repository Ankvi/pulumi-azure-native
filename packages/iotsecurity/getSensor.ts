import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get IoT sensor
 * Azure REST API version: 2021-02-01-preview.
 */
export function getSensor(args: GetSensorArgs, opts?: pulumi.InvokeOptions): Promise<GetSensorResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:iotsecurity:getSensor", {
        "scope": args.scope,
        "sensorName": args.sensorName,
    }, opts);
}

export interface GetSensorArgs {
    /**
     * Scope of the query (IoT Hub, /providers/Microsoft.Devices/iotHubs/myHub)
     */
    scope: string;
    /**
     * Name of the IoT sensor
     */
    sensorName: string;
}

/**
 * IoT sensor model
 */
export interface GetSensorResult {
    /**
     * Last connectivity time of the IoT sensor
     */
    readonly connectivityTime: string;
    /**
     * Dynamic mode status of the IoT sensor
     */
    readonly dynamicLearning: boolean;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * Learning mode status of the IoT sensor
     */
    readonly learningMode: boolean;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Status of the IoT sensor
     */
    readonly sensorStatus: string;
    /**
     * Type of sensor
     */
    readonly sensorType?: string;
    /**
     * Version of the IoT sensor
     */
    readonly sensorVersion: string;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * TI Automatic mode status of the IoT sensor
     */
    readonly tiAutomaticUpdates?: boolean;
    /**
     * TI Status of the IoT sensor
     */
    readonly tiStatus: string;
    /**
     * TI Version of the IoT sensor
     */
    readonly tiVersion: string;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
    /**
     * Zone of the IoT sensor
     */
    readonly zone?: string;
}
/**
 * Get IoT sensor
 * Azure REST API version: 2021-02-01-preview.
 */
export function getSensorOutput(args: GetSensorOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetSensorResult> {
    return pulumi.output(args).apply((a: any) => getSensor(a, opts))
}

export interface GetSensorOutputArgs {
    /**
     * Scope of the query (IoT Hub, /providers/Microsoft.Devices/iotHubs/myHub)
     */
    scope: pulumi.Input<string>;
    /**
     * Name of the IoT sensor
     */
    sensorName: pulumi.Input<string>;
}
