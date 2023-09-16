import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Description for Gets a virtual network the app (or deployment slot) is connected to by name.
 * Azure REST API version: 2022-09-01.
 */
export function getWebAppVnetConnectionSlot(args: GetWebAppVnetConnectionSlotArgs, opts?: pulumi.InvokeOptions): Promise<GetWebAppVnetConnectionSlotResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:web:getWebAppVnetConnectionSlot", {
        "name": args.name,
        "resourceGroupName": args.resourceGroupName,
        "slot": args.slot,
        "vnetName": args.vnetName,
    }, opts);
}

export interface GetWebAppVnetConnectionSlotArgs {
    /**
     * Name of the app.
     */
    name: string;
    /**
     * Name of the resource group to which the resource belongs.
     */
    resourceGroupName: string;
    /**
     * Name of the deployment slot. If a slot is not specified, the API will get the named virtual network for the production slot.
     */
    slot: string;
    /**
     * Name of the virtual network.
     */
    vnetName: string;
}

/**
 * Virtual Network information ARM resource.
 */
export interface GetWebAppVnetConnectionSlotResult {
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
    readonly routes: types.outputs.web.VnetRouteResponse[];
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
 * Description for Gets a virtual network the app (or deployment slot) is connected to by name.
 * Azure REST API version: 2022-09-01.
 */
export function getWebAppVnetConnectionSlotOutput(args: GetWebAppVnetConnectionSlotOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetWebAppVnetConnectionSlotResult> {
    return pulumi.output(args).apply((a: any) => getWebAppVnetConnectionSlot(a, opts))
}

export interface GetWebAppVnetConnectionSlotOutputArgs {
    /**
     * Name of the app.
     */
    name: pulumi.Input<string>;
    /**
     * Name of the resource group to which the resource belongs.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Name of the deployment slot. If a slot is not specified, the API will get the named virtual network for the production slot.
     */
    slot: pulumi.Input<string>;
    /**
     * Name of the virtual network.
     */
    vnetName: pulumi.Input<string>;
}
