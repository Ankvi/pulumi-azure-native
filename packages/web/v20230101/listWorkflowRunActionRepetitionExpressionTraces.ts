import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Lists a workflow run expression trace.
 */
export function listWorkflowRunActionRepetitionExpressionTraces(args: ListWorkflowRunActionRepetitionExpressionTracesArgs, opts?: pulumi.InvokeOptions): Promise<ListWorkflowRunActionRepetitionExpressionTracesResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:web/v20230101:listWorkflowRunActionRepetitionExpressionTraces", {
        "actionName": args.actionName,
        "name": args.name,
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
     * Site name.
     */
    name: string;
    /**
     * The workflow repetition.
     */
    repetitionName: string;
    /**
     * Name of the resource group to which the resource belongs.
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
    /**
     * The link used to get the next page of recommendations.
     */
    readonly nextLink?: string;
    readonly value?: any;
}
/**
 * Lists a workflow run expression trace.
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
     * Site name.
     */
    name: pulumi.Input<string>;
    /**
     * The workflow repetition.
     */
    repetitionName: pulumi.Input<string>;
    /**
     * Name of the resource group to which the resource belongs.
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