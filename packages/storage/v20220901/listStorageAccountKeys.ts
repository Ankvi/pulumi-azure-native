import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * Lists the access keys or Kerberos keys (if active directory enabled) for the specified storage account.
 */
export function listStorageAccountKeys(args: ListStorageAccountKeysArgs, opts?: pulumi.InvokeOptions): Promise<ListStorageAccountKeysResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:storage/v20220901:listStorageAccountKeys", {
        "accountName": args.accountName,
        "expand": args.expand,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface ListStorageAccountKeysArgs {
    /**
     * The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
     */
    accountName: string;
    /**
     * Specifies type of the key to be listed. Possible value is kerb.
     */
    expand?: string;
    /**
     * The name of the resource group within the user's subscription. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * The response from the ListKeys operation.
 */
export interface ListStorageAccountKeysResult {
    /**
     * Gets the list of storage account keys and their properties for the specified storage account.
     */
    readonly keys: types.outputs.storage.v20220901.StorageAccountKeyResponse[];
}
/**
 * Lists the access keys or Kerberos keys (if active directory enabled) for the specified storage account.
 */
export function listStorageAccountKeysOutput(args: ListStorageAccountKeysOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<ListStorageAccountKeysResult> {
    return pulumi.output(args).apply((a: any) => listStorageAccountKeys(a, opts))
}

export interface ListStorageAccountKeysOutputArgs {
    /**
     * The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
     */
    accountName: pulumi.Input<string>;
    /**
     * Specifies type of the key to be listed. Possible value is kerb.
     */
    expand?: pulumi.Input<string>;
    /**
     * The name of the resource group within the user's subscription. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}
