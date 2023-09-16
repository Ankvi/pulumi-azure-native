import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Represents a container on the  Data Box Edge/Gateway device.
 * Azure REST API version: 2022-03-01.
 */
export function getContainer(args: GetContainerArgs, opts?: pulumi.InvokeOptions): Promise<GetContainerResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:databoxedge:getContainer", {
        "containerName": args.containerName,
        "deviceName": args.deviceName,
        "resourceGroupName": args.resourceGroupName,
        "storageAccountName": args.storageAccountName,
    }, opts);
}

export interface GetContainerArgs {
    /**
     * The container Name
     */
    containerName: string;
    /**
     * The device name.
     */
    deviceName: string;
    /**
     * The resource group name.
     */
    resourceGroupName: string;
    /**
     * The Storage Account Name
     */
    storageAccountName: string;
}

/**
 * Represents a container on the  Data Box Edge/Gateway device.
 */
export interface GetContainerResult {
    /**
     * Current status of the container.
     */
    readonly containerStatus: string;
    /**
     * The UTC time when container got created.
     */
    readonly createdDateTime: string;
    /**
     * DataFormat for Container
     */
    readonly dataFormat: string;
    /**
     * The path ID that uniquely identifies the object.
     */
    readonly id: string;
    /**
     * The object name.
     */
    readonly name: string;
    /**
     * Details of the refresh job on this container.
     */
    readonly refreshDetails: types.outputs.databoxedge.RefreshDetailsResponse;
    /**
     * Metadata pertaining to creation and last modification of Container
     */
    readonly systemData: types.outputs.databoxedge.SystemDataResponse;
    /**
     * The hierarchical type of the object.
     */
    readonly type: string;
}
/**
 * Represents a container on the  Data Box Edge/Gateway device.
 * Azure REST API version: 2022-03-01.
 */
export function getContainerOutput(args: GetContainerOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetContainerResult> {
    return pulumi.output(args).apply((a: any) => getContainer(a, opts))
}

export interface GetContainerOutputArgs {
    /**
     * The container Name
     */
    containerName: pulumi.Input<string>;
    /**
     * The device name.
     */
    deviceName: pulumi.Input<string>;
    /**
     * The resource group name.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The Storage Account Name
     */
    storageAccountName: pulumi.Input<string>;
}
