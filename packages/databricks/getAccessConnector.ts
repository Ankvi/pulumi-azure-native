import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets an Azure Databricks Access Connector.
 *
 * Uses Azure REST API version 2026-01-01.
 *
 * Other available API versions: 2023-05-01, 2024-05-01, 2024-09-01-preview, 2025-03-01-preview, 2025-08-01-preview, 2025-10-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native databricks [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
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
     * The name of the Azure Databricks Access Connector.
     */
    connectorName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * Information about Azure Databricks Access Connector.
 */
export interface GetAccessConnectorResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
     */
    readonly id: string;
    /**
     * The managed service identities assigned to this resource.
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
     * Azure Databricks Access Connector properties
     */
    readonly properties: types.outputs.AccessConnectorPropertiesResponse;
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
 * Gets an Azure Databricks Access Connector.
 *
 * Uses Azure REST API version 2026-01-01.
 *
 * Other available API versions: 2023-05-01, 2024-05-01, 2024-09-01-preview, 2025-03-01-preview, 2025-08-01-preview, 2025-10-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native databricks [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
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
     * The name of the Azure Databricks Access Connector.
     */
    connectorName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}