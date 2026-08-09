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
     * The name of the resource group. The name is case insensitive.
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
     * "If etag is provided in the response body, it may also be provided as a header per the normal etag convention.  Entity tags are used for comparing two or more entities from the same requested resource. HTTP/1.1 uses entity tags in the etag (section 14.19), If-Match (section 14.24), If-None-Match (section 14.26), and If-Range (section 14.27) header fields.")
     */
    readonly etag: string;
    /**
     * The folder that this CDC is in. If not specified, CDC will appear at the root level.
     */
    readonly folder?: types.outputs.ChangeDataCaptureFolderResponse;
    /**
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
     */
    readonly id: string;
    /**
     * The name of the resource
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
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * List of target connections that can be used as sources in the CDC.
     */
    readonly targetConnectionsInfo: types.outputs.MapperTargetConnectionsInfoResponse[];
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
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
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}