import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets information about an existing job.
 * Azure REST API version: 2021-01-01.
 */
export function getJob(args: GetJobArgs, opts?: pulumi.InvokeOptions): Promise<GetJobResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:importexport:getJob", {
        "jobName": args.jobName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetJobArgs {
    /**
     * The name of the import/export job.
     */
    jobName: string;
    /**
     * The resource group name uniquely identifies the resource group within the user subscription.
     */
    resourceGroupName: string;
}

/**
 * Contains the job information.
 */
export interface GetJobResult {
    /**
     * Specifies the resource identifier of the job.
     */
    readonly id: string;
    /**
     * Specifies the job identity details
     */
    readonly identity?: types.outputs.IdentityDetailsResponse;
    /**
     * Specifies the Azure location where the job is created.
     */
    readonly location?: string;
    /**
     * Specifies the name of the job.
     */
    readonly name: string;
    /**
     * Specifies the job properties
     */
    readonly properties: types.outputs.JobDetailsResponse;
    /**
     * SystemData of ImportExport Jobs.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * Specifies the tags that are assigned to the job.
     */
    readonly tags?: any;
    /**
     * Specifies the type of the job resource.
     */
    readonly type: string;
}
/**
 * Gets information about an existing job.
 * Azure REST API version: 2021-01-01.
 */
export function getJobOutput(args: GetJobOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetJobResult> {
    return pulumi.output(args).apply((a: any) => getJob(a, opts))
}

export interface GetJobOutputArgs {
    /**
     * The name of the import/export job.
     */
    jobName: pulumi.Input<string>;
    /**
     * The resource group name uniquely identifies the resource group within the user subscription.
     */
    resourceGroupName: pulumi.Input<string>;
}