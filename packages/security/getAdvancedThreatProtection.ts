import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the Advanced Threat Protection settings for the specified resource.
 *
 * Uses Azure REST API version 2019-01-01.
 *
 * Other available API versions: 2017-08-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native security [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
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
     * The fully qualified Azure Resource manager identifier of the resource.
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
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
     */
    readonly id: string;
    /**
     * Indicates whether Advanced Threat Protection is enabled.
     */
    readonly isEnabled?: boolean;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Gets the Advanced Threat Protection settings for the specified resource.
 *
 * Uses Azure REST API version 2019-01-01.
 *
 * Other available API versions: 2017-08-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native security [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
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
     * The fully qualified Azure Resource manager identifier of the resource.
     */
    resourceId: pulumi.Input<string>;
    /**
     * Advanced Threat Protection setting name.
     */
    settingName: pulumi.Input<string>;
}