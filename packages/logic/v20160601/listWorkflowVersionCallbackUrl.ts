import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * Get the callback url for a trigger of a workflow version.
 */
export function listWorkflowVersionCallbackUrl(args: ListWorkflowVersionCallbackUrlArgs, opts?: pulumi.InvokeOptions): Promise<ListWorkflowVersionCallbackUrlResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:logic/v20160601:listWorkflowVersionCallbackUrl", {
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
    keyType?: types.enums.v20160601.KeyType;
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
    readonly queries?: types.outputs.logic.v20160601.WorkflowTriggerListCallbackUrlQueriesResponse;
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
 */
export function listWorkflowVersionCallbackUrlOutput(args: ListWorkflowVersionCallbackUrlOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<ListWorkflowVersionCallbackUrlResult> {
    return pulumi.output(args).apply((a: any) => listWorkflowVersionCallbackUrl(a, opts))
}

export interface ListWorkflowVersionCallbackUrlOutputArgs {
    /**
     * The key type.
     */
    keyType?: pulumi.Input<types.enums.v20160601.KeyType>;
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
