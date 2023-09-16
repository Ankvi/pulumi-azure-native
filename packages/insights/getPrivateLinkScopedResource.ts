import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets a scoped resource in a private link scope.
 * Azure REST API version: 2021-07-01-preview.
 */
export function getPrivateLinkScopedResource(args: GetPrivateLinkScopedResourceArgs, opts?: pulumi.InvokeOptions): Promise<GetPrivateLinkScopedResourceResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:insights:getPrivateLinkScopedResource", {
        "name": args.name,
        "resourceGroupName": args.resourceGroupName,
        "scopeName": args.scopeName,
    }, opts);
}

export interface GetPrivateLinkScopedResourceArgs {
    /**
     * The name of the scoped resource object.
     */
    name: string;
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
 * A private link scoped resource
 */
export interface GetPrivateLinkScopedResourceResult {
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The resource id of the scoped Azure monitor resource.
     */
    readonly linkedResourceId?: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * State of the private endpoint connection.
     */
    readonly provisioningState: string;
    /**
     * System data
     */
    readonly systemData: types.outputs.insights.SystemDataResponse;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Gets a scoped resource in a private link scope.
 * Azure REST API version: 2021-07-01-preview.
 */
export function getPrivateLinkScopedResourceOutput(args: GetPrivateLinkScopedResourceOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetPrivateLinkScopedResourceResult> {
    return pulumi.output(args).apply((a: any) => getPrivateLinkScopedResource(a, opts))
}

export interface GetPrivateLinkScopedResourceOutputArgs {
    /**
     * The name of the scoped resource object.
     */
    name: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the Azure Monitor PrivateLinkScope resource.
     */
    scopeName: pulumi.Input<string>;
}
