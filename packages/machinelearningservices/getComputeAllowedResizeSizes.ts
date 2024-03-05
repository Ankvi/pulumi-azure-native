import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Returns supported virtual machine sizes for resize
 * Azure REST API version: 2023-08-01-preview.
 *
 * Other available API versions: 2024-01-01-preview.
 */
export function getComputeAllowedResizeSizes(args: GetComputeAllowedResizeSizesArgs, opts?: pulumi.InvokeOptions): Promise<GetComputeAllowedResizeSizesResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:machinelearningservices:getComputeAllowedResizeSizes", {
        "computeName": args.computeName,
        "resourceGroupName": args.resourceGroupName,
        "workspaceName": args.workspaceName,
    }, opts);
}

export interface GetComputeAllowedResizeSizesArgs {
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
 * The List Virtual Machine size operation response.
 */
export interface GetComputeAllowedResizeSizesResult {
    /**
     * The list of virtual machine sizes supported by AmlCompute.
     */
    readonly value?: types.outputs.VirtualMachineSizeResponse[];
}
/**
 * Returns supported virtual machine sizes for resize
 * Azure REST API version: 2023-08-01-preview.
 *
 * Other available API versions: 2024-01-01-preview.
 */
export function getComputeAllowedResizeSizesOutput(args: GetComputeAllowedResizeSizesOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetComputeAllowedResizeSizesResult> {
    return pulumi.output(args).apply((a: any) => getComputeAllowedResizeSizes(a, opts))
}

export interface GetComputeAllowedResizeSizesOutputArgs {
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