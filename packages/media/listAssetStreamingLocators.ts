import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Lists Streaming Locators which are associated with this asset.
 *
 * Uses Azure REST API version 2023-01-01.
 *
 * Other available API versions: 2018-07-01, 2020-05-01, 2021-06-01, 2021-11-01, 2022-08-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native media [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function listAssetStreamingLocators(args: ListAssetStreamingLocatorsArgs, opts?: pulumi.InvokeOptions): Promise<ListAssetStreamingLocatorsResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:media:listAssetStreamingLocators", {
        "accountName": args.accountName,
        "assetName": args.assetName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface ListAssetStreamingLocatorsArgs {
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
 * The Streaming Locators associated with this Asset.
 */
export interface ListAssetStreamingLocatorsResult {
    /**
     * The list of Streaming Locators.
     */
    readonly streamingLocators: types.outputs.AssetStreamingLocatorResponse[];
}
/**
 * Lists Streaming Locators which are associated with this asset.
 *
 * Uses Azure REST API version 2023-01-01.
 *
 * Other available API versions: 2018-07-01, 2020-05-01, 2021-06-01, 2021-11-01, 2022-08-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native media [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function listAssetStreamingLocatorsOutput(args: ListAssetStreamingLocatorsOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<ListAssetStreamingLocatorsResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:media:listAssetStreamingLocators", {
        "accountName": args.accountName,
        "assetName": args.assetName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface ListAssetStreamingLocatorsOutputArgs {
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