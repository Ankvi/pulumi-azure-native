import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get the details of a Media Services account
 * Azure REST API version: 2023-01-01.
 */
export function getMediaService(args: GetMediaServiceArgs, opts?: pulumi.InvokeOptions): Promise<GetMediaServiceResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:media:getMediaService", {
        "accountName": args.accountName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetMediaServiceArgs {
    /**
     * The Media Services account name.
     */
    accountName: string;
    /**
     * The name of the resource group within the Azure subscription.
     */
    resourceGroupName: string;
}

/**
 * A Media Services account.
 */
export interface GetMediaServiceResult {
    /**
     * The account encryption properties.
     */
    readonly encryption?: types.outputs.media.AccountEncryptionResponse;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The Managed Identity for the Media Services account.
     */
    readonly identity?: types.outputs.media.MediaServiceIdentityResponse;
    /**
     * The Key Delivery properties for Media Services account.
     */
    readonly keyDelivery?: types.outputs.media.KeyDeliveryResponse;
    /**
     * The geo-location where the resource lives
     */
    readonly location: string;
    /**
     * The Media Services account ID.
     */
    readonly mediaServiceId: string;
    /**
     * The minimum TLS version allowed for this account's requests. This is an optional property. If unspecified, a secure default value will be used.
     */
    readonly minimumTlsVersion?: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The Private Endpoint Connections created for the Media Service account.
     */
    readonly privateEndpointConnections: types.outputs.media.PrivateEndpointConnectionResponse[];
    /**
     * Provisioning state of the Media Services account.
     */
    readonly provisioningState: string;
    /**
     * Whether or not public network access is allowed for resources under the Media Services account.
     */
    readonly publicNetworkAccess?: string;
    /**
     * The storage accounts for this resource.
     */
    readonly storageAccounts?: types.outputs.media.StorageAccountResponse[];
    readonly storageAuthentication?: string;
    /**
     * The system metadata relating to this resource.
     */
    readonly systemData: types.outputs.media.SystemDataResponse;
    /**
     * Resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Get the details of a Media Services account
 * Azure REST API version: 2023-01-01.
 */
export function getMediaServiceOutput(args: GetMediaServiceOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetMediaServiceResult> {
    return pulumi.output(args).apply((a: any) => getMediaService(a, opts))
}

export interface GetMediaServiceOutputArgs {
    /**
     * The Media Services account name.
     */
    accountName: pulumi.Input<string>;
    /**
     * The name of the resource group within the Azure subscription.
     */
    resourceGroupName: pulumi.Input<string>;
}
