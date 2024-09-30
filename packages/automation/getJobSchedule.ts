import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Retrieve the job schedule identified by job schedule name.
 * Azure REST API version: 2022-08-08.
 *
 * Other available API versions: 2023-05-15-preview, 2023-11-01.
 */
export function getJobSchedule(args: GetJobScheduleArgs, opts?: pulumi.InvokeOptions): Promise<GetJobScheduleResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:automation:getJobSchedule", {
        "automationAccountName": args.automationAccountName,
        "jobScheduleId": args.jobScheduleId,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetJobScheduleArgs {
    /**
     * The name of the automation account.
     */
    automationAccountName: string;
    /**
     * The job schedule name.
     */
    jobScheduleId: string;
    /**
     * Name of an Azure Resource group.
     */
    resourceGroupName: string;
}

/**
 * Definition of the job schedule.
 */
export interface GetJobScheduleResult {
    /**
     * Gets the id of the resource.
     */
    readonly id: string;
    /**
     * Gets or sets the id of job schedule.
     */
    readonly jobScheduleId?: string;
    /**
     * Gets the name of the variable.
     */
    readonly name: string;
    /**
     * Gets or sets the parameters of the job schedule.
     */
    readonly parameters?: {[key: string]: string};
    /**
     * Gets or sets the hybrid worker group that the scheduled job should run on.
     */
    readonly runOn?: string;
    /**
     * Gets or sets the runbook.
     */
    readonly runbook?: types.outputs.RunbookAssociationPropertyResponse;
    /**
     * Gets or sets the schedule.
     */
    readonly schedule?: types.outputs.ScheduleAssociationPropertyResponse;
    /**
     * Resource type
     */
    readonly type: string;
}
/**
 * Retrieve the job schedule identified by job schedule name.
 * Azure REST API version: 2022-08-08.
 *
 * Other available API versions: 2023-05-15-preview, 2023-11-01.
 */
export function getJobScheduleOutput(args: GetJobScheduleOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetJobScheduleResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:automation:getJobSchedule", {
        "automationAccountName": args.automationAccountName,
        "jobScheduleId": args.jobScheduleId,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetJobScheduleOutputArgs {
    /**
     * The name of the automation account.
     */
    automationAccountName: pulumi.Input<string>;
    /**
     * The job schedule name.
     */
    jobScheduleId: pulumi.Input<string>;
    /**
     * Name of an Azure Resource group.
     */
    resourceGroupName: pulumi.Input<string>;
}