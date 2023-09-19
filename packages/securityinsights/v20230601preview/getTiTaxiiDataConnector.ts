import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets a data connector.
 */
export function getTiTaxiiDataConnector(args: GetTiTaxiiDataConnectorArgs, opts?: pulumi.InvokeOptions): Promise<GetTiTaxiiDataConnectorResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:securityinsights/v20230601preview:getTiTaxiiDataConnector", {
        "dataConnectorId": args.dataConnectorId,
        "resourceGroupName": args.resourceGroupName,
        "workspaceName": args.workspaceName,
    }, opts);
}

export interface GetTiTaxiiDataConnectorArgs {
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
 * Data connector to pull Threat intelligence data from TAXII 2.0/2.1 server
 */
export interface GetTiTaxiiDataConnectorResult {
    /**
     * The collection id of the TAXII server.
     */
    readonly collectionId?: string;
    /**
     * The available data types for Threat Intelligence TAXII data connector.
     */
    readonly dataTypes: types.outputs.TiTaxiiDataConnectorDataTypesResponse;
    /**
     * Etag of the azure resource
     */
    readonly etag?: string;
    /**
     * The friendly name for the TAXII server.
     */
    readonly friendlyName?: string;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The kind of the data connector
     * Expected value is 'ThreatIntelligenceTaxii'.
     */
    readonly kind: "ThreatIntelligenceTaxii";
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The password for the TAXII server.
     */
    readonly password?: string;
    /**
     * The polling frequency for the TAXII server.
     */
    readonly pollingFrequency: string;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * The lookback period for the TAXII server.
     */
    readonly taxiiLookbackPeriod?: string;
    /**
     * The API root for the TAXII server.
     */
    readonly taxiiServer?: string;
    /**
     * The tenant id to connect to, and get the data from.
     */
    readonly tenantId: string;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
    /**
     * The userName for the TAXII server.
     */
    readonly userName?: string;
    /**
     * The workspace id.
     */
    readonly workspaceId?: string;
}
/**
 * Gets a data connector.
 */
export function getTiTaxiiDataConnectorOutput(args: GetTiTaxiiDataConnectorOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetTiTaxiiDataConnectorResult> {
    return pulumi.output(args).apply((a: any) => getTiTaxiiDataConnector(a, opts))
}

export interface GetTiTaxiiDataConnectorOutputArgs {
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
