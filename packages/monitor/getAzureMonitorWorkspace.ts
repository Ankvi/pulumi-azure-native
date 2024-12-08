import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Returns the specified Azure Monitor Workspace
 * Azure REST API version: 2023-04-03.
 *
 * Other available API versions: 2023-10-01-preview.
 */
export function getAzureMonitorWorkspace(args: GetAzureMonitorWorkspaceArgs, opts?: pulumi.InvokeOptions): Promise<GetAzureMonitorWorkspaceResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:monitor:getAzureMonitorWorkspace", {
        "azureMonitorWorkspaceName": args.azureMonitorWorkspaceName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetAzureMonitorWorkspaceArgs {
    /**
     * The name of the Azure Monitor Workspace. The name is case insensitive
     */
    azureMonitorWorkspaceName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * An Azure Monitor Workspace definition
 */
export interface GetAzureMonitorWorkspaceResult {
    /**
     * The immutable Id of the Azure Monitor Workspace. This property is read-only.
     */
    readonly accountId: string;
    /**
     * The Data Collection Rule and Endpoint used for ingestion by default.
     */
    readonly defaultIngestionSettings: types.outputs.AzureMonitorWorkspaceResponseDefaultIngestionSettings;
    /**
     * Resource entity tag (ETag)
     */
    readonly etag: string;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The geo-location where the resource lives
     */
    readonly location: string;
    /**
     * Properties related to the metrics container in the Azure Monitor Workspace
     */
    readonly metrics: types.outputs.AzureMonitorWorkspaceResponseMetrics;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * List of private endpoint connections
     */
    readonly privateEndpointConnections: types.outputs.PrivateEndpointConnectionResponse[];
    /**
     * The provisioning state of the Azure Monitor Workspace. Set to Succeeded if everything is healthy.
     */
    readonly provisioningState: string;
    /**
     * Gets or sets allow or disallow public network access to Azure Monitor Workspace
     */
    readonly publicNetworkAccess?: string;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * Resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Returns the specified Azure Monitor Workspace
 * Azure REST API version: 2023-04-03.
 *
 * Other available API versions: 2023-10-01-preview.
 */
export function getAzureMonitorWorkspaceOutput(args: GetAzureMonitorWorkspaceOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetAzureMonitorWorkspaceResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:monitor:getAzureMonitorWorkspace", {
        "azureMonitorWorkspaceName": args.azureMonitorWorkspaceName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetAzureMonitorWorkspaceOutputArgs {
    /**
     * The name of the Azure Monitor Workspace. The name is case insensitive
     */
    azureMonitorWorkspaceName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}