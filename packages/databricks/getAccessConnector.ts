import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets an azure databricks accessConnector.
 *
 * Uses Azure REST API version 2023-05-01.
 *
 * Other available API versions: 2022-04-01-preview, 2024-05-01, 2024-09-01-preview, 2025-03-01-preview.
 */
export function getAccessConnector(args: GetAccessConnectorArgs, opts?: pulumi.InvokeOptions): Promise<GetAccessConnectorResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:databricks:getAccessConnector", {
        "connectorName": args.connectorName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetAccessConnectorArgs {
    /**
     * The name of the azure databricks accessConnector.
     */
    connectorName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * Information about azure databricks accessConnector.
 */
export interface GetAccessConnectorResult {
    /**
     * Fully qualified resource Id for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * Managed service identity (system assigned and/or user assigned identities)
     */
    readonly identity?: types.outputs.ManagedServiceIdentityResponse;
    /**
     * The geo-location where the resource lives
     */
    readonly location: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Azure Databricks accessConnector properties
     */
    readonly properties: types.outputs.AccessConnectorPropertiesResponse;
    /**
     * The system metadata relating to this resource
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * Resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * The type of the resource. Ex- Microsoft.Compute/virtualMachines or Microsoft.Storage/storageAccounts.
     */
    readonly type: string;
}
/**
 * Gets an azure databricks accessConnector.
 *
 * Uses Azure REST API version 2023-05-01.
 *
 * Other available API versions: 2022-04-01-preview, 2024-05-01, 2024-09-01-preview, 2025-03-01-preview.
 */
export function getAccessConnectorOutput(args: GetAccessConnectorOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetAccessConnectorResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:databricks:getAccessConnector", {
        "connectorName": args.connectorName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetAccessConnectorOutputArgs {
    /**
     * The name of the azure databricks accessConnector.
     */
    connectorName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}