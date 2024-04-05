import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Lists a workflow run expression trace.
 */
export function listWorkflowRunActionExpressionTraces(args: ListWorkflowRunActionExpressionTracesArgs, opts?: pulumi.InvokeOptions): Promise<ListWorkflowRunActionExpressionTracesResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:logic/v20180701preview:listWorkflowRunActionExpressionTraces", {
        "actionName": args.actionName,
        "resourceGroupName": args.resourceGroupName,
        "runName": args.runName,
        "workflowName": args.workflowName,
    }, opts);
}

export interface ListWorkflowRunActionExpressionTracesArgs {
    /**
     * The workflow action name.
     */
    actionName: string;
    /**
     * The resource group name.
     */
    resourceGroupName: string;
    /**
     * The workflow run name.
     */
    runName: string;
    /**
     * The workflow name.
     */
    workflowName: string;
}

export interface ListWorkflowRunActionExpressionTracesResult {
    readonly inputs?: types.outputs.ExpressionRootResponse[];
}
/**
 * Lists a workflow run expression trace.
 */
export function listWorkflowRunActionExpressionTracesOutput(args: ListWorkflowRunActionExpressionTracesOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<ListWorkflowRunActionExpressionTracesResult> {
    return pulumi.output(args).apply((a: any) => listWorkflowRunActionExpressionTraces(a, opts))
}

export interface ListWorkflowRunActionExpressionTracesOutputArgs {
    /**
     * The workflow action name.
     */
    actionName: pulumi.Input<string>;
    /**
     * The resource group name.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The workflow run name.
     */
    runName: pulumi.Input<string>;
    /**
     * The workflow name.
     */
    workflowName: pulumi.Input<string>;
}