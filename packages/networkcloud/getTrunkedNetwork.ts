import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get properties of the provided trunked network.
 * Azure REST API version: 2023-10-01-preview.
 *
 * Other available API versions: 2023-07-01, 2024-06-01-preview, 2024-07-01.
 */
export function getTrunkedNetwork(args: GetTrunkedNetworkArgs, opts?: pulumi.InvokeOptions): Promise<GetTrunkedNetworkResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:networkcloud:getTrunkedNetwork", {
        "resourceGroupName": args.resourceGroupName,
        "trunkedNetworkName": args.trunkedNetworkName,
    }, opts);
}

export interface GetTrunkedNetworkArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * The name of the trunked network.
     */
    trunkedNetworkName: string;
}

export interface GetTrunkedNetworkResult {
    /**
     * The list of resource IDs for the other Microsoft.NetworkCloud resources that have attached this network.
     */
    readonly associatedResourceIds: string[];
    /**
     * The resource ID of the Network Cloud cluster this trunked network is associated with.
     */
    readonly clusterId: string;
    /**
     * The more detailed status of the trunked network.
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
     * Field Deprecated. These fields will be empty/omitted. The list of Hybrid AKS cluster resource IDs that are associated with this trunked network.
     */
    readonly hybridAksClustersAssociatedIds: string[];
    /**
     * Field Deprecated. The field was previously optional, now it will have no defined behavior and will be ignored. The network plugin type for Hybrid AKS.
     */
    readonly hybridAksPluginType?: string;
    /**
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
     */
    readonly id: string;
    /**
     * The default interface name for this trunked network in the virtual machine. This name can be overridden by the name supplied in the network attachment configuration of that virtual machine.
     */
    readonly interfaceName?: string;
    /**
     * The list of resource IDs representing the Network Fabric isolation domains. It can be any combination of l2IsolationDomain and l3IsolationDomain resources.
     */
    readonly isolationDomainIds: string[];
    /**
     * The geo-location where the resource lives
     */
    readonly location: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The provisioning state of the trunked network.
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
     * Field Deprecated. These fields will be empty/omitted. The list of virtual machine resource IDs, excluding any Hybrid AKS virtual machines, that are currently using this trunked network.
     */
    readonly virtualMachinesAssociatedIds: string[];
    /**
     * The list of vlans that are selected from the isolation domains for trunking.
     */
    readonly vlans: number[];
}
/**
 * Get properties of the provided trunked network.
 * Azure REST API version: 2023-10-01-preview.
 *
 * Other available API versions: 2023-07-01, 2024-06-01-preview, 2024-07-01.
 */
export function getTrunkedNetworkOutput(args: GetTrunkedNetworkOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetTrunkedNetworkResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:networkcloud:getTrunkedNetwork", {
        "resourceGroupName": args.resourceGroupName,
        "trunkedNetworkName": args.trunkedNetworkName,
    }, opts);
}

export interface GetTrunkedNetworkOutputArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the trunked network.
     */
    trunkedNetworkName: pulumi.Input<string>;
}