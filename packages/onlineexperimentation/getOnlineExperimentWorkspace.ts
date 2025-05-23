import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets an experiment workspace
 *
 * Uses Azure REST API version 2025-05-31-preview.
 */
export function getOnlineExperimentWorkspace(args: GetOnlineExperimentWorkspaceArgs, opts?: pulumi.InvokeOptions): Promise<GetOnlineExperimentWorkspaceResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:onlineexperimentation:getOnlineExperimentWorkspace", {
        "resourceGroupName": args.resourceGroupName,
        "workspaceName": args.workspaceName,
    }, opts);
}

export interface GetOnlineExperimentWorkspaceArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * The name of the OnlineExperimentWorkspace
     */
    workspaceName: string;
}

/**
 * An online experiment workspace resource.
 */
export interface GetOnlineExperimentWorkspaceResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
     */
    readonly id: string;
    /**
     * The managed service identities assigned to this resource.
     */
    readonly identity?: types.outputs.ManagedServiceIdentityResponse;
    /**
     * The geo-location where the resource lives
     */
    readonly location: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The resource-specific properties for this resource.
     */
    readonly properties: types.outputs.OnlineExperimentWorkspacePropertiesResponse;
    /**
     * The SKU (Stock Keeping Unit) assigned to this resource.
     */
    readonly sku?: types.outputs.OnlineExperimentationWorkspaceSkuResponse;
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
 * Gets an experiment workspace
 *
 * Uses Azure REST API version 2025-05-31-preview.
 */
export function getOnlineExperimentWorkspaceOutput(args: GetOnlineExperimentWorkspaceOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetOnlineExperimentWorkspaceResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:onlineexperimentation:getOnlineExperimentWorkspace", {
        "resourceGroupName": args.resourceGroupName,
        "workspaceName": args.workspaceName,
    }, opts);
}

export interface GetOnlineExperimentWorkspaceOutputArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the OnlineExperimentWorkspace
     */
    workspaceName: pulumi.Input<string>;
}