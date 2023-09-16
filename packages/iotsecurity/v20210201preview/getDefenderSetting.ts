import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * Get IoT Defender Settings
 */
export function getDefenderSetting(args?: GetDefenderSettingArgs, opts?: pulumi.InvokeOptions): Promise<GetDefenderSettingResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:iotsecurity/v20210201preview:getDefenderSetting", {
    }, opts);
}

export interface GetDefenderSettingArgs {
}

/**
 * IoT Defender settings
 */
export interface GetDefenderSettingResult {
    /**
     * Size of the device quota. Value is required to be in multiples of 100.
     */
    readonly deviceQuota: number;
    /**
     * End time of the evaluation period, if such exist
     */
    readonly evaluationEndTime: string;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * MDE integration configuration
     */
    readonly mdeIntegration: types.outputs.iotsecurity.v20210201preview.DefenderSettingsPropertiesResponseMdeIntegration;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The kind of onboarding for the subscription
     */
    readonly onboardingKind: string;
    /**
     * Sentinel Workspace Resource Ids
     */
    readonly sentinelWorkspaceResourceIds: string[];
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Get IoT Defender Settings
 */
export function getDefenderSettingOutput(opts?: pulumi.InvokeOptions): pulumi.Output<GetDefenderSettingResult> {
    return pulumi.output(getDefenderSetting(opts))
}
