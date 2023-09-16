import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * Returns the Workspace resource associated with the given name.
 */
export function getWorkspace(args: GetWorkspaceArgs, opts?: pulumi.InvokeOptions): Promise<GetWorkspaceResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:quantum/v20220110preview:getWorkspace", {
        "resourceGroupName": args.resourceGroupName,
        "workspaceName": args.workspaceName,
    }, opts);
}

export interface GetWorkspaceArgs {
    /**
     * The name of the resource group.
     */
    resourceGroupName: string;
    /**
     * The name of the quantum workspace resource.
     */
    workspaceName: string;
}

/**
 * The resource proxy definition object for quantum workspace.
 */
export interface GetWorkspaceResult {
    /**
     * The URI of the workspace endpoint.
     */
    readonly endpointUri: string;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * Managed Identity information.
     */
    readonly identity?: types.outputs.quantum.v20220110preview.QuantumWorkspaceResponseIdentity;
    /**
     * The geo-location where the resource lives
     */
    readonly location: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * List of Providers selected for this Workspace
     */
    readonly providers?: types.outputs.quantum.v20220110preview.ProviderResponse[];
    /**
     * Provisioning status field
     */
    readonly provisioningState: string;
    /**
     * ARM Resource Id of the storage account associated with this workspace.
     */
    readonly storageAccount?: string;
    /**
     * System metadata
     */
    readonly systemData: types.outputs.quantum.v20220110preview.SystemDataResponse;
    /**
     * Resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
    /**
     * Whether the current workspace is ready to accept Jobs.
     */
    readonly usable: string;
}
/**
 * Returns the Workspace resource associated with the given name.
 */
export function getWorkspaceOutput(args: GetWorkspaceOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetWorkspaceResult> {
    return pulumi.output(args).apply((a: any) => getWorkspace(a, opts))
}

export interface GetWorkspaceOutputArgs {
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the quantum workspace resource.
     */
    workspaceName: pulumi.Input<string>;
}
