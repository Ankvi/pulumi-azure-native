import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * A paginated list of Feature entities.
 * Azure REST API version: 2023-02-01-preview.
 */
export function listFeaturesetVersionFeatures(args: ListFeaturesetVersionFeaturesArgs, opts?: pulumi.InvokeOptions): Promise<ListFeaturesetVersionFeaturesResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:machinelearningservices:listFeaturesetVersionFeatures", {
        "name": args.name,
        "resourceGroupName": args.resourceGroupName,
        "skip": args.skip,
        "tags": args.tags,
        "version": args.version,
        "workspaceName": args.workspaceName,
    }, opts);
}

export interface ListFeaturesetVersionFeaturesArgs {
    /**
     * Featureset name. This is case-sensitive.
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
     * Comma-separated list of tag names (and optionally values). Example: tag1,tag2=value2
     */
    tags?: string;
    /**
     * Featureset Version identifier. This is case-sensitive.
     */
    version: string;
    /**
     * Name of Azure Machine Learning workspace.
     */
    workspaceName: string;
}

/**
 * A paginated list of Feature entities.
 */
export interface ListFeaturesetVersionFeaturesResult {
    /**
     * The link to the next page of Feature objects. If null, there are no additional pages.
     */
    readonly nextLink?: string;
    /**
     * An array of objects of type Feature.
     */
    readonly value?: types.outputs.machinelearningservices.FeatureResponse[];
}
/**
 * A paginated list of Feature entities.
 * Azure REST API version: 2023-02-01-preview.
 */
export function listFeaturesetVersionFeaturesOutput(args: ListFeaturesetVersionFeaturesOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<ListFeaturesetVersionFeaturesResult> {
    return pulumi.output(args).apply((a: any) => listFeaturesetVersionFeatures(a, opts))
}

export interface ListFeaturesetVersionFeaturesOutputArgs {
    /**
     * Featureset name. This is case-sensitive.
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
     * Comma-separated list of tag names (and optionally values). Example: tag1,tag2=value2
     */
    tags?: pulumi.Input<string>;
    /**
     * Featureset Version identifier. This is case-sensitive.
     */
    version: pulumi.Input<string>;
    /**
     * Name of Azure Machine Learning workspace.
     */
    workspaceName: pulumi.Input<string>;
}
