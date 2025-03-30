import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get the callback URL for a workflow trigger.
 *
 * Uses Azure REST API version 2019-05-01.
 *
 * Other available API versions: 2016-06-01, 2018-07-01-preview.
 */
export function listWorkflowTriggerCallbackUrl(args: ListWorkflowTriggerCallbackUrlArgs, opts?: pulumi.InvokeOptions): Promise<ListWorkflowTriggerCallbackUrlResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:logic:listWorkflowTriggerCallbackUrl", {
        "resourceGroupName": args.resourceGroupName,
        "triggerName": args.triggerName,
        "workflowName": args.workflowName,
    }, opts);
}

export interface ListWorkflowTriggerCallbackUrlArgs {
    /**
     * The resource group name.
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
 * Uses Azure REST API version 2019-05-01.
 *
 * Other available API versions: 2016-06-01, 2018-07-01-preview.
 */
export function listWorkflowTriggerCallbackUrlOutput(args: ListWorkflowTriggerCallbackUrlOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<ListWorkflowTriggerCallbackUrlResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:logic:listWorkflowTriggerCallbackUrl", {
        "resourceGroupName": args.resourceGroupName,
        "triggerName": args.triggerName,
        "workflowName": args.workflowName,
    }, opts);
}

export interface ListWorkflowTriggerCallbackUrlOutputArgs {
    /**
     * The resource group name.
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