import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets additional information for the specified Azure Stack Edge/Data Box Gateway device.
 */
export function getDeviceExtendedInformation(args: GetDeviceExtendedInformationArgs, opts?: pulumi.InvokeOptions): Promise<GetDeviceExtendedInformationResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:databoxedge/v20210201preview:getDeviceExtendedInformation", {
        "deviceName": args.deviceName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetDeviceExtendedInformationArgs {
    /**
     * The device name.
     */
    deviceName: string;
    /**
     * The resource group name.
     */
    resourceGroupName: string;
}

/**
 * The extended Info of the Data Box Edge/Gateway device.
 */
export interface GetDeviceExtendedInformationResult {
    /**
     * The name of Channel Integrity Key stored in the Client Key Vault
     */
    readonly channelIntegrityKeyName?: string;
    /**
     * The version of Channel Integrity Key stored in the Client Key Vault
     */
    readonly channelIntegrityKeyVersion?: string;
    /**
     * The Key Vault ARM Id for client secrets
     */
    readonly clientSecretStoreId?: string;
    /**
     * The url to access the Client Key Vault
     */
    readonly clientSecretStoreUrl?: string;
    /**
     * Device secrets, will be returned only with ODataFilter $expand=deviceSecrets
     */
    readonly deviceSecrets: {[key: string]: types.outputs.SecretResponse};
    /**
     * The public part of the encryption certificate. Client uses this to encrypt any secret.
     */
    readonly encryptionKey?: string;
    /**
     * The digital signature of encrypted certificate.
     */
    readonly encryptionKeyThumbprint?: string;
    /**
     * The path ID that uniquely identifies the object.
     */
    readonly id: string;
    /**
     * Key vault sync status
     */
    readonly keyVaultSyncStatus?: string;
    /**
     * The object name.
     */
    readonly name: string;
    /**
     * The Resource ID of the Resource.
     */
    readonly resourceKey: string;
    /**
     * The hierarchical type of the object.
     */
    readonly type: string;
}
/**
 * Gets additional information for the specified Azure Stack Edge/Data Box Gateway device.
 */
export function getDeviceExtendedInformationOutput(args: GetDeviceExtendedInformationOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetDeviceExtendedInformationResult> {
    return pulumi.output(args).apply((a: any) => getDeviceExtendedInformation(a, opts))
}

export interface GetDeviceExtendedInformationOutputArgs {
    /**
     * The device name.
     */
    deviceName: pulumi.Input<string>;
    /**
     * The resource group name.
     */
    resourceGroupName: pulumi.Input<string>;
}
