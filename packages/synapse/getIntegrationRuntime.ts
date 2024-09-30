import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get an integration runtime
 * Azure REST API version: 2021-06-01.
 *
 * Other available API versions: 2021-06-01-preview.
 */
export function getIntegrationRuntime(args: GetIntegrationRuntimeArgs, opts?: pulumi.InvokeOptions): Promise<GetIntegrationRuntimeResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:synapse:getIntegrationRuntime", {
        "integrationRuntimeName": args.integrationRuntimeName,
        "resourceGroupName": args.resourceGroupName,
        "workspaceName": args.workspaceName,
    }, opts);
}

export interface GetIntegrationRuntimeArgs {
    /**
     * Integration runtime name
     */
    integrationRuntimeName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * The name of the workspace.
     */
    workspaceName: string;
}

/**
 * Integration runtime resource type.
 */
export interface GetIntegrationRuntimeResult {
    /**
     * Resource Etag.
     */
    readonly etag: string;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Integration runtime properties.
     */
    readonly properties: types.outputs.ManagedIntegrationRuntimeResponse | types.outputs.SelfHostedIntegrationRuntimeResponse;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Get an integration runtime
 * Azure REST API version: 2021-06-01.
 *
 * Other available API versions: 2021-06-01-preview.
 */
export function getIntegrationRuntimeOutput(args: GetIntegrationRuntimeOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetIntegrationRuntimeResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:synapse:getIntegrationRuntime", {
        "integrationRuntimeName": args.integrationRuntimeName,
        "resourceGroupName": args.resourceGroupName,
        "workspaceName": args.workspaceName,
    }, opts);
}

export interface GetIntegrationRuntimeOutputArgs {
    /**
     * Integration runtime name
     */
    integrationRuntimeName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the workspace.
     */
    workspaceName: pulumi.Input<string>;
}