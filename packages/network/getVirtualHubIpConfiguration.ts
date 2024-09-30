import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Retrieves the details of a Virtual Hub Ip configuration.
 * Azure REST API version: 2023-02-01.
 *
 * Other available API versions: 2023-04-01, 2023-05-01, 2023-06-01, 2023-09-01, 2023-11-01, 2024-01-01, 2024-03-01.
 */
export function getVirtualHubIpConfiguration(args: GetVirtualHubIpConfigurationArgs, opts?: pulumi.InvokeOptions): Promise<GetVirtualHubIpConfigurationResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:network:getVirtualHubIpConfiguration", {
        "ipConfigName": args.ipConfigName,
        "resourceGroupName": args.resourceGroupName,
        "virtualHubName": args.virtualHubName,
    }, opts);
}

export interface GetVirtualHubIpConfigurationArgs {
    /**
     * The name of the ipconfig.
     */
    ipConfigName: string;
    /**
     * The resource group name of the VirtualHub.
     */
    resourceGroupName: string;
    /**
     * The name of the VirtualHub.
     */
    virtualHubName: string;
}

/**
 * IpConfigurations.
 */
export interface GetVirtualHubIpConfigurationResult {
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    readonly etag: string;
    /**
     * Resource ID.
     */
    readonly id?: string;
    /**
     * Name of the Ip Configuration.
     */
    readonly name?: string;
    /**
     * The private IP address of the IP configuration.
     */
    readonly privateIPAddress?: string;
    /**
     * The private IP address allocation method.
     */
    readonly privateIPAllocationMethod?: string;
    /**
     * The provisioning state of the IP configuration resource.
     */
    readonly provisioningState: string;
    /**
     * The reference to the public IP resource.
     */
    readonly publicIPAddress?: types.outputs.PublicIPAddressResponse;
    /**
     * The reference to the subnet resource.
     */
    readonly subnet?: types.outputs.SubnetResponse;
    /**
     * Ipconfiguration type.
     */
    readonly type: string;
}
/**
 * Retrieves the details of a Virtual Hub Ip configuration.
 * Azure REST API version: 2023-02-01.
 *
 * Other available API versions: 2023-04-01, 2023-05-01, 2023-06-01, 2023-09-01, 2023-11-01, 2024-01-01, 2024-03-01.
 */
export function getVirtualHubIpConfigurationOutput(args: GetVirtualHubIpConfigurationOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetVirtualHubIpConfigurationResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:network:getVirtualHubIpConfiguration", {
        "ipConfigName": args.ipConfigName,
        "resourceGroupName": args.resourceGroupName,
        "virtualHubName": args.virtualHubName,
    }, opts);
}

export interface GetVirtualHubIpConfigurationOutputArgs {
    /**
     * The name of the ipconfig.
     */
    ipConfigName: pulumi.Input<string>;
    /**
     * The resource group name of the VirtualHub.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the VirtualHub.
     */
    virtualHubName: pulumi.Input<string>;
}