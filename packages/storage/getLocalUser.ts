import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get the local user of the storage account by username.
 * Azure REST API version: 2022-09-01.
 */
export function getLocalUser(args: GetLocalUserArgs, opts?: pulumi.InvokeOptions): Promise<GetLocalUserResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:storage:getLocalUser", {
        "accountName": args.accountName,
        "resourceGroupName": args.resourceGroupName,
        "username": args.username,
    }, opts);
}

export interface GetLocalUserArgs {
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
 * The local user associated with the storage accounts.
 */
export interface GetLocalUserResult {
    /**
     * Indicates whether shared key exists. Set it to false to remove existing shared key.
     */
    readonly hasSharedKey?: boolean;
    /**
     * Indicates whether ssh key exists. Set it to false to remove existing SSH key.
     */
    readonly hasSshKey?: boolean;
    /**
     * Indicates whether ssh password exists. Set it to false to remove existing SSH password.
     */
    readonly hasSshPassword?: boolean;
    /**
     * Optional, local user home directory.
     */
    readonly homeDirectory?: string;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The permission scopes of the local user.
     */
    readonly permissionScopes?: types.outputs.PermissionScopeResponse[];
    /**
     * A unique Security Identifier that is generated by the server.
     */
    readonly sid: string;
    /**
     * Optional, local user ssh authorized keys for SFTP.
     */
    readonly sshAuthorizedKeys?: types.outputs.SshPublicKeyResponse[];
    /**
     * Metadata pertaining to creation and last modification of the resource.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Get the local user of the storage account by username.
 * Azure REST API version: 2022-09-01.
 */
export function getLocalUserOutput(args: GetLocalUserOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetLocalUserResult> {
    return pulumi.output(args).apply((a: any) => getLocalUser(a, opts))
}

export interface GetLocalUserOutputArgs {
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
