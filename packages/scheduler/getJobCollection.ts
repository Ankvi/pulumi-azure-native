import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets a job collection.
 *
 * Uses Azure REST API version 2016-03-01.
 */
export function getJobCollection(args: GetJobCollectionArgs, opts?: pulumi.InvokeOptions): Promise<GetJobCollectionResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:scheduler:getJobCollection", {
        "jobCollectionName": args.jobCollectionName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetJobCollectionArgs {
    /**
     * The job collection name.
     */
    jobCollectionName: string;
    /**
     * The resource group name.
     */
    resourceGroupName: string;
}

export interface GetJobCollectionResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * Gets the job collection resource identifier.
     */
    readonly id: string;
    /**
     * Gets or sets the storage account location.
     */
    readonly location?: string;
    /**
     * Gets or sets the job collection resource name.
     */
    readonly name?: string;
    /**
     * Gets or sets the job collection properties.
     */
    readonly properties: types.outputs.JobCollectionPropertiesResponse;
    /**
     * Gets or sets the tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * Gets the job collection resource type.
     */
    readonly type: string;
}
/**
 * Gets a job collection.
 *
 * Uses Azure REST API version 2016-03-01.
 */
export function getJobCollectionOutput(args: GetJobCollectionOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetJobCollectionResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:scheduler:getJobCollection", {
        "jobCollectionName": args.jobCollectionName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetJobCollectionOutputArgs {
    /**
     * The job collection name.
     */
    jobCollectionName: pulumi.Input<string>;
    /**
     * The resource group name.
     */
    resourceGroupName: pulumi.Input<string>;
}