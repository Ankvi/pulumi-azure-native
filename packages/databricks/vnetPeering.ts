import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Peerings in a VirtualNetwork resource
 * Azure REST API version: 2023-02-01. Prior API version in Azure Native 1.x: 2018-04-01.
 */
export class VNetPeering extends pulumi.CustomResource {
    /**
     * Get an existing VNetPeering resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): VNetPeering {
        return new VNetPeering(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:databricks:VNetPeering';

    /**
     * Returns true if the given object is an instance of VNetPeering.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is VNetPeering {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === VNetPeering.__pulumiType;
    }

    /**
     * Whether the forwarded traffic from the VMs in the local virtual network will be allowed/disallowed in remote virtual network.
     */
    public readonly allowForwardedTraffic!: pulumi.Output<boolean | undefined>;
    /**
     * If gateway links can be used in remote virtual networking to link to this virtual network.
     */
    public readonly allowGatewayTransit!: pulumi.Output<boolean | undefined>;
    /**
     * Whether the VMs in the local virtual network space would be able to access the VMs in remote virtual network space.
     */
    public readonly allowVirtualNetworkAccess!: pulumi.Output<boolean | undefined>;
    /**
     * The reference to the databricks virtual network address space.
     */
    public readonly databricksAddressSpace!: pulumi.Output<types.outputs.AddressSpaceResponse | undefined>;
    /**
     *  The remote virtual network should be in the same region. See here to learn more (https://docs.microsoft.com/en-us/azure/databricks/administration-guide/cloud-configurations/azure/vnet-peering).
     */
    public readonly databricksVirtualNetwork!: pulumi.Output<types.outputs.VirtualNetworkPeeringPropertiesFormatResponseDatabricksVirtualNetwork | undefined>;
    /**
     * Name of the virtual network peering resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The status of the virtual network peering.
     */
    public /*out*/ readonly peeringState!: pulumi.Output<string>;
    /**
     * The provisioning state of the virtual network peering resource.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * The reference to the remote virtual network address space.
     */
    public readonly remoteAddressSpace!: pulumi.Output<types.outputs.AddressSpaceResponse | undefined>;
    /**
     *  The remote virtual network should be in the same region. See here to learn more (https://docs.microsoft.com/en-us/azure/databricks/administration-guide/cloud-configurations/azure/vnet-peering).
     */
    public readonly remoteVirtualNetwork!: pulumi.Output<types.outputs.VirtualNetworkPeeringPropertiesFormatResponseRemoteVirtualNetwork>;
    /**
     * type of the virtual network peering resource
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * If remote gateways can be used on this virtual network. If the flag is set to true, and allowGatewayTransit on remote peering is also true, virtual network will use gateways of remote virtual network for transit. Only one peering can have this flag set to true. This flag cannot be set if virtual network already has a gateway.
     */
    public readonly useRemoteGateways!: pulumi.Output<boolean | undefined>;

    /**
     * Create a VNetPeering resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: VNetPeeringArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.remoteVirtualNetwork === undefined) && !opts.urn) {
                throw new Error("Missing required property 'remoteVirtualNetwork'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.workspaceName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'workspaceName'");
            }
            resourceInputs["allowForwardedTraffic"] = args ? args.allowForwardedTraffic : undefined;
            resourceInputs["allowGatewayTransit"] = args ? args.allowGatewayTransit : undefined;
            resourceInputs["allowVirtualNetworkAccess"] = args ? args.allowVirtualNetworkAccess : undefined;
            resourceInputs["databricksAddressSpace"] = args ? args.databricksAddressSpace : undefined;
            resourceInputs["databricksVirtualNetwork"] = args ? args.databricksVirtualNetwork : undefined;
            resourceInputs["peeringName"] = args ? args.peeringName : undefined;
            resourceInputs["remoteAddressSpace"] = args ? args.remoteAddressSpace : undefined;
            resourceInputs["remoteVirtualNetwork"] = args ? args.remoteVirtualNetwork : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["useRemoteGateways"] = args ? args.useRemoteGateways : undefined;
            resourceInputs["workspaceName"] = args ? args.workspaceName : undefined;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["peeringState"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["allowForwardedTraffic"] = undefined /*out*/;
            resourceInputs["allowGatewayTransit"] = undefined /*out*/;
            resourceInputs["allowVirtualNetworkAccess"] = undefined /*out*/;
            resourceInputs["databricksAddressSpace"] = undefined /*out*/;
            resourceInputs["databricksVirtualNetwork"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["peeringState"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["remoteAddressSpace"] = undefined /*out*/;
            resourceInputs["remoteVirtualNetwork"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["useRemoteGateways"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:databricks:vNetPeering" }, { type: "azure-native:databricks/v20180401:VNetPeering" }, { type: "azure-native:databricks/v20180401:vNetPeering" }, { type: "azure-native:databricks/v20210401preview:VNetPeering" }, { type: "azure-native:databricks/v20210401preview:vNetPeering" }, { type: "azure-native:databricks/v20220401preview:VNetPeering" }, { type: "azure-native:databricks/v20220401preview:vNetPeering" }, { type: "azure-native:databricks/v20230201:VNetPeering" }, { type: "azure-native:databricks/v20230201:vNetPeering" }, { type: "azure-native:databricks/v20230915preview:VNetPeering" }, { type: "azure-native:databricks/v20230915preview:vNetPeering" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(VNetPeering.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a VNetPeering resource.
 */
export interface VNetPeeringArgs {
    /**
     * Whether the forwarded traffic from the VMs in the local virtual network will be allowed/disallowed in remote virtual network.
     */
    allowForwardedTraffic?: pulumi.Input<boolean>;
    /**
     * If gateway links can be used in remote virtual networking to link to this virtual network.
     */
    allowGatewayTransit?: pulumi.Input<boolean>;
    /**
     * Whether the VMs in the local virtual network space would be able to access the VMs in remote virtual network space.
     */
    allowVirtualNetworkAccess?: pulumi.Input<boolean>;
    /**
     * The reference to the databricks virtual network address space.
     */
    databricksAddressSpace?: pulumi.Input<types.inputs.AddressSpaceArgs>;
    /**
     *  The remote virtual network should be in the same region. See here to learn more (https://docs.microsoft.com/en-us/azure/databricks/administration-guide/cloud-configurations/azure/vnet-peering).
     */
    databricksVirtualNetwork?: pulumi.Input<types.inputs.VirtualNetworkPeeringPropertiesFormatDatabricksVirtualNetworkArgs>;
    /**
     * The name of the workspace vNet peering.
     */
    peeringName?: pulumi.Input<string>;
    /**
     * The reference to the remote virtual network address space.
     */
    remoteAddressSpace?: pulumi.Input<types.inputs.AddressSpaceArgs>;
    /**
     *  The remote virtual network should be in the same region. See here to learn more (https://docs.microsoft.com/en-us/azure/databricks/administration-guide/cloud-configurations/azure/vnet-peering).
     */
    remoteVirtualNetwork: pulumi.Input<types.inputs.VirtualNetworkPeeringPropertiesFormatRemoteVirtualNetworkArgs>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * If remote gateways can be used on this virtual network. If the flag is set to true, and allowGatewayTransit on remote peering is also true, virtual network will use gateways of remote virtual network for transit. Only one peering can have this flag set to true. This flag cannot be set if virtual network already has a gateway.
     */
    useRemoteGateways?: pulumi.Input<boolean>;
    /**
     * The name of the workspace.
     */
    workspaceName: pulumi.Input<string>;
}
