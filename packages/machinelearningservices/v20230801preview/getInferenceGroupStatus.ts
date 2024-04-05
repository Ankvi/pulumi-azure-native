import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
export function getInferenceGroupStatus(args: GetInferenceGroupStatusArgs, opts?: pulumi.InvokeOptions): Promise<GetInferenceGroupStatusResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:machinelearningservices/v20230801preview:getInferenceGroupStatus", {
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
     * Gets or sets capacity used from the pool's reserved capacity.
     */
    readonly bonusExtraCapacity?: number;
    /**
     * Gets or sets the actual number of endpoints in the group.
     */
    readonly endpointCount?: number;
    /**
     * Gets or sets the request number of instances for the group.
     */
    readonly requestedCapacity?: number;
}
export function getInferenceGroupStatusOutput(args: GetInferenceGroupStatusOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetInferenceGroupStatusResult> {
    return pulumi.output(args).apply((a: any) => getInferenceGroupStatus(a, opts))
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