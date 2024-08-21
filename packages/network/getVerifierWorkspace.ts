import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Instance of Verifier Workspace.
 * Azure REST API version: 2024-01-01-preview.
 */
export function getVerifierWorkspace(args: GetVerifierWorkspaceArgs, opts?: pulumi.InvokeOptions): Promise<GetVerifierWorkspaceResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:network:getVerifierWorkspace", {
        "networkManagerName": args.networkManagerName,
        "resourceGroupName": args.resourceGroupName,
        "workspaceName": args.workspaceName,
    }, opts);
}

export interface GetVerifierWorkspaceArgs {
    /**
     * The name of the network manager.
     */
    networkManagerName: string;
    /**
     * The name of the resource group.
     */
    resourceGroupName: string;
    /**
     * Workspace name.
     */
    workspaceName: string;
}

/**
 * Instance of Verifier Workspace.
 */
export interface GetVerifierWorkspaceResult {
    /**
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
     */
    readonly id: string;
    /**
     * The geo-location where the resource lives
     */
    readonly location: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Properties of Verifier Workspace resource.
     */
    readonly properties: types.outputs.VerifierWorkspacePropertiesResponse;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * Resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Instance of Verifier Workspace.
 * Azure REST API version: 2024-01-01-preview.
 */
export function getVerifierWorkspaceOutput(args: GetVerifierWorkspaceOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetVerifierWorkspaceResult> {
    return pulumi.output(args).apply((a: any) => getVerifierWorkspace(a, opts))
}

export interface GetVerifierWorkspaceOutputArgs {
    /**
     * The name of the network manager.
     */
    networkManagerName: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Workspace name.
     */
    workspaceName: pulumi.Input<string>;
}