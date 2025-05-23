import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets properties of the specified application.
 *
 * Uses Azure REST API version 2024-08-01-preview.
 *
 * Other available API versions: 2021-06-01, 2023-04-15-preview, 2023-08-15-preview, 2025-01-15-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native hdinsight [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getApplication(args: GetApplicationArgs, opts?: pulumi.InvokeOptions): Promise<GetApplicationResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:hdinsight:getApplication", {
        "applicationName": args.applicationName,
        "clusterName": args.clusterName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetApplicationArgs {
    /**
     * The constant value for the application name.
     */
    applicationName: string;
    /**
     * The name of the cluster.
     */
    clusterName: string;
    /**
     * The name of the resource group.
     */
    resourceGroupName: string;
}

/**
 * The HDInsight cluster application
 */
export interface GetApplicationResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * The ETag for the application
     */
    readonly etag?: string;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The properties of the application.
     */
    readonly properties: types.outputs.ApplicationPropertiesResponse;
    /**
     * Metadata pertaining to creation and last modification of the resource.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * The tags for the application.
     */
    readonly tags?: {[key: string]: string};
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Gets properties of the specified application.
 *
 * Uses Azure REST API version 2024-08-01-preview.
 *
 * Other available API versions: 2021-06-01, 2023-04-15-preview, 2023-08-15-preview, 2025-01-15-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native hdinsight [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getApplicationOutput(args: GetApplicationOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetApplicationResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:hdinsight:getApplication", {
        "applicationName": args.applicationName,
        "clusterName": args.clusterName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetApplicationOutputArgs {
    /**
     * The constant value for the application name.
     */
    applicationName: pulumi.Input<string>;
    /**
     * The name of the cluster.
     */
    clusterName: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
}