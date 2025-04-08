import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get current user settings for current signed in user. This operation returns settings for the user's cloud shell preferences including preferred location, storage profile, shell type, font and size settings.
 *
 * Uses Azure REST API version 2018-10-01.
 */
export function getUserSettings(args: GetUserSettingsArgs, opts?: pulumi.InvokeOptions): Promise<GetUserSettingsResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:portal:getUserSettings", {
        "userSettingsName": args.userSettingsName,
    }, opts);
}

export interface GetUserSettingsArgs {
    /**
     * The name of the user settings
     */
    userSettingsName: string;
}

/**
 * Response to get user settings
 */
export interface GetUserSettingsResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * The cloud shell user settings properties.
     */
    readonly properties: types.outputs.UserPropertiesResponse;
}
/**
 * Get current user settings for current signed in user. This operation returns settings for the user's cloud shell preferences including preferred location, storage profile, shell type, font and size settings.
 *
 * Uses Azure REST API version 2018-10-01.
 */
export function getUserSettingsOutput(args: GetUserSettingsOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetUserSettingsResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:portal:getUserSettings", {
        "userSettingsName": args.userSettingsName,
    }, opts);
}

export interface GetUserSettingsOutputArgs {
    /**
     * The name of the user settings
     */
    userSettingsName: pulumi.Input<string>;
}