import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get properties of the provided layer 2 (L2) network.
 * Azure REST API version: 2023-05-01-preview.
 */
export function getL2Network(args: GetL2NetworkArgs, opts?: pulumi.InvokeOptions): Promise<GetL2NetworkResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:networkcloud:getL2Network", {
        "l2NetworkName": args.l2NetworkName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetL2NetworkArgs {
    /**
     * The name of the L2 network.
     */
    l2NetworkName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

export interface GetL2NetworkResult {
    /**
     * The list of resource IDs for the other Microsoft.NetworkCloud resources that have attached this network.
     */
    readonly associatedResourceIds: string[];
    /**
     * The resource ID of the Network Cloud cluster this L2 network is associated with.
     */
    readonly clusterId: string;
    /**
     * The more detailed status of the L2 network.
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
     * Field Deprecated. These fields will be empty/omitted. The list of Hybrid AKS cluster resource ID(s) that are associated with this L2 network.
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
     * The default interface name for this L2 network in the virtual machine. This name can be overridden by the name supplied in the network attachment configuration of that virtual machine.
     */
    readonly interfaceName?: string;
    /**
     * The resource ID of the Network Fabric l2IsolationDomain.
     */
    readonly l2IsolationDomainId: string;
    /**
     * The geo-location where the resource lives
     */
    readonly location: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The provisioning state of the L2 network.
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
     * Field Deprecated. These fields will be empty/omitted. The list of virtual machine resource ID(s), excluding any Hybrid AKS virtual machines, that are currently using this L2 network.
     */
    readonly virtualMachinesAssociatedIds: string[];
}
/**
 * Get properties of the provided layer 2 (L2) network.
 * Azure REST API version: 2023-05-01-preview.
 */
export function getL2NetworkOutput(args: GetL2NetworkOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetL2NetworkResult> {
    return pulumi.output(args).apply((a: any) => getL2Network(a, opts))
}

export interface GetL2NetworkOutputArgs {
    /**
     * The name of the L2 network.
     */
    l2NetworkName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}
