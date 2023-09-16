import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * List Both of the 2 Keys of a Remote Rendering Account
 */
export function listRemoteRenderingAccountKeys(args: ListRemoteRenderingAccountKeysArgs, opts?: pulumi.InvokeOptions): Promise<ListRemoteRenderingAccountKeysResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:mixedreality/v20210101:listRemoteRenderingAccountKeys", {
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
 * List Both of the 2 Keys of a Remote Rendering Account
 */
export function listRemoteRenderingAccountKeysOutput(args: ListRemoteRenderingAccountKeysOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<ListRemoteRenderingAccountKeysResult> {
    return pulumi.output(args).apply((a: any) => listRemoteRenderingAccountKeys(a, opts))
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
