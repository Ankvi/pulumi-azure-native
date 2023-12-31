import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get the specified shared private link resource
 */
export function getSignalRSharedPrivateLinkResource(args: GetSignalRSharedPrivateLinkResourceArgs, opts?: pulumi.InvokeOptions): Promise<GetSignalRSharedPrivateLinkResourceResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:signalrservice/v20230601preview:getSignalRSharedPrivateLinkResource", {
        "resourceGroupName": args.resourceGroupName,
        "resourceName": args.resourceName,
        "sharedPrivateLinkResourceName": args.sharedPrivateLinkResourceName,
    }, opts);
}

export interface GetSignalRSharedPrivateLinkResourceArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * The name of the resource.
     */
    resourceName: string;
    /**
     * The name of the shared private link resource
     */
    sharedPrivateLinkResourceName: string;
}

/**
 * Describes a Shared Private Link Resource
 */
export interface GetSignalRSharedPrivateLinkResourceResult {
    /**
     * The group id from the provider of resource the shared private link resource is for
     */
    readonly groupId: string;
    /**
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
     */
    readonly id: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The resource id of the resource the shared private link resource is for
     */
    readonly privateLinkResourceId: string;
    /**
     * Provisioning state of the resource.
     */
    readonly provisioningState: string;
    /**
     * The request message for requesting approval of the shared private link resource
     */
    readonly requestMessage?: string;
    /**
     * Status of the shared private link resource
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
 * Get the specified shared private link resource
 */
export function getSignalRSharedPrivateLinkResourceOutput(args: GetSignalRSharedPrivateLinkResourceOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetSignalRSharedPrivateLinkResourceResult> {
    return pulumi.output(args).apply((a: any) => getSignalRSharedPrivateLinkResource(a, opts))
}

export interface GetSignalRSharedPrivateLinkResourceOutputArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the resource.
     */
    resourceName: pulumi.Input<string>;
    /**
     * The name of the shared private link resource
     */
    sharedPrivateLinkResourceName: pulumi.Input<string>;
}
