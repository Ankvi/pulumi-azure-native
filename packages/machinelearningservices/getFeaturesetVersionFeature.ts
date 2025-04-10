import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Dto object representing feature
 *
 * Uses Azure REST API version 2023-02-01-preview.
 */
export function getFeaturesetVersionFeature(args: GetFeaturesetVersionFeatureArgs, opts?: pulumi.InvokeOptions): Promise<GetFeaturesetVersionFeatureResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:machinelearningservices:getFeaturesetVersionFeature", {
        "featureName": args.featureName,
        "name": args.name,
        "resourceGroupName": args.resourceGroupName,
        "version": args.version,
        "workspaceName": args.workspaceName,
    }, opts);
}

export interface GetFeaturesetVersionFeatureArgs {
    /**
     * Specifies name of the feature.
     */
    featureName?: string;
    /**
     * Feature set name. This is case-sensitive.
     */
    name: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * Feature set version identifier. This is case-sensitive.
     */
    version: string;
    /**
     * Name of Azure Machine Learning workspace.
     */
    workspaceName: string;
}

/**
 * Dto object representing feature
 */
export interface GetFeaturesetVersionFeatureResult {
    /**
     * Specifies type
     */
    readonly dataType?: string;
    /**
     * Specifies description
     */
    readonly description?: string;
    /**
     * Specifies name
     */
    readonly featureName?: string;
    /**
     * Specifies tags
     */
    readonly tags?: {[key: string]: string};
}
/**
 * Dto object representing feature
 *
 * Uses Azure REST API version 2023-02-01-preview.
 */
export function getFeaturesetVersionFeatureOutput(args: GetFeaturesetVersionFeatureOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetFeaturesetVersionFeatureResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:machinelearningservices:getFeaturesetVersionFeature", {
        "featureName": args.featureName,
        "name": args.name,
        "resourceGroupName": args.resourceGroupName,
        "version": args.version,
        "workspaceName": args.workspaceName,
    }, opts);
}

export interface GetFeaturesetVersionFeatureOutputArgs {
    /**
     * Specifies name of the feature.
     */
    featureName?: pulumi.Input<string>;
    /**
     * Feature set name. This is case-sensitive.
     */
    name: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Feature set version identifier. This is case-sensitive.
     */
    version: pulumi.Input<string>;
    /**
     * Name of Azure Machine Learning workspace.
     */
    workspaceName: pulumi.Input<string>;
}