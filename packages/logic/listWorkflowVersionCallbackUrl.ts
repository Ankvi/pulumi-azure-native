import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get the callback url for a trigger of a workflow version.
 *
 * Uses Azure REST API version 2016-06-01.
 */
export function listWorkflowVersionCallbackUrl(args: ListWorkflowVersionCallbackUrlArgs, opts?: pulumi.InvokeOptions): Promise<ListWorkflowVersionCallbackUrlResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:logic:listWorkflowVersionCallbackUrl", {
        "keyType": args.keyType,
        "notAfter": args.notAfter,
        "resourceGroupName": args.resourceGroupName,
        "triggerName": args.triggerName,
        "versionId": args.versionId,
        "workflowName": args.workflowName,
    }, opts);
}

export interface ListWorkflowVersionCallbackUrlArgs {
    /**
     * The key type.
     */
    keyType?: types.enums.KeyType;
    /**
     * The expiry time.
     */
    notAfter?: string;
    /**
     * The resource group name.
     */
    resourceGroupName: string;
    /**
     * The workflow trigger name.
     */
    triggerName: string;
    /**
     * The workflow versionId.
     */
    versionId: string;
    /**
     * The workflow name.
     */
    workflowName: string;
}

/**
 * The workflow trigger callback URL.
 */
export interface ListWorkflowVersionCallbackUrlResult {
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
 * Get the callback url for a trigger of a workflow version.
 *
 * Uses Azure REST API version 2016-06-01.
 */
export function listWorkflowVersionCallbackUrlOutput(args: ListWorkflowVersionCallbackUrlOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<ListWorkflowVersionCallbackUrlResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:logic:listWorkflowVersionCallbackUrl", {
        "keyType": args.keyType,
        "notAfter": args.notAfter,
        "resourceGroupName": args.resourceGroupName,
        "triggerName": args.triggerName,
        "versionId": args.versionId,
        "workflowName": args.workflowName,
    }, opts);
}

export interface ListWorkflowVersionCallbackUrlOutputArgs {
    /**
     * The key type.
     */
    keyType?: pulumi.Input<types.enums.KeyType>;
    /**
     * The expiry time.
     */
    notAfter?: pulumi.Input<string>;
    /**
     * The resource group name.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The workflow trigger name.
     */
    triggerName: pulumi.Input<string>;
    /**
     * The workflow versionId.
     */
    versionId: pulumi.Input<string>;
    /**
     * The workflow name.
     */
    workflowName: pulumi.Input<string>;
}