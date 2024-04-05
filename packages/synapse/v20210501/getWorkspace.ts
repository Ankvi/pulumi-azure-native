import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets a workspace
 */
export function getWorkspace(args: GetWorkspaceArgs, opts?: pulumi.InvokeOptions): Promise<GetWorkspaceResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:synapse/v20210501:getWorkspace", {
        "resourceGroupName": args.resourceGroupName,
        "workspaceName": args.workspaceName,
    }, opts);
}

export interface GetWorkspaceArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * The name of the workspace
     */
    workspaceName: string;
}

/**
 * A workspace
 */
export interface GetWorkspaceResult {
    /**
     * The ADLA resource ID.
     */
    readonly adlaResourceId: string;
    /**
     * Connectivity endpoints
     */
    readonly connectivityEndpoints?: {[key: string]: string};
    /**
     * Initial workspace AAD admin properties for a CSP subscription
     */
    readonly cspWorkspaceAdminProperties?: types.outputs.CspWorkspaceAdminPropertiesResponse;
    /**
     * Workspace default data lake storage account details
     */
    readonly defaultDataLakeStorage?: types.outputs.DataLakeStorageAccountDetailsResponse;
    /**
     * The encryption details of the workspace
     */
    readonly encryption?: types.outputs.EncryptionDetailsResponse;
    /**
     * Workspace level configs and feature flags
     */
    readonly extraProperties: {[key: string]: any};
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * Identity of the workspace
     */
    readonly identity?: types.outputs.ManagedIdentityResponse;
    /**
     * The geo-location where the resource lives
     */
    readonly location: string;
    /**
     * Workspace managed resource group. The resource group name uniquely identifies the resource group within the user subscriptionId. The resource group name must be no longer than 90 characters long, and must be alphanumeric characters (Char.IsLetterOrDigit()) and '-', '_', '(', ')' and'.'. Note that the name cannot end with '.'
     */
    readonly managedResourceGroupName?: string;
    /**
     * Setting this to 'default' will ensure that all compute for this workspace is in a virtual network managed on behalf of the user.
     */
    readonly managedVirtualNetwork?: string;
    /**
     * Managed Virtual Network Settings
     */
    readonly managedVirtualNetworkSettings?: types.outputs.ManagedVirtualNetworkSettingsResponse;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Private endpoint connections to the workspace
     */
    readonly privateEndpointConnections?: types.outputs.PrivateEndpointConnectionResponse[];
    /**
     * Resource provisioning state
     */
    readonly provisioningState: string;
    /**
     * Enable or Disable public network access to workspace
     */
    readonly publicNetworkAccess?: string;
    /**
     * Purview Configuration
     */
    readonly purviewConfiguration?: types.outputs.PurviewConfigurationResponse;
    /**
     * Login for workspace SQL active directory administrator
     */
    readonly sqlAdministratorLogin?: string;
    /**
     * SQL administrator login password
     */
    readonly sqlAdministratorLoginPassword?: string;
    /**
     * Resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
    /**
     * Virtual Network profile
     */
    readonly virtualNetworkProfile?: types.outputs.VirtualNetworkProfileResponse;
    /**
     * Git integration settings
     */
    readonly workspaceRepositoryConfiguration?: types.outputs.WorkspaceRepositoryConfigurationResponse;
    /**
     * The workspace unique identifier
     */
    readonly workspaceUID: string;
}
/**
 * Gets a workspace
 */
export function getWorkspaceOutput(args: GetWorkspaceOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetWorkspaceResult> {
    return pulumi.output(args).apply((a: any) => getWorkspace(a, opts))
}

export interface GetWorkspaceOutputArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the workspace
     */
    workspaceName: pulumi.Input<string>;
}