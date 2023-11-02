import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Azure Resource Manager resource envelope.
 */
export function getLabelingJob(args: GetLabelingJobArgs, opts?: pulumi.InvokeOptions): Promise<GetLabelingJobResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:machinelearningservices/v20230801preview:getLabelingJob", {
        "id": args.id,
        "resourceGroupName": args.resourceGroupName,
        "workspaceName": args.workspaceName,
    }, opts);
}

export interface GetLabelingJobArgs {
    /**
     * The name and identifier for the LabelingJob.
     */
    id: string;
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
 * Azure Resource Manager resource envelope.
 */
export interface GetLabelingJobResult {
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * [Required] Additional attributes of the entity.
     */
    readonly labelingJobProperties: types.outputs.LabelingJobResponse;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Azure Resource Manager resource envelope.
 */
export function getLabelingJobOutput(args: GetLabelingJobOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetLabelingJobResult> {
    return pulumi.output(args).apply((a: any) => getLabelingJob(a, opts))
}

export interface GetLabelingJobOutputArgs {
    /**
     * The name and identifier for the LabelingJob.
     */
    id: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Name of Azure Machine Learning workspace.
     */
    workspaceName: pulumi.Input<string>;
}