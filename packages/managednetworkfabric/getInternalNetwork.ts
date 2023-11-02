import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets a InternalNetworks.
 * Azure REST API version: 2023-02-01-preview.
 *
 * Other available API versions: 2023-06-15.
 */
export function getInternalNetwork(args: GetInternalNetworkArgs, opts?: pulumi.InvokeOptions): Promise<GetInternalNetworkResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:managednetworkfabric:getInternalNetwork", {
        "internalNetworkName": args.internalNetworkName,
        "l3IsolationDomainName": args.l3IsolationDomainName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetInternalNetworkArgs {
    /**
     * Name of the InternalNetwork
     */
    internalNetworkName: string;
    /**
     * Name of the L3IsolationDomain
     */
    l3IsolationDomainName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * Defines the InternalNetwork item.
 */
export interface GetInternalNetworkResult {
    /**
     * Administrative state of the InternalNetwork. Example: Enabled | Disabled.
     */
    readonly administrativeState: string;
    /**
     * Switch configuration description.
     */
    readonly annotation?: string;
    /**
     * List of resources the BFD for BGP is disabled on. Can be either entire NetworkFabric or NetworkRack.
     */
    readonly bfdDisabledOnResources: string[];
    /**
     * List of resources the BFD of StaticRoutes is disabled on. Can be either entire NetworkFabric or NetworkRack.
     */
    readonly bfdForStaticRoutesDisabledOnResources: string[];
    /**
     * BGP configuration properties
     */
    readonly bgpConfiguration?: types.outputs.BgpConfigurationResponse;
    /**
     * List of resources the BGP is disabled on. Can be either entire NetworkFabric or NetworkRack.
     */
    readonly bgpDisabledOnResources: string[];
    /**
     * List with object connected IPv4 Subnets.
     */
    readonly connectedIPv4Subnets?: types.outputs.ConnectedSubnetResponse[];
    /**
     * List with object connected IPv6 Subnets.
     */
    readonly connectedIPv6Subnets?: types.outputs.ConnectedSubnetResponse[];
    /**
     * List of resources the InternalNetwork is disabled on. Can be either entire NetworkFabric or NetworkRack.
     */
    readonly disabledOnResources: string[];
    /**
     * ARM resource ID of importRoutePolicy.
     */
    readonly exportRoutePolicyId?: string;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * ARM resource ID of importRoutePolicy.
     */
    readonly importRoutePolicyId?: string;
    /**
     * Maximum transmission unit. Default value is 1500.
     */
    readonly mtu?: number;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Gets the provisioning state of the resource.
     */
    readonly provisioningState: string;
    /**
     * Static Route Configuration properties.
     */
    readonly staticRouteConfiguration?: types.outputs.StaticRouteConfigurationResponse;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
    /**
     * Vlan identifier. Example: 1001.
     */
    readonly vlanId: number;
}
/**
 * Gets a InternalNetworks.
 * Azure REST API version: 2023-02-01-preview.
 *
 * Other available API versions: 2023-06-15.
 */
export function getInternalNetworkOutput(args: GetInternalNetworkOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetInternalNetworkResult> {
    return pulumi.output(args).apply((a: any) => getInternalNetwork(a, opts))
}

export interface GetInternalNetworkOutputArgs {
    /**
     * Name of the InternalNetwork
     */
    internalNetworkName: pulumi.Input<string>;
    /**
     * Name of the L3IsolationDomain
     */
    l3IsolationDomainName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}
