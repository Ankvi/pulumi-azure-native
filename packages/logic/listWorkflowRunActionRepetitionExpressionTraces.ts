import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Lists a workflow run expression trace.
 * Azure REST API version: 2019-05-01.
 *
 * Other available API versions: 2016-06-01, 2018-07-01-preview.
 */
export function listWorkflowRunActionRepetitionExpressionTraces(args: ListWorkflowRunActionRepetitionExpressionTracesArgs, opts?: pulumi.InvokeOptions): Promise<ListWorkflowRunActionRepetitionExpressionTracesResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:logic:listWorkflowRunActionRepetitionExpressionTraces", {
        "actionName": args.actionName,
        "repetitionName": args.repetitionName,
        "resourceGroupName": args.resourceGroupName,
        "runName": args.runName,
        "workflowName": args.workflowName,
    }, opts);
}

export interface ListWorkflowRunActionRepetitionExpressionTracesArgs {
    /**
     * The workflow action name.
     */
    actionName: string;
    /**
     * The workflow repetition.
     */
    repetitionName: string;
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

/**
 * The expression traces.
 */
export interface ListWorkflowRunActionRepetitionExpressionTracesResult {
    readonly inputs?: types.outputs.ExpressionRootResponse[];
}
/**
 * Lists a workflow run expression trace.
 * Azure REST API version: 2019-05-01.
 *
 * Other available API versions: 2016-06-01, 2018-07-01-preview.
 */
export function listWorkflowRunActionRepetitionExpressionTracesOutput(args: ListWorkflowRunActionRepetitionExpressionTracesOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<ListWorkflowRunActionRepetitionExpressionTracesResult> {
    return pulumi.output(args).apply((a: any) => listWorkflowRunActionRepetitionExpressionTraces(a, opts))
}

export interface ListWorkflowRunActionRepetitionExpressionTracesOutputArgs {
    /**
     * The workflow action name.
     */
    actionName: pulumi.Input<string>;
    /**
     * The workflow repetition.
     */
    repetitionName: pulumi.Input<string>;
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