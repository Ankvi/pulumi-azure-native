import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Returns the symmetric encrypted public encryption key of the manager.
 *
 * Uses Azure REST API version 2017-06-01.
 */
export function listManagerPublicEncryptionKey(args: ListManagerPublicEncryptionKeyArgs, opts?: pulumi.InvokeOptions): Promise<ListManagerPublicEncryptionKeyResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:storsimple:listManagerPublicEncryptionKey", {
        "managerName": args.managerName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface ListManagerPublicEncryptionKeyArgs {
    /**
     * The manager name
     */
    managerName: string;
    /**
     * The resource group name
     */
    resourceGroupName: string;
}

/**
 * Represents the secrets encrypted using Symmetric Encryption Key.
 */
export interface ListManagerPublicEncryptionKeyResult {
    /**
     * The algorithm used to encrypt the "Value".
     */
    readonly encryptionAlgorithm: string;
    /**
     * The value of the secret itself. If the secret is in plaintext or null then EncryptionAlgorithm will be none.
     */
    readonly value: string;
    /**
     * The thumbprint of the cert that was used to encrypt "Value".
     */
    readonly valueCertificateThumbprint?: string;
}
/**
 * Returns the symmetric encrypted public encryption key of the manager.
 *
 * Uses Azure REST API version 2017-06-01.
 */
export function listManagerPublicEncryptionKeyOutput(args: ListManagerPublicEncryptionKeyOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<ListManagerPublicEncryptionKeyResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:storsimple:listManagerPublicEncryptionKey", {
        "managerName": args.managerName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface ListManagerPublicEncryptionKeyOutputArgs {
    /**
     * The manager name
     */
    managerName: pulumi.Input<string>;
    /**
     * The resource group name
     */
    resourceGroupName: pulumi.Input<string>;
}