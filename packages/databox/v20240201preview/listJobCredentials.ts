import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * This method gets the unencrypted secrets related to the job.
 */
export function listJobCredentials(args: ListJobCredentialsArgs, opts?: pulumi.InvokeOptions): Promise<ListJobCredentialsResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:databox/v20240201preview:listJobCredentials", {
        "jobName": args.jobName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface ListJobCredentialsArgs {
    /**
     * The name of the job Resource within the specified resource group. job names must be between 3 and 24 characters in length and use any alphanumeric and underscore only
     */
    jobName: string;
    /**
     * The Resource Group Name
     */
    resourceGroupName: string;
}

/**
 * List of unencrypted credentials for accessing device.
 */
export interface ListJobCredentialsResult {
    /**
     * Link for the next set of unencrypted credentials.
     */
    readonly nextLink?: string;
    /**
     * List of unencrypted credentials.
     */
    readonly value?: types.outputs.UnencryptedCredentialsResponse[];
}
/**
 * This method gets the unencrypted secrets related to the job.
 */
export function listJobCredentialsOutput(args: ListJobCredentialsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<ListJobCredentialsResult> {
    return pulumi.output(args).apply((a: any) => listJobCredentials(a, opts))
}

export interface ListJobCredentialsOutputArgs {
    /**
     * The name of the job Resource within the specified resource group. job names must be between 3 and 24 characters in length and use any alphanumeric and underscore only
     */
    jobName: pulumi.Input<string>;
    /**
     * The Resource Group Name
     */
    resourceGroupName: pulumi.Input<string>;
}