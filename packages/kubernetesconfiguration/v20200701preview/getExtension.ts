import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets details of the Kubernetes Cluster Extension Instance.
 */
export function getExtension(args: GetExtensionArgs, opts?: pulumi.InvokeOptions): Promise<GetExtensionResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:kubernetesconfiguration/v20200701preview:getExtension", {
        "clusterName": args.clusterName,
        "clusterResourceName": args.clusterResourceName,
        "clusterRp": args.clusterRp,
        "extensionInstanceName": args.extensionInstanceName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetExtensionArgs {
    /**
     * The name of the kubernetes cluster.
     */
    clusterName: string;
    /**
     * The Kubernetes cluster resource name - either managedClusters (for AKS clusters) or connectedClusters (for OnPrem K8S clusters).
     */
    clusterResourceName: string;
    /**
     * The Kubernetes cluster RP - either Microsoft.ContainerService (for AKS clusters) or Microsoft.Kubernetes (for OnPrem K8S clusters).
     */
    clusterRp: string;
    /**
     * Name of an instance of the Extension.
     */
    extensionInstanceName: string;
    /**
     * The name of the resource group.
     */
    resourceGroupName: string;
}

/**
 * The Extension Instance object.
 */
export interface GetExtensionResult {
    /**
     * Flag to note if this instance participates in auto upgrade of minor version, or not.
     */
    readonly autoUpgradeMinorVersion?: boolean;
    /**
     * Configuration settings that are sensitive, as name-value pairs for configuring this instance of the extension.
     */
    readonly configurationProtectedSettings?: {[key: string]: string};
    /**
     * Configuration settings, as name-value pairs for configuring this instance of the extension.
     */
    readonly configurationSettings?: {[key: string]: string};
    /**
     * DateLiteral (per ISO8601) noting the time the resource was created by the client (user).
     */
    readonly creationTime: string;
    /**
     * Error information from the Agent - e.g. errors during installation.
     */
    readonly errorInfo: types.outputs.ErrorDefinitionResponse;
    /**
     * Type of the Extension, of which this resource is an instance of.  It must be one of the Extension Types registered with Microsoft.KubernetesConfiguration by the Extension publisher.
     */
    readonly extensionType?: string;
    /**
     * Resource Id
     */
    readonly id: string;
    /**
     * The identity of the configuration.
     */
    readonly identity?: types.outputs.ConfigurationIdentityResponse;
    /**
     * Status of installation of this instance of the extension.
     */
    readonly installState: string;
    /**
     * DateLiteral (per ISO8601) noting the time the resource was modified by the client (user).
     */
    readonly lastModifiedTime: string;
    /**
     * DateLiteral (per ISO8601) noting the time of last status from the agent.
     */
    readonly lastStatusTime: string;
    /**
     * Resource name
     */
    readonly name: string;
    /**
     * ReleaseTrain this extension instance participates in for auto-upgrade (e.g. Stable, Preview, etc.) - only if autoUpgradeMinorVersion is 'true'.
     */
    readonly releaseTrain?: string;
    /**
     * Scope at which the extension instance is installed.
     */
    readonly scope?: types.outputs.ScopeResponse;
    /**
     * Status from this instance of the extension.
     */
    readonly statuses?: types.outputs.ExtensionStatusResponse[];
    /**
     * Top level metadata https://github.com/Azure/azure-resource-manager-rpc/blob/master/v1.0/common-api-contracts.md#system-metadata-for-all-azure-resources
     */
    readonly systemData?: types.outputs.SystemDataResponse;
    /**
     * Resource type
     */
    readonly type: string;
    /**
     * Version of the extension for this extension instance, if it is 'pinned' to a specific version. autoUpgradeMinorVersion must be 'false'.
     */
    readonly version?: string;
}
/**
 * Gets details of the Kubernetes Cluster Extension Instance.
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
     * The Kubernetes cluster resource name - either managedClusters (for AKS clusters) or connectedClusters (for OnPrem K8S clusters).
     */
    clusterResourceName: pulumi.Input<string>;
    /**
     * The Kubernetes cluster RP - either Microsoft.ContainerService (for AKS clusters) or Microsoft.Kubernetes (for OnPrem K8S clusters).
     */
    clusterRp: pulumi.Input<string>;
    /**
     * Name of an instance of the Extension.
     */
    extensionInstanceName: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
}