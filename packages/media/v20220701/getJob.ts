import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * Gets a Job.
 */
export function getJob(args: GetJobArgs, opts?: pulumi.InvokeOptions): Promise<GetJobResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:media/v20220701:getJob", {
        "accountName": args.accountName,
        "jobName": args.jobName,
        "resourceGroupName": args.resourceGroupName,
        "transformName": args.transformName,
    }, opts);
}

export interface GetJobArgs {
    /**
     * The Media Services account name.
     */
    accountName: string;
    /**
     * The Job name.
     */
    jobName: string;
    /**
     * The name of the resource group within the Azure subscription.
     */
    resourceGroupName: string;
    /**
     * The Transform name.
     */
    transformName: string;
}

/**
 * A Job resource type. The progress and state can be obtained by polling a Job or subscribing to events using EventGrid.
 */
export interface GetJobResult {
    /**
     * Customer provided key, value pairs that will be returned in Job and JobOutput state events.
     */
    readonly correlationData?: {[key: string]: string};
    /**
     * The UTC date and time when the customer has created the Job, in 'YYYY-MM-DDThh:mm:ssZ' format.
     */
    readonly created: string;
    /**
     * Optional customer supplied description of the Job.
     */
    readonly description?: string;
    /**
     * The UTC date and time at which this Job finished processing.
     */
    readonly endTime: string;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The inputs for the Job.
     */
    readonly input: types.outputs.media.v20220701.JobInputAssetResponse | types.outputs.media.v20220701.JobInputClipResponse | types.outputs.media.v20220701.JobInputHttpResponse | types.outputs.media.v20220701.JobInputSequenceResponse | types.outputs.media.v20220701.JobInputsResponse;
    /**
     * The UTC date and time when the customer has last updated the Job, in 'YYYY-MM-DDThh:mm:ssZ' format.
     */
    readonly lastModified: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The outputs for the Job.
     */
    readonly outputs: types.outputs.media.v20220701.JobOutputAssetResponse[];
    /**
     * Priority with which the job should be processed. Higher priority jobs are processed before lower priority jobs. If not set, the default is normal.
     */
    readonly priority?: string;
    /**
     * The UTC date and time at which this Job began processing.
     */
    readonly startTime: string;
    /**
     * The current state of the job.
     */
    readonly state: string;
    /**
     * The system metadata relating to this resource.
     */
    readonly systemData: types.outputs.media.v20220701.SystemDataResponse;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Gets a Job.
 */
export function getJobOutput(args: GetJobOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetJobResult> {
    return pulumi.output(args).apply((a: any) => getJob(a, opts))
}

export interface GetJobOutputArgs {
    /**
     * The Media Services account name.
     */
    accountName: pulumi.Input<string>;
    /**
     * The Job name.
     */
    jobName: pulumi.Input<string>;
    /**
     * The name of the resource group within the Azure subscription.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The Transform name.
     */
    transformName: pulumi.Input<string>;
}
