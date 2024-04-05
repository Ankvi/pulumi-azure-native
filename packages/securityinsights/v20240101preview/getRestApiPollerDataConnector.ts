import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets a data connector.
 */
export function getRestApiPollerDataConnector(args: GetRestApiPollerDataConnectorArgs, opts?: pulumi.InvokeOptions): Promise<GetRestApiPollerDataConnectorResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:securityinsights/v20240101preview:getRestApiPollerDataConnector", {
        "dataConnectorId": args.dataConnectorId,
        "resourceGroupName": args.resourceGroupName,
        "workspaceName": args.workspaceName,
    }, opts);
}

export interface GetRestApiPollerDataConnectorArgs {
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
 * Represents Rest Api Poller data connector.
 */
export interface GetRestApiPollerDataConnectorResult {
    /**
     * The add on attributes. The key name will become attribute name (a column) and the value will become the attribute value in the payload.
     */
    readonly addOnAttributes?: {[key: string]: string};
    /**
     * The a authentication model.
     */
    readonly auth: types.outputs.AWSAuthModelResponse | types.outputs.ApiKeyAuthModelResponse | types.outputs.BasicAuthModelResponse | types.outputs.GCPAuthModelResponse | types.outputs.GenericBlobSbsAuthModelResponse | types.outputs.GitHubAuthModelResponse | types.outputs.JwtAuthModelResponse | types.outputs.NoneAuthModelResponse | types.outputs.OAuthModelResponse | types.outputs.OracleAuthModelResponse | types.outputs.SessionAuthModelResponse;
    /**
     * The connector definition name (the dataConnectorDefinition resource id).
     */
    readonly connectorDefinitionName: string;
    /**
     * The Log Analytics table destination.
     */
    readonly dataType?: string;
    /**
     * The DCR related properties.
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
     * Indicates whether the connector is active or not.
     */
    readonly isActive?: boolean;
    /**
     * The kind of the data connector
     * Expected value is 'RestApiPoller'.
     */
    readonly kind: "RestApiPoller";
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The paging configuration.
     */
    readonly paging?: types.outputs.RestApiPollerRequestPagingConfigResponse;
    /**
     * The request configuration.
     */
    readonly request: types.outputs.RestApiPollerRequestConfigResponse;
    /**
     * The response configuration.
     */
    readonly response?: types.outputs.CcpResponseConfigResponse;
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
export function getRestApiPollerDataConnectorOutput(args: GetRestApiPollerDataConnectorOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetRestApiPollerDataConnectorResult> {
    return pulumi.output(args).apply((a: any) => getRestApiPollerDataConnector(a, opts))
}

export interface GetRestApiPollerDataConnectorOutputArgs {
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