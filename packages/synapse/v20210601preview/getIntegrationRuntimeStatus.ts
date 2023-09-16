import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * Get the integration runtime status
 */
export function getIntegrationRuntimeStatus(args: GetIntegrationRuntimeStatusArgs, opts?: pulumi.InvokeOptions): Promise<GetIntegrationRuntimeStatusResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:synapse/v20210601preview:getIntegrationRuntimeStatus", {
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
    readonly properties: types.outputs.synapse.v20210601preview.ManagedIntegrationRuntimeStatusResponse | types.outputs.synapse.v20210601preview.SelfHostedIntegrationRuntimeStatusResponse;
}
/**
 * Get the integration runtime status
 */
export function getIntegrationRuntimeStatusOutput(args: GetIntegrationRuntimeStatusOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetIntegrationRuntimeStatusResult> {
    return pulumi.output(args).apply((a: any) => getIntegrationRuntimeStatus(a, opts))
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
