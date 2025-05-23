import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Gets a workflow access key.
 *
 * Uses Azure REST API version 2015-02-01-preview.
 */
export function getWorkflowAccessKey(args: GetWorkflowAccessKeyArgs, opts?: pulumi.InvokeOptions): Promise<GetWorkflowAccessKeyResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:logic:getWorkflowAccessKey", {
        "accessKeyName": args.accessKeyName,
        "resourceGroupName": args.resourceGroupName,
        "workflowName": args.workflowName,
    }, opts);
}

export interface GetWorkflowAccessKeyArgs {
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

export interface GetWorkflowAccessKeyResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * Gets or sets the resource id.
     */
    readonly id?: string;
    /**
     * Gets the workflow access key name.
     */
    readonly name: string;
    /**
     * Gets or sets the not-after time.
     */
    readonly notAfter?: string;
    /**
     * Gets or sets the not-before time.
     */
    readonly notBefore?: string;
    /**
     * Gets the workflow access key type.
     */
    readonly type: string;
}
/**
 * Gets a workflow access key.
 *
 * Uses Azure REST API version 2015-02-01-preview.
 */
export function getWorkflowAccessKeyOutput(args: GetWorkflowAccessKeyOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetWorkflowAccessKeyResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:logic:getWorkflowAccessKey", {
        "accessKeyName": args.accessKeyName,
        "resourceGroupName": args.resourceGroupName,
        "workflowName": args.workflowName,
    }, opts);
}

export interface GetWorkflowAccessKeyOutputArgs {
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