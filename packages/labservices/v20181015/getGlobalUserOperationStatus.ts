import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Gets the status of long running operation
 */
export function getGlobalUserOperationStatus(args: GetGlobalUserOperationStatusArgs, opts?: pulumi.InvokeOptions): Promise<GetGlobalUserOperationStatusResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:labservices/v20181015:getGlobalUserOperationStatus", {
        "operationUrl": args.operationUrl,
        "userName": args.userName,
    }, opts);
}

export interface GetGlobalUserOperationStatusArgs {
    /**
     * The operation url of long running operation
     */
    operationUrl: string;
    /**
     * The name of the user.
     */
    userName: string;
}

/**
 * Status Details of the long running operation for an environment
 */
export interface GetGlobalUserOperationStatusResult {
    /**
     * status of the long running operation for an environment
     */
    readonly status: string;
}
/**
 * Gets the status of long running operation
 */
export function getGlobalUserOperationStatusOutput(args: GetGlobalUserOperationStatusOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetGlobalUserOperationStatusResult> {
    return pulumi.output(args).apply((a: any) => getGlobalUserOperationStatus(a, opts))
}

export interface GetGlobalUserOperationStatusOutputArgs {
    /**
     * The operation url of long running operation
     */
    operationUrl: pulumi.Input<string>;
    /**
     * The name of the user.
     */
    userName: pulumi.Input<string>;
}