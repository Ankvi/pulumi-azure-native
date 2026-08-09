import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get the properties of an Agent Connector
 *
 * Uses Azure REST API version 2026-01-01.
 */
export function getAgentsConnector(args: GetAgentsConnectorArgs, opts?: pulumi.InvokeOptions): Promise<GetAgentsConnectorResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:app:getAgentsConnector", {
        "agentName": args.agentName,
        "connectorName": args.connectorName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetAgentsConnectorArgs {
    /**
     * The name of the Agent
     */
    agentName: string;
    /**
     * The name of the AgentConnector
     */
    connectorName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * Agent Connector used to connect to data sources
 */
export interface GetAgentsConnectorResult {
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
    readonly properties: types.outputs.AgentConnectorPropertiesResponse;
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
 * Get the properties of an Agent Connector
 *
 * Uses Azure REST API version 2026-01-01.
 */
export function getAgentsConnectorOutput(args: GetAgentsConnectorOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetAgentsConnectorResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:app:getAgentsConnector", {
        "agentName": args.agentName,
        "connectorName": args.connectorName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetAgentsConnectorOutputArgs {
    /**
     * The name of the Agent
     */
    agentName: pulumi.Input<string>;
    /**
     * The name of the AgentConnector
     */
    connectorName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}