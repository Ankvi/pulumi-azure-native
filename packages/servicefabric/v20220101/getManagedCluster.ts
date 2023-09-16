import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * Get a Service Fabric managed cluster resource created or in the process of being created in the specified resource group.
 */
export function getManagedCluster(args: GetManagedClusterArgs, opts?: pulumi.InvokeOptions): Promise<GetManagedClusterResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:servicefabric/v20220101:getManagedCluster", {
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
 * The manged cluster resource
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
    readonly applicationTypeVersionsCleanupPolicy?: types.outputs.servicefabric.v20220101.ApplicationTypeVersionsCleanupPolicyResponse;
    /**
     * Auxiliary subnets for the cluster.
     */
    readonly auxiliarySubnets?: types.outputs.servicefabric.v20220101.SubnetResponse[];
    /**
     * The AAD authentication settings of the cluster.
     */
    readonly azureActiveDirectory?: types.outputs.servicefabric.v20220101.AzureActiveDirectoryResponse;
    /**
     * The port used for client connections to the cluster.
     */
    readonly clientConnectionPort?: number;
    /**
     * Client certificates that are allowed to manage the cluster.
     */
    readonly clients?: types.outputs.servicefabric.v20220101.ClientCertificateResponse[];
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
    readonly fabricSettings?: types.outputs.servicefabric.v20220101.SettingsSectionDescriptionResponse[];
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
    readonly ipTags?: types.outputs.servicefabric.v20220101.IPTagResponse[];
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
    readonly loadBalancingRules?: types.outputs.servicefabric.v20220101.LoadBalancingRuleResponse[];
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
    readonly networkSecurityRules?: types.outputs.servicefabric.v20220101.NetworkSecurityRuleResponse[];
    /**
     * The provisioning state of the managed cluster resource.
     */
    readonly provisioningState: string;
    /**
     * Service endpoints for subnets in the cluster.
     */
    readonly serviceEndpoints?: types.outputs.servicefabric.v20220101.ServiceEndpointResponse[];
    /**
     * The sku of the managed cluster
     */
    readonly sku?: types.outputs.servicefabric.v20220101.SkuResponse;
    /**
     * If specified, the node types for the cluster are created in this subnet instead of the default VNet. The **networkSecurityRules** specified for the cluster are also applied to this subnet. This setting cannot be changed once the cluster is created.
     */
    readonly subnetId?: string;
    /**
     * Metadata pertaining to creation and last modification of the resource.
     */
    readonly systemData: types.outputs.servicefabric.v20220101.SystemDataResponse;
    /**
     * Azure resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * Azure resource type.
     */
    readonly type: string;
    /**
     * Indicates if the cluster has zone resiliency.
     */
    readonly zonalResiliency?: boolean;
}
/**
 * Get a Service Fabric managed cluster resource created or in the process of being created in the specified resource group.
 */
export function getManagedClusterOutput(args: GetManagedClusterOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetManagedClusterResult> {
    return pulumi.output(args).apply((a: any) => getManagedCluster(a, opts))
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
