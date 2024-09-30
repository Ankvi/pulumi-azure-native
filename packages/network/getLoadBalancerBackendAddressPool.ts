import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets load balancer backend address pool.
 * Azure REST API version: 2023-02-01.
 *
 * Other available API versions: 2023-04-01, 2023-05-01, 2023-06-01, 2023-09-01, 2023-11-01, 2024-01-01, 2024-03-01.
 */
export function getLoadBalancerBackendAddressPool(args: GetLoadBalancerBackendAddressPoolArgs, opts?: pulumi.InvokeOptions): Promise<GetLoadBalancerBackendAddressPoolResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:network:getLoadBalancerBackendAddressPool", {
        "backendAddressPoolName": args.backendAddressPoolName,
        "loadBalancerName": args.loadBalancerName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetLoadBalancerBackendAddressPoolArgs {
    /**
     * The name of the backend address pool.
     */
    backendAddressPoolName: string;
    /**
     * The name of the load balancer.
     */
    loadBalancerName: string;
    /**
     * The name of the resource group.
     */
    resourceGroupName: string;
}

/**
 * Pool of backend IP addresses.
 */
export interface GetLoadBalancerBackendAddressPoolResult {
    /**
     * An array of references to IP addresses defined in network interfaces.
     */
    readonly backendIPConfigurations: types.outputs.NetworkInterfaceIPConfigurationResponse[];
    /**
     * Amount of seconds Load Balancer waits for before sending RESET to client and backend address.
     */
    readonly drainPeriodInSeconds?: number;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    readonly etag: string;
    /**
     * Resource ID.
     */
    readonly id?: string;
    /**
     * An array of references to inbound NAT rules that use this backend address pool.
     */
    readonly inboundNatRules: types.outputs.SubResourceResponse[];
    /**
     * An array of backend addresses.
     */
    readonly loadBalancerBackendAddresses?: types.outputs.LoadBalancerBackendAddressResponse[];
    /**
     * An array of references to load balancing rules that use this backend address pool.
     */
    readonly loadBalancingRules: types.outputs.SubResourceResponse[];
    /**
     * The location of the backend address pool.
     */
    readonly location?: string;
    /**
     * The name of the resource that is unique within the set of backend address pools used by the load balancer. This name can be used to access the resource.
     */
    readonly name?: string;
    /**
     * A reference to an outbound rule that uses this backend address pool.
     */
    readonly outboundRule: types.outputs.SubResourceResponse;
    /**
     * An array of references to outbound rules that use this backend address pool.
     */
    readonly outboundRules: types.outputs.SubResourceResponse[];
    /**
     * The provisioning state of the backend address pool resource.
     */
    readonly provisioningState: string;
    /**
     * An array of gateway load balancer tunnel interfaces.
     */
    readonly tunnelInterfaces?: types.outputs.GatewayLoadBalancerTunnelInterfaceResponse[];
    /**
     * Type of the resource.
     */
    readonly type: string;
    /**
     * A reference to a virtual network.
     */
    readonly virtualNetwork?: types.outputs.SubResourceResponse;
}
/**
 * Gets load balancer backend address pool.
 * Azure REST API version: 2023-02-01.
 *
 * Other available API versions: 2023-04-01, 2023-05-01, 2023-06-01, 2023-09-01, 2023-11-01, 2024-01-01, 2024-03-01.
 */
export function getLoadBalancerBackendAddressPoolOutput(args: GetLoadBalancerBackendAddressPoolOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetLoadBalancerBackendAddressPoolResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:network:getLoadBalancerBackendAddressPool", {
        "backendAddressPoolName": args.backendAddressPoolName,
        "loadBalancerName": args.loadBalancerName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetLoadBalancerBackendAddressPoolOutputArgs {
    /**
     * The name of the backend address pool.
     */
    backendAddressPoolName: pulumi.Input<string>;
    /**
     * The name of the load balancer.
     */
    loadBalancerName: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
}