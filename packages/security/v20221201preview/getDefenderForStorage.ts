import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the Defender for Storage settings for the specified storage account.
 */
export function getDefenderForStorage(args: GetDefenderForStorageArgs, opts?: pulumi.InvokeOptions): Promise<GetDefenderForStorageResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:security/v20221201preview:getDefenderForStorage", {
        "resourceId": args.resourceId,
        "settingName": args.settingName,
    }, opts);
}

export interface GetDefenderForStorageArgs {
    /**
     * The identifier of the resource.
     */
    resourceId: string;
    /**
     * Defender for Storage setting name.
     */
    settingName: string;
}

/**
 * The Defender for Storage resource.
 */
export interface GetDefenderForStorageResult {
    /**
     * Resource Id
     */
    readonly id: string;
    /**
     * Indicates whether Defender for Storage is enabled on this storage account.
     */
    readonly isEnabled?: boolean;
    /**
     * Properties of Malware Scanning.
     */
    readonly malwareScanning?: types.outputs.MalwareScanningPropertiesResponse;
    /**
     * Resource name
     */
    readonly name: string;
    /**
     * Indicates whether the settings defined for this storage account should override the settings defined for the subscription.
     */
    readonly overrideSubscriptionLevelSettings?: boolean;
    /**
     * Properties of Sensitive Data Discovery.
     */
    readonly sensitiveDataDiscovery?: types.outputs.SensitiveDataDiscoveryPropertiesResponse;
    /**
     * Resource type
     */
    readonly type: string;
}
/**
 * Gets the Defender for Storage settings for the specified storage account.
 */
export function getDefenderForStorageOutput(args: GetDefenderForStorageOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetDefenderForStorageResult> {
    return pulumi.output(args).apply((a: any) => getDefenderForStorage(a, opts))
}

export interface GetDefenderForStorageOutputArgs {
    /**
     * The identifier of the resource.
     */
    resourceId: pulumi.Input<string>;
    /**
     * Defender for Storage setting name.
     */
    settingName: pulumi.Input<string>;
}