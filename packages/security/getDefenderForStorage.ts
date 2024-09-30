import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the Defender for Storage settings for the specified storage account.
 * Azure REST API version: 2022-12-01-preview.
 */
export function getDefenderForStorage(args: GetDefenderForStorageArgs, opts?: pulumi.InvokeOptions): Promise<GetDefenderForStorageResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:security:getDefenderForStorage", {
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
     * Resource name
     */
    readonly name: string;
    /**
     * Defender for Storage resource properties.
     */
    readonly properties: types.outputs.DefenderForStorageSettingPropertiesResponse;
    /**
     * Resource type
     */
    readonly type: string;
}
/**
 * Gets the Defender for Storage settings for the specified storage account.
 * Azure REST API version: 2022-12-01-preview.
 */
export function getDefenderForStorageOutput(args: GetDefenderForStorageOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetDefenderForStorageResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:security:getDefenderForStorage", {
        "resourceId": args.resourceId,
        "settingName": args.settingName,
    }, opts);
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