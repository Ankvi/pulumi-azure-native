import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Gets the Advanced Threat Protection settings for the specified resource.
 *
 * Uses Azure REST API version 2019-01-01.
 */
export function getAdvancedThreatProtection(args: GetAdvancedThreatProtectionArgs, opts?: pulumi.InvokeOptions): Promise<GetAdvancedThreatProtectionResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:security:getAdvancedThreatProtection", {
        "resourceId": args.resourceId,
        "settingName": args.settingName,
    }, opts);
}

export interface GetAdvancedThreatProtectionArgs {
    /**
     * The identifier of the resource.
     */
    resourceId: string;
    /**
     * Advanced Threat Protection setting name.
     */
    settingName: string;
}

/**
 * The Advanced Threat Protection resource.
 */
export interface GetAdvancedThreatProtectionResult {
    /**
     * Resource Id
     */
    readonly id: string;
    /**
     * Indicates whether Advanced Threat Protection is enabled.
     */
    readonly isEnabled?: boolean;
    /**
     * Resource name
     */
    readonly name: string;
    /**
     * Resource type
     */
    readonly type: string;
}
/**
 * Gets the Advanced Threat Protection settings for the specified resource.
 *
 * Uses Azure REST API version 2019-01-01.
 */
export function getAdvancedThreatProtectionOutput(args: GetAdvancedThreatProtectionOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetAdvancedThreatProtectionResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:security:getAdvancedThreatProtection", {
        "resourceId": args.resourceId,
        "settingName": args.settingName,
    }, opts);
}

export interface GetAdvancedThreatProtectionOutputArgs {
    /**
     * The identifier of the resource.
     */
    resourceId: pulumi.Input<string>;
    /**
     * Advanced Threat Protection setting name.
     */
    settingName: pulumi.Input<string>;
}