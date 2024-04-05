import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets a virtual network the app (or deployment slot) is connected to by name.
 */
export function getWebAppVnetConnection(args: GetWebAppVnetConnectionArgs, opts?: pulumi.InvokeOptions): Promise<GetWebAppVnetConnectionResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:web/v20201001:getWebAppVnetConnection", {
        "name": args.name,
        "resourceGroupName": args.resourceGroupName,
        "vnetName": args.vnetName,
    }, opts);
}

export interface GetWebAppVnetConnectionArgs {
    /**
     * Name of the app.
     */
    name: string;
    /**
     * Name of the resource group to which the resource belongs.
     */
    resourceGroupName: string;
    /**
     * Name of the virtual network.
     */
    vnetName: string;
}

/**
 * Virtual Network information contract.
 */
export interface GetWebAppVnetConnectionResult {
    /**
     * A certificate file (.cer) blob containing the public key of the private key used to authenticate a 
     * Point-To-Site VPN connection.
     */
    readonly certBlob?: string;
    /**
     * The client certificate thumbprint.
     */
    readonly certThumbprint: string;
    /**
     * DNS servers to be used by this Virtual Network. This should be a comma-separated list of IP addresses.
     */
    readonly dnsServers?: string;
    /**
     * Resource Id.
     */
    readonly id: string;
    /**
     * Flag that is used to denote if this is VNET injection
     */
    readonly isSwift?: boolean;
    /**
     * Kind of resource.
     */
    readonly kind?: string;
    /**
     * Resource Name.
     */
    readonly name: string;
    /**
     * <code>true</code> if a resync is required; otherwise, <code>false</code>.
     */
    readonly resyncRequired: boolean;
    /**
     * The routes that this Virtual Network connection uses.
     */
    readonly routes: types.outputs.VnetRouteResponse[];
    /**
     * The system metadata relating to this resource.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * Resource type.
     */
    readonly type: string;
    /**
     * The Virtual Network's resource ID.
     */
    readonly vnetResourceId?: string;
}
/**
 * Gets a virtual network the app (or deployment slot) is connected to by name.
 */
export function getWebAppVnetConnectionOutput(args: GetWebAppVnetConnectionOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetWebAppVnetConnectionResult> {
    return pulumi.output(args).apply((a: any) => getWebAppVnetConnection(a, opts))
}

export interface GetWebAppVnetConnectionOutputArgs {
    /**
     * Name of the app.
     */
    name: pulumi.Input<string>;
    /**
     * Name of the resource group to which the resource belongs.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Name of the virtual network.
     */
    vnetName: pulumi.Input<string>;
}