import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets details about the specified function.
 *
 * Uses Azure REST API version 2020-03-01.
 *
 * Other available API versions: 2021-10-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native streamanalytics [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getFunction(args: GetFunctionArgs, opts?: pulumi.InvokeOptions): Promise<GetFunctionResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:streamanalytics:getFunction", {
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
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * A function object, containing all information associated with the named function. All functions are contained under a streaming job.
 */
export interface GetFunctionResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
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
    readonly properties: types.outputs.AggregateFunctionPropertiesResponse | types.outputs.ScalarFunctionPropertiesResponse;
    /**
     * Resource type
     */
    readonly type: string;
}
/**
 * Gets details about the specified function.
 *
 * Uses Azure REST API version 2020-03-01.
 *
 * Other available API versions: 2021-10-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native streamanalytics [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getFunctionOutput(args: GetFunctionOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetFunctionResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:streamanalytics:getFunction", {
        "functionName": args.functionName,
        "jobName": args.jobName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
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
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}