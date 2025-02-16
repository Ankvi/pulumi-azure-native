import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * List of actions for a business application system.
 * Azure REST API version: 2024-04-01-preview.
 *
 * Other available API versions: 2024-10-01-preview, 2025-01-01-preview.
 */
export function listSystemActions(args: ListSystemActionsArgs, opts?: pulumi.InvokeOptions): Promise<ListSystemActionsResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:securityinsights:listSystemActions", {
        "agentResourceName": args.agentResourceName,
        "resourceGroupName": args.resourceGroupName,
        "systemResourceName": args.systemResourceName,
        "workspaceName": args.workspaceName,
    }, opts);
}

export interface ListSystemActionsArgs {
    /**
     * Business Application Agent Name
     */
    agentResourceName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * The name of the system.
     */
    systemResourceName: string;
    /**
     * The name of the workspace.
     */
    workspaceName: string;
}

/**
 * List all actions for a system to perform.
 */
export interface ListSystemActionsResult {
    /**
     * The link to fetch the next page of actions.
     */
    readonly nextLink?: string;
    /**
     * Array of actions.
     */
    readonly value: (types.outputs.LockUserActionResponse | types.outputs.UnlockUserActionResponse)[];
}
/**
 * List of actions for a business application system.
 * Azure REST API version: 2024-04-01-preview.
 *
 * Other available API versions: 2024-10-01-preview, 2025-01-01-preview.
 */
export function listSystemActionsOutput(args: ListSystemActionsOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<ListSystemActionsResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:securityinsights:listSystemActions", {
        "agentResourceName": args.agentResourceName,
        "resourceGroupName": args.resourceGroupName,
        "systemResourceName": args.systemResourceName,
        "workspaceName": args.workspaceName,
    }, opts);
}

export interface ListSystemActionsOutputArgs {
    /**
     * Business Application Agent Name
     */
    agentResourceName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the system.
     */
    systemResourceName: pulumi.Input<string>;
    /**
     * The name of the workspace.
     */
    workspaceName: pulumi.Input<string>;
}