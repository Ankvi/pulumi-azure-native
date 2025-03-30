import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Uses Azure REST API version 2023-08-01-preview.
 *
 * Other available API versions: 2024-01-01-preview, 2024-04-01-preview.
 */
export function getInferencePoolStatus(args: GetInferencePoolStatusArgs, opts?: pulumi.InvokeOptions): Promise<GetInferencePoolStatusResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:machinelearningservices:getInferencePoolStatus", {
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
/**
 * Uses Azure REST API version 2023-08-01-preview.
 *
 * Other available API versions: 2024-01-01-preview, 2024-04-01-preview.
 */
export function getInferencePoolStatusOutput(args: GetInferencePoolStatusOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetInferencePoolStatusResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:machinelearningservices:getInferencePoolStatus", {
        "inferencePoolName": args.inferencePoolName,
        "resourceGroupName": args.resourceGroupName,
        "workspaceName": args.workspaceName,
    }, opts);
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