import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Execution details of an experiment resource.
 *
 * Uses Azure REST API version 2024-03-22-preview.
 *
 * Other available API versions: 2023-11-01, 2024-01-01, 2024-11-01-preview, 2025-01-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native chaos [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getExperimentExecutionDetails(args: GetExperimentExecutionDetailsArgs, opts?: pulumi.InvokeOptions): Promise<GetExperimentExecutionDetailsResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:chaos:getExperimentExecutionDetails", {
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
 *
 * Uses Azure REST API version 2024-03-22-preview.
 *
 * Other available API versions: 2023-11-01, 2024-01-01, 2024-11-01-preview, 2025-01-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native chaos [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getExperimentExecutionDetailsOutput(args: GetExperimentExecutionDetailsOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetExperimentExecutionDetailsResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:chaos:getExperimentExecutionDetails", {
        "executionId": args.executionId,
        "experimentName": args.experimentName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
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