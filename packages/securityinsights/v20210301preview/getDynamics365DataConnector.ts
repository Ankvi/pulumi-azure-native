import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets a data connector.
 */
export function getDynamics365DataConnector(args: GetDynamics365DataConnectorArgs, opts?: pulumi.InvokeOptions): Promise<GetDynamics365DataConnectorResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:securityinsights/v20210301preview:getDynamics365DataConnector", {
        "dataConnectorId": args.dataConnectorId,
        "operationalInsightsResourceProvider": args.operationalInsightsResourceProvider,
        "resourceGroupName": args.resourceGroupName,
        "workspaceName": args.workspaceName,
    }, opts);
}

export interface GetDynamics365DataConnectorArgs {
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
 * Represents Dynamics365 data connector.
 */
export interface GetDynamics365DataConnectorResult {
    /**
     * The available data types for the connector.
     */
    readonly dataTypes: types.outputs.Dynamics365DataConnectorDataTypesResponse;
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
     * Expected value is 'Dynamics365'.
     */
    readonly kind: "Dynamics365";
    /**
     * Azure resource name
     */
    readonly name: string;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
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
export function getDynamics365DataConnectorOutput(args: GetDynamics365DataConnectorOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetDynamics365DataConnectorResult> {
    return pulumi.output(args).apply((a: any) => getDynamics365DataConnector(a, opts))
}

export interface GetDynamics365DataConnectorOutputArgs {
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