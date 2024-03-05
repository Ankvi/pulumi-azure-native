import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a SharedPrivateLinkResource
 * Azure REST API version: 2023-09-01-preview.
 */
export function getSharedPrivateLinkResource(args: GetSharedPrivateLinkResourceArgs, opts?: pulumi.InvokeOptions): Promise<GetSharedPrivateLinkResourceResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:databasewatcher:getSharedPrivateLinkResource", {
        "resourceGroupName": args.resourceGroupName,
        "sharedPrivateLinkResourceName": args.sharedPrivateLinkResourceName,
        "watcherName": args.watcherName,
    }, opts);
}

export interface GetSharedPrivateLinkResourceArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * The Shared Private Link resource name.
     */
    sharedPrivateLinkResourceName: string;
    /**
     * The database watcher name.
     */
    watcherName: string;
}

/**
 * Concrete proxy resource types can be created by aliasing this type using a specific property type.
 */
export interface GetSharedPrivateLinkResourceResult {
    /**
     * The DNS zone to be included in the DNS name of the shared private link. Value is service-specific.
     */
    readonly dnsZone?: string;
    /**
     * The group id from the provider of resource the shared private link resource is for.
     */
    readonly groupId: string;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The resource id of the resource the shared private link resource is for.
     */
    readonly privateLinkResourceId: string;
    /**
     * The provisioning state of the resource.
     */
    readonly provisioningState: string;
    /**
     * The request message for requesting approval of the shared private link resource.
     */
    readonly requestMessage: string;
    /**
     * Status of the shared private link resource. Can be Pending, Approved, Rejected or Disconnected.
     */
    readonly status: string;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Get a SharedPrivateLinkResource
 * Azure REST API version: 2023-09-01-preview.
 */
export function getSharedPrivateLinkResourceOutput(args: GetSharedPrivateLinkResourceOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetSharedPrivateLinkResourceResult> {
    return pulumi.output(args).apply((a: any) => getSharedPrivateLinkResource(a, opts))
}

export interface GetSharedPrivateLinkResourceOutputArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The Shared Private Link resource name.
     */
    sharedPrivateLinkResourceName: pulumi.Input<string>;
    /**
     * The database watcher name.
     */
    watcherName: pulumi.Input<string>;
}