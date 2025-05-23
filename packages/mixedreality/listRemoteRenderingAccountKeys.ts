import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * > [!NOTE]
 * > 
 * > **Mixed Reality retirement**
 * > 
 * > The Mixed Reality service is now deprecated and will be retired.
 *
 *  List Both of the 2 Keys of a Remote Rendering Account
 *
 * Uses Azure REST API version 2021-03-01-preview.
 *
 * Other available API versions: 2021-01-01, 2025-01-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native mixedreality [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function listRemoteRenderingAccountKeys(args: ListRemoteRenderingAccountKeysArgs, opts?: pulumi.InvokeOptions): Promise<ListRemoteRenderingAccountKeysResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:mixedreality:listRemoteRenderingAccountKeys", {
        "accountName": args.accountName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface ListRemoteRenderingAccountKeysArgs {
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
export interface ListRemoteRenderingAccountKeysResult {
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
 *  List Both of the 2 Keys of a Remote Rendering Account
 *
 * Uses Azure REST API version 2021-03-01-preview.
 *
 * Other available API versions: 2021-01-01, 2025-01-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native mixedreality [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function listRemoteRenderingAccountKeysOutput(args: ListRemoteRenderingAccountKeysOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<ListRemoteRenderingAccountKeysResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:mixedreality:listRemoteRenderingAccountKeys", {
        "accountName": args.accountName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface ListRemoteRenderingAccountKeysOutputArgs {
    /**
     * Name of an Mixed Reality Account.
     */
    accountName: pulumi.Input<string>;
    /**
     * Name of an Azure resource group.
     */
    resourceGroupName: pulumi.Input<string>;
}