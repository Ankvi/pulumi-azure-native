import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the properties of the specified machine learning workspace.
 */
export function getWorkspace(args: GetWorkspaceArgs, opts?: pulumi.InvokeOptions): Promise<GetWorkspaceResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:machinelearningservices/v20231001:getWorkspace", {
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
     * Name of Azure Machine Learning workspace.
     */
    workspaceName: string;
}

/**
 * An object that represents a machine learning workspace.
 */
export interface GetWorkspaceResult {
    /**
     * The flag to indicate whether to allow public access when behind VNet.
     */
    readonly allowPublicAccessWhenBehindVnet?: boolean;
    /**
     * ARM id of the application insights associated with this workspace.
     */
    readonly applicationInsights?: string;
    /**
     * ARM id of the container registry associated with this workspace.
     */
    readonly containerRegistry?: string;
    /**
     * The description of this workspace.
     */
    readonly description?: string;
    /**
     * Url for the discovery service to identify regional endpoints for machine learning experimentation services
     */
    readonly discoveryUrl?: string;
    /**
     * The encryption settings of Azure ML workspace.
     */
    readonly encryption?: types.outputs.EncryptionPropertyResponse;
    /**
     * Settings for feature store type workspace.
     */
    readonly featureStoreSettings?: types.outputs.FeatureStoreSettingsResponse;
    /**
     * The friendly name for this workspace. This name in mutable
     */
    readonly friendlyName?: string;
    /**
     * The flag to signal HBI data in the workspace and reduce diagnostic data collected by the service
     */
    readonly hbiWorkspace?: boolean;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The identity of the resource.
     */
    readonly identity?: types.outputs.ManagedServiceIdentityResponse;
    /**
     * The compute name for image build
     */
    readonly imageBuildCompute?: string;
    /**
     * ARM id of the key vault associated with this workspace. This cannot be changed once the workspace has been created
     */
    readonly keyVault?: string;
    readonly kind?: string;
    /**
     * Specifies the location of the resource.
     */
    readonly location?: string;
    /**
     * Managed Network settings for a machine learning workspace.
     */
    readonly managedNetwork?: types.outputs.ManagedNetworkSettingsResponse;
    /**
     * The URI associated with this workspace that machine learning flow must point at to set up tracking.
     */
    readonly mlFlowTrackingUri: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The notebook info of Azure ML workspace.
     */
    readonly notebookInfo: types.outputs.NotebookResourceInfoResponse;
    /**
     * The user assigned identity resource id that represents the workspace identity.
     */
    readonly primaryUserAssignedIdentity?: string;
    /**
     * The list of private endpoint connections in the workspace.
     */
    readonly privateEndpointConnections: types.outputs.PrivateEndpointConnectionResponse[];
    /**
     * Count of private connections in the workspace
     */
    readonly privateLinkCount: number;
    /**
     * The current deployment state of workspace resource. The provisioningState is to indicate states for resource provisioning.
     */
    readonly provisioningState: string;
    /**
     * Whether requests from Public Network are allowed.
     */
    readonly publicNetworkAccess?: string;
    /**
     * Settings for serverless compute created in the workspace
     */
    readonly serverlessComputeSettings?: types.outputs.ServerlessComputeSettingsResponse;
    /**
     * The service managed resource settings.
     */
    readonly serviceManagedResourcesSettings?: types.outputs.ServiceManagedResourcesSettingsResponse;
    /**
     * The name of the managed resource group created by workspace RP in customer subscription if the workspace is CMK workspace
     */
    readonly serviceProvisionedResourceGroup: string;
    /**
     * The list of shared private link resources in this workspace.
     */
    readonly sharedPrivateLinkResources?: types.outputs.SharedPrivateLinkResourceResponse[];
    /**
     * The sku of the workspace.
     */
    readonly sku?: types.outputs.SkuResponse;
    /**
     * ARM id of the storage account associated with this workspace. This cannot be changed once the workspace has been created
     */
    readonly storageAccount?: string;
    /**
     * If the storage associated with the workspace has hierarchical namespace(HNS) enabled.
     */
    readonly storageHnsEnabled: boolean;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * Contains resource tags defined as key/value pairs.
     */
    readonly tags?: {[key: string]: string};
    /**
     * The tenant id associated with this workspace.
     */
    readonly tenantId: string;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
    /**
     * Enabling v1_legacy_mode may prevent you from using features provided by the v2 API.
     */
    readonly v1LegacyMode?: boolean;
    /**
     * The immutable id associated with this workspace.
     */
    readonly workspaceId: string;
}
/**
 * Gets the properties of the specified machine learning workspace.
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
     * Name of Azure Machine Learning workspace.
     */
    workspaceName: pulumi.Input<string>;
}
