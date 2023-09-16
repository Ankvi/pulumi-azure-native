import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Gets the Advanced Threat Protection settings for the specified resource.
 */
export function getAdvancedThreatProtection(args: GetAdvancedThreatProtectionArgs, opts?: pulumi.InvokeOptions): Promise<GetAdvancedThreatProtectionResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:security/v20190101:getAdvancedThreatProtection", {
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
 */
export function getAdvancedThreatProtectionOutput(args: GetAdvancedThreatProtectionOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetAdvancedThreatProtectionResult> {
    return pulumi.output(args).apply((a: any) => getAdvancedThreatProtection(a, opts))
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
