import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * Gets a data connector.
 */
export function getMDATPDataConnector(args: GetMDATPDataConnectorArgs, opts?: pulumi.InvokeOptions): Promise<GetMDATPDataConnectorResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:securityinsights/v20210301preview:getMDATPDataConnector", {
        "dataConnectorId": args.dataConnectorId,
        "operationalInsightsResourceProvider": args.operationalInsightsResourceProvider,
        "resourceGroupName": args.resourceGroupName,
        "workspaceName": args.workspaceName,
    }, opts);
}

export interface GetMDATPDataConnectorArgs {
    /**
     * Connector ID
     */
    dataConnectorId: string;
    /**
     * The namespace of workspaces resource provider- Microsoft.OperationalInsights.
     */
    operationalInsightsResourceProvider: string;
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
 * Represents MDATP (Microsoft Defender Advanced Threat Protection) data connector.
 */
export interface GetMDATPDataConnectorResult {
    /**
     * The available data types for the connector.
     */
    readonly dataTypes?: types.outputs.securityinsights.v20210301preview.AlertsDataTypeOfDataConnectorResponse;
    /**
     * Etag of the azure resource
     */
    readonly etag?: string;
    /**
     * Azure resource Id
     */
    readonly id: string;
    /**
     * The kind of the data connector
     * Expected value is 'MicrosoftDefenderAdvancedThreatProtection'.
     */
    readonly kind: "MicrosoftDefenderAdvancedThreatProtection";
    /**
     * Azure resource name
     */
    readonly name: string;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.securityinsights.v20210301preview.SystemDataResponse;
    /**
     * The tenant id to connect to, and get the data from.
     */
    readonly tenantId: string;
    /**
     * Azure resource type
     */
    readonly type: string;
}
/**
 * Gets a data connector.
 */
export function getMDATPDataConnectorOutput(args: GetMDATPDataConnectorOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetMDATPDataConnectorResult> {
    return pulumi.output(args).apply((a: any) => getMDATPDataConnector(a, opts))
}

export interface GetMDATPDataConnectorOutputArgs {
    /**
     * Connector ID
     */
    dataConnectorId: pulumi.Input<string>;
    /**
     * The namespace of workspaces resource provider- Microsoft.OperationalInsights.
     */
    operationalInsightsResourceProvider: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the workspace.
     */
    workspaceName: pulumi.Input<string>;
}
