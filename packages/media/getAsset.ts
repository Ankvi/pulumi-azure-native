import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get the details of an Asset in the Media Services account
 *
 * Uses Azure REST API version 2023-01-01.
 *
 * Other available API versions: 2018-03-30-preview, 2018-06-01-preview, 2018-07-01, 2020-05-01, 2021-06-01, 2021-11-01, 2022-08-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native media [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getAsset(args: GetAssetArgs, opts?: pulumi.InvokeOptions): Promise<GetAssetResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:media:getAsset", {
        "accountName": args.accountName,
        "assetName": args.assetName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetAssetArgs {
    /**
     * The Media Services account name.
     */
    accountName: string;
    /**
     * The Asset name.
     */
    assetName: string;
    /**
     * The name of the resource group within the Azure subscription.
     */
    resourceGroupName: string;
}

/**
 * An Asset.
 */
export interface GetAssetResult {
    /**
     * The alternate ID of the Asset.
     */
    readonly alternateId?: string;
    /**
     * The Asset ID.
     */
    readonly assetId: string;
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * The name of the asset blob container.
     */
    readonly container?: string;
    /**
     * The creation date of the Asset.
     */
    readonly created: string;
    /**
     * The Asset description.
     */
    readonly description?: string;
    /**
     * The Asset container encryption scope in the storage account.
     */
    readonly encryptionScope?: string;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The last modified date of the Asset.
     */
    readonly lastModified: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The name of the storage account.
     */
    readonly storageAccountName?: string;
    /**
     * The Asset encryption format. One of None or MediaStorageEncryption.
     */
    readonly storageEncryptionFormat: string;
    /**
     * The system metadata relating to this resource.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Get the details of an Asset in the Media Services account
 *
 * Uses Azure REST API version 2023-01-01.
 *
 * Other available API versions: 2018-03-30-preview, 2018-06-01-preview, 2018-07-01, 2020-05-01, 2021-06-01, 2021-11-01, 2022-08-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native media [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getAssetOutput(args: GetAssetOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetAssetResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:media:getAsset", {
        "accountName": args.accountName,
        "assetName": args.assetName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetAssetOutputArgs {
    /**
     * The Media Services account name.
     */
    accountName: pulumi.Input<string>;
    /**
     * The Asset name.
     */
    assetName: pulumi.Input<string>;
    /**
     * The name of the resource group within the Azure subscription.
     */
    resourceGroupName: pulumi.Input<string>;
}