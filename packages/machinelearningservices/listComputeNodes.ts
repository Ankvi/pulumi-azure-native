import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get the details (e.g IP address, port etc) of all the compute nodes in the compute.
 * Azure REST API version: 2023-04-01.
 *
 * Other available API versions: 2022-01-01-preview, 2023-04-01-preview, 2023-06-01-preview, 2023-08-01-preview, 2023-10-01, 2024-01-01-preview.
 */
export function listComputeNodes(args: ListComputeNodesArgs, opts?: pulumi.InvokeOptions): Promise<ListComputeNodesResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:machinelearningservices:listComputeNodes", {
        "computeName": args.computeName,
        "resourceGroupName": args.resourceGroupName,
        "workspaceName": args.workspaceName,
    }, opts);
}

export interface ListComputeNodesArgs {
    /**
     * Name of the Azure Machine Learning compute.
     */
    computeName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * Name of Azure Machine Learning workspace.
     */
    workspaceName: string;
}

/**
 * Result of AmlCompute Nodes
 */
export interface ListComputeNodesResult {
    /**
     * The continuation token.
     */
    readonly nextLink: string;
    /**
     * The collection of returned AmlCompute nodes details.
     */
    readonly nodes: types.outputs.AmlComputeNodeInformationResponse[];
}
/**
 * Get the details (e.g IP address, port etc) of all the compute nodes in the compute.
 * Azure REST API version: 2023-04-01.
 *
 * Other available API versions: 2022-01-01-preview, 2023-04-01-preview, 2023-06-01-preview, 2023-08-01-preview, 2023-10-01, 2024-01-01-preview.
 */
export function listComputeNodesOutput(args: ListComputeNodesOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<ListComputeNodesResult> {
    return pulumi.output(args).apply((a: any) => listComputeNodes(a, opts))
}

export interface ListComputeNodesOutputArgs {
    /**
     * Name of the Azure Machine Learning compute.
     */
    computeName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Name of Azure Machine Learning workspace.
     */
    workspaceName: pulumi.Input<string>;
}