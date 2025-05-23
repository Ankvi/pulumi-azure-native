import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * A paginated list of FeaturesetJob entities.
 *
 * Uses Azure REST API version 2023-06-01-preview.
 *
 * Other available API versions: 2023-02-01-preview, 2023-04-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native machinelearningservices [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function listFeaturesetVersionMaterializationJobs(args: ListFeaturesetVersionMaterializationJobsArgs, opts?: pulumi.InvokeOptions): Promise<ListFeaturesetVersionMaterializationJobsResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:machinelearningservices:listFeaturesetVersionMaterializationJobs", {
        "featureWindowEnd": args.featureWindowEnd,
        "featureWindowStart": args.featureWindowStart,
        "filters": args.filters,
        "name": args.name,
        "resourceGroupName": args.resourceGroupName,
        "skip": args.skip,
        "version": args.version,
        "workspaceName": args.workspaceName,
    }, opts);
}

export interface ListFeaturesetVersionMaterializationJobsArgs {
    /**
     * End time of the feature window to filter materialization jobs.
     */
    featureWindowEnd?: string;
    /**
     * Start time of the feature window to filter materialization jobs.
     */
    featureWindowStart?: string;
    /**
     * Comma-separated list of tag names (and optionally values). Example: tag1,tag2=value2
     */
    filters?: string;
    /**
     * Container name. This is case-sensitive.
     */
    name: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * Continuation token for pagination.
     */
    skip?: string;
    /**
     * Version identifier. This is case-sensitive.
     */
    version: string;
    /**
     * Name of Azure Machine Learning workspace.
     */
    workspaceName: string;
}

/**
 * A paginated list of FeaturesetJob entities.
 */
export interface ListFeaturesetVersionMaterializationJobsResult {
    /**
     * The link to the next page of FeaturesetJob objects. If null, there are no additional pages.
     */
    readonly nextLink?: string;
    /**
     * An array of objects of type FeaturesetJob.
     */
    readonly value?: types.outputs.FeaturesetJobResponse[];
}
/**
 * A paginated list of FeaturesetJob entities.
 *
 * Uses Azure REST API version 2023-06-01-preview.
 *
 * Other available API versions: 2023-02-01-preview, 2023-04-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native machinelearningservices [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function listFeaturesetVersionMaterializationJobsOutput(args: ListFeaturesetVersionMaterializationJobsOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<ListFeaturesetVersionMaterializationJobsResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:machinelearningservices:listFeaturesetVersionMaterializationJobs", {
        "featureWindowEnd": args.featureWindowEnd,
        "featureWindowStart": args.featureWindowStart,
        "filters": args.filters,
        "name": args.name,
        "resourceGroupName": args.resourceGroupName,
        "skip": args.skip,
        "version": args.version,
        "workspaceName": args.workspaceName,
    }, opts);
}

export interface ListFeaturesetVersionMaterializationJobsOutputArgs {
    /**
     * End time of the feature window to filter materialization jobs.
     */
    featureWindowEnd?: pulumi.Input<string>;
    /**
     * Start time of the feature window to filter materialization jobs.
     */
    featureWindowStart?: pulumi.Input<string>;
    /**
     * Comma-separated list of tag names (and optionally values). Example: tag1,tag2=value2
     */
    filters?: pulumi.Input<string>;
    /**
     * Container name. This is case-sensitive.
     */
    name: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Continuation token for pagination.
     */
    skip?: pulumi.Input<string>;
    /**
     * Version identifier. This is case-sensitive.
     */
    version: pulumi.Input<string>;
    /**
     * Name of Azure Machine Learning workspace.
     */
    workspaceName: pulumi.Input<string>;
}