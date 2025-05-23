import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets a workflow.
 *
 * Uses Azure REST API version 2019-05-01.
 *
 * Other available API versions: 2015-02-01-preview, 2016-06-01, 2018-07-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native logic [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getWorkflow(args: GetWorkflowArgs, opts?: pulumi.InvokeOptions): Promise<GetWorkflowResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:logic:getWorkflow", {
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
     * The access control configuration.
     */
    readonly accessControl?: types.outputs.FlowAccessControlConfigurationResponse;
    /**
     * Gets the access endpoint.
     */
    readonly accessEndpoint: string;
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * Gets the changed time.
     */
    readonly changedTime: string;
    /**
     * Gets the created time.
     */
    readonly createdTime: string;
    /**
     * The definition.
     */
    readonly definition?: any;
    /**
     * The endpoints configuration.
     */
    readonly endpointsConfiguration?: types.outputs.FlowEndpointsConfigurationResponse;
    /**
     * The resource id.
     */
    readonly id: string;
    /**
     * Managed service identity properties.
     */
    readonly identity?: types.outputs.ManagedServiceIdentityResponse;
    /**
     * The integration account.
     */
    readonly integrationAccount?: types.outputs.ResourceReferenceResponse;
    /**
     * The integration service environment.
     */
    readonly integrationServiceEnvironment?: types.outputs.ResourceReferenceResponse;
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
    readonly parameters?: {[key: string]: types.outputs.WorkflowParameterResponse};
    /**
     * Gets the provisioning state.
     */
    readonly provisioningState: string;
    /**
     * The sku.
     */
    readonly sku: types.outputs.SkuResponse;
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
 *
 * Uses Azure REST API version 2019-05-01.
 *
 * Other available API versions: 2015-02-01-preview, 2016-06-01, 2018-07-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native logic [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getWorkflowOutput(args: GetWorkflowOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetWorkflowResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:logic:getWorkflow", {
        "resourceGroupName": args.resourceGroupName,
        "workflowName": args.workflowName,
    }, opts);
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