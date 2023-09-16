import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * Gets compute definition by its name. Any secrets (storage keys, service credentials, etc) are not returned - use 'keys' nested resource to get them.
 */
export function getMachineLearningCompute(args: GetMachineLearningComputeArgs, opts?: pulumi.InvokeOptions): Promise<GetMachineLearningComputeResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:machinelearningservices/v20210401:getMachineLearningCompute", {
        "computeName": args.computeName,
        "resourceGroupName": args.resourceGroupName,
        "workspaceName": args.workspaceName,
    }, opts);
}

export interface GetMachineLearningComputeArgs {
    /**
     * Name of the Azure Machine Learning compute.
     */
    computeName: string;
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
 * Machine Learning compute object wrapped into ARM resource envelope.
 */
export interface GetMachineLearningComputeResult {
    /**
     * Specifies the resource ID.
     */
    readonly id: string;
    /**
     * The identity of the resource.
     */
    readonly identity?: types.outputs.machinelearningservices.v20210401.IdentityResponse;
    /**
     * Specifies the location of the resource.
     */
    readonly location?: string;
    /**
     * Specifies the name of the resource.
     */
    readonly name: string;
    /**
     * Compute properties
     */
    readonly properties: types.outputs.machinelearningservices.v20210401.AKSResponse | types.outputs.machinelearningservices.v20210401.AmlComputeResponse | types.outputs.machinelearningservices.v20210401.ComputeInstanceResponse | types.outputs.machinelearningservices.v20210401.DataFactoryResponse | types.outputs.machinelearningservices.v20210401.DataLakeAnalyticsResponse | types.outputs.machinelearningservices.v20210401.DatabricksResponse | types.outputs.machinelearningservices.v20210401.HDInsightResponse | types.outputs.machinelearningservices.v20210401.SynapseSparkResponse | types.outputs.machinelearningservices.v20210401.VirtualMachineResponse;
    /**
     * The sku of the workspace.
     */
    readonly sku?: types.outputs.machinelearningservices.v20210401.SkuResponse;
    /**
     * Read only system data
     */
    readonly systemData: types.outputs.machinelearningservices.v20210401.SystemDataResponse;
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
 * Gets compute definition by its name. Any secrets (storage keys, service credentials, etc) are not returned - use 'keys' nested resource to get them.
 */
export function getMachineLearningComputeOutput(args: GetMachineLearningComputeOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetMachineLearningComputeResult> {
    return pulumi.output(args).apply((a: any) => getMachineLearningCompute(a, opts))
}

export interface GetMachineLearningComputeOutputArgs {
    /**
     * Name of the Azure Machine Learning compute.
     */
    computeName: pulumi.Input<string>;
    /**
     * Name of the resource group in which workspace is located.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Name of Azure Machine Learning workspace.
     */
    workspaceName: pulumi.Input<string>;
}
