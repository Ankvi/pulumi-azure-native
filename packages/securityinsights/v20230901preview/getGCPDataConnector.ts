import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets a data connector.
 */
export function getGCPDataConnector(args: GetGCPDataConnectorArgs, opts?: pulumi.InvokeOptions): Promise<GetGCPDataConnectorResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:securityinsights/v20230901preview:getGCPDataConnector", {
        "dataConnectorId": args.dataConnectorId,
        "resourceGroupName": args.resourceGroupName,
        "workspaceName": args.workspaceName,
    }, opts);
}

export interface GetGCPDataConnectorArgs {
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
 * Represents Google Cloud Platform data connector.
 */
export interface GetGCPDataConnectorResult {
    /**
     * The auth section of the connector.
     */
    readonly auth: types.outputs.GCPAuthPropertiesResponse;
    /**
     * The name of the connector definition that represents the UI config.
     */
    readonly connectorDefinitionName: string;
    /**
     * The configuration of the destination of the data.
     */
    readonly dcrConfig?: types.outputs.DCRConfigurationResponse;
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
     * Expected value is 'GCP'.
     */
    readonly kind: "GCP";
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The request section of the connector.
     */
    readonly request: types.outputs.GCPRequestPropertiesResponse;
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
export function getGCPDataConnectorOutput(args: GetGCPDataConnectorOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetGCPDataConnectorResult> {
    return pulumi.output(args).apply((a: any) => getGCPDataConnector(a, opts))
}

export interface GetGCPDataConnectorOutputArgs {
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
