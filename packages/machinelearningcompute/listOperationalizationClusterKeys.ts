import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the credentials for the specified cluster such as Storage, ACR and ACS credentials. This is a long running operation because it fetches keys from dependencies.
 * Azure REST API version: 2017-08-01-preview.
 */
export function listOperationalizationClusterKeys(args: ListOperationalizationClusterKeysArgs, opts?: pulumi.InvokeOptions): Promise<ListOperationalizationClusterKeysResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:machinelearningcompute:listOperationalizationClusterKeys", {
        "clusterName": args.clusterName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface ListOperationalizationClusterKeysArgs {
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
 * Credentials to resources in the cluster.
 */
export interface ListOperationalizationClusterKeysResult {
    /**
     * Credentials for Azure AppInsights.
     */
    readonly appInsights?: types.outputs.AppInsightsCredentialsResponse;
    /**
     * Credentials for Azure Container Registry.
     */
    readonly containerRegistry?: types.outputs.ContainerRegistryCredentialsResponse;
    /**
     * Credentials for Azure Container Service.
     */
    readonly containerService?: types.outputs.ContainerServiceCredentialsResponse;
    /**
     * Global authorization keys for all user services deployed in cluster. These are used if the service does not have auth keys.
     */
    readonly serviceAuthConfiguration?: types.outputs.ServiceAuthConfigurationResponse;
    /**
     * The SSL configuration for the services.
     */
    readonly sslConfiguration?: types.outputs.SslConfigurationResponse;
    /**
     * Credentials for the Storage Account.
     */
    readonly storageAccount?: types.outputs.StorageAccountCredentialsResponse;
}
/**
 * Gets the credentials for the specified cluster such as Storage, ACR and ACS credentials. This is a long running operation because it fetches keys from dependencies.
 * Azure REST API version: 2017-08-01-preview.
 */
export function listOperationalizationClusterKeysOutput(args: ListOperationalizationClusterKeysOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<ListOperationalizationClusterKeysResult> {
    return pulumi.output(args).apply((a: any) => listOperationalizationClusterKeys(a, opts))
}

export interface ListOperationalizationClusterKeysOutputArgs {
    /**
     * The name of the cluster.
     */
    clusterName: pulumi.Input<string>;
    /**
     * Name of the resource group in which the cluster is located.
     */
    resourceGroupName: pulumi.Input<string>;
}
