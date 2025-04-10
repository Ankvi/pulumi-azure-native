import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Lists secret keys.
 *
 * Uses Azure REST API version 2015-02-01-preview.
 */
export function listWorkflowAccessKeySecretKeys(args: ListWorkflowAccessKeySecretKeysArgs, opts?: pulumi.InvokeOptions): Promise<ListWorkflowAccessKeySecretKeysResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:logic:listWorkflowAccessKeySecretKeys", {
        "accessKeyName": args.accessKeyName,
        "resourceGroupName": args.resourceGroupName,
        "workflowName": args.workflowName,
    }, opts);
}

export interface ListWorkflowAccessKeySecretKeysArgs {
    /**
     * The workflow access key name.
     */
    accessKeyName: string;
    /**
     * The resource group name.
     */
    resourceGroupName: string;
    /**
     * The workflow name.
     */
    workflowName: string;
}

export interface ListWorkflowAccessKeySecretKeysResult {
    /**
     * Gets the primary secret key.
     */
    readonly primarySecretKey: string;
    /**
     * Gets the secondary secret key.
     */
    readonly secondarySecretKey: string;
}
/**
 * Lists secret keys.
 *
 * Uses Azure REST API version 2015-02-01-preview.
 */
export function listWorkflowAccessKeySecretKeysOutput(args: ListWorkflowAccessKeySecretKeysOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<ListWorkflowAccessKeySecretKeysResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:logic:listWorkflowAccessKeySecretKeys", {
        "accessKeyName": args.accessKeyName,
        "resourceGroupName": args.resourceGroupName,
        "workflowName": args.workflowName,
    }, opts);
}

export interface ListWorkflowAccessKeySecretKeysOutputArgs {
    /**
     * The workflow access key name.
     */
    accessKeyName: pulumi.Input<string>;
    /**
     * The resource group name.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The workflow name.
     */
    workflowName: pulumi.Input<string>;
}