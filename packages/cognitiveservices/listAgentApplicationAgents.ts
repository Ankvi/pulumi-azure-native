import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * A paginated list of Agent Reference entities.
 *
 * Uses Azure REST API version 2025-10-01-preview.
 */
export function listAgentApplicationAgents(args: ListAgentApplicationAgentsArgs, opts?: pulumi.InvokeOptions): Promise<ListAgentApplicationAgentsResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:cognitiveservices:listAgentApplicationAgents", {
        "accountName": args.accountName,
        "name": args.name,
        "projectName": args.projectName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface ListAgentApplicationAgentsArgs {
    /**
     * The name of Cognitive Services account.
     */
    accountName: string;
    /**
     * Agent Application name.
     */
    name: string;
    /**
     * The name of Cognitive Services account's project.
     */
    projectName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * A paginated list of Agent Reference entities.
 */
export interface ListAgentApplicationAgentsResult {
    /**
     * The link to the next page of Agent Reference objects. If null, there are no additional pages.
     */
    readonly nextLink?: string;
    /**
     * An array of objects of type Agent Reference.
     */
    readonly value?: types.outputs.AgentReferenceResourceResponse[];
}
/**
 * A paginated list of Agent Reference entities.
 *
 * Uses Azure REST API version 2025-10-01-preview.
 */
export function listAgentApplicationAgentsOutput(args: ListAgentApplicationAgentsOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<ListAgentApplicationAgentsResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:cognitiveservices:listAgentApplicationAgents", {
        "accountName": args.accountName,
        "name": args.name,
        "projectName": args.projectName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface ListAgentApplicationAgentsOutputArgs {
    /**
     * The name of Cognitive Services account.
     */
    accountName: pulumi.Input<string>;
    /**
     * Agent Application name.
     */
    name: pulumi.Input<string>;
    /**
     * The name of Cognitive Services account's project.
     */
    projectName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}