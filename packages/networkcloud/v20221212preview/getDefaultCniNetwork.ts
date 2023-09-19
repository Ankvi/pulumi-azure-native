import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get properties of the provided default CNI network.
 */
export function getDefaultCniNetwork(args: GetDefaultCniNetworkArgs, opts?: pulumi.InvokeOptions): Promise<GetDefaultCniNetworkResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:networkcloud/v20221212preview:getDefaultCniNetwork", {
        "defaultCniNetworkName": args.defaultCniNetworkName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetDefaultCniNetworkArgs {
    /**
     * The name of the default CNI network.
     */
    defaultCniNetworkName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

export interface GetDefaultCniNetworkResult {
    /**
     * The resource ID of the Network Cloud cluster this default CNI network is associated with.
     */
    readonly clusterId: string;
    /**
     * The autonomous system number that the fabric expects to peer with, derived from the associated L3 isolation domain.
     */
    readonly cniAsNumber: number;
    /**
     * The Calico BGP configuration.
     */
    readonly cniBgpConfiguration?: types.outputs.CniBgpConfigurationResponse;
    /**
     * The more detailed status of the default CNI network.
     */
    readonly detailedStatus: string;
    /**
     * The descriptive message about the current detailed status.
     */
    readonly detailedStatusMessage: string;
    /**
     * The extended location of the cluster associated with the resource.
     */
    readonly extendedLocation: types.outputs.ExtendedLocationResponse;
    /**
     * The L3 isolation fabric BGP peering connectivity information necessary for BGP peering the Hybrid AKS Cluster with the switch fabric.
     */
    readonly fabricBgpPeers: types.outputs.BgpPeerResponse[];
    /**
     * The list of Hybrid AKS cluster resource ID(s) that are associated with this default CNI network.
     */
    readonly hybridAksClustersAssociatedIds: string[];
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The name of the interface that will be present in the virtual machine to represent this network.
     */
    readonly interfaceName: string;
    /**
     * The type of the IP address allocation.
     */
    readonly ipAllocationType?: string;
    /**
     * The IPV4 prefix (CIDR) assigned to this default CNI network. It is required when the IP allocation type
     * is IPV4 or DualStack.
     */
    readonly ipv4ConnectedPrefix?: string;
    /**
     * The IPV6 prefix (CIDR) assigned to this default CNI network. It is required when the IP allocation type
     * is IPV6 or DualStack.
     */
    readonly ipv6ConnectedPrefix?: string;
    /**
     * The resource ID of the Network Fabric l3IsolationDomain.
     */
    readonly l3IsolationDomainId: string;
    /**
     * The geo-location where the resource lives
     */
    readonly location: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The provisioning state of the default CNI network.
     */
    readonly provisioningState: string;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * Resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
    /**
     * The VLAN from the l3IsolationDomain that is used for this network.
     */
    readonly vlan: number;
}
/**
 * Get properties of the provided default CNI network.
 */
export function getDefaultCniNetworkOutput(args: GetDefaultCniNetworkOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetDefaultCniNetworkResult> {
    return pulumi.output(args).apply((a: any) => getDefaultCniNetwork(a, opts))
}

export interface GetDefaultCniNetworkOutputArgs {
    /**
     * The name of the default CNI network.
     */
    defaultCniNetworkName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}
