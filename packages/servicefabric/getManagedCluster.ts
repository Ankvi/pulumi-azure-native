import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a Service Fabric managed cluster resource created or in the process of being created in the specified resource group.
 * Azure REST API version: 2023-03-01-preview.
 *
 * Other available API versions: 2020-01-01-preview, 2022-01-01, 2022-10-01-preview, 2023-07-01-preview, 2023-09-01-preview, 2023-11-01-preview, 2023-12-01-preview, 2024-02-01-preview, 2024-04-01, 2024-06-01-preview, 2024-09-01-preview.
 */
export function getManagedCluster(args: GetManagedClusterArgs, opts?: pulumi.InvokeOptions): Promise<GetManagedClusterResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:servicefabric:getManagedCluster", {
        "clusterName": args.clusterName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetManagedClusterArgs {
    /**
     * The name of the cluster resource.
     */
    clusterName: string;
    /**
     * The name of the resource group.
     */
    resourceGroupName: string;
}

/**
 * The managed cluster resource
 */
export interface GetManagedClusterResult {
    /**
     * List of add-on features to enable on the cluster.
     */
    readonly addonFeatures?: string[];
    /**
     * VM admin user password.
     */
    readonly adminPassword?: string;
    /**
     * VM admin user name.
     */
    readonly adminUserName: string;
    /**
     * Setting this to true enables RDP access to the VM. The default NSG rule opens RDP port to Internet which can be overridden with custom Network Security Rules. The default value for this setting is false.
     */
    readonly allowRdpAccess?: boolean;
    /**
     * The policy used to clean up unused versions.
     */
    readonly applicationTypeVersionsCleanupPolicy?: types.outputs.ApplicationTypeVersionsCleanupPolicyResponse;
    /**
     * Auxiliary subnets for the cluster.
     */
    readonly auxiliarySubnets?: types.outputs.SubnetResponse[];
    /**
     * The AAD authentication settings of the cluster.
     */
    readonly azureActiveDirectory?: types.outputs.AzureActiveDirectoryResponse;
    /**
     * The port used for client connections to the cluster.
     */
    readonly clientConnectionPort?: number;
    /**
     * Client certificates that are allowed to manage the cluster.
     */
    readonly clients?: types.outputs.ClientCertificateResponse[];
    /**
     * List of thumbprints of the cluster certificates.
     */
    readonly clusterCertificateThumbprints: string[];
    /**
     * The Service Fabric runtime version of the cluster. This property is required when **clusterUpgradeMode** is set to 'Manual'. To get list of available Service Fabric versions for new clusters use [ClusterVersion API](./ClusterVersion.md). To get the list of available version for existing clusters use **availableClusterVersions**.
     */
    readonly clusterCodeVersion?: string;
    /**
     * A service generated unique identifier for the cluster resource.
     */
    readonly clusterId: string;
    /**
     * The current state of the cluster.
     */
    readonly clusterState: string;
    /**
     * Indicates when new cluster runtime version upgrades will be applied after they are released. By default is Wave0. Only applies when **clusterUpgradeMode** is set to 'Automatic'.
     */
    readonly clusterUpgradeCadence?: string;
    /**
     * The upgrade mode of the cluster when new Service Fabric runtime version is available.
     */
    readonly clusterUpgradeMode?: string;
    /**
     * The cluster dns name.
     */
    readonly dnsName: string;
    /**
     * Setting this to true enables automatic OS upgrade for the node types that are created using any platform OS image with version 'latest'. The default value for this setting is false.
     */
    readonly enableAutoOSUpgrade?: boolean;
    /**
     * Setting this to true creates IPv6 address space for the default VNet used by the cluster. This setting cannot be changed once the cluster is created. The default value for this setting is false.
     */
    readonly enableIpv6?: boolean;
    /**
     * Setting this to true will link the IPv4 address as the ServicePublicIP of the IPv6 address. It can only be set to True if IPv6 is enabled on the cluster.
     */
    readonly enableServicePublicIP?: boolean;
    /**
     * Azure resource etag.
     */
    readonly etag: string;
    /**
     * The list of custom fabric settings to configure the cluster.
     */
    readonly fabricSettings?: types.outputs.SettingsSectionDescriptionResponse[];
    /**
     * The fully qualified domain name associated with the public load balancer of the cluster.
     */
    readonly fqdn: string;
    /**
     * The port used for HTTP connections to the cluster.
     */
    readonly httpGatewayConnectionPort?: number;
    /**
     * Azure resource identifier.
     */
    readonly id: string;
    /**
     * The list of IP tags associated with the default public IP address of the cluster.
     */
    readonly ipTags?: types.outputs.IPTagResponse[];
    /**
     * The IPv4 address associated with the public load balancer of the cluster.
     */
    readonly ipv4Address: string;
    /**
     * IPv6 address for the cluster if IPv6 is enabled.
     */
    readonly ipv6Address: string;
    /**
     * Load balancing rules that are applied to the public load balancer of the cluster.
     */
    readonly loadBalancingRules?: types.outputs.LoadBalancingRuleResponse[];
    /**
     * Azure resource location.
     */
    readonly location: string;
    /**
     * Azure resource name.
     */
    readonly name: string;
    /**
     * Custom Network Security Rules that are applied to the Virtual Network of the cluster.
     */
    readonly networkSecurityRules?: types.outputs.NetworkSecurityRuleResponse[];
    /**
     * The provisioning state of the managed cluster resource.
     */
    readonly provisioningState: string;
    /**
     * Specify the resource id of a public IP prefix that the load balancer will allocate a public IP address from. Only supports IPv4.
     */
    readonly publicIPPrefixId?: string;
    /**
     * Service endpoints for subnets in the cluster.
     */
    readonly serviceEndpoints?: types.outputs.ServiceEndpointResponse[];
    /**
     * The sku of the managed cluster
     */
    readonly sku: types.outputs.SkuResponse;
    /**
     * If specified, the node types for the cluster are created in this subnet instead of the default VNet. The **networkSecurityRules** specified for the cluster are also applied to this subnet. This setting cannot be changed once the cluster is created.
     */
    readonly subnetId?: string;
    /**
     * Metadata pertaining to creation and last modification of the resource.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * Azure resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * Azure resource type.
     */
    readonly type: string;
    /**
     * For new clusters, this parameter indicates that it uses Bring your own VNet, but the subnet is specified at node type level; and for such clusters, the subnetId property is required for node types.
     */
    readonly useCustomVnet?: boolean;
    /**
     * Indicates if the cluster has zone resiliency.
     */
    readonly zonalResiliency?: boolean;
    /**
     * Indicates the update mode for Cross Az clusters.
     */
    readonly zonalUpdateMode?: string;
}
/**
 * Get a Service Fabric managed cluster resource created or in the process of being created in the specified resource group.
 * Azure REST API version: 2023-03-01-preview.
 *
 * Other available API versions: 2020-01-01-preview, 2022-01-01, 2022-10-01-preview, 2023-07-01-preview, 2023-09-01-preview, 2023-11-01-preview, 2023-12-01-preview, 2024-02-01-preview, 2024-04-01, 2024-06-01-preview, 2024-09-01-preview.
 */
export function getManagedClusterOutput(args: GetManagedClusterOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetManagedClusterResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:servicefabric:getManagedCluster", {
        "clusterName": args.clusterName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetManagedClusterOutputArgs {
    /**
     * The name of the cluster resource.
     */
    clusterName: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
}