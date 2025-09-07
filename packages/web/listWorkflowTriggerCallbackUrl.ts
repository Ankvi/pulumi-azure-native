import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get the callback URL for a workflow trigger.
 *
 * Uses Azure REST API version 2024-04-01.
 *
 * Other available API versions: 2022-03-01, 2022-09-01, 2023-01-01, 2023-12-01, 2024-11-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native web [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function listWorkflowTriggerCallbackUrl(args: ListWorkflowTriggerCallbackUrlArgs, opts?: pulumi.InvokeOptions): Promise<ListWorkflowTriggerCallbackUrlResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:web:listWorkflowTriggerCallbackUrl", {
        "name": args.name,
        "resourceGroupName": args.resourceGroupName,
        "triggerName": args.triggerName,
        "workflowName": args.workflowName,
    }, opts);
}

export interface ListWorkflowTriggerCallbackUrlArgs {
    /**
     * Site name.
     */
    name: string;
    /**
     * Name of the resource group to which the resource belongs.
     */
    resourceGroupName: string;
    /**
     * The workflow trigger name.
     */
    triggerName: string;
    /**
     * The workflow name.
     */
    workflowName: string;
}

/**
 * The workflow trigger callback URL.
 */
export interface ListWorkflowTriggerCallbackUrlResult {
    /**
     * Gets the workflow trigger callback URL base path.
     */
    readonly basePath: string;
    /**
     * Gets the workflow trigger callback URL HTTP method.
     */
    readonly method: string;
    /**
     * Gets the workflow trigger callback URL query parameters.
     */
    readonly queries?: types.outputs.WorkflowTriggerListCallbackUrlQueriesResponse;
    /**
     * Gets the workflow trigger callback URL relative path.
     */
    readonly relativePath: string;
    /**
     * Gets the workflow trigger callback URL relative path parameters.
     */
    readonly relativePathParameters?: string[];
    /**
     * Gets the workflow trigger callback URL.
     */
    readonly value: string;
}
/**
 * Get the callback URL for a workflow trigger.
 *
 * Uses Azure REST API version 2024-04-01.
 *
 * Other available API versions: 2022-03-01, 2022-09-01, 2023-01-01, 2023-12-01, 2024-11-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native web [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function listWorkflowTriggerCallbackUrlOutput(args: ListWorkflowTriggerCallbackUrlOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<ListWorkflowTriggerCallbackUrlResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:web:listWorkflowTriggerCallbackUrl", {
        "name": args.name,
        "resourceGroupName": args.resourceGroupName,
        "triggerName": args.triggerName,
        "workflowName": args.workflowName,
    }, opts);
}

export interface ListWorkflowTriggerCallbackUrlOutputArgs {
    /**
     * Site name.
     */
    name: pulumi.Input<string>;
    /**
     * Name of the resource group to which the resource belongs.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The workflow trigger name.
     */
    triggerName: pulumi.Input<string>;
    /**
     * The workflow name.
     */
    workflowName: pulumi.Input<string>;
}