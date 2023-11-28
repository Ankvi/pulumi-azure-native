import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * The manged cluster resource
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
    public static readonly __pulumiType = 'azure-native:servicefabric/v20200101preview:ManagedCluster';

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
     * client certificates for the cluster.
     */
    public readonly addonFeatures!: pulumi.Output<string[] | undefined>;
    /**
     * vm admin user password.
     */
    public readonly adminPassword!: pulumi.Output<string | undefined>;
    /**
     * vm admin user name.
     */
    public readonly adminUserName!: pulumi.Output<string>;
    /**
     * Azure active directory.
     */
    public readonly azureActiveDirectory!: pulumi.Output<types.outputs.AzureActiveDirectoryResponse | undefined>;
    /**
     * The port used for client connections to the cluster.
     */
    public readonly clientConnectionPort!: pulumi.Output<number | undefined>;
    /**
     * client certificates for the cluster.
     */
    public readonly clients!: pulumi.Output<types.outputs.ClientCertificateResponse[] | undefined>;
    /**
     * The cluster certificate thumbprint used node to node communication.
     */
    public /*out*/ readonly clusterCertificateThumbprint!: pulumi.Output<string>;
    /**
     * The Service Fabric runtime version of the cluster. This property can only by set the user when **upgradeMode** is set to 'Manual'. To get list of available Service Fabric versions for new clusters use [ClusterVersion API](./ClusterVersion.md). To get the list of available version for existing clusters use **availableClusterVersions**.
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
     * The cluster dns name.
     */
    public readonly dnsName!: pulumi.Output<string>;
    /**
     * Azure resource etag.
     */
    public /*out*/ readonly etag!: pulumi.Output<string>;
    /**
     * The list of custom fabric settings to configure the cluster.
     */
    public readonly fabricSettings!: pulumi.Output<types.outputs.SettingsSectionDescriptionResponse[] | undefined>;
    /**
     * the cluster Fully qualified domain name.
     */
    public /*out*/ readonly fqdn!: pulumi.Output<string>;
    /**
     * The port used for http connections to the cluster.
     */
    public readonly httpGatewayConnectionPort!: pulumi.Output<number | undefined>;
    /**
     * Describes load balancing rules.
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
     * The provisioning state of the managed cluster resource.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * The sku of the managed cluster
     */
    public readonly sku!: pulumi.Output<types.outputs.SkuResponse | undefined>;
    /**
     * Azure resource tags.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Azure resource type.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

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
            resourceInputs["addonFeatures"] = args ? args.addonFeatures : undefined;
            resourceInputs["adminPassword"] = args ? args.adminPassword : undefined;
            resourceInputs["adminUserName"] = args ? args.adminUserName : undefined;
            resourceInputs["azureActiveDirectory"] = args ? args.azureActiveDirectory : undefined;
            resourceInputs["clientConnectionPort"] = (args ? args.clientConnectionPort : undefined) ?? 19000;
            resourceInputs["clients"] = args ? args.clients : undefined;
            resourceInputs["clusterCodeVersion"] = args ? args.clusterCodeVersion : undefined;
            resourceInputs["clusterName"] = args ? args.clusterName : undefined;
            resourceInputs["dnsName"] = args ? args.dnsName : undefined;
            resourceInputs["fabricSettings"] = args ? args.fabricSettings : undefined;
            resourceInputs["httpGatewayConnectionPort"] = (args ? args.httpGatewayConnectionPort : undefined) ?? 19080;
            resourceInputs["loadBalancingRules"] = args ? args.loadBalancingRules : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["sku"] = args ? args.sku : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["clusterCertificateThumbprint"] = undefined /*out*/;
            resourceInputs["clusterId"] = undefined /*out*/;
            resourceInputs["clusterState"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["fqdn"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["addonFeatures"] = undefined /*out*/;
            resourceInputs["adminPassword"] = undefined /*out*/;
            resourceInputs["adminUserName"] = undefined /*out*/;
            resourceInputs["azureActiveDirectory"] = undefined /*out*/;
            resourceInputs["clientConnectionPort"] = undefined /*out*/;
            resourceInputs["clients"] = undefined /*out*/;
            resourceInputs["clusterCertificateThumbprint"] = undefined /*out*/;
            resourceInputs["clusterCodeVersion"] = undefined /*out*/;
            resourceInputs["clusterId"] = undefined /*out*/;
            resourceInputs["clusterState"] = undefined /*out*/;
            resourceInputs["dnsName"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["fabricSettings"] = undefined /*out*/;
            resourceInputs["fqdn"] = undefined /*out*/;
            resourceInputs["httpGatewayConnectionPort"] = undefined /*out*/;
            resourceInputs["loadBalancingRules"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["sku"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:servicefabric:ManagedCluster" }, { type: "azure-native:servicefabric/v20210101preview:ManagedCluster" }, { type: "azure-native:servicefabric/v20210501:ManagedCluster" }, { type: "azure-native:servicefabric/v20210701preview:ManagedCluster" }, { type: "azure-native:servicefabric/v20210901privatepreview:ManagedCluster" }, { type: "azure-native:servicefabric/v20211101preview:ManagedCluster" }, { type: "azure-native:servicefabric/v20220101:ManagedCluster" }, { type: "azure-native:servicefabric/v20220201preview:ManagedCluster" }, { type: "azure-native:servicefabric/v20220601preview:ManagedCluster" }, { type: "azure-native:servicefabric/v20220801preview:ManagedCluster" }, { type: "azure-native:servicefabric/v20221001preview:ManagedCluster" }, { type: "azure-native:servicefabric/v20230201preview:ManagedCluster" }, { type: "azure-native:servicefabric/v20230301preview:ManagedCluster" }, { type: "azure-native:servicefabric/v20230701preview:ManagedCluster" }, { type: "azure-native:servicefabric/v20230901preview:ManagedCluster" }, { type: "azure-native:servicefabric/v20231101preview:ManagedCluster" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(ManagedCluster.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a ManagedCluster resource.
 */
export interface ManagedClusterArgs {
    /**
     * client certificates for the cluster.
     */
    addonFeatures?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * vm admin user password.
     */
    adminPassword?: pulumi.Input<string>;
    /**
     * vm admin user name.
     */
    adminUserName: pulumi.Input<string>;
    /**
     * Azure active directory.
     */
    azureActiveDirectory?: pulumi.Input<types.inputs.AzureActiveDirectoryArgs>;
    /**
     * The port used for client connections to the cluster.
     */
    clientConnectionPort?: pulumi.Input<number>;
    /**
     * client certificates for the cluster.
     */
    clients?: pulumi.Input<pulumi.Input<types.inputs.ClientCertificateArgs>[]>;
    /**
     * The Service Fabric runtime version of the cluster. This property can only by set the user when **upgradeMode** is set to 'Manual'. To get list of available Service Fabric versions for new clusters use [ClusterVersion API](./ClusterVersion.md). To get the list of available version for existing clusters use **availableClusterVersions**.
     */
    clusterCodeVersion?: pulumi.Input<string>;
    /**
     * The name of the cluster resource.
     */
    clusterName?: pulumi.Input<string>;
    /**
     * The cluster dns name.
     */
    dnsName: pulumi.Input<string>;
    /**
     * The list of custom fabric settings to configure the cluster.
     */
    fabricSettings?: pulumi.Input<pulumi.Input<types.inputs.SettingsSectionDescriptionArgs>[]>;
    /**
     * The port used for http connections to the cluster.
     */
    httpGatewayConnectionPort?: pulumi.Input<number>;
    /**
     * Describes load balancing rules.
     */
    loadBalancingRules?: pulumi.Input<pulumi.Input<types.inputs.LoadBalancingRuleArgs>[]>;
    /**
     * Azure resource location.
     */
    location?: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The sku of the managed cluster
     */
    sku?: pulumi.Input<types.inputs.SkuArgs>;
    /**
     * Azure resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}
