import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get the callback URL for a workflow trigger.
 * Azure REST API version: 2022-09-01.
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
    readonly queries?: types.outputs.web.WorkflowTriggerListCallbackUrlQueriesResponse;
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
 * Azure REST API version: 2022-09-01.
 */
export function listWorkflowTriggerCallbackUrlOutput(args: ListWorkflowTriggerCallbackUrlOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<ListWorkflowTriggerCallbackUrlResult> {
    return pulumi.output(args).apply((a: any) => listWorkflowTriggerCallbackUrl(a, opts))
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
