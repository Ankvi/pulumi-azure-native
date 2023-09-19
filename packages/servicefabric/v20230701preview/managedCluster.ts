import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * The managed cluster resource
 */
export class ManagedCluster extends pulumi.CustomResource {
    /**
     * Get an existing ManagedCluster resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): ManagedCluster {
        return new ManagedCluster(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:servicefabric/v20230701preview:ManagedCluster';

    /**
     * Returns true if the given object is an instance of ManagedCluster.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ManagedCluster {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ManagedCluster.__pulumiType;
    }

    /**
     * List of add-on features to enable on the cluster.
     */
    public readonly addonFeatures!: pulumi.Output<string[] | undefined>;
    /**
     * VM admin user password.
     */
    public readonly adminPassword!: pulumi.Output<string | undefined>;
    /**
     * VM admin user name.
     */
    public readonly adminUserName!: pulumi.Output<string>;
    /**
     * Setting this to true enables RDP access to the VM. The default NSG rule opens RDP port to Internet which can be overridden with custom Network Security Rules. The default value for this setting is false.
     */
    public readonly allowRdpAccess!: pulumi.Output<boolean | undefined>;
    /**
     * The policy used to clean up unused versions.
     */
    public readonly applicationTypeVersionsCleanupPolicy!: pulumi.Output<types.outputs.ApplicationTypeVersionsCleanupPolicyResponse | undefined>;
    /**
     * Auxiliary subnets for the cluster.
     */
    public readonly auxiliarySubnets!: pulumi.Output<types.outputs.SubnetResponse[] | undefined>;
    /**
     * The AAD authentication settings of the cluster.
     */
    public readonly azureActiveDirectory!: pulumi.Output<types.outputs.AzureActiveDirectoryResponse | undefined>;
    /**
     * The port used for client connections to the cluster.
     */
    public readonly clientConnectionPort!: pulumi.Output<number | undefined>;
    /**
     * Client certificates that are allowed to manage the cluster.
     */
    public readonly clients!: pulumi.Output<types.outputs.ClientCertificateResponse[] | undefined>;
    /**
     * List of thumbprints of the cluster certificates.
     */
    public /*out*/ readonly clusterCertificateThumbprints!: pulumi.Output<string[]>;
    /**
     * The Service Fabric runtime version of the cluster. This property is required when **clusterUpgradeMode** is set to 'Manual'. To get list of available Service Fabric versions for new clusters use [ClusterVersion API](./ClusterVersion.md). To get the list of available version for existing clusters use **availableClusterVersions**.
     */
    public readonly clusterCodeVersion!: pulumi.Output<string | undefined>;
    /**
     * A service generated unique identifier for the cluster resource.
     */
    public /*out*/ readonly clusterId!: pulumi.Output<string>;
    /**
     * The current state of the cluster.
     */
    public /*out*/ readonly clusterState!: pulumi.Output<string>;
    /**
     * Indicates when new cluster runtime version upgrades will be applied after they are released. By default is Wave0. Only applies when **clusterUpgradeMode** is set to 'Automatic'.
     */
    public readonly clusterUpgradeCadence!: pulumi.Output<string | undefined>;
    /**
     * The upgrade mode of the cluster when new Service Fabric runtime version is available.
     */
    public readonly clusterUpgradeMode!: pulumi.Output<string | undefined>;
    /**
     * Specify the resource id of a DDoS network protection plan that will be associated with the virtual network of the cluster.
     */
    public readonly ddosProtectionPlanId!: pulumi.Output<string | undefined>;
    /**
     * The cluster dns name.
     */
    public readonly dnsName!: pulumi.Output<string>;
    /**
     * Setting this to true enables automatic OS upgrade for the node types that are created using any platform OS image with version 'latest'. The default value for this setting is false.
     */
    public readonly enableAutoOSUpgrade!: pulumi.Output<boolean | undefined>;
    /**
     * Setting this to true creates IPv6 address space for the default VNet used by the cluster. This setting cannot be changed once the cluster is created. The default value for this setting is false.
     */
    public readonly enableIpv6!: pulumi.Output<boolean | undefined>;
    /**
     * Setting this to true will link the IPv4 address as the ServicePublicIP of the IPv6 address. It can only be set to True if IPv6 is enabled on the cluster.
     */
    public readonly enableServicePublicIP!: pulumi.Output<boolean | undefined>;
    /**
     * Azure resource etag.
     */
    public /*out*/ readonly etag!: pulumi.Output<string>;
    /**
     * The list of custom fabric settings to configure the cluster.
     */
    public readonly fabricSettings!: pulumi.Output<types.outputs.SettingsSectionDescriptionResponse[] | undefined>;
    /**
     * The fully qualified domain name associated with the public load balancer of the cluster.
     */
    public /*out*/ readonly fqdn!: pulumi.Output<string>;
    /**
     * The port used for HTTP connections to the cluster.
     */
    public readonly httpGatewayConnectionPort!: pulumi.Output<number | undefined>;
    /**
     * The list of IP tags associated with the default public IP address of the cluster.
     */
    public readonly ipTags!: pulumi.Output<types.outputs.IPTagResponse[] | undefined>;
    /**
     * The IPv4 address associated with the public load balancer of the cluster.
     */
    public /*out*/ readonly ipv4Address!: pulumi.Output<string>;
    /**
     * IPv6 address for the cluster if IPv6 is enabled.
     */
    public /*out*/ readonly ipv6Address!: pulumi.Output<string>;
    /**
     * Load balancing rules that are applied to the public load balancer of the cluster.
     */
    public readonly loadBalancingRules!: pulumi.Output<types.outputs.LoadBalancingRuleResponse[] | undefined>;
    /**
     * Azure resource location.
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * Azure resource name.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Custom Network Security Rules that are applied to the Virtual Network of the cluster.
     */
    public readonly networkSecurityRules!: pulumi.Output<types.outputs.NetworkSecurityRuleResponse[] | undefined>;
    /**
     * The provisioning state of the managed cluster resource.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * Specify the resource id of a public IP prefix that the load balancer will allocate a public IP address from. Only supports IPv4.
     */
    public readonly publicIPPrefixId!: pulumi.Output<string | undefined>;
    /**
     * Service endpoints for subnets in the cluster.
     */
    public readonly serviceEndpoints!: pulumi.Output<types.outputs.ServiceEndpointResponse[] | undefined>;
    /**
     * The sku of the managed cluster
     */
    public readonly sku!: pulumi.Output<types.outputs.SkuResponse>;
    /**
     * If specified, the node types for the cluster are created in this subnet instead of the default VNet. The **networkSecurityRules** specified for the cluster are also applied to this subnet. This setting cannot be changed once the cluster is created.
     */
    public readonly subnetId!: pulumi.Output<string | undefined>;
    /**
     * Metadata pertaining to creation and last modification of the resource.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * Azure resource tags.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Azure resource type.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * For new clusters, this parameter indicates that it uses Bring your own VNet, but the subnet is specified at node type level; and for such clusters, the subnetId property is required for node types.
     */
    public readonly useCustomVnet!: pulumi.Output<boolean | undefined>;
    /**
     * Indicates if the cluster has zone resiliency.
     */
    public readonly zonalResiliency!: pulumi.Output<boolean | undefined>;
    /**
     * Indicates the update mode for Cross Az clusters.
     */
    public readonly zonalUpdateMode!: pulumi.Output<string | undefined>;

    /**
     * Create a ManagedCluster resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ManagedClusterArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.adminUserName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'adminUserName'");
            }
            if ((!args || args.dnsName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'dnsName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.sku === undefined) && !opts.urn) {
                throw new Error("Missing required property 'sku'");
            }
            resourceInputs["addonFeatures"] = args ? args.addonFeatures : undefined;
            resourceInputs["adminPassword"] = args ? args.adminPassword : undefined;
            resourceInputs["adminUserName"] = args ? args.adminUserName : undefined;
            resourceInputs["allowRdpAccess"] = args ? args.allowRdpAccess : undefined;
            resourceInputs["applicationTypeVersionsCleanupPolicy"] = args ? args.applicationTypeVersionsCleanupPolicy : undefined;
            resourceInputs["auxiliarySubnets"] = args ? args.auxiliarySubnets : undefined;
            resourceInputs["azureActiveDirectory"] = args ? args.azureActiveDirectory : undefined;
            resourceInputs["clientConnectionPort"] = (args ? args.clientConnectionPort : undefined) ?? 19000;
            resourceInputs["clients"] = args ? args.clients : undefined;
            resourceInputs["clusterCodeVersion"] = args ? args.clusterCodeVersion : undefined;
            resourceInputs["clusterName"] = args ? args.clusterName : undefined;
            resourceInputs["clusterUpgradeCadence"] = args ? args.clusterUpgradeCadence : undefined;
            resourceInputs["clusterUpgradeMode"] = args ? args.clusterUpgradeMode : undefined;
            resourceInputs["ddosProtectionPlanId"] = args ? args.ddosProtectionPlanId : undefined;
            resourceInputs["dnsName"] = args ? args.dnsName : undefined;
            resourceInputs["enableAutoOSUpgrade"] = args ? args.enableAutoOSUpgrade : undefined;
            resourceInputs["enableIpv6"] = args ? args.enableIpv6 : undefined;
            resourceInputs["enableServicePublicIP"] = args ? args.enableServicePublicIP : undefined;
            resourceInputs["fabricSettings"] = args ? args.fabricSettings : undefined;
            resourceInputs["httpGatewayConnectionPort"] = (args ? args.httpGatewayConnectionPort : undefined) ?? 19080;
            resourceInputs["ipTags"] = args ? args.ipTags : undefined;
            resourceInputs["loadBalancingRules"] = args ? args.loadBalancingRules : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["networkSecurityRules"] = args ? args.networkSecurityRules : undefined;
            resourceInputs["publicIPPrefixId"] = args ? args.publicIPPrefixId : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["serviceEndpoints"] = args ? args.serviceEndpoints : undefined;
            resourceInputs["sku"] = args ? args.sku : undefined;
            resourceInputs["subnetId"] = args ? args.subnetId : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["useCustomVnet"] = args ? args.useCustomVnet : undefined;
            resourceInputs["zonalResiliency"] = (args ? args.zonalResiliency : undefined) ?? false;
            resourceInputs["zonalUpdateMode"] = args ? args.zonalUpdateMode : undefined;
            resourceInputs["clusterCertificateThumbprints"] = undefined /*out*/;
            resourceInputs["clusterId"] = undefined /*out*/;
            resourceInputs["clusterState"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["fqdn"] = undefined /*out*/;
            resourceInputs["ipv4Address"] = undefined /*out*/;
            resourceInputs["ipv6Address"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["addonFeatures"] = undefined /*out*/;
            resourceInputs["adminPassword"] = undefined /*out*/;
            resourceInputs["adminUserName"] = undefined /*out*/;
            resourceInputs["allowRdpAccess"] = undefined /*out*/;
            resourceInputs["applicationTypeVersionsCleanupPolicy"] = undefined /*out*/;
            resourceInputs["auxiliarySubnets"] = undefined /*out*/;
            resourceInputs["azureActiveDirectory"] = undefined /*out*/;
            resourceInputs["clientConnectionPort"] = undefined /*out*/;
            resourceInputs["clients"] = undefined /*out*/;
            resourceInputs["clusterCertificateThumbprints"] = undefined /*out*/;
            resourceInputs["clusterCodeVersion"] = undefined /*out*/;
            resourceInputs["clusterId"] = undefined /*out*/;
            resourceInputs["clusterState"] = undefined /*out*/;
            resourceInputs["clusterUpgradeCadence"] = undefined /*out*/;
            resourceInputs["clusterUpgradeMode"] = undefined /*out*/;
            resourceInputs["ddosProtectionPlanId"] = undefined /*out*/;
            resourceInputs["dnsName"] = undefined /*out*/;
            resourceInputs["enableAutoOSUpgrade"] = undefined /*out*/;
            resourceInputs["enableIpv6"] = undefined /*out*/;
            resourceInputs["enableServicePublicIP"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["fabricSettings"] = undefined /*out*/;
            resourceInputs["fqdn"] = undefined /*out*/;
            resourceInputs["httpGatewayConnectionPort"] = undefined /*out*/;
            resourceInputs["ipTags"] = undefined /*out*/;
            resourceInputs["ipv4Address"] = undefined /*out*/;
            resourceInputs["ipv6Address"] = undefined /*out*/;
            resourceInputs["loadBalancingRules"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["networkSecurityRules"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["publicIPPrefixId"] = undefined /*out*/;
            resourceInputs["serviceEndpoints"] = undefined /*out*/;
            resourceInputs["sku"] = undefined /*out*/;
            resourceInputs["subnetId"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["useCustomVnet"] = undefined /*out*/;
            resourceInputs["zonalResiliency"] = undefined /*out*/;
            resourceInputs["zonalUpdateMode"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:servicefabric:ManagedCluster" }, { type: "azure-native:servicefabric/v20200101preview:ManagedCluster" }, { type: "azure-native:servicefabric/v20210101preview:ManagedCluster" }, { type: "azure-native:servicefabric/v20210501:ManagedCluster" }, { type: "azure-native:servicefabric/v20210701preview:ManagedCluster" }, { type: "azure-native:servicefabric/v20210901privatepreview:ManagedCluster" }, { type: "azure-native:servicefabric/v20211101preview:ManagedCluster" }, { type: "azure-native:servicefabric/v20220101:ManagedCluster" }, { type: "azure-native:servicefabric/v20220201preview:ManagedCluster" }, { type: "azure-native:servicefabric/v20220601preview:ManagedCluster" }, { type: "azure-native:servicefabric/v20220801preview:ManagedCluster" }, { type: "azure-native:servicefabric/v20221001preview:ManagedCluster" }, { type: "azure-native:servicefabric/v20230201preview:ManagedCluster" }, { type: "azure-native:servicefabric/v20230301preview:ManagedCluster" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(ManagedCluster.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a ManagedCluster resource.
 */
export interface ManagedClusterArgs {
    /**
     * List of add-on features to enable on the cluster.
     */
    addonFeatures?: pulumi.Input<pulumi.Input<string | types.enums.ManagedClusterAddOnFeature>[]>;
    /**
     * VM admin user password.
     */
    adminPassword?: pulumi.Input<string>;
    /**
     * VM admin user name.
     */
    adminUserName: pulumi.Input<string>;
    /**
     * Setting this to true enables RDP access to the VM. The default NSG rule opens RDP port to Internet which can be overridden with custom Network Security Rules. The default value for this setting is false.
     */
    allowRdpAccess?: pulumi.Input<boolean>;
    /**
     * The policy used to clean up unused versions.
     */
    applicationTypeVersionsCleanupPolicy?: pulumi.Input<types.inputs.ApplicationTypeVersionsCleanupPolicyArgs>;
    /**
     * Auxiliary subnets for the cluster.
     */
    auxiliarySubnets?: pulumi.Input<pulumi.Input<types.inputs.SubnetArgs>[]>;
    /**
     * The AAD authentication settings of the cluster.
     */
    azureActiveDirectory?: pulumi.Input<types.inputs.AzureActiveDirectoryArgs>;
    /**
     * The port used for client connections to the cluster.
     */
    clientConnectionPort?: pulumi.Input<number>;
    /**
     * Client certificates that are allowed to manage the cluster.
     */
    clients?: pulumi.Input<pulumi.Input<types.inputs.ClientCertificateArgs>[]>;
    /**
     * The Service Fabric runtime version of the cluster. This property is required when **clusterUpgradeMode** is set to 'Manual'. To get list of available Service Fabric versions for new clusters use [ClusterVersion API](./ClusterVersion.md). To get the list of available version for existing clusters use **availableClusterVersions**.
     */
    clusterCodeVersion?: pulumi.Input<string>;
    /**
     * The name of the cluster resource.
     */
    clusterName?: pulumi.Input<string>;
    /**
     * Indicates when new cluster runtime version upgrades will be applied after they are released. By default is Wave0. Only applies when **clusterUpgradeMode** is set to 'Automatic'.
     */
    clusterUpgradeCadence?: pulumi.Input<string | types.enums.ClusterUpgradeCadence>;
    /**
     * The upgrade mode of the cluster when new Service Fabric runtime version is available.
     */
    clusterUpgradeMode?: pulumi.Input<string | types.enums.ClusterUpgradeMode>;
    /**
     * Specify the resource id of a DDoS network protection plan that will be associated with the virtual network of the cluster.
     */
    ddosProtectionPlanId?: pulumi.Input<string>;
    /**
     * The cluster dns name.
     */
    dnsName: pulumi.Input<string>;
    /**
     * Setting this to true enables automatic OS upgrade for the node types that are created using any platform OS image with version 'latest'. The default value for this setting is false.
     */
    enableAutoOSUpgrade?: pulumi.Input<boolean>;
    /**
     * Setting this to true creates IPv6 address space for the default VNet used by the cluster. This setting cannot be changed once the cluster is created. The default value for this setting is false.
     */
    enableIpv6?: pulumi.Input<boolean>;
    /**
     * Setting this to true will link the IPv4 address as the ServicePublicIP of the IPv6 address. It can only be set to True if IPv6 is enabled on the cluster.
     */
    enableServicePublicIP?: pulumi.Input<boolean>;
    /**
     * The list of custom fabric settings to configure the cluster.
     */
    fabricSettings?: pulumi.Input<pulumi.Input<types.inputs.SettingsSectionDescriptionArgs>[]>;
    /**
     * The port used for HTTP connections to the cluster.
     */
    httpGatewayConnectionPort?: pulumi.Input<number>;
    /**
     * The list of IP tags associated with the default public IP address of the cluster.
     */
    ipTags?: pulumi.Input<pulumi.Input<types.inputs.IPTagArgs>[]>;
    /**
     * Load balancing rules that are applied to the public load balancer of the cluster.
     */
    loadBalancingRules?: pulumi.Input<pulumi.Input<types.inputs.LoadBalancingRuleArgs>[]>;
    /**
     * Azure resource location.
     */
    location?: pulumi.Input<string>;
    /**
     * Custom Network Security Rules that are applied to the Virtual Network of the cluster.
     */
    networkSecurityRules?: pulumi.Input<pulumi.Input<types.inputs.NetworkSecurityRuleArgs>[]>;
    /**
     * Specify the resource id of a public IP prefix that the load balancer will allocate a public IP address from. Only supports IPv4.
     */
    publicIPPrefixId?: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Service endpoints for subnets in the cluster.
     */
    serviceEndpoints?: pulumi.Input<pulumi.Input<types.inputs.ServiceEndpointArgs>[]>;
    /**
     * The sku of the managed cluster
     */
    sku: pulumi.Input<types.inputs.SkuArgs>;
    /**
     * If specified, the node types for the cluster are created in this subnet instead of the default VNet. The **networkSecurityRules** specified for the cluster are also applied to this subnet. This setting cannot be changed once the cluster is created.
     */
    subnetId?: pulumi.Input<string>;
    /**
     * Azure resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * For new clusters, this parameter indicates that it uses Bring your own VNet, but the subnet is specified at node type level; and for such clusters, the subnetId property is required for node types.
     */
    useCustomVnet?: pulumi.Input<boolean>;
    /**
     * Indicates if the cluster has zone resiliency.
     */
    zonalResiliency?: pulumi.Input<boolean>;
    /**
     * Indicates the update mode for Cross Az clusters.
     */
    zonalUpdateMode?: pulumi.Input<string | types.enums.ZonalUpdateMode>;
}
