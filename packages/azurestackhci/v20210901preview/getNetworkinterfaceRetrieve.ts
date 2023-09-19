import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets network interfaces by resource name
 */
export function getNetworkinterfaceRetrieve(args: GetNetworkinterfaceRetrieveArgs, opts?: pulumi.InvokeOptions): Promise<GetNetworkinterfaceRetrieveResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:azurestackhci/v20210901preview:getNetworkinterfaceRetrieve", {
        "networkinterfacesName": args.networkinterfacesName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetNetworkinterfaceRetrieveArgs {
    networkinterfacesName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * The network interface resource definition.
 */
export interface GetNetworkinterfaceRetrieveResult {
    /**
     * DNS Settings for the interface
     */
    readonly dnsSettings?: types.outputs.InterfaceDNSSettingsResponse;
    /**
     * The extendedLocation of the resource.
     */
    readonly extendedLocation?: types.outputs.ExtendedLocationResponse;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * IPConfigurations - A list of IPConfigurations of the network interface.
     */
    readonly ipConfigurations?: types.outputs.IpConfigurationResponse[];
    /**
     * The geo-location where the resource lives
     */
    readonly location: string;
    /**
     * MacAddress - The MAC address of the network interface.
     */
    readonly macAddress?: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    readonly provisioningState: string;
    /**
     * name of the object to be used in moc
     */
    readonly resourceName?: string;
    /**
     * NetworkInterfaceStatus defines the observed state of network interfaces
     */
    readonly status: types.outputs.NetworkInterfaceStatusResponse;
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
 * Gets network interfaces by resource name
 */
export function getNetworkinterfaceRetrieveOutput(args: GetNetworkinterfaceRetrieveOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetNetworkinterfaceRetrieveResult> {
    return pulumi.output(args).apply((a: any) => getNetworkinterfaceRetrieve(a, opts))
}

export interface GetNetworkinterfaceRetrieveOutputArgs {
    networkinterfacesName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}
