import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Azure Resource Manager resource envelope.
 * Azure REST API version: 2023-04-01-preview.
 *
 * Other available API versions: 2020-09-01-preview, 2021-03-01-preview, 2023-06-01-preview, 2023-08-01-preview.
 */
export function getLabelingJob(args: GetLabelingJobArgs, opts?: pulumi.InvokeOptions): Promise<GetLabelingJobResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:machinelearningservices:getLabelingJob", {
        "id": args.id,
        "includeJobInstructions": args.includeJobInstructions,
        "includeLabelCategories": args.includeLabelCategories,
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
     * Boolean value to indicate whether to include JobInstructions in response.
     */
    includeJobInstructions?: boolean;
    /**
     * Boolean value to indicate Whether to include LabelCategories in response.
     */
    includeLabelCategories?: boolean;
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
 * Azure REST API version: 2023-04-01-preview.
 *
 * Other available API versions: 2020-09-01-preview, 2021-03-01-preview, 2023-06-01-preview, 2023-08-01-preview.
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
     * Boolean value to indicate whether to include JobInstructions in response.
     */
    includeJobInstructions?: pulumi.Input<boolean>;
    /**
     * Boolean value to indicate Whether to include LabelCategories in response.
     */
    includeLabelCategories?: pulumi.Input<boolean>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Name of Azure Machine Learning workspace.
     */
    workspaceName: pulumi.Input<string>;
}
