import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets Business Application Agent.
 * Azure REST API version: 2024-04-01-preview.
 *
 * Other available API versions: 2024-10-01-preview.
 */
export function getBusinessApplicationAgent(args: GetBusinessApplicationAgentArgs, opts?: pulumi.InvokeOptions): Promise<GetBusinessApplicationAgentResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:securityinsights:getBusinessApplicationAgent", {
        "agentResourceName": args.agentResourceName,
        "resourceGroupName": args.resourceGroupName,
        "workspaceName": args.workspaceName,
    }, opts);
}

export interface GetBusinessApplicationAgentArgs {
    /**
     * Business Application Agent Name
     */
    agentResourceName: string;
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
 * Describes the configuration of a Business Application Agent.
 */
export interface GetBusinessApplicationAgentResult {
    readonly agentSystems: types.outputs.AgentSystemResponse[];
    /**
     * Describes the configuration of a Business Application Agent.
     */
    readonly configuration: types.outputs.SapAgentConfigurationResponse;
    readonly displayName: string;
    /**
     * Etag of the azure resource
     */
    readonly etag?: string;
    /**
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
     */
    readonly id: string;
    readonly lastModifiedTimeUtc: string;
    /**
     * The name of the resource
     */
    readonly name: string;
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
 * Gets Business Application Agent.
 * Azure REST API version: 2024-04-01-preview.
 *
 * Other available API versions: 2024-10-01-preview.
 */
export function getBusinessApplicationAgentOutput(args: GetBusinessApplicationAgentOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetBusinessApplicationAgentResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:securityinsights:getBusinessApplicationAgent", {
        "agentResourceName": args.agentResourceName,
        "resourceGroupName": args.resourceGroupName,
        "workspaceName": args.workspaceName,
    }, opts);
}

export interface GetBusinessApplicationAgentOutputArgs {
    /**
     * Business Application Agent Name
     */
    agentResourceName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the workspace.
     */
    workspaceName: pulumi.Input<string>;
}