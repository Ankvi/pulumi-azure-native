import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Uses Azure REST API version 2025-01-01-preview.
 *
 * Other available API versions: 2023-08-01-preview, 2024-01-01-preview, 2024-10-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native machinelearningservices [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getInferenceGroupStatus(args: GetInferenceGroupStatusArgs, opts?: pulumi.InvokeOptions): Promise<GetInferenceGroupStatusResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:machinelearningservices:getInferenceGroupStatus", {
        "groupName": args.groupName,
        "poolName": args.poolName,
        "resourceGroupName": args.resourceGroupName,
        "workspaceName": args.workspaceName,
    }, opts);
}

export interface GetInferenceGroupStatusArgs {
    /**
     * InferenceGroup name.
     */
    groupName: string;
    /**
     * InferencePool name.
     */
    poolName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * Name of Azure Machine Learning workspace.
     */
    workspaceName: string;
}

export interface GetInferenceGroupStatusResult {
    /**
     * Gets or sets the actual capacity info for the group.
     */
    readonly actualCapacityInfo?: types.outputs.ActualCapacityInfoResponse;
    /**
     * Gets or sets the actual number of endpoints in the group.
     */
    readonly endpointCount?: number;
    /**
     * Gets or sets the request number of instances for the group.
     */
    readonly requestedCapacity?: number;
}
/**
 * Uses Azure REST API version 2025-01-01-preview.
 *
 * Other available API versions: 2023-08-01-preview, 2024-01-01-preview, 2024-10-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native machinelearningservices [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getInferenceGroupStatusOutput(args: GetInferenceGroupStatusOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetInferenceGroupStatusResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:machinelearningservices:getInferenceGroupStatus", {
        "groupName": args.groupName,
        "poolName": args.poolName,
        "resourceGroupName": args.resourceGroupName,
        "workspaceName": args.workspaceName,
    }, opts);
}

export interface GetInferenceGroupStatusOutputArgs {
    /**
     * InferenceGroup name.
     */
    groupName: pulumi.Input<string>;
    /**
     * InferencePool name.
     */
    poolName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Name of Azure Machine Learning workspace.
     */
    workspaceName: pulumi.Input<string>;
}