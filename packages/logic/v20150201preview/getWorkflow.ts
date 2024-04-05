import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets a workflow.
 */
export function getWorkflow(args: GetWorkflowArgs, opts?: pulumi.InvokeOptions): Promise<GetWorkflowResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:logic/v20150201preview:getWorkflow", {
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
     * Gets or sets the definition.
     */
    readonly definition?: any;
    /**
     * Gets or sets the link to definition.
     */
    readonly definitionLink?: types.outputs.ContentLinkResponse;
    /**
     * Gets or sets the resource id.
     */
    readonly id?: string;
    /**
     * Gets or sets the resource location.
     */
    readonly location?: string;
    /**
     * Gets the resource name.
     */
    readonly name?: string;
    /**
     * Gets or sets the parameters.
     */
    readonly parameters?: {[key: string]: types.outputs.WorkflowParameterResponse};
    /**
     * Gets or sets the link to parameters.
     */
    readonly parametersLink?: types.outputs.ContentLinkResponse;
    /**
     * Gets the provisioning state.
     */
    readonly provisioningState: string;
    /**
     * Gets or sets the sku.
     */
    readonly sku?: types.outputs.SkuResponse;
    /**
     * Gets or sets the state.
     */
    readonly state?: string;
    /**
     * Gets or sets the resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * Gets the resource type.
     */
    readonly type?: string;
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