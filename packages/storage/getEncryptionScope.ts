import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Returns the properties for the specified encryption scope.
 * Azure REST API version: 2022-09-01.
 */
export function getEncryptionScope(args: GetEncryptionScopeArgs, opts?: pulumi.InvokeOptions): Promise<GetEncryptionScopeResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:storage:getEncryptionScope", {
        "accountName": args.accountName,
        "encryptionScopeName": args.encryptionScopeName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetEncryptionScopeArgs {
    /**
     * The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
     */
    accountName: string;
    /**
     * The name of the encryption scope within the specified storage account. Encryption scope names must be between 3 and 63 characters in length and use numbers, lower-case letters and dash (-) only. Every dash (-) character must be immediately preceded and followed by a letter or number.
     */
    encryptionScopeName: string;
    /**
     * The name of the resource group within the user's subscription. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * The Encryption Scope resource.
 */
export interface GetEncryptionScopeResult {
    /**
     * Gets the creation date and time of the encryption scope in UTC.
     */
    readonly creationTime: string;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The key vault properties for the encryption scope. This is a required field if encryption scope 'source' attribute is set to 'Microsoft.KeyVault'.
     */
    readonly keyVaultProperties?: types.outputs.storage.EncryptionScopeKeyVaultPropertiesResponse;
    /**
     * Gets the last modification date and time of the encryption scope in UTC.
     */
    readonly lastModifiedTime: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * A boolean indicating whether or not the service applies a secondary layer of encryption with platform managed keys for data at rest.
     */
    readonly requireInfrastructureEncryption?: boolean;
    /**
     * The provider for the encryption scope. Possible values (case-insensitive):  Microsoft.Storage, Microsoft.KeyVault.
     */
    readonly source?: string;
    /**
     * The state of the encryption scope. Possible values (case-insensitive):  Enabled, Disabled.
     */
    readonly state?: string;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Returns the properties for the specified encryption scope.
 * Azure REST API version: 2022-09-01.
 */
export function getEncryptionScopeOutput(args: GetEncryptionScopeOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetEncryptionScopeResult> {
    return pulumi.output(args).apply((a: any) => getEncryptionScope(a, opts))
}

export interface GetEncryptionScopeOutputArgs {
    /**
     * The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
     */
    accountName: pulumi.Input<string>;
    /**
     * The name of the encryption scope within the specified storage account. Encryption scope names must be between 3 and 63 characters in length and use numbers, lower-case letters and dash (-) only. Every dash (-) character must be immediately preceded and followed by a letter or number.
     */
    encryptionScopeName: pulumi.Input<string>;
    /**
     * The name of the resource group within the user's subscription. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}
