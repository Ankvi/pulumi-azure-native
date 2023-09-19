import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the specified subnet by virtual network and resource group.
 */
export function getSubnet(args: GetSubnetArgs, opts?: pulumi.InvokeOptions): Promise<GetSubnetResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:network/v20200601:getSubnet", {
        "expand": args.expand,
        "resourceGroupName": args.resourceGroupName,
        "subnetName": args.subnetName,
        "virtualNetworkName": args.virtualNetworkName,
    }, opts);
}

export interface GetSubnetArgs {
    /**
     * Expands referenced resources.
     */
    expand?: string;
    /**
     * The name of the resource group.
     */
    resourceGroupName: string;
    /**
     * The name of the subnet.
     */
    subnetName: string;
    /**
     * The name of the virtual network.
     */
    virtualNetworkName: string;
}

/**
 * Subnet in a virtual network resource.
 */
export interface GetSubnetResult {
    /**
     * The address prefix for the subnet.
     */
    readonly addressPrefix?: string;
    /**
     * List of address prefixes for the subnet.
     */
    readonly addressPrefixes?: string[];
    /**
     * An array of references to the delegations on the subnet.
     */
    readonly delegations?: types.outputs.DelegationResponse[];
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    readonly etag: string;
    /**
     * Resource ID.
     */
    readonly id?: string;
    /**
     * Array of IpAllocation which reference this subnet.
     */
    readonly ipAllocations?: types.outputs.SubResourceResponse[];
    /**
     * Array of IP configuration profiles which reference this subnet.
     */
    readonly ipConfigurationProfiles: types.outputs.IPConfigurationProfileResponse[];
    /**
     * An array of references to the network interface IP configurations using subnet.
     */
    readonly ipConfigurations: types.outputs.IPConfigurationResponse[];
    /**
     * The name of the resource that is unique within a resource group. This name can be used to access the resource.
     */
    readonly name?: string;
    /**
     * Nat gateway associated with this subnet.
     */
    readonly natGateway?: types.outputs.SubResourceResponse;
    /**
     * The reference to the NetworkSecurityGroup resource.
     */
    readonly networkSecurityGroup?: types.outputs.NetworkSecurityGroupResponse;
    /**
     * Enable or Disable apply network policies on private end point in the subnet.
     */
    readonly privateEndpointNetworkPolicies?: string;
    /**
     * An array of references to private endpoints.
     */
    readonly privateEndpoints: types.outputs.PrivateEndpointResponse[];
    /**
     * Enable or Disable apply network policies on private link service in the subnet.
     */
    readonly privateLinkServiceNetworkPolicies?: string;
    /**
     * The provisioning state of the subnet resource.
     */
    readonly provisioningState: string;
    /**
     * A read-only string identifying the intention of use for this subnet based on delegations and other user-defined properties.
     */
    readonly purpose: string;
    /**
     * An array of references to the external resources using subnet.
     */
    readonly resourceNavigationLinks: types.outputs.ResourceNavigationLinkResponse[];
    /**
     * The reference to the RouteTable resource.
     */
    readonly routeTable?: types.outputs.RouteTableResponse;
    /**
     * An array of references to services injecting into this subnet.
     */
    readonly serviceAssociationLinks: types.outputs.ServiceAssociationLinkResponse[];
    /**
     * An array of service endpoint policies.
     */
    readonly serviceEndpointPolicies?: types.outputs.ServiceEndpointPolicyResponse[];
    /**
     * An array of service endpoints.
     */
    readonly serviceEndpoints?: types.outputs.ServiceEndpointPropertiesFormatResponse[];
}
/**
 * Gets the specified subnet by virtual network and resource group.
 */
export function getSubnetOutput(args: GetSubnetOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetSubnetResult> {
    return pulumi.output(args).apply((a: any) => getSubnet(a, opts))
}

export interface GetSubnetOutputArgs {
    /**
     * Expands referenced resources.
     */
    expand?: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the subnet.
     */
    subnetName: pulumi.Input<string>;
    /**
     * The name of the virtual network.
     */
    virtualNetworkName: pulumi.Input<string>;
}
