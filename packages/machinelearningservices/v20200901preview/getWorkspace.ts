import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the properties of the specified machine learning workspace.
 */
export function getWorkspace(args: GetWorkspaceArgs, opts?: pulumi.InvokeOptions): Promise<GetWorkspaceResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:machinelearningservices/v20200901preview:getWorkspace", {
        "resourceGroupName": args.resourceGroupName,
        "workspaceName": args.workspaceName,
    }, opts);
}

export interface GetWorkspaceArgs {
    /**
     * Name of the resource group in which workspace is located.
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
     * ARM id of the application insights associated with this workspace. This cannot be changed once the workspace has been created
     */
    readonly applicationInsights?: string;
    /**
     * ARM id of the container registry associated with this workspace. This cannot be changed once the workspace has been created
     */
    readonly containerRegistry?: string;
    /**
     * The creation time of the machine learning workspace in ISO8601 format.
     */
    readonly creationTime: string;
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
     * The friendly name for this workspace. This name in mutable
     */
    readonly friendlyName?: string;
    /**
     * The flag to signal HBI data in the workspace and reduce diagnostic data collected by the service
     */
    readonly hbiWorkspace?: boolean;
    /**
     * Specifies the resource ID.
     */
    readonly id: string;
    /**
     * The identity of the resource.
     */
    readonly identity?: types.outputs.IdentityResponse;
    /**
     * The compute name for image build
     */
    readonly imageBuildCompute?: string;
    /**
     * ARM id of the key vault associated with this workspace. This cannot be changed once the workspace has been created
     */
    readonly keyVault?: string;
    /**
     * Specifies the location of the resource.
     */
    readonly location?: string;
    /**
     * Specifies the name of the resource.
     */
    readonly name: string;
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
     * Contains resource tags defined as key/value pairs.
     */
    readonly tags?: {[key: string]: string};
    /**
     * Specifies the type of the resource.
     */
    readonly type: string;
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
     * Name of the resource group in which workspace is located.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Name of Azure Machine Learning workspace.
     */
    workspaceName: pulumi.Input<string>;
}