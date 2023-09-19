import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get the specified shared private link resource
 * Azure REST API version: 2023-02-01.
 */
export function getWebPubSubSharedPrivateLinkResource(args: GetWebPubSubSharedPrivateLinkResourceArgs, opts?: pulumi.InvokeOptions): Promise<GetWebPubSubSharedPrivateLinkResourceResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:webpubsub:getWebPubSubSharedPrivateLinkResource", {
        "resourceGroupName": args.resourceGroupName,
        "resourceName": args.resourceName,
        "sharedPrivateLinkResourceName": args.sharedPrivateLinkResourceName,
    }, opts);
}

export interface GetWebPubSubSharedPrivateLinkResourceArgs {
    /**
     * The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
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
export interface GetWebPubSubSharedPrivateLinkResourceResult {
    /**
     * The group id from the provider of resource the shared private link resource is for
     */
    readonly groupId: string;
    /**
     * Fully qualified resource Id for the resource.
     */
    readonly id: string;
    /**
     * The name of the resource.
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
     * Metadata pertaining to creation and last modification of the resource.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * The type of the resource - e.g. "Microsoft.SignalRService/SignalR"
     */
    readonly type: string;
}
/**
 * Get the specified shared private link resource
 * Azure REST API version: 2023-02-01.
 */
export function getWebPubSubSharedPrivateLinkResourceOutput(args: GetWebPubSubSharedPrivateLinkResourceOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetWebPubSubSharedPrivateLinkResourceResult> {
    return pulumi.output(args).apply((a: any) => getWebPubSubSharedPrivateLinkResource(a, opts))
}

export interface GetWebPubSubSharedPrivateLinkResourceOutputArgs {
    /**
     * The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
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
