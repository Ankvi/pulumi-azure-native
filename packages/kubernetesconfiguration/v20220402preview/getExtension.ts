import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets Kubernetes Cluster Extension.
 */
export function getExtension(args: GetExtensionArgs, opts?: pulumi.InvokeOptions): Promise<GetExtensionResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:kubernetesconfiguration/v20220402preview:getExtension", {
        "clusterName": args.clusterName,
        "clusterResourceName": args.clusterResourceName,
        "clusterRp": args.clusterRp,
        "extensionName": args.extensionName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetExtensionArgs {
    /**
     * The name of the kubernetes cluster.
     */
    clusterName: string;
    /**
     * The Kubernetes cluster resource name - i.e. managedClusters, connectedClusters, provisionedClusters.
     */
    clusterResourceName: string;
    /**
     * The Kubernetes cluster RP - i.e. Microsoft.ContainerService, Microsoft.Kubernetes, Microsoft.HybridContainerService.
     */
    clusterRp: string;
    /**
     * Name of the Extension.
     */
    extensionName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * The Extension object.
 */
export interface GetExtensionResult {
    /**
     * Identity of the Extension resource in an AKS cluster
     */
    readonly aksAssignedIdentity?: types.outputs.ExtensionResponseAksAssignedIdentity;
    /**
     * Flag to note if this extension participates in auto upgrade of minor version, or not.
     */
    readonly autoUpgradeMinorVersion?: boolean;
    /**
     * Configuration settings that are sensitive, as name-value pairs for configuring this extension.
     */
    readonly configurationProtectedSettings?: {[key: string]: string};
    /**
     * Configuration settings, as name-value pairs for configuring this extension.
     */
    readonly configurationSettings?: {[key: string]: string};
    /**
     * Custom Location settings properties.
     */
    readonly customLocationSettings: {[key: string]: string};
    /**
     * Error information from the Agent - e.g. errors during installation.
     */
    readonly errorInfo: types.outputs.ErrorDetailResponse;
    /**
     * Type of the Extension, of which this resource is an instance of.  It must be one of the Extension Types registered with Microsoft.KubernetesConfiguration by the Extension publisher.
     */
    readonly extensionType?: string;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * Identity of the Extension resource
     */
    readonly identity?: types.outputs.IdentityResponse;
    /**
     * Installed version of the extension.
     */
    readonly installedVersion: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Uri of the Helm package
     */
    readonly packageUri: string;
    /**
     * The plan information.
     */
    readonly plan?: types.outputs.PlanResponse;
    /**
     * Status of installation of this extension.
     */
    readonly provisioningState: string;
    /**
     * ReleaseTrain this extension participates in for auto-upgrade (e.g. Stable, Preview, etc.) - only if autoUpgradeMinorVersion is 'true'.
     */
    readonly releaseTrain?: string;
    /**
     * Scope at which the extension is installed.
     */
    readonly scope?: types.outputs.ScopeResponse;
    /**
     * Status from this extension.
     */
    readonly statuses?: types.outputs.ExtensionStatusResponse[];
    /**
     * Top level metadata https://github.com/Azure/azure-resource-manager-rpc/blob/master/v1.0/common-api-contracts.md#system-metadata-for-all-azure-resources
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
    /**
     * User-specified version of the extension for this extension to 'pin'. To use 'version', autoUpgradeMinorVersion must be 'false'.
     */
    readonly version?: string;
}
/**
 * Gets Kubernetes Cluster Extension.
 */
export function getExtensionOutput(args: GetExtensionOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetExtensionResult> {
    return pulumi.output(args).apply((a: any) => getExtension(a, opts))
}

export interface GetExtensionOutputArgs {
    /**
     * The name of the kubernetes cluster.
     */
    clusterName: pulumi.Input<string>;
    /**
     * The Kubernetes cluster resource name - i.e. managedClusters, connectedClusters, provisionedClusters.
     */
    clusterResourceName: pulumi.Input<string>;
    /**
     * The Kubernetes cluster RP - i.e. Microsoft.ContainerService, Microsoft.Kubernetes, Microsoft.HybridContainerService.
     */
    clusterRp: pulumi.Input<string>;
    /**
     * Name of the Extension.
     */
    extensionName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}
