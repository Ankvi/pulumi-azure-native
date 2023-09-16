import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * Gets compute definition by its name. Any secrets (storage keys, service credentials, etc) are not returned - use 'keys' nested resource to get them.
 */
export function getCompute(args: GetComputeArgs, opts?: pulumi.InvokeOptions): Promise<GetComputeResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:machinelearningservices/v20230401:getCompute", {
        "computeName": args.computeName,
        "resourceGroupName": args.resourceGroupName,
        "workspaceName": args.workspaceName,
    }, opts);
}

export interface GetComputeArgs {
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
 * Machine Learning compute object wrapped into ARM resource envelope.
 */
export interface GetComputeResult {
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The identity of the resource.
     */
    readonly identity?: types.outputs.machinelearningservices.v20230401.ManagedServiceIdentityResponse;
    /**
     * Specifies the location of the resource.
     */
    readonly location?: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Compute properties
     */
    readonly properties: types.outputs.machinelearningservices.v20230401.AKSResponse | types.outputs.machinelearningservices.v20230401.AmlComputeResponse | types.outputs.machinelearningservices.v20230401.ComputeInstanceResponse | types.outputs.machinelearningservices.v20230401.DataFactoryResponse | types.outputs.machinelearningservices.v20230401.DataLakeAnalyticsResponse | types.outputs.machinelearningservices.v20230401.DatabricksResponse | types.outputs.machinelearningservices.v20230401.HDInsightResponse | types.outputs.machinelearningservices.v20230401.KubernetesResponse | types.outputs.machinelearningservices.v20230401.SynapseSparkResponse | types.outputs.machinelearningservices.v20230401.VirtualMachineResponse;
    /**
     * The sku of the workspace.
     */
    readonly sku?: types.outputs.machinelearningservices.v20230401.SkuResponse;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.machinelearningservices.v20230401.SystemDataResponse;
    /**
     * Contains resource tags defined as key/value pairs.
     */
    readonly tags?: {[key: string]: string};
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Gets compute definition by its name. Any secrets (storage keys, service credentials, etc) are not returned - use 'keys' nested resource to get them.
 */
export function getComputeOutput(args: GetComputeOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetComputeResult> {
    return pulumi.output(args).apply((a: any) => getCompute(a, opts))
}

export interface GetComputeOutputArgs {
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
