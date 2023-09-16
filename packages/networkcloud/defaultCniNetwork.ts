import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Azure REST API version: 2022-12-12-preview. Prior API version in Azure Native 1.x: 2022-12-12-preview
 */
export class DefaultCniNetwork extends pulumi.CustomResource {
    /**
     * Get an existing DefaultCniNetwork resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): DefaultCniNetwork {
        return new DefaultCniNetwork(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:networkcloud:DefaultCniNetwork';

    /**
     * Returns true if the given object is an instance of DefaultCniNetwork.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is DefaultCniNetwork {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === DefaultCniNetwork.__pulumiType;
    }

    /**
     * The resource ID of the Network Cloud cluster this default CNI network is associated with.
     */
    public /*out*/ readonly clusterId!: pulumi.Output<string>;
    /**
     * The autonomous system number that the fabric expects to peer with, derived from the associated L3 isolation domain.
     */
    public /*out*/ readonly cniAsNumber!: pulumi.Output<number>;
    /**
     * The Calico BGP configuration.
     */
    public readonly cniBgpConfiguration!: pulumi.Output<types.outputs.networkcloud.CniBgpConfigurationResponse | undefined>;
    /**
     * The more detailed status of the default CNI network.
     */
    public /*out*/ readonly detailedStatus!: pulumi.Output<string>;
    /**
     * The descriptive message about the current detailed status.
     */
    public /*out*/ readonly detailedStatusMessage!: pulumi.Output<string>;
    /**
     * The extended location of the cluster associated with the resource.
     */
    public readonly extendedLocation!: pulumi.Output<types.outputs.networkcloud.ExtendedLocationResponse>;
    /**
     * The L3 isolation fabric BGP peering connectivity information necessary for BGP peering the Hybrid AKS Cluster with the switch fabric.
     */
    public /*out*/ readonly fabricBgpPeers!: pulumi.Output<types.outputs.networkcloud.BgpPeerResponse[]>;
    /**
     * The list of Hybrid AKS cluster resource ID(s) that are associated with this default CNI network.
     */
    public /*out*/ readonly hybridAksClustersAssociatedIds!: pulumi.Output<string[]>;
    /**
     * The name of the interface that will be present in the virtual machine to represent this network.
     */
    public /*out*/ readonly interfaceName!: pulumi.Output<string>;
    /**
     * The type of the IP address allocation.
     */
    public readonly ipAllocationType!: pulumi.Output<string | undefined>;
    /**
     * The IPV4 prefix (CIDR) assigned to this default CNI network. It is required when the IP allocation type
     * is IPV4 or DualStack.
     */
    public readonly ipv4ConnectedPrefix!: pulumi.Output<string | undefined>;
    /**
     * The IPV6 prefix (CIDR) assigned to this default CNI network. It is required when the IP allocation type
     * is IPV6 or DualStack.
     */
    public readonly ipv6ConnectedPrefix!: pulumi.Output<string | undefined>;
    /**
     * The resource ID of the Network Fabric l3IsolationDomain.
     */
    public readonly l3IsolationDomainId!: pulumi.Output<string>;
    /**
     * The geo-location where the resource lives
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The provisioning state of the default CNI network.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.networkcloud.SystemDataResponse>;
    /**
     * Resource tags.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * The VLAN from the l3IsolationDomain that is used for this network.
     */
    public readonly vlan!: pulumi.Output<number>;

    /**
     * Create a DefaultCniNetwork resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DefaultCniNetworkArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.extendedLocation === undefined) && !opts.urn) {
                throw new Error("Missing required property 'extendedLocation'");
            }
            if ((!args || args.l3IsolationDomainId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'l3IsolationDomainId'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.vlan === undefined) && !opts.urn) {
                throw new Error("Missing required property 'vlan'");
            }
            resourceInputs["cniBgpConfiguration"] = args ? args.cniBgpConfiguration : undefined;
            resourceInputs["defaultCniNetworkName"] = args ? args.defaultCniNetworkName : undefined;
            resourceInputs["extendedLocation"] = args ? args.extendedLocation : undefined;
            resourceInputs["ipAllocationType"] = (args ? args.ipAllocationType : undefined) ?? "DualStack";
            resourceInputs["ipv4ConnectedPrefix"] = args ? args.ipv4ConnectedPrefix : undefined;
            resourceInputs["ipv6ConnectedPrefix"] = args ? args.ipv6ConnectedPrefix : undefined;
            resourceInputs["l3IsolationDomainId"] = args ? args.l3IsolationDomainId : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["vlan"] = args ? args.vlan : undefined;
            resourceInputs["clusterId"] = undefined /*out*/;
            resourceInputs["cniAsNumber"] = undefined /*out*/;
            resourceInputs["detailedStatus"] = undefined /*out*/;
            resourceInputs["detailedStatusMessage"] = undefined /*out*/;
            resourceInputs["fabricBgpPeers"] = undefined /*out*/;
            resourceInputs["hybridAksClustersAssociatedIds"] = undefined /*out*/;
            resourceInputs["interfaceName"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["clusterId"] = undefined /*out*/;
            resourceInputs["cniAsNumber"] = undefined /*out*/;
            resourceInputs["cniBgpConfiguration"] = undefined /*out*/;
            resourceInputs["detailedStatus"] = undefined /*out*/;
            resourceInputs["detailedStatusMessage"] = undefined /*out*/;
            resourceInputs["extendedLocation"] = undefined /*out*/;
            resourceInputs["fabricBgpPeers"] = undefined /*out*/;
            resourceInputs["hybridAksClustersAssociatedIds"] = undefined /*out*/;
            resourceInputs["interfaceName"] = undefined /*out*/;
            resourceInputs["ipAllocationType"] = undefined /*out*/;
            resourceInputs["ipv4ConnectedPrefix"] = undefined /*out*/;
            resourceInputs["ipv6ConnectedPrefix"] = undefined /*out*/;
            resourceInputs["l3IsolationDomainId"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["vlan"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:networkcloud/v20221212preview:DefaultCniNetwork" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(DefaultCniNetwork.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a DefaultCniNetwork resource.
 */
export interface DefaultCniNetworkArgs {
    /**
     * The Calico BGP configuration.
     */
    cniBgpConfiguration?: pulumi.Input<types.inputs.networkcloud.CniBgpConfigurationArgs>;
    /**
     * The name of the default CNI network.
     */
    defaultCniNetworkName?: pulumi.Input<string>;
    /**
     * The extended location of the cluster associated with the resource.
     */
    extendedLocation: pulumi.Input<types.inputs.networkcloud.ExtendedLocationArgs>;
    /**
     * The type of the IP address allocation.
     */
    ipAllocationType?: pulumi.Input<string | types.enums.IpAllocationType>;
    /**
     * The IPV4 prefix (CIDR) assigned to this default CNI network. It is required when the IP allocation type
     * is IPV4 or DualStack.
     */
    ipv4ConnectedPrefix?: pulumi.Input<string>;
    /**
     * The IPV6 prefix (CIDR) assigned to this default CNI network. It is required when the IP allocation type
     * is IPV6 or DualStack.
     */
    ipv6ConnectedPrefix?: pulumi.Input<string>;
    /**
     * The resource ID of the Network Fabric l3IsolationDomain.
     */
    l3IsolationDomainId: pulumi.Input<string>;
    /**
     * The geo-location where the resource lives
     */
    location?: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * The VLAN from the l3IsolationDomain that is used for this network.
     */
    vlan: pulumi.Input<number>;
}
