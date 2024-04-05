import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets a job step in a job's current version.
 */
export function getJobStep(args: GetJobStepArgs, opts?: pulumi.InvokeOptions): Promise<GetJobStepResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:sql/v20230201preview:getJobStep", {
        "jobAgentName": args.jobAgentName,
        "jobName": args.jobName,
        "resourceGroupName": args.resourceGroupName,
        "serverName": args.serverName,
        "stepName": args.stepName,
    }, opts);
}

export interface GetJobStepArgs {
    /**
     * The name of the job agent.
     */
    jobAgentName: string;
    /**
     * The name of the job.
     */
    jobName: string;
    /**
     * The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
     */
    resourceGroupName: string;
    /**
     * The name of the server.
     */
    serverName: string;
    /**
     * The name of the job step.
     */
    stepName: string;
}

/**
 * A job step.
 */
export interface GetJobStepResult {
    /**
     * The action payload of the job step.
     */
    readonly action: types.outputs.JobStepActionResponse;
    /**
     * The resource ID of the job credential that will be used to connect to the targets.
     */
    readonly credential: string;
    /**
     * Execution options for the job step.
     */
    readonly executionOptions?: types.outputs.JobStepExecutionOptionsResponse;
    /**
     * Resource ID.
     */
    readonly id: string;
    /**
     * Resource name.
     */
    readonly name: string;
    /**
     * Output destination properties of the job step.
     */
    readonly output?: types.outputs.JobStepOutputResponse;
    /**
     * The job step's index within the job. If not specified when creating the job step, it will be created as the last step. If not specified when updating the job step, the step id is not modified.
     */
    readonly stepId?: number;
    /**
     * The resource ID of the target group that the job step will be executed on.
     */
    readonly targetGroup: string;
    /**
     * Resource type.
     */
    readonly type: string;
}
/**
 * Gets a job step in a job's current version.
 */
export function getJobStepOutput(args: GetJobStepOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetJobStepResult> {
    return pulumi.output(args).apply((a: any) => getJobStep(a, opts))
}

export interface GetJobStepOutputArgs {
    /**
     * The name of the job agent.
     */
    jobAgentName: pulumi.Input<string>;
    /**
     * The name of the job.
     */
    jobName: pulumi.Input<string>;
    /**
     * The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the server.
     */
    serverName: pulumi.Input<string>;
    /**
     * The name of the job step.
     */
    stepName: pulumi.Input<string>;
}