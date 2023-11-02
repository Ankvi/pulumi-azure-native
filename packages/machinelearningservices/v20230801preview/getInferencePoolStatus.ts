import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
export function getInferencePoolStatus(args: GetInferencePoolStatusArgs, opts?: pulumi.InvokeOptions): Promise<GetInferencePoolStatusResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:machinelearningservices/v20230801preview:getInferencePoolStatus", {
        "inferencePoolName": args.inferencePoolName,
        "resourceGroupName": args.resourceGroupName,
        "workspaceName": args.workspaceName,
    }, opts);
}

export interface GetInferencePoolStatusArgs {
    /**
     * Name of InferencePool
     */
    inferencePoolName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * Name of Azure Machine Learning workspace.
     */
    workspaceName: string;
}

export interface GetInferencePoolStatusResult {
    /**
     * Gets or sets the actual number of instances in the pool.
     */
    readonly actualCapacity?: number;
    /**
     * Gets or sets the actual number of groups in the pool.
     */
    readonly groupCount?: number;
    /**
     * Gets or sets the requested number of instances for the pool.
     */
    readonly requestedCapacity?: number;
    /**
     * Gets or sets the number of instances in the pool reserved by the system.
     */
    readonly reservedCapacity?: number;
}
export function getInferencePoolStatusOutput(args: GetInferencePoolStatusOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetInferencePoolStatusResult> {
    return pulumi.output(args).apply((a: any) => getInferencePoolStatus(a, opts))
}

export interface GetInferencePoolStatusOutputArgs {
    /**
     * Name of InferencePool
     */
    inferencePoolName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Name of Azure Machine Learning workspace.
     */
    workspaceName: pulumi.Input<string>;
}