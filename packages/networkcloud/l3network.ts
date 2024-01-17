import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Azure REST API version: 2023-05-01-preview. Prior API version in Azure Native 1.x: 2022-12-12-preview.
 *
 * Other available API versions: 2023-07-01, 2023-10-01-preview.
 */
export class L3Network extends pulumi.CustomResource {
    /**
     * Get an existing L3Network resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): L3Network {
        return new L3Network(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:networkcloud:L3Network';

    /**
     * Returns true if the given object is an instance of L3Network.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is L3Network {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === L3Network.__pulumiType;
    }

    /**
     * The list of resource IDs for the other Microsoft.NetworkCloud resources that have attached this network.
     */
    public /*out*/ readonly associatedResourceIds!: pulumi.Output<string[]>;
    /**
     * The resource ID of the Network Cloud cluster this L3 network is associated with.
     */
    public /*out*/ readonly clusterId!: pulumi.Output<string>;
    /**
     * The more detailed status of the L3 network.
     */
    public /*out*/ readonly detailedStatus!: pulumi.Output<string>;
    /**
     * The descriptive message about the current detailed status.
     */
    public /*out*/ readonly detailedStatusMessage!: pulumi.Output<string>;
    /**
     * The extended location of the cluster associated with the resource.
     */
    public readonly extendedLocation!: pulumi.Output<types.outputs.ExtendedLocationResponse>;
    /**
     * Field Deprecated. These fields will be empty/omitted. The list of Hybrid AKS cluster resource IDs that are associated with this L3 network.
     */
    public /*out*/ readonly hybridAksClustersAssociatedIds!: pulumi.Output<string[]>;
    /**
     * Field Deprecated. The field was previously optional, now it will have no defined behavior and will be ignored. The indicator of whether or not to disable IPAM allocation on the network attachment definition injected into the Hybrid AKS Cluster.
     */
    public readonly hybridAksIpamEnabled!: pulumi.Output<string | undefined>;
    /**
     * Field Deprecated. The field was previously optional, now it will have no defined behavior and will be ignored. The network plugin type for Hybrid AKS.
     */
    public readonly hybridAksPluginType!: pulumi.Output<string | undefined>;
    /**
     * The default interface name for this L3 network in the virtual machine. This name can be overridden by the name supplied in the network attachment configuration of that virtual machine.
     */
    public readonly interfaceName!: pulumi.Output<string | undefined>;
    /**
     * The type of the IP address allocation, defaulted to "DualStack".
     */
    public readonly ipAllocationType!: pulumi.Output<string | undefined>;
    /**
     * The IPV4 prefix (CIDR) assigned to this L3 network. Required when the IP allocation type
     * is IPV4 or DualStack.
     */
    public readonly ipv4ConnectedPrefix!: pulumi.Output<string | undefined>;
    /**
     * The IPV6 prefix (CIDR) assigned to this L3 network. Required when the IP allocation type
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
     * The provisioning state of the L3 network.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * Resource tags.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * Field Deprecated. These fields will be empty/omitted. The list of virtual machine resource IDs, excluding any Hybrid AKS virtual machines, that are currently using this L3 network.
     */
    public /*out*/ readonly virtualMachinesAssociatedIds!: pulumi.Output<string[]>;
    /**
     * The VLAN from the l3IsolationDomain that is used for this network.
     */
    public readonly vlan!: pulumi.Output<number>;

    /**
     * Create a L3Network resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: L3NetworkArgs, opts?: pulumi.CustomResourceOptions) {
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
            resourceInputs["extendedLocation"] = args ? args.extendedLocation : undefined;
            resourceInputs["hybridAksIpamEnabled"] = (args ? args.hybridAksIpamEnabled : undefined) ?? "True";
            resourceInputs["hybridAksPluginType"] = (args ? args.hybridAksPluginType : undefined) ?? "SRIOV";
            resourceInputs["interfaceName"] = args ? args.interfaceName : undefined;
            resourceInputs["ipAllocationType"] = (args ? args.ipAllocationType : undefined) ?? "DualStack";
            resourceInputs["ipv4ConnectedPrefix"] = args ? args.ipv4ConnectedPrefix : undefined;
            resourceInputs["ipv6ConnectedPrefix"] = args ? args.ipv6ConnectedPrefix : undefined;
            resourceInputs["l3IsolationDomainId"] = args ? args.l3IsolationDomainId : undefined;
            resourceInputs["l3NetworkName"] = args ? args.l3NetworkName : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["vlan"] = args ? args.vlan : undefined;
            resourceInputs["associatedResourceIds"] = undefined /*out*/;
            resourceInputs["clusterId"] = undefined /*out*/;
            resourceInputs["detailedStatus"] = undefined /*out*/;
            resourceInputs["detailedStatusMessage"] = undefined /*out*/;
            resourceInputs["hybridAksClustersAssociatedIds"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["virtualMachinesAssociatedIds"] = undefined /*out*/;
        } else {
            resourceInputs["associatedResourceIds"] = undefined /*out*/;
            resourceInputs["clusterId"] = undefined /*out*/;
            resourceInputs["detailedStatus"] = undefined /*out*/;
            resourceInputs["detailedStatusMessage"] = undefined /*out*/;
            resourceInputs["extendedLocation"] = undefined /*out*/;
            resourceInputs["hybridAksClustersAssociatedIds"] = undefined /*out*/;
            resourceInputs["hybridAksIpamEnabled"] = undefined /*out*/;
            resourceInputs["hybridAksPluginType"] = undefined /*out*/;
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
            resourceInputs["virtualMachinesAssociatedIds"] = undefined /*out*/;
            resourceInputs["vlan"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:networkcloud/v20230501preview:L3Network" }, { type: "azure-native:networkcloud/v20230701:L3Network" }, { type: "azure-native:networkcloud/v20231001preview:L3Network" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(L3Network.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a L3Network resource.
 */
export interface L3NetworkArgs {
    /**
     * The extended location of the cluster associated with the resource.
     */
    extendedLocation: pulumi.Input<types.inputs.ExtendedLocationArgs>;
    /**
     * Field Deprecated. The field was previously optional, now it will have no defined behavior and will be ignored. The indicator of whether or not to disable IPAM allocation on the network attachment definition injected into the Hybrid AKS Cluster.
     */
    hybridAksIpamEnabled?: pulumi.Input<string | types.enums.HybridAksIpamEnabled>;
    /**
     * Field Deprecated. The field was previously optional, now it will have no defined behavior and will be ignored. The network plugin type for Hybrid AKS.
     */
    hybridAksPluginType?: pulumi.Input<string | types.enums.HybridAksPluginType>;
    /**
     * The default interface name for this L3 network in the virtual machine. This name can be overridden by the name supplied in the network attachment configuration of that virtual machine.
     */
    interfaceName?: pulumi.Input<string>;
    /**
     * The type of the IP address allocation, defaulted to "DualStack".
     */
    ipAllocationType?: pulumi.Input<string | types.enums.IpAllocationType>;
    /**
     * The IPV4 prefix (CIDR) assigned to this L3 network. Required when the IP allocation type
     * is IPV4 or DualStack.
     */
    ipv4ConnectedPrefix?: pulumi.Input<string>;
    /**
     * The IPV6 prefix (CIDR) assigned to this L3 network. Required when the IP allocation type
     * is IPV6 or DualStack.
     */
    ipv6ConnectedPrefix?: pulumi.Input<string>;
    /**
     * The resource ID of the Network Fabric l3IsolationDomain.
     */
    l3IsolationDomainId: pulumi.Input<string>;
    /**
     * The name of the L3 network.
     */
    l3NetworkName?: pulumi.Input<string>;
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