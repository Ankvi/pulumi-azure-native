import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get properties of the provided layer 3 (L3) network.
 * Azure REST API version: 2023-10-01-preview.
 *
 * Other available API versions: 2023-07-01, 2024-06-01-preview, 2024-07-01, 2024-10-01-preview.
 */
export function getL3Network(args: GetL3NetworkArgs, opts?: pulumi.InvokeOptions): Promise<GetL3NetworkResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:networkcloud:getL3Network", {
        "l3NetworkName": args.l3NetworkName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetL3NetworkArgs {
    /**
     * The name of the L3 network.
     */
    l3NetworkName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

export interface GetL3NetworkResult {
    /**
     * The list of resource IDs for the other Microsoft.NetworkCloud resources that have attached this network.
     */
    readonly associatedResourceIds: string[];
    /**
     * The resource ID of the Network Cloud cluster this L3 network is associated with.
     */
    readonly clusterId: string;
    /**
     * The more detailed status of the L3 network.
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
     * Field Deprecated. These fields will be empty/omitted. The list of Hybrid AKS cluster resource IDs that are associated with this L3 network.
     */
    readonly hybridAksClustersAssociatedIds: string[];
    /**
     * Field Deprecated. The field was previously optional, now it will have no defined behavior and will be ignored. The indicator of whether or not to disable IPAM allocation on the network attachment definition injected into the Hybrid AKS Cluster.
     */
    readonly hybridAksIpamEnabled?: string;
    /**
     * Field Deprecated. The field was previously optional, now it will have no defined behavior and will be ignored. The network plugin type for Hybrid AKS.
     */
    readonly hybridAksPluginType?: string;
    /**
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
     */
    readonly id: string;
    /**
     * The default interface name for this L3 network in the virtual machine. This name can be overridden by the name supplied in the network attachment configuration of that virtual machine.
     */
    readonly interfaceName?: string;
    /**
     * The type of the IP address allocation, defaulted to "DualStack".
     */
    readonly ipAllocationType?: string;
    /**
     * The IPV4 prefix (CIDR) assigned to this L3 network. Required when the IP allocation type
     * is IPV4 or DualStack.
     */
    readonly ipv4ConnectedPrefix?: string;
    /**
     * The IPV6 prefix (CIDR) assigned to this L3 network. Required when the IP allocation type
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
     * The provisioning state of the L3 network.
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
     * Field Deprecated. These fields will be empty/omitted. The list of virtual machine resource IDs, excluding any Hybrid AKS virtual machines, that are currently using this L3 network.
     */
    readonly virtualMachinesAssociatedIds: string[];
    /**
     * The VLAN from the l3IsolationDomain that is used for this network.
     */
    readonly vlan: number;
}
/**
 * Get properties of the provided layer 3 (L3) network.
 * Azure REST API version: 2023-10-01-preview.
 *
 * Other available API versions: 2023-07-01, 2024-06-01-preview, 2024-07-01, 2024-10-01-preview.
 */
export function getL3NetworkOutput(args: GetL3NetworkOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetL3NetworkResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:networkcloud:getL3Network", {
        "l3NetworkName": args.l3NetworkName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetL3NetworkOutputArgs {
    /**
     * The name of the L3 network.
     */
    l3NetworkName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}