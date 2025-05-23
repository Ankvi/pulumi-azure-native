import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get the details of a Media Services account
 *
 * Uses Azure REST API version 2023-01-01.
 *
 * Other available API versions: 2015-10-01, 2018-03-30-preview, 2018-06-01-preview, 2018-07-01, 2020-05-01, 2021-05-01, 2021-06-01, 2021-11-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native media [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
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
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * The account encryption properties.
     */
    readonly encryption?: types.outputs.AccountEncryptionResponse;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The Managed Identity for the Media Services account.
     */
    readonly identity?: types.outputs.MediaServiceIdentityResponse;
    /**
     * The Key Delivery properties for Media Services account.
     */
    readonly keyDelivery?: types.outputs.KeyDeliveryResponse;
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
    readonly privateEndpointConnections: types.outputs.PrivateEndpointConnectionResponse[];
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
    readonly storageAccounts?: types.outputs.StorageAccountResponse[];
    readonly storageAuthentication?: string;
    /**
     * The system metadata relating to this resource.
     */
    readonly systemData: types.outputs.SystemDataResponse;
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
 *
 * Uses Azure REST API version 2023-01-01.
 *
 * Other available API versions: 2015-10-01, 2018-03-30-preview, 2018-06-01-preview, 2018-07-01, 2020-05-01, 2021-05-01, 2021-06-01, 2021-11-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native media [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getMediaServiceOutput(args: GetMediaServiceOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetMediaServiceResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:media:getMediaService", {
        "accountName": args.accountName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
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