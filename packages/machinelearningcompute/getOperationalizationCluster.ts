import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the operationalization cluster resource view. Note that the credentials are not returned by this call. Call ListKeys to get them.
 * Azure REST API version: 2017-08-01-preview.
 *
 * Other available API versions: 2017-06-01-preview.
 */
export function getOperationalizationCluster(args: GetOperationalizationClusterArgs, opts?: pulumi.InvokeOptions): Promise<GetOperationalizationClusterResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:machinelearningcompute:getOperationalizationCluster", {
        "clusterName": args.clusterName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetOperationalizationClusterArgs {
    /**
     * The name of the cluster.
     */
    clusterName: string;
    /**
     * Name of the resource group in which the cluster is located.
     */
    resourceGroupName: string;
}

/**
 * Instance of an Azure ML Operationalization Cluster resource.
 */
export interface GetOperationalizationClusterResult {
    /**
     * AppInsights configuration.
     */
    readonly appInsights?: types.outputs.AppInsightsPropertiesResponse;
    /**
     * The cluster type.
     */
    readonly clusterType: string;
    /**
     * Container Registry properties.
     */
    readonly containerRegistry?: types.outputs.ContainerRegistryPropertiesResponse;
    /**
     * Parameters for the Azure Container Service cluster.
     */
    readonly containerService?: types.outputs.AcsClusterPropertiesResponse;
    /**
     * The date and time when the cluster was created.
     */
    readonly createdOn: string;
    /**
     * The description of the cluster.
     */
    readonly description?: string;
    /**
     * Contains global configuration for the web services in the cluster.
     */
    readonly globalServiceConfiguration?: types.outputs.GlobalServiceConfigurationResponse;
    /**
     * Specifies the resource ID.
     */
    readonly id: string;
    /**
     * Specifies the location of the resource.
     */
    readonly location: string;
    /**
     * The date and time when the cluster was last modified.
     */
    readonly modifiedOn: string;
    /**
     * Specifies the name of the resource.
     */
    readonly name: string;
    /**
     * List of provisioning errors reported by the resource provider.
     */
    readonly provisioningErrors: types.outputs.ErrorResponseWrapperResponse[];
    /**
     * The provision state of the cluster. Valid values are Unknown, Updating, Provisioning, Succeeded, and Failed.
     */
    readonly provisioningState: string;
    /**
     * Storage Account properties.
     */
    readonly storageAccount?: types.outputs.StorageAccountPropertiesResponse;
    /**
     * Contains resource tags defined as key/value pairs.
     */
    readonly tags?: {[key: string]: string};
    /**
     * Specifies the type of the resource.
     */
    readonly type: string;
}
/**
 * Gets the operationalization cluster resource view. Note that the credentials are not returned by this call. Call ListKeys to get them.
 * Azure REST API version: 2017-08-01-preview.
 *
 * Other available API versions: 2017-06-01-preview.
 */
export function getOperationalizationClusterOutput(args: GetOperationalizationClusterOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetOperationalizationClusterResult> {
    return pulumi.output(args).apply((a: any) => getOperationalizationCluster(a, opts))
}

export interface GetOperationalizationClusterOutputArgs {
    /**
     * The name of the cluster.
     */
    clusterName: pulumi.Input<string>;
    /**
     * Name of the resource group in which the cluster is located.
     */
    resourceGroupName: pulumi.Input<string>;
}
