import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Returns a Azure Arc PrivateLinkScope.
 * Azure REST API version: 2022-12-27.
 */
export function getPrivateLinkScope(args: GetPrivateLinkScopeArgs, opts?: pulumi.InvokeOptions): Promise<GetPrivateLinkScopeResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:hybridcompute:getPrivateLinkScope", {
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
     * The name of the Azure Arc PrivateLinkScope resource.
     */
    scopeName: string;
}

/**
 * An Azure Arc PrivateLinkScope definition.
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
     * Properties that define a Azure Arc PrivateLinkScope resource.
     */
    readonly properties: types.outputs.hybridcompute.HybridComputePrivateLinkScopePropertiesResponse;
    /**
     * The system meta data relating to this resource.
     */
    readonly systemData: types.outputs.hybridcompute.SystemDataResponse;
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
 * Returns a Azure Arc PrivateLinkScope.
 * Azure REST API version: 2022-12-27.
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
     * The name of the Azure Arc PrivateLinkScope resource.
     */
    scopeName: pulumi.Input<string>;
}
