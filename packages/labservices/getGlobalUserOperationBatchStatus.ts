import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get batch operation status
 * Azure REST API version: 2018-10-15.
 */
export function getGlobalUserOperationBatchStatus(args: GetGlobalUserOperationBatchStatusArgs, opts?: pulumi.InvokeOptions): Promise<GetGlobalUserOperationBatchStatusResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:labservices:getGlobalUserOperationBatchStatus", {
        "urls": args.urls,
        "userName": args.userName,
    }, opts);
}

export interface GetGlobalUserOperationBatchStatusArgs {
    /**
     * The operation url of long running operation
     */
    urls: string[];
    /**
     * The name of the user.
     */
    userName: string;
}

/**
 * Status Details of the long running operation for an environment
 */
export interface GetGlobalUserOperationBatchStatusResult {
    /**
     * Gets a collection of items that contain the operation url and status.
     */
    readonly items: types.outputs.OperationBatchStatusResponseItemResponse[];
}
/**
 * Get batch operation status
 * Azure REST API version: 2018-10-15.
 */
export function getGlobalUserOperationBatchStatusOutput(args: GetGlobalUserOperationBatchStatusOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetGlobalUserOperationBatchStatusResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:labservices:getGlobalUserOperationBatchStatus", {
        "urls": args.urls,
        "userName": args.userName,
    }, opts);
}

export interface GetGlobalUserOperationBatchStatusOutputArgs {
    /**
     * The operation url of long running operation
     */
    urls: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The name of the user.
     */
    userName: pulumi.Input<string>;
}