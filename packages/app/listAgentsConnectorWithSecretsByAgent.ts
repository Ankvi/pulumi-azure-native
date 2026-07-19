import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * List all Data Connectors with secrets from an Agent
 *
 * Uses Azure REST API version 2026-01-01.
 */
export function listAgentsConnectorWithSecretsByAgent(args: ListAgentsConnectorWithSecretsByAgentArgs, opts?: pulumi.InvokeOptions): Promise<ListAgentsConnectorWithSecretsByAgentResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:app:listAgentsConnectorWithSecretsByAgent", {
        "agentName": args.agentName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface ListAgentsConnectorWithSecretsByAgentArgs {
    /**
     * The name of the Agent
     */
    agentName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * Collection of Agent Connectors
 */
export interface ListAgentsConnectorWithSecretsByAgentResult {
    /**
     * The link to the next page of items
     */
    readonly nextLink?: string;
    /**
     * The AgentConnector items on this page
     */
    readonly value: types.outputs.AgentConnectorResponse[];
}
/**
 * List all Data Connectors with secrets from an Agent
 *
 * Uses Azure REST API version 2026-01-01.
 */
export function listAgentsConnectorWithSecretsByAgentOutput(args: ListAgentsConnectorWithSecretsByAgentOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<ListAgentsConnectorWithSecretsByAgentResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:app:listAgentsConnectorWithSecretsByAgent", {
        "agentName": args.agentName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface ListAgentsConnectorWithSecretsByAgentOutputArgs {
    /**
     * The name of the Agent
     */
    agentName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}