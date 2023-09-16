import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * Gets a InternalNetworks.
 */
export function getInternalNetwork(args: GetInternalNetworkArgs, opts?: pulumi.InvokeOptions): Promise<GetInternalNetworkResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:managednetworkfabric/v20230615:getInternalNetwork", {
        "internalNetworkName": args.internalNetworkName,
        "l3IsolationDomainName": args.l3IsolationDomainName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetInternalNetworkArgs {
    /**
     * Name of the Internal Network.
     */
    internalNetworkName: string;
    /**
     * Name of the L3 Isolation Domain.
     */
    l3IsolationDomainName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * Defines the Internal Network resource.
 */
export interface GetInternalNetworkResult {
    /**
     * Administrative state of the resource.
     */
    readonly administrativeState: string;
    /**
     * Switch configuration description.
     */
    readonly annotation?: string;
    /**
     * BGP configuration properties.
     */
    readonly bgpConfiguration?: types.outputs.managednetworkfabric.v20230615.InternalNetworkPropertiesResponseBgpConfiguration;
    /**
     * Configuration state of the resource.
     */
    readonly configurationState: string;
    /**
     * List of Connected IPv4 Subnets.
     */
    readonly connectedIPv4Subnets?: types.outputs.managednetworkfabric.v20230615.ConnectedSubnetResponse[];
    /**
     * List of connected IPv6 Subnets.
     */
    readonly connectedIPv6Subnets?: types.outputs.managednetworkfabric.v20230615.ConnectedSubnetResponse[];
    /**
     * Egress Acl. ARM resource ID of Access Control Lists.
     */
    readonly egressAclId?: string;
    /**
     * Export Route Policy either IPv4 or IPv6.
     */
    readonly exportRoutePolicy?: types.outputs.managednetworkfabric.v20230615.ExportRoutePolicyResponse;
    /**
     * ARM Resource ID of the RoutePolicy. This is used for the backward compatibility.
     */
    readonly exportRoutePolicyId?: string;
    /**
     * Extension. Example: NoExtension | NPB.
     */
    readonly extension?: string;
    /**
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
     */
    readonly id: string;
    /**
     * Import Route Policy either IPv4 or IPv6.
     */
    readonly importRoutePolicy?: types.outputs.managednetworkfabric.v20230615.ImportRoutePolicyResponse;
    /**
     * ARM Resource ID of the RoutePolicy. This is used for the backward compatibility.
     */
    readonly importRoutePolicyId?: string;
    /**
     * Ingress Acl. ARM resource ID of Access Control Lists.
     */
    readonly ingressAclId?: string;
    /**
     * To check whether monitoring of internal network is enabled or not.
     */
    readonly isMonitoringEnabled?: string;
    /**
     * Maximum transmission unit. Default value is 1500.
     */
    readonly mtu?: number;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Provisioning state of the resource.
     */
    readonly provisioningState: string;
    /**
     * Static Route Configuration properties.
     */
    readonly staticRouteConfiguration?: types.outputs.managednetworkfabric.v20230615.InternalNetworkPropertiesResponseStaticRouteConfiguration;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.managednetworkfabric.v20230615.SystemDataResponse;
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
 */
export function getInternalNetworkOutput(args: GetInternalNetworkOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetInternalNetworkResult> {
    return pulumi.output(args).apply((a: any) => getInternalNetwork(a, opts))
}

export interface GetInternalNetworkOutputArgs {
    /**
     * Name of the Internal Network.
     */
    internalNetworkName: pulumi.Input<string>;
    /**
     * Name of the L3 Isolation Domain.
     */
    l3IsolationDomainName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}
