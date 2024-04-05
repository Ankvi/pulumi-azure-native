import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * List SSH authorized keys and shared key of the local user.
 */
export function listLocalUserKeys(args: ListLocalUserKeysArgs, opts?: pulumi.InvokeOptions): Promise<ListLocalUserKeysResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:storage/v20230101:listLocalUserKeys", {
        "accountName": args.accountName,
        "resourceGroupName": args.resourceGroupName,
        "username": args.username,
    }, opts);
}

export interface ListLocalUserKeysArgs {
    /**
     * The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
     */
    accountName: string;
    /**
     * The name of the resource group within the user's subscription. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * The name of local user. The username must contain lowercase letters and numbers only. It must be unique only within the storage account.
     */
    username: string;
}

/**
 * The Storage Account Local User keys.
 */
export interface ListLocalUserKeysResult {
    /**
     * Auto generated by the server for SMB authentication.
     */
    readonly sharedKey: string;
    /**
     * Optional, local user ssh authorized keys for SFTP.
     */
    readonly sshAuthorizedKeys?: types.outputs.SshPublicKeyResponse[];
}
/**
 * List SSH authorized keys and shared key of the local user.
 */
export function listLocalUserKeysOutput(args: ListLocalUserKeysOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<ListLocalUserKeysResult> {
    return pulumi.output(args).apply((a: any) => listLocalUserKeys(a, opts))
}

export interface ListLocalUserKeysOutputArgs {
    /**
     * The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
     */
    accountName: pulumi.Input<string>;
    /**
     * The name of the resource group within the user's subscription. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of local user. The username must contain lowercase letters and numbers only. It must be unique only within the storage account.
     */
    username: pulumi.Input<string>;
}