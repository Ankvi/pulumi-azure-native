import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the properties of the specified storage account credential name.
 *
 * Uses Azure REST API version 2017-06-01.
 */
export function getStorageAccountCredential(args: GetStorageAccountCredentialArgs, opts?: pulumi.InvokeOptions): Promise<GetStorageAccountCredentialResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:storsimple:getStorageAccountCredential", {
        "managerName": args.managerName,
        "resourceGroupName": args.resourceGroupName,
        "storageAccountCredentialName": args.storageAccountCredentialName,
    }, opts);
}

export interface GetStorageAccountCredentialArgs {
    /**
     * The manager name
     */
    managerName: string;
    /**
     * The resource group name
     */
    resourceGroupName: string;
    /**
     * The name of storage account credential to be fetched.
     */
    storageAccountCredentialName: string;
}

/**
 * The storage account credential.
 */
export interface GetStorageAccountCredentialResult {
    /**
     * The details of the storage account password.
     */
    readonly accessKey?: types.outputs.AsymmetricEncryptedSecretResponse;
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * The storage endpoint
     */
    readonly endPoint: string;
    /**
     * The path ID that uniquely identifies the object.
     */
    readonly id: string;
    /**
     * The Kind of the object. Currently only Series8000 is supported
     */
    readonly kind?: string;
    /**
     * The name of the object.
     */
    readonly name: string;
    /**
     * Signifies whether SSL needs to be enabled or not.
     */
    readonly sslStatus: string;
    /**
     * The hierarchical type of the object.
     */
    readonly type: string;
    /**
     * The count of volumes using this storage account credential.
     */
    readonly volumesCount: number;
}
/**
 * Gets the properties of the specified storage account credential name.
 *
 * Uses Azure REST API version 2017-06-01.
 */
export function getStorageAccountCredentialOutput(args: GetStorageAccountCredentialOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetStorageAccountCredentialResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:storsimple:getStorageAccountCredential", {
        "managerName": args.managerName,
        "resourceGroupName": args.resourceGroupName,
        "storageAccountCredentialName": args.storageAccountCredentialName,
    }, opts);
}

export interface GetStorageAccountCredentialOutputArgs {
    /**
     * The manager name
     */
    managerName: pulumi.Input<string>;
    /**
     * The resource group name
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of storage account credential to be fetched.
     */
    storageAccountCredentialName: pulumi.Input<string>;
}