import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * List all secrets for AgentSpace Connectors
 *
 * Uses Azure REST API version 2026-01-01.
 */
export function listAgentSpacesConnectorAllSecrets(args: ListAgentSpacesConnectorAllSecretsArgs, opts?: pulumi.InvokeOptions): Promise<ListAgentSpacesConnectorAllSecretsResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:app:listAgentSpacesConnectorAllSecrets", {
        "agentSpaceName": args.agentSpaceName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface ListAgentSpacesConnectorAllSecretsArgs {
    /**
     * The name of the AgentSpace
     */
    agentSpaceName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * Collection of Agent Space Connectors
 */
export interface ListAgentSpacesConnectorAllSecretsResult {
    /**
     * The link to the next page of items
     */
    readonly nextLink?: string;
    /**
     * The AgentSpaceConnector items on this page
     */
    readonly value: types.outputs.AgentSpaceConnectorResponse[];
}
/**
 * List all secrets for AgentSpace Connectors
 *
 * Uses Azure REST API version 2026-01-01.
 */
export function listAgentSpacesConnectorAllSecretsOutput(args: ListAgentSpacesConnectorAllSecretsOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<ListAgentSpacesConnectorAllSecretsResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:app:listAgentSpacesConnectorAllSecrets", {
        "agentSpaceName": args.agentSpaceName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface ListAgentSpacesConnectorAllSecretsOutputArgs {
    /**
     * The name of the AgentSpace
     */
    agentSpaceName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}