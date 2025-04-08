import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get the specified shared private link resource
 *
 * Uses Azure REST API version 2024-03-01.
 *
 * Other available API versions: 2023-02-01, 2023-03-01-preview, 2023-06-01-preview, 2023-08-01-preview, 2024-01-01-preview, 2024-04-01-preview, 2024-08-01-preview, 2024-10-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native webpubsub [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
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
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * The name of the resource.
     */
    resourceName: string;
    /**
     * The name of the shared private link resource.
     */
    sharedPrivateLinkResourceName: string;
}

/**
 * Describes a Shared Private Link Resource
 */
export interface GetWebPubSubSharedPrivateLinkResourceResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
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
 *
 * Uses Azure REST API version 2024-03-01.
 *
 * Other available API versions: 2023-02-01, 2023-03-01-preview, 2023-06-01-preview, 2023-08-01-preview, 2024-01-01-preview, 2024-04-01-preview, 2024-08-01-preview, 2024-10-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native webpubsub [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getWebPubSubSharedPrivateLinkResourceOutput(args: GetWebPubSubSharedPrivateLinkResourceOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetWebPubSubSharedPrivateLinkResourceResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:webpubsub:getWebPubSubSharedPrivateLinkResource", {
        "resourceGroupName": args.resourceGroupName,
        "resourceName": args.resourceName,
        "sharedPrivateLinkResourceName": args.sharedPrivateLinkResourceName,
    }, opts);
}

export interface GetWebPubSubSharedPrivateLinkResourceOutputArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the resource.
     */
    resourceName: pulumi.Input<string>;
    /**
     * The name of the shared private link resource.
     */
    sharedPrivateLinkResourceName: pulumi.Input<string>;
}