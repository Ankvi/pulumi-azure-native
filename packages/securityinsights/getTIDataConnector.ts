import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets a data connector.
 * Azure REST API version: 2023-02-01.
 */
export function getTIDataConnector(args: GetTIDataConnectorArgs, opts?: pulumi.InvokeOptions): Promise<GetTIDataConnectorResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:securityinsights:getTIDataConnector", {
        "dataConnectorId": args.dataConnectorId,
        "resourceGroupName": args.resourceGroupName,
        "workspaceName": args.workspaceName,
    }, opts);
}

export interface GetTIDataConnectorArgs {
    /**
     * Connector ID
     */
    dataConnectorId: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * The name of the workspace.
     */
    workspaceName: string;
}

/**
 * Represents threat intelligence data connector.
 */
export interface GetTIDataConnectorResult {
    /**
     * The available data types for the connector.
     */
    readonly dataTypes?: types.outputs.TIDataConnectorDataTypesResponse;
    /**
     * Etag of the azure resource
     */
    readonly etag?: string;
    /**
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
     */
    readonly id: string;
    /**
     * The kind of the data connector
     * Expected value is 'ThreatIntelligence'.
     */
    readonly kind: "ThreatIntelligence";
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * The tenant id to connect to, and get the data from.
     */
    readonly tenantId?: string;
    /**
     * The lookback period for the feed to be imported.
     */
    readonly tipLookbackPeriod?: string;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Gets a data connector.
 * Azure REST API version: 2023-02-01.
 */
export function getTIDataConnectorOutput(args: GetTIDataConnectorOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetTIDataConnectorResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:securityinsights:getTIDataConnector", {
        "dataConnectorId": args.dataConnectorId,
        "resourceGroupName": args.resourceGroupName,
        "workspaceName": args.workspaceName,
    }, opts);
}

export interface GetTIDataConnectorOutputArgs {
    /**
     * Connector ID
     */
    dataConnectorId: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the workspace.
     */
    workspaceName: pulumi.Input<string>;
}