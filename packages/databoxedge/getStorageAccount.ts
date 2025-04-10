import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Represents a Storage Account on the  Data Box Edge/Gateway device.
 *
 * Uses Azure REST API version 2022-03-01.
 *
 * Other available API versions: 2023-01-01-preview, 2023-07-01, 2023-12-01.
 */
export function getStorageAccount(args: GetStorageAccountArgs, opts?: pulumi.InvokeOptions): Promise<GetStorageAccountResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:databoxedge:getStorageAccount", {
        "deviceName": args.deviceName,
        "resourceGroupName": args.resourceGroupName,
        "storageAccountName": args.storageAccountName,
    }, opts);
}

export interface GetStorageAccountArgs {
    /**
     * The device name.
     */
    deviceName: string;
    /**
     * The resource group name.
     */
    resourceGroupName: string;
    /**
     * The storage account name.
     */
    storageAccountName: string;
}

/**
 * Represents a Storage Account on the  Data Box Edge/Gateway device.
 */
export interface GetStorageAccountResult {
    /**
     * BlobEndpoint of Storage Account
     */
    readonly blobEndpoint: string;
    /**
     * The Container Count. Present only for Storage Accounts with DataPolicy set to Cloud.
     */
    readonly containerCount: number;
    /**
     * Data policy of the storage Account.
     */
    readonly dataPolicy: string;
    /**
     * Description for the storage Account.
     */
    readonly description?: string;
    /**
     * The path ID that uniquely identifies the object.
     */
    readonly id: string;
    /**
     * The object name.
     */
    readonly name: string;
    /**
     * Storage Account Credential Id
     */
    readonly storageAccountCredentialId?: string;
    /**
     * Current status of the storage account
     */
    readonly storageAccountStatus?: string;
    /**
     * Metadata pertaining to creation and last modification of StorageAccount
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * The hierarchical type of the object.
     */
    readonly type: string;
}
/**
 * Represents a Storage Account on the  Data Box Edge/Gateway device.
 *
 * Uses Azure REST API version 2022-03-01.
 *
 * Other available API versions: 2023-01-01-preview, 2023-07-01, 2023-12-01.
 */
export function getStorageAccountOutput(args: GetStorageAccountOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetStorageAccountResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:databoxedge:getStorageAccount", {
        "deviceName": args.deviceName,
        "resourceGroupName": args.resourceGroupName,
        "storageAccountName": args.storageAccountName,
    }, opts);
}

export interface GetStorageAccountOutputArgs {
    /**
     * The device name.
     */
    deviceName: pulumi.Input<string>;
    /**
     * The resource group name.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The storage account name.
     */
    storageAccountName: pulumi.Input<string>;
}