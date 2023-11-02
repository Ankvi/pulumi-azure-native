import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get virtual network.
 * Azure REST API version: 2018-09-15.
 *
 * Other available API versions: 2016-05-15.
 */
export function getVirtualNetwork(args: GetVirtualNetworkArgs, opts?: pulumi.InvokeOptions): Promise<GetVirtualNetworkResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:devtestlab:getVirtualNetwork", {
        "expand": args.expand,
        "labName": args.labName,
        "name": args.name,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetVirtualNetworkArgs {
    /**
     * Specify the $expand query. Example: 'properties($expand=externalSubnets)'
     */
    expand?: string;
    /**
     * The name of the lab.
     */
    labName: string;
    /**
     * The name of the virtual network.
     */
    name: string;
    /**
     * The name of the resource group.
     */
    resourceGroupName: string;
}

/**
 * A virtual network.
 */
export interface GetVirtualNetworkResult {
    /**
     * The allowed subnets of the virtual network.
     */
    readonly allowedSubnets?: types.outputs.SubnetResponse[];
    /**
     * The creation date of the virtual network.
     */
    readonly createdDate: string;
    /**
     * The description of the virtual network.
     */
    readonly description?: string;
    /**
     * The Microsoft.Network resource identifier of the virtual network.
     */
    readonly externalProviderResourceId?: string;
    /**
     * The external subnet properties.
     */
    readonly externalSubnets: types.outputs.ExternalSubnetResponse[];
    /**
     * The identifier of the resource.
     */
    readonly id: string;
    /**
     * The location of the resource.
     */
    readonly location?: string;
    /**
     * The name of the resource.
     */
    readonly name: string;
    /**
     * The provisioning status of the resource.
     */
    readonly provisioningState: string;
    /**
     * The subnet overrides of the virtual network.
     */
    readonly subnetOverrides?: types.outputs.SubnetOverrideResponse[];
    /**
     * The tags of the resource.
     */
    readonly tags?: {[key: string]: string};
    /**
     * The type of the resource.
     */
    readonly type: string;
    /**
     * The unique immutable identifier of a resource (Guid).
     */
    readonly uniqueIdentifier: string;
}
/**
 * Get virtual network.
 * Azure REST API version: 2018-09-15.
 *
 * Other available API versions: 2016-05-15.
 */
export function getVirtualNetworkOutput(args: GetVirtualNetworkOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetVirtualNetworkResult> {
    return pulumi.output(args).apply((a: any) => getVirtualNetwork(a, opts))
}

export interface GetVirtualNetworkOutputArgs {
    /**
     * Specify the $expand query. Example: 'properties($expand=externalSubnets)'
     */
    expand?: pulumi.Input<string>;
    /**
     * The name of the lab.
     */
    labName: pulumi.Input<string>;
    /**
     * The name of the virtual network.
     */
    name: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
}
