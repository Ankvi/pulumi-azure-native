import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Returns a Azure Monitor PrivateLinkScope.
 */
export function getPrivateLinkScope(args: GetPrivateLinkScopeArgs, opts?: pulumi.InvokeOptions): Promise<GetPrivateLinkScopeResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:insights/v20191017preview:getPrivateLinkScope", {
        "resourceGroupName": args.resourceGroupName,
        "scopeName": args.scopeName,
    }, opts);
}

export interface GetPrivateLinkScopeArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * The name of the Azure Monitor PrivateLinkScope resource.
     */
    scopeName: string;
}

/**
 * An Azure Monitor PrivateLinkScope definition.
 */
export interface GetPrivateLinkScopeResult {
    /**
     * Azure resource Id
     */
    readonly id: string;
    /**
     * Resource location
     */
    readonly location: string;
    /**
     * Azure resource name
     */
    readonly name: string;
    /**
     * List of private endpoint connections.
     */
    readonly privateEndpointConnections: types.outputs.PrivateEndpointConnectionResponse[];
    /**
     * Current state of this PrivateLinkScope: whether or not is has been provisioned within the resource group it is defined. Users cannot change this value but are able to read from it. Values will include Provisioning ,Succeeded, Canceled and Failed.
     */
    readonly provisioningState: string;
    /**
     * Resource tags
     */
    readonly tags?: {[key: string]: string};
    /**
     * Azure resource type
     */
    readonly type: string;
}
/**
 * Returns a Azure Monitor PrivateLinkScope.
 */
export function getPrivateLinkScopeOutput(args: GetPrivateLinkScopeOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetPrivateLinkScopeResult> {
    return pulumi.output(args).apply((a: any) => getPrivateLinkScope(a, opts))
}

export interface GetPrivateLinkScopeOutputArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the Azure Monitor PrivateLinkScope resource.
     */
    scopeName: pulumi.Input<string>;
}