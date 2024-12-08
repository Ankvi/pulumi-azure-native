import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get the integration runtime status
 * Azure REST API version: 2021-06-01.
 *
 * Other available API versions: 2021-06-01-preview.
 */
export function getIntegrationRuntimeStatus(args: GetIntegrationRuntimeStatusArgs, opts?: pulumi.InvokeOptions): Promise<GetIntegrationRuntimeStatusResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:synapse:getIntegrationRuntimeStatus", {
        "integrationRuntimeName": args.integrationRuntimeName,
        "resourceGroupName": args.resourceGroupName,
        "workspaceName": args.workspaceName,
    }, opts);
}

export interface GetIntegrationRuntimeStatusArgs {
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
 * Integration runtime status response.
 */
export interface GetIntegrationRuntimeStatusResult {
    /**
     * The integration runtime name.
     */
    readonly name: string;
    /**
     * Integration runtime properties.
     */
    readonly properties: types.outputs.ManagedIntegrationRuntimeStatusResponse | types.outputs.SelfHostedIntegrationRuntimeStatusResponse;
}
/**
 * Get the integration runtime status
 * Azure REST API version: 2021-06-01.
 *
 * Other available API versions: 2021-06-01-preview.
 */
export function getIntegrationRuntimeStatusOutput(args: GetIntegrationRuntimeStatusOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetIntegrationRuntimeStatusResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:synapse:getIntegrationRuntimeStatus", {
        "integrationRuntimeName": args.integrationRuntimeName,
        "resourceGroupName": args.resourceGroupName,
        "workspaceName": args.workspaceName,
    }, opts);
}

export interface GetIntegrationRuntimeStatusOutputArgs {
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