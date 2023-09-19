import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets a data connector.
 */
export function getASCDataConnector(args: GetASCDataConnectorArgs, opts?: pulumi.InvokeOptions): Promise<GetASCDataConnectorResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:securityinsights/v20230801preview:getASCDataConnector", {
        "dataConnectorId": args.dataConnectorId,
        "resourceGroupName": args.resourceGroupName,
        "workspaceName": args.workspaceName,
    }, opts);
}

export interface GetASCDataConnectorArgs {
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
 * Represents ASC (Azure Security Center) data connector.
 */
export interface GetASCDataConnectorResult {
    /**
     * The available data types for the connector.
     */
    readonly dataTypes?: types.outputs.AlertsDataTypeOfDataConnectorResponse;
    /**
     * Etag of the azure resource
     */
    readonly etag?: string;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The kind of the data connector
     * Expected value is 'AzureSecurityCenter'.
     */
    readonly kind: "AzureSecurityCenter";
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The subscription id to connect to, and get the data from.
     */
    readonly subscriptionId?: string;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Gets a data connector.
 */
export function getASCDataConnectorOutput(args: GetASCDataConnectorOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetASCDataConnectorResult> {
    return pulumi.output(args).apply((a: any) => getASCDataConnector(a, opts))
}

export interface GetASCDataConnectorOutputArgs {
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
