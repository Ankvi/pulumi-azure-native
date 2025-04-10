import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Gets a server encryption protector.
 *
 * Uses Azure REST API version 2021-11-01.
 *
 * Other available API versions: 2022-11-01-preview, 2023-02-01-preview, 2023-05-01-preview, 2023-08-01, 2023-08-01-preview, 2024-05-01-preview.
 */
export function getEncryptionProtector(args: GetEncryptionProtectorArgs, opts?: pulumi.InvokeOptions): Promise<GetEncryptionProtectorResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:sql:getEncryptionProtector", {
        "encryptionProtectorName": args.encryptionProtectorName,
        "resourceGroupName": args.resourceGroupName,
        "serverName": args.serverName,
    }, opts);
}

export interface GetEncryptionProtectorArgs {
    /**
     * The name of the encryption protector to be retrieved.
     */
    encryptionProtectorName: string;
    /**
     * The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
     */
    resourceGroupName: string;
    /**
     * The name of the server.
     */
    serverName: string;
}

/**
 * The server encryption protector.
 */
export interface GetEncryptionProtectorResult {
    /**
     * Key auto rotation opt-in flag. Either true or false.
     */
    readonly autoRotationEnabled?: boolean;
    /**
     * Resource ID.
     */
    readonly id: string;
    /**
     * Kind of encryption protector. This is metadata used for the Azure portal experience.
     */
    readonly kind: string;
    /**
     * Resource location.
     */
    readonly location: string;
    /**
     * Resource name.
     */
    readonly name: string;
    /**
     * The name of the server key.
     */
    readonly serverKeyName?: string;
    /**
     * The encryption protector type like 'ServiceManaged', 'AzureKeyVault'.
     */
    readonly serverKeyType: string;
    /**
     * Subregion of the encryption protector.
     */
    readonly subregion: string;
    /**
     * Thumbprint of the server key.
     */
    readonly thumbprint: string;
    /**
     * Resource type.
     */
    readonly type: string;
    /**
     * The URI of the server key.
     */
    readonly uri: string;
}
/**
 * Gets a server encryption protector.
 *
 * Uses Azure REST API version 2021-11-01.
 *
 * Other available API versions: 2022-11-01-preview, 2023-02-01-preview, 2023-05-01-preview, 2023-08-01, 2023-08-01-preview, 2024-05-01-preview.
 */
export function getEncryptionProtectorOutput(args: GetEncryptionProtectorOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetEncryptionProtectorResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:sql:getEncryptionProtector", {
        "encryptionProtectorName": args.encryptionProtectorName,
        "resourceGroupName": args.resourceGroupName,
        "serverName": args.serverName,
    }, opts);
}

export interface GetEncryptionProtectorOutputArgs {
    /**
     * The name of the encryption protector to be retrieved.
     */
    encryptionProtectorName: pulumi.Input<string>;
    /**
     * The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the server.
     */
    serverName: pulumi.Input<string>;
}