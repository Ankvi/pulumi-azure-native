import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * Gets a workflow.
 */
export function getWorkflow(args: GetWorkflowArgs, opts?: pulumi.InvokeOptions): Promise<GetWorkflowResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:logic/v20160601:getWorkflow", {
        "resourceGroupName": args.resourceGroupName,
        "workflowName": args.workflowName,
    }, opts);
}

export interface GetWorkflowArgs {
    /**
     * The resource group name.
     */
    resourceGroupName: string;
    /**
     * The workflow name.
     */
    workflowName: string;
}

/**
 * The workflow type.
 */
export interface GetWorkflowResult {
    /**
     * Gets the access endpoint.
     */
    readonly accessEndpoint: string;
    /**
     * Gets the changed time.
     */
    readonly changedTime: string;
    /**
     * Gets the created time.
     */
    readonly createdTime: string;
    /**
     * The definition. See [Schema reference for Workflow Definition Language in Azure Logic Apps](https://aka.ms/logic-apps-workflow-definition-language).
     */
    readonly definition?: any;
    /**
     * The resource id.
     */
    readonly id: string;
    /**
     * The integration account.
     */
    readonly integrationAccount?: types.outputs.logic.v20160601.ResourceReferenceResponse;
    /**
     * The resource location.
     */
    readonly location?: string;
    /**
     * Gets the resource name.
     */
    readonly name: string;
    /**
     * The parameters.
     */
    readonly parameters?: {[key: string]: types.outputs.logic.v20160601.WorkflowParameterResponse};
    /**
     * Gets the provisioning state.
     */
    readonly provisioningState: string;
    /**
     * The sku.
     */
    readonly sku?: types.outputs.logic.v20160601.SkuResponse;
    /**
     * The state.
     */
    readonly state?: string;
    /**
     * The resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * Gets the resource type.
     */
    readonly type: string;
    /**
     * Gets the version.
     */
    readonly version: string;
}
/**
 * Gets a workflow.
 */
export function getWorkflowOutput(args: GetWorkflowOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetWorkflowResult> {
    return pulumi.output(args).apply((a: any) => getWorkflow(a, opts))
}

export interface GetWorkflowOutputArgs {
    /**
     * The resource group name.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The workflow name.
     */
    workflowName: pulumi.Input<string>;
}
