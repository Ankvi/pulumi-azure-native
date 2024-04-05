import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a resource management private link(resource-level).
 */
export function getResourceManagementPrivateLink(args: GetResourceManagementPrivateLinkArgs, opts?: pulumi.InvokeOptions): Promise<GetResourceManagementPrivateLinkResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:authorization/v20200501:getResourceManagementPrivateLink", {
        "resourceGroupName": args.resourceGroupName,
        "rmplName": args.rmplName,
    }, opts);
}

export interface GetResourceManagementPrivateLinkArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * The name of the resource management private link.
     */
    rmplName: string;
}

export interface GetResourceManagementPrivateLinkResult {
    /**
     * The rmplResourceID.
     */
    readonly id: string;
    /**
     * the region of the rmpl
     */
    readonly location?: string;
    /**
     * The rmpl Name.
     */
    readonly name: string;
    readonly properties: types.outputs.ResourceManagementPrivateLinkEndpointConnectionsResponse;
    /**
     * The operation type.
     */
    readonly type: string;
}
/**
 * Get a resource management private link(resource-level).
 */
export function getResourceManagementPrivateLinkOutput(args: GetResourceManagementPrivateLinkOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetResourceManagementPrivateLinkResult> {
    return pulumi.output(args).apply((a: any) => getResourceManagementPrivateLink(a, opts))
}

export interface GetResourceManagementPrivateLinkOutputArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the resource management private link.
     */
    rmplName: pulumi.Input<string>;
}