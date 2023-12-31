import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets details about the specified function.
 */
export function getFunction(args: GetFunctionArgs, opts?: pulumi.InvokeOptions): Promise<GetFunctionResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:streamanalytics/v20160301:getFunction", {
        "functionName": args.functionName,
        "jobName": args.jobName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetFunctionArgs {
    /**
     * The name of the function.
     */
    functionName: string;
    /**
     * The name of the streaming job.
     */
    jobName: string;
    /**
     * The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
     */
    resourceGroupName: string;
}

/**
 * A function object, containing all information associated with the named function. All functions are contained under a streaming job.
 */
export interface GetFunctionResult {
    /**
     * Resource Id
     */
    readonly id: string;
    /**
     * Resource name
     */
    readonly name?: string;
    /**
     * The properties that are associated with a function.
     */
    readonly properties: types.outputs.ScalarFunctionPropertiesResponse;
    /**
     * Resource type
     */
    readonly type: string;
}
/**
 * Gets details about the specified function.
 */
export function getFunctionOutput(args: GetFunctionOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetFunctionResult> {
    return pulumi.output(args).apply((a: any) => getFunction(a, opts))
}

export interface GetFunctionOutputArgs {
    /**
     * The name of the function.
     */
    functionName: pulumi.Input<string>;
    /**
     * The name of the streaming job.
     */
    jobName: pulumi.Input<string>;
    /**
     * The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
     */
    resourceGroupName: pulumi.Input<string>;
}
