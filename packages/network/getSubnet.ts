import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the specified subnet by virtual network and resource group.
 *
 * Uses Azure REST API version 2024-05-01.
 *
 * Other available API versions: 2018-06-01, 2018-07-01, 2018-08-01, 2018-10-01, 2018-11-01, 2018-12-01, 2019-02-01, 2019-04-01, 2019-06-01, 2019-07-01, 2019-08-01, 2019-09-01, 2019-11-01, 2019-12-01, 2020-03-01, 2020-04-01, 2020-05-01, 2020-06-01, 2020-07-01, 2020-08-01, 2020-11-01, 2021-02-01, 2021-03-01, 2021-05-01, 2021-08-01, 2022-01-01, 2022-05-01, 2022-07-01, 2022-09-01, 2022-11-01, 2023-02-01, 2023-04-01, 2023-05-01, 2023-06-01, 2023-09-01, 2023-11-01, 2024-01-01, 2024-03-01, 2024-07-01, 2024-10-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native network [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getSubnet(args: GetSubnetArgs, opts?: pulumi.InvokeOptions): Promise<GetSubnetResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:network:getSubnet", {
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
     * Application gateway IP configurations of virtual network resource.
     */
    readonly applicationGatewayIPConfigurations?: types.outputs.ApplicationGatewayIPConfigurationResponse[];
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * Set this property to false to disable default outbound connectivity for all VMs in the subnet. This property can only be set at the time of subnet creation and cannot be updated for an existing subnet.
     */
    readonly defaultOutboundAccess?: boolean;
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
     * A list of IPAM Pools for allocating IP address prefixes.
     */
    readonly ipamPoolPrefixAllocations?: types.outputs.IpamPoolPrefixAllocationResponse[];
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
    /**
     * Set this property to Tenant to allow sharing subnet with other subscriptions in your AAD tenant. This property can only be set if defaultOutboundAccess is set to false, both properties can only be set if subnet is empty.
     */
    readonly sharingScope?: string;
    /**
     * Resource type.
     */
    readonly type?: string;
}
/**
 * Gets the specified subnet by virtual network and resource group.
 *
 * Uses Azure REST API version 2024-05-01.
 *
 * Other available API versions: 2018-06-01, 2018-07-01, 2018-08-01, 2018-10-01, 2018-11-01, 2018-12-01, 2019-02-01, 2019-04-01, 2019-06-01, 2019-07-01, 2019-08-01, 2019-09-01, 2019-11-01, 2019-12-01, 2020-03-01, 2020-04-01, 2020-05-01, 2020-06-01, 2020-07-01, 2020-08-01, 2020-11-01, 2021-02-01, 2021-03-01, 2021-05-01, 2021-08-01, 2022-01-01, 2022-05-01, 2022-07-01, 2022-09-01, 2022-11-01, 2023-02-01, 2023-04-01, 2023-05-01, 2023-06-01, 2023-09-01, 2023-11-01, 2024-01-01, 2024-03-01, 2024-07-01, 2024-10-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native network [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getSubnetOutput(args: GetSubnetOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSubnetResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:network:getSubnet", {
        "expand": args.expand,
        "resourceGroupName": args.resourceGroupName,
        "subnetName": args.subnetName,
        "virtualNetworkName": args.virtualNetworkName,
    }, opts);
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