import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Retrieves the current value for a specific setting.
 */
export function getSetting(args: GetSettingArgs, opts?: pulumi.InvokeOptions): Promise<GetSettingResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:costmanagement/v20191101:getSetting", {
        "settingName": args.settingName,
    }, opts);
}

export interface GetSettingArgs {
    /**
     * Name of the setting. Allowed values: myscope
     */
    settingName: string;
}

/**
 * State of the myscope setting.
 */
export interface GetSettingResult {
    /**
     * Array of scopes with additional details used by Cost Management in the Azure portal.
     */
    readonly cache?: types.outputs.SettingsPropertiesResponseCache[];
    /**
     * Resource Id.
     */
    readonly id: string;
    /**
     * Resource kind.
     */
    readonly kind: string;
    /**
     * Resource name.
     */
    readonly name: string;
    /**
     * Sets the default scope the current user will see when they sign into Azure Cost Management in the Azure portal.
     */
    readonly scope: string;
    /**
     * Indicates what scope Cost Management in the Azure portal should default to. Allowed values: LastUsed.
     */
    readonly startOn?: string;
    /**
     * Resource type.
     */
    readonly type: string;
}
/**
 * Retrieves the current value for a specific setting.
 */
export function getSettingOutput(args: GetSettingOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetSettingResult> {
    return pulumi.output(args).apply((a: any) => getSetting(a, opts))
}

export interface GetSettingOutputArgs {
    /**
     * Name of the setting. Allowed values: myscope
     */
    settingName: pulumi.Input<string>;
}