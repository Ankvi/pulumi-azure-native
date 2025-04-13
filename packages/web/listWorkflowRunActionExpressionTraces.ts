import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Lists a workflow run expression trace.
 *
 * Uses Azure REST API version 2024-04-01.
 *
 * Other available API versions: 2022-03-01, 2022-09-01, 2023-01-01, 2023-12-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native web [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function listWorkflowRunActionExpressionTraces(args: ListWorkflowRunActionExpressionTracesArgs, opts?: pulumi.InvokeOptions): Promise<ListWorkflowRunActionExpressionTracesResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:web:listWorkflowRunActionExpressionTraces", {
        "actionName": args.actionName,
        "name": args.name,
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
     * Site name.
     */
    name: string;
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
export interface ListWorkflowRunActionExpressionTracesResult {
    readonly inputs?: types.outputs.ExpressionRootResponse[];
    /**
     * The link used to get the next page of recommendations.
     */
    readonly nextLink?: string;
    readonly value?: any;
}
/**
 * Lists a workflow run expression trace.
 *
 * Uses Azure REST API version 2024-04-01.
 *
 * Other available API versions: 2022-03-01, 2022-09-01, 2023-01-01, 2023-12-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native web [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function listWorkflowRunActionExpressionTracesOutput(args: ListWorkflowRunActionExpressionTracesOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<ListWorkflowRunActionExpressionTracesResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:web:listWorkflowRunActionExpressionTraces", {
        "actionName": args.actionName,
        "name": args.name,
        "resourceGroupName": args.resourceGroupName,
        "runName": args.runName,
        "workflowName": args.workflowName,
    }, opts);
}

export interface ListWorkflowRunActionExpressionTracesOutputArgs {
    /**
     * The workflow action name.
     */
    actionName: pulumi.Input<string>;
    /**
     * Site name.
     */
    name: pulumi.Input<string>;
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