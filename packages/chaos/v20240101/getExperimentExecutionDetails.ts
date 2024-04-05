import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Execution details of an experiment resource.
 */
export function getExperimentExecutionDetails(args: GetExperimentExecutionDetailsArgs, opts?: pulumi.InvokeOptions): Promise<GetExperimentExecutionDetailsResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:chaos/v20240101:getExperimentExecutionDetails", {
        "executionId": args.executionId,
        "experimentName": args.experimentName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetExperimentExecutionDetailsArgs {
    /**
     * GUID that represents a Experiment execution detail.
     */
    executionId: string;
    /**
     * String that represents a Experiment resource name.
     */
    experimentName: string;
    /**
     * String that represents an Azure resource group.
     */
    resourceGroupName: string;
}

/**
 * Model that represents the execution details of an Experiment.
 */
export interface GetExperimentExecutionDetailsResult {
    /**
     * The reason why the execution failed.
     */
    readonly failureReason: string;
    /**
     * String of the fully qualified resource ID.
     */
    readonly id: string;
    /**
     * String that represents the last action date time.
     */
    readonly lastActionAt: string;
    /**
     * String of the resource name.
     */
    readonly name: string;
    /**
     * The information of the experiment run.
     */
    readonly runInformation: types.outputs.ExperimentExecutionDetailsPropertiesResponseRunInformation;
    /**
     * String that represents the start date time.
     */
    readonly startedAt: string;
    /**
     * The status of the execution.
     */
    readonly status: string;
    /**
     * String that represents the stop date time.
     */
    readonly stoppedAt: string;
    /**
     * String of the resource type.
     */
    readonly type: string;
}
/**
 * Execution details of an experiment resource.
 */
export function getExperimentExecutionDetailsOutput(args: GetExperimentExecutionDetailsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetExperimentExecutionDetailsResult> {
    return pulumi.output(args).apply((a: any) => getExperimentExecutionDetails(a, opts))
}

export interface GetExperimentExecutionDetailsOutputArgs {
    /**
     * GUID that represents a Experiment execution detail.
     */
    executionId: pulumi.Input<string>;
    /**
     * String that represents a Experiment resource name.
     */
    experimentName: pulumi.Input<string>;
    /**
     * String that represents an Azure resource group.
     */
    resourceGroupName: pulumi.Input<string>;
}