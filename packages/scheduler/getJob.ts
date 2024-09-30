import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets a job.
 * Azure REST API version: 2016-03-01.
 */
export function getJob(args: GetJobArgs, opts?: pulumi.InvokeOptions): Promise<GetJobResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:scheduler:getJob", {
        "jobCollectionName": args.jobCollectionName,
        "jobName": args.jobName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetJobArgs {
    /**
     * The job collection name.
     */
    jobCollectionName: string;
    /**
     * The job name.
     */
    jobName: string;
    /**
     * The resource group name.
     */
    resourceGroupName: string;
}

export interface GetJobResult {
    /**
     * Gets the job resource identifier.
     */
    readonly id: string;
    /**
     * Gets the job resource name.
     */
    readonly name: string;
    /**
     * Gets or sets the job properties.
     */
    readonly properties: types.outputs.JobPropertiesResponse;
    /**
     * Gets the job resource type.
     */
    readonly type: string;
}
/**
 * Gets a job.
 * Azure REST API version: 2016-03-01.
 */
export function getJobOutput(args: GetJobOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetJobResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:scheduler:getJob", {
        "jobCollectionName": args.jobCollectionName,
        "jobName": args.jobName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetJobOutputArgs {
    /**
     * The job collection name.
     */
    jobCollectionName: pulumi.Input<string>;
    /**
     * The job name.
     */
    jobName: pulumi.Input<string>;
    /**
     * The resource group name.
     */
    resourceGroupName: pulumi.Input<string>;
}