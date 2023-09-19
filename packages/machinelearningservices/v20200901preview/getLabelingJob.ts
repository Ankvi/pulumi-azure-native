import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets a labeling job by id.
 */
export function getLabelingJob(args: GetLabelingJobArgs, opts?: pulumi.InvokeOptions): Promise<GetLabelingJobResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:machinelearningservices/v20200901preview:getLabelingJob", {
        "includeJobInstructions": args.includeJobInstructions,
        "includeLabelCategories": args.includeLabelCategories,
        "labelingJobId": args.labelingJobId,
        "resourceGroupName": args.resourceGroupName,
        "workspaceName": args.workspaceName,
    }, opts);
}

export interface GetLabelingJobArgs {
    /**
     * Boolean value to indicate whether to include JobInstructions in response.
     */
    includeJobInstructions?: boolean;
    /**
     * Boolean value to indicate whether to include LabelCategories in response.
     */
    includeLabelCategories?: boolean;
    /**
     * Name and identifier for LabelingJob.
     */
    labelingJobId: string;
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
 * Machine Learning labeling job object wrapped into ARM resource envelope.
 */
export interface GetLabelingJobResult {
    /**
     * The resource URL of the entity (not URL encoded).
     */
    readonly id: string;
    /**
     * The name of the resource entity.
     */
    readonly name: string;
    /**
     * Definition of a labeling job.
     */
    readonly properties: types.outputs.LabelingJobPropertiesResponse;
    /**
     * Metadata pertaining to creation and last modification of the resource.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * The resource provider and type.
     */
    readonly type: string;
}
/**
 * Gets a labeling job by id.
 */
export function getLabelingJobOutput(args: GetLabelingJobOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetLabelingJobResult> {
    return pulumi.output(args).apply((a: any) => getLabelingJob(a, opts))
}

export interface GetLabelingJobOutputArgs {
    /**
     * Boolean value to indicate whether to include JobInstructions in response.
     */
    includeJobInstructions?: pulumi.Input<boolean>;
    /**
     * Boolean value to indicate whether to include LabelCategories in response.
     */
    includeLabelCategories?: pulumi.Input<boolean>;
    /**
     * Name and identifier for LabelingJob.
     */
    labelingJobId: pulumi.Input<string>;
    /**
     * Name of the resource group in which workspace is located.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Name of Azure Machine Learning workspace.
     */
    workspaceName: pulumi.Input<string>;
}
