import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get the properties of an Agent Space Connector
 *
 * Uses Azure REST API version 2026-01-01.
 */
export function getAgentSpacesConnector(args: GetAgentSpacesConnectorArgs, opts?: pulumi.InvokeOptions): Promise<GetAgentSpacesConnectorResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:app:getAgentSpacesConnector", {
        "agentSpaceName": args.agentSpaceName,
        "connectorName": args.connectorName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetAgentSpacesConnectorArgs {
    /**
     * The name of the AgentSpace
     */
    agentSpaceName: string;
    /**
     * The name of the AgentSpaceConnector
     */
    connectorName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * Agent Space Connector used to connect to data sources
 */
export interface GetAgentSpacesConnectorResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
     */
    readonly id: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The resource-specific properties for this resource.
     */
    readonly properties: types.outputs.AgentSpaceConnectorPropertiesResponse;
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
 * Get the properties of an Agent Space Connector
 *
 * Uses Azure REST API version 2026-01-01.
 */
export function getAgentSpacesConnectorOutput(args: GetAgentSpacesConnectorOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetAgentSpacesConnectorResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:app:getAgentSpacesConnector", {
        "agentSpaceName": args.agentSpaceName,
        "connectorName": args.connectorName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetAgentSpacesConnectorOutputArgs {
    /**
     * The name of the AgentSpace
     */
    agentSpaceName: pulumi.Input<string>;
    /**
     * The name of the AgentSpaceConnector
     */
    connectorName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}