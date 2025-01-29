import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * The integration fabric resource type.
 * Azure REST API version: 2023-10-01-preview.
 *
 * Other available API versions: 2024-10-01.
 */
export function getIntegrationFabric(args: GetIntegrationFabricArgs, opts?: pulumi.InvokeOptions): Promise<GetIntegrationFabricResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:dashboard:getIntegrationFabric", {
        "integrationFabricName": args.integrationFabricName,
        "resourceGroupName": args.resourceGroupName,
        "workspaceName": args.workspaceName,
    }, opts);
}

export interface GetIntegrationFabricArgs {
    /**
     * The integration fabric name of Azure Managed Grafana.
     */
    integrationFabricName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * The workspace name of Azure Managed Grafana.
     */
    workspaceName: string;
}

/**
 * The integration fabric resource type.
 */
export interface GetIntegrationFabricResult {
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The geo-location where the resource lives
     */
    readonly location: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    readonly properties: types.outputs.IntegrationFabricPropertiesResponse;
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
 * The integration fabric resource type.
 * Azure REST API version: 2023-10-01-preview.
 *
 * Other available API versions: 2024-10-01.
 */
export function getIntegrationFabricOutput(args: GetIntegrationFabricOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetIntegrationFabricResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:dashboard:getIntegrationFabric", {
        "integrationFabricName": args.integrationFabricName,
        "resourceGroupName": args.resourceGroupName,
        "workspaceName": args.workspaceName,
    }, opts);
}

export interface GetIntegrationFabricOutputArgs {
    /**
     * The integration fabric name of Azure Managed Grafana.
     */
    integrationFabricName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The workspace name of Azure Managed Grafana.
     */
    workspaceName: pulumi.Input<string>;
}