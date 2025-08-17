import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Returns supported virtual machine sizes for resize
 *
 * Uses Azure REST API version 2025-01-01-preview.
 *
 * Other available API versions: 2023-08-01-preview, 2024-01-01-preview, 2024-07-01-preview, 2024-10-01-preview, 2025-04-01-preview, 2025-07-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native machinelearningservices [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
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
 *
 * Uses Azure REST API version 2025-01-01-preview.
 *
 * Other available API versions: 2023-08-01-preview, 2024-01-01-preview, 2024-07-01-preview, 2024-10-01-preview, 2025-04-01-preview, 2025-07-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native machinelearningservices [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getComputeAllowedResizeSizesOutput(args: GetComputeAllowedResizeSizesOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetComputeAllowedResizeSizesResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:machinelearningservices:getComputeAllowedResizeSizes", {
        "computeName": args.computeName,
        "resourceGroupName": args.resourceGroupName,
        "workspaceName": args.workspaceName,
    }, opts);
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