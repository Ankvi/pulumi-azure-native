import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets a workspace instance.
 */
export function getWorkspace(args: GetWorkspaceArgs, opts?: pulumi.InvokeOptions): Promise<GetWorkspaceResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:operationalinsights/v20221001:getWorkspace", {
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
     * The name of the workspace.
     */
    workspaceName: string;
}

/**
 * The top level Workspace resource container.
 */
export interface GetWorkspaceResult {
    /**
     * Workspace creation date.
     */
    readonly createdDate: string;
    /**
     * This is a read-only property. Represents the ID associated with the workspace.
     */
    readonly customerId: string;
    /**
     * The resource ID of the default Data Collection Rule to use for this workspace. Expected format is - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Insights/dataCollectionRules/{dcrName}.
     */
    readonly defaultDataCollectionRuleResourceId?: string;
    /**
     * The etag of the workspace.
     */
    readonly etag?: string;
    /**
     * Workspace features.
     */
    readonly features?: types.outputs.WorkspaceFeaturesResponse;
    /**
     * Indicates whether customer managed storage is mandatory for query management.
     */
    readonly forceCmkForQuery?: boolean;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The identity of the resource.
     */
    readonly identity?: types.outputs.IdentityResponse;
    /**
     * The geo-location where the resource lives
     */
    readonly location: string;
    /**
     * Workspace modification date.
     */
    readonly modifiedDate: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * List of linked private link scope resources.
     */
    readonly privateLinkScopedResources: types.outputs.PrivateLinkScopedResourceResponse[];
    /**
     * The provisioning state of the workspace.
     */
    readonly provisioningState: string;
    /**
     * The network access type for accessing Log Analytics ingestion.
     */
    readonly publicNetworkAccessForIngestion?: string;
    /**
     * The network access type for accessing Log Analytics query.
     */
    readonly publicNetworkAccessForQuery?: string;
    /**
     * The workspace data retention in days. Allowed values are per pricing plan. See pricing tiers documentation for details.
     */
    readonly retentionInDays?: number;
    /**
     * The SKU of the workspace.
     */
    readonly sku?: types.outputs.WorkspaceSkuResponse;
    /**
     * Metadata pertaining to creation and last modification of the resource.
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
    /**
     * The daily volume cap for ingestion.
     */
    readonly workspaceCapping?: types.outputs.WorkspaceCappingResponse;
}
/**
 * Gets a workspace instance.
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
     * The name of the workspace.
     */
    workspaceName: pulumi.Input<string>;
}