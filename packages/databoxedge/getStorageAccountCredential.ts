import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the properties of the specified storage account credential.
 *
 * Uses Azure REST API version 2022-03-01.
 *
 * Other available API versions: 2023-01-01-preview, 2023-07-01, 2023-12-01.
 */
export function getStorageAccountCredential(args: GetStorageAccountCredentialArgs, opts?: pulumi.InvokeOptions): Promise<GetStorageAccountCredentialResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:databoxedge:getStorageAccountCredential", {
        "deviceName": args.deviceName,
        "name": args.name,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetStorageAccountCredentialArgs {
    /**
     * The device name.
     */
    deviceName: string;
    /**
     * The storage account credential name.
     */
    name: string;
    /**
     * The resource group name.
     */
    resourceGroupName: string;
}

/**
 * The storage account credential.
 */
export interface GetStorageAccountCredentialResult {
    /**
     * Encrypted storage key.
     */
    readonly accountKey?: types.outputs.AsymmetricEncryptedSecretResponse;
    /**
     * Type of storage accessed on the storage account.
     */
    readonly accountType: string;
    /**
     * Alias for the storage account.
     */
    readonly alias: string;
    /**
     * Blob end point for private clouds.
     */
    readonly blobDomainName?: string;
    /**
     * Connection string for the storage account. Use this string if username and account key are not specified.
     */
    readonly connectionString?: string;
    /**
     * The path ID that uniquely identifies the object.
     */
    readonly id: string;
    /**
     * The object name.
     */
    readonly name: string;
    /**
     * Signifies whether SSL needs to be enabled or not.
     */
    readonly sslStatus: string;
    /**
     * Id of the storage account.
     */
    readonly storageAccountId?: string;
    /**
     * Metadata pertaining to creation and last modification of StorageAccountCredential
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * The hierarchical type of the object.
     */
    readonly type: string;
    /**
     * Username for the storage account.
     */
    readonly userName?: string;
}
/**
 * Gets the properties of the specified storage account credential.
 *
 * Uses Azure REST API version 2022-03-01.
 *
 * Other available API versions: 2023-01-01-preview, 2023-07-01, 2023-12-01.
 */
export function getStorageAccountCredentialOutput(args: GetStorageAccountCredentialOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetStorageAccountCredentialResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:databoxedge:getStorageAccountCredential", {
        "deviceName": args.deviceName,
        "name": args.name,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetStorageAccountCredentialOutputArgs {
    /**
     * The device name.
     */
    deviceName: pulumi.Input<string>;
    /**
     * The storage account credential name.
     */
    name: pulumi.Input<string>;
    /**
     * The resource group name.
     */
    resourceGroupName: pulumi.Input<string>;
}