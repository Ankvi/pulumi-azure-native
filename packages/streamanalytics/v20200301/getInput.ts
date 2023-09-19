import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets details about the specified input.
 */
export function getInput(args: GetInputArgs, opts?: pulumi.InvokeOptions): Promise<GetInputResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:streamanalytics/v20200301:getInput", {
        "inputName": args.inputName,
        "jobName": args.jobName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetInputArgs {
    /**
     * The name of the input.
     */
    inputName: string;
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
 * An input object, containing all information associated with the named input. All inputs are contained under a streaming job.
 */
export interface GetInputResult {
    /**
     * Resource Id
     */
    readonly id: string;
    /**
     * Resource name
     */
    readonly name?: string;
    /**
     * The properties that are associated with an input. Required on PUT (CreateOrReplace) requests.
     */
    readonly properties: types.outputs.ReferenceInputPropertiesResponse | types.outputs.StreamInputPropertiesResponse;
    /**
     * Resource type
     */
    readonly type: string;
}
/**
 * Gets details about the specified input.
 */
export function getInputOutput(args: GetInputOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetInputResult> {
    return pulumi.output(args).apply((a: any) => getInput(a, opts))
}

export interface GetInputOutputArgs {
    /**
     * The name of the input.
     */
    inputName: pulumi.Input<string>;
    /**
     * The name of the streaming job.
     */
    jobName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}
