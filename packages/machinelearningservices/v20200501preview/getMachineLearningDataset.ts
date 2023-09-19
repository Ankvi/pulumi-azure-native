import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a Dataset by name.
 */
export function getMachineLearningDataset(args: GetMachineLearningDatasetArgs, opts?: pulumi.InvokeOptions): Promise<GetMachineLearningDatasetResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:machinelearningservices/v20200501preview:getMachineLearningDataset", {
        "datasetName": args.datasetName,
        "resourceGroupName": args.resourceGroupName,
        "workspaceName": args.workspaceName,
    }, opts);
}

export interface GetMachineLearningDatasetArgs {
    /**
     * The Dataset name.
     */
    datasetName: string;
    /**
     * Name of the resource group in which workspace is located.
     */
    resourceGroupName: string;
    /**
     * Name of Azure Machine Learning workspace.
     */
    workspaceName: string;
}

/**
 * Machine Learning dataset object wrapped into ARM resource envelope.
 */
export interface GetMachineLearningDatasetResult {
    /**
     * Specifies the resource ID.
     */
    readonly id: string;
    /**
     * The identity of the resource.
     */
    readonly identity?: types.outputs.IdentityResponse;
    /**
     * Specifies the location of the resource.
     */
    readonly location?: string;
    /**
     * Specifies the name of the resource.
     */
    readonly name: string;
    /**
     * Dataset properties
     */
    readonly properties: types.outputs.DatasetResponse;
    /**
     * The sku of the workspace.
     */
    readonly sku?: types.outputs.SkuResponse;
    /**
     * Contains resource tags defined as key/value pairs.
     */
    readonly tags?: {[key: string]: string};
    /**
     * Specifies the type of the resource.
     */
    readonly type: string;
}
/**
 * Get a Dataset by name.
 */
export function getMachineLearningDatasetOutput(args: GetMachineLearningDatasetOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetMachineLearningDatasetResult> {
    return pulumi.output(args).apply((a: any) => getMachineLearningDataset(a, opts))
}

export interface GetMachineLearningDatasetOutputArgs {
    /**
     * The Dataset name.
     */
    datasetName: pulumi.Input<string>;
    /**
     * Name of the resource group in which workspace is located.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Name of Azure Machine Learning workspace.
     */
    workspaceName: pulumi.Input<string>;
}
