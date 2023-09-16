import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the specified Virtual Router.
 * Azure REST API version: 2023-02-01.
 */
export function getVirtualRouter(args: GetVirtualRouterArgs, opts?: pulumi.InvokeOptions): Promise<GetVirtualRouterResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:network:getVirtualRouter", {
        "expand": args.expand,
        "resourceGroupName": args.resourceGroupName,
        "virtualRouterName": args.virtualRouterName,
    }, opts);
}

export interface GetVirtualRouterArgs {
    /**
     * Expands referenced resources.
     */
    expand?: string;
    /**
     * The name of the resource group.
     */
    resourceGroupName: string;
    /**
     * The name of the Virtual Router.
     */
    virtualRouterName: string;
}

/**
 * VirtualRouter Resource.
 */
export interface GetVirtualRouterResult {
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    readonly etag: string;
    /**
     * The Gateway on which VirtualRouter is hosted.
     */
    readonly hostedGateway?: types.outputs.network.SubResourceResponse;
    /**
     * The Subnet on which VirtualRouter is hosted.
     */
    readonly hostedSubnet?: types.outputs.network.SubResourceResponse;
    /**
     * Resource ID.
     */
    readonly id?: string;
    /**
     * Resource location.
     */
    readonly location?: string;
    /**
     * Resource name.
     */
    readonly name: string;
    /**
     * List of references to VirtualRouterPeerings.
     */
    readonly peerings: types.outputs.network.SubResourceResponse[];
    /**
     * The provisioning state of the resource.
     */
    readonly provisioningState: string;
    /**
     * Resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * Resource type.
     */
    readonly type: string;
    /**
     * VirtualRouter ASN.
     */
    readonly virtualRouterAsn?: number;
    /**
     * VirtualRouter IPs.
     */
    readonly virtualRouterIps?: string[];
}
/**
 * Gets the specified Virtual Router.
 * Azure REST API version: 2023-02-01.
 */
export function getVirtualRouterOutput(args: GetVirtualRouterOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetVirtualRouterResult> {
    return pulumi.output(args).apply((a: any) => getVirtualRouter(a, opts))
}

export interface GetVirtualRouterOutputArgs {
    /**
     * Expands referenced resources.
     */
    expand?: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the Virtual Router.
     */
    virtualRouterName: pulumi.Input<string>;
}
