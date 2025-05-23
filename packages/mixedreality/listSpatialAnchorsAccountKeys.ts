import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * > [!NOTE]
 * > 
 * > **Mixed Reality retirement**
 * > 
 * > The Mixed Reality service is now deprecated and will be retired.
 *
 *  List Both of the 2 Keys of a Spatial Anchors Account
 *
 * Uses Azure REST API version 2021-03-01-preview.
 *
 * Other available API versions: 2021-01-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native mixedreality [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function listSpatialAnchorsAccountKeys(args: ListSpatialAnchorsAccountKeysArgs, opts?: pulumi.InvokeOptions): Promise<ListSpatialAnchorsAccountKeysResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:mixedreality:listSpatialAnchorsAccountKeys", {
        "accountName": args.accountName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface ListSpatialAnchorsAccountKeysArgs {
    /**
     * Name of an Mixed Reality Account.
     */
    accountName: string;
    /**
     * Name of an Azure resource group.
     */
    resourceGroupName: string;
}

/**
 * Developer Keys of account
 */
export interface ListSpatialAnchorsAccountKeysResult {
    /**
     * value of primary key.
     */
    readonly primaryKey: string;
    /**
     * value of secondary key.
     */
    readonly secondaryKey: string;
}
/**
 * > [!NOTE]
 * > 
 * > **Mixed Reality retirement**
 * > 
 * > The Mixed Reality service is now deprecated and will be retired.
 *
 *  List Both of the 2 Keys of a Spatial Anchors Account
 *
 * Uses Azure REST API version 2021-03-01-preview.
 *
 * Other available API versions: 2021-01-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native mixedreality [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function listSpatialAnchorsAccountKeysOutput(args: ListSpatialAnchorsAccountKeysOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<ListSpatialAnchorsAccountKeysResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:mixedreality:listSpatialAnchorsAccountKeys", {
        "accountName": args.accountName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface ListSpatialAnchorsAccountKeysOutputArgs {
    /**
     * Name of an Mixed Reality Account.
     */
    accountName: pulumi.Input<string>;
    /**
     * Name of an Azure resource group.
     */
    resourceGroupName: pulumi.Input<string>;
}