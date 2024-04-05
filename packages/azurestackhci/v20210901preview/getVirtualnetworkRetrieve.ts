import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * The virtual network resource definition.
 */
export function getVirtualnetworkRetrieve(args: GetVirtualnetworkRetrieveArgs, opts?: pulumi.InvokeOptions): Promise<GetVirtualnetworkRetrieveResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:azurestackhci/v20210901preview:getVirtualnetworkRetrieve", {
        "resourceGroupName": args.resourceGroupName,
        "virtualnetworksName": args.virtualnetworksName,
    }, opts);
}

export interface GetVirtualnetworkRetrieveArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    virtualnetworksName: string;
}

/**
 * The virtual network resource definition.
 */
export interface GetVirtualnetworkRetrieveResult {
    /**
     * The extendedLocation of the resource.
     */
    readonly extendedLocation?: types.outputs.ExtendedLocationResponse;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The geo-location where the resource lives
     */
    readonly location: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Type of the network
     */
    readonly networkType?: string;
    readonly provisioningState: string;
    /**
     * name of the object to be used in moc
     */
    readonly resourceName?: string;
    /**
     * VirtualNetworkStatus defines the observed state of virtual networks
     */
    readonly status: types.outputs.VirtualNetworkStatusResponse;
    /**
     * Subnet - list of subnets under the virtual network
     */
    readonly subnets?: types.outputs.VirtualnetworksPropertiesResponseSubnets[];
    /**
     * Metadata pertaining to creation and last modification of the resource.
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
}
/**
 * The virtual network resource definition.
 */
export function getVirtualnetworkRetrieveOutput(args: GetVirtualnetworkRetrieveOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetVirtualnetworkRetrieveResult> {
    return pulumi.output(args).apply((a: any) => getVirtualnetworkRetrieve(a, opts))
}

export interface GetVirtualnetworkRetrieveOutputArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    virtualnetworksName: pulumi.Input<string>;
}