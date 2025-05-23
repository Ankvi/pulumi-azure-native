import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets a change data capture.
 *
 * Uses Azure REST API version 2018-06-01.
 */
export function getChangeDataCapture(args: GetChangeDataCaptureArgs, opts?: pulumi.InvokeOptions): Promise<GetChangeDataCaptureResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:datafactory:getChangeDataCapture", {
        "changeDataCaptureName": args.changeDataCaptureName,
        "factoryName": args.factoryName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetChangeDataCaptureArgs {
    /**
     * The change data capture name.
     */
    changeDataCaptureName: string;
    /**
     * The factory name.
     */
    factoryName: string;
    /**
     * The resource group name.
     */
    resourceGroupName: string;
}

/**
 * Change data capture resource type.
 */
export interface GetChangeDataCaptureResult {
    /**
     * A boolean to determine if the vnet configuration needs to be overwritten.
     */
    readonly allowVNetOverride?: boolean;
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * The description of the change data capture.
     */
    readonly description?: string;
    /**
     * Etag identifies change in the resource.
     */
    readonly etag: string;
    /**
     * The folder that this CDC is in. If not specified, CDC will appear at the root level.
     */
    readonly folder?: types.outputs.ChangeDataCaptureResponseFolder;
    /**
     * The resource identifier.
     */
    readonly id: string;
    /**
     * The resource name.
     */
    readonly name: string;
    /**
     * CDC policy
     */
    readonly policy: types.outputs.MapperPolicyResponse;
    /**
     * List of sources connections that can be used as sources in the CDC.
     */
    readonly sourceConnectionsInfo: types.outputs.MapperSourceConnectionsInfoResponse[];
    /**
     * Status of the CDC as to if it is running or stopped.
     */
    readonly status?: string;
    /**
     * List of target connections that can be used as sources in the CDC.
     */
    readonly targetConnectionsInfo: types.outputs.MapperTargetConnectionsInfoResponse[];
    /**
     * The resource type.
     */
    readonly type: string;
}
/**
 * Gets a change data capture.
 *
 * Uses Azure REST API version 2018-06-01.
 */
export function getChangeDataCaptureOutput(args: GetChangeDataCaptureOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetChangeDataCaptureResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:datafactory:getChangeDataCapture", {
        "changeDataCaptureName": args.changeDataCaptureName,
        "factoryName": args.factoryName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetChangeDataCaptureOutputArgs {
    /**
     * The change data capture name.
     */
    changeDataCaptureName: pulumi.Input<string>;
    /**
     * The factory name.
     */
    factoryName: pulumi.Input<string>;
    /**
     * The resource group name.
     */
    resourceGroupName: pulumi.Input<string>;
}