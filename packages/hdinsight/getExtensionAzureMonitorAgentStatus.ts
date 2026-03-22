import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the status of Azure Monitor Agent on the HDInsight cluster.
 *
 * Uses Azure REST API version 2024-08-01-preview.
 *
 * Other available API versions: 2025-01-15-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native hdinsight [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getExtensionAzureMonitorAgentStatus(args: GetExtensionAzureMonitorAgentStatusArgs, opts?: pulumi.InvokeOptions): Promise<GetExtensionAzureMonitorAgentStatusResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:hdinsight:getExtensionAzureMonitorAgentStatus", {
        "clusterName": args.clusterName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetExtensionAzureMonitorAgentStatusArgs {
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
 * The azure monitor status response.
 */
export interface GetExtensionAzureMonitorAgentStatusResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * The status of the monitor on the HDInsight cluster.
     */
    readonly clusterMonitoringEnabled?: boolean;
    /**
     * The selected configurations.
     */
    readonly selectedConfigurations?: types.outputs.AzureMonitorSelectedConfigurationsResponse;
    /**
     * The workspace ID of the monitor on the HDInsight cluster.
     */
    readonly workspaceId?: string;
}
/**
 * Gets the status of Azure Monitor Agent on the HDInsight cluster.
 *
 * Uses Azure REST API version 2024-08-01-preview.
 *
 * Other available API versions: 2025-01-15-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native hdinsight [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getExtensionAzureMonitorAgentStatusOutput(args: GetExtensionAzureMonitorAgentStatusOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetExtensionAzureMonitorAgentStatusResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:hdinsight:getExtensionAzureMonitorAgentStatus", {
        "clusterName": args.clusterName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetExtensionAzureMonitorAgentStatusOutputArgs {
    /**
     * The name of the cluster.
     */
    clusterName: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
}