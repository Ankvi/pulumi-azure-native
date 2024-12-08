import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get current user settings for current signed in user. This operation returns settings for the user's cloud shell preferences including preferred location, storage profile, shell type, font and size settings.
 * Azure REST API version: 2018-10-01.
 */
export function getUserSettingsWithLocation(args: GetUserSettingsWithLocationArgs, opts?: pulumi.InvokeOptions): Promise<GetUserSettingsWithLocationResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:portal:getUserSettingsWithLocation", {
        "location": args.location,
        "userSettingsName": args.userSettingsName,
    }, opts);
}

export interface GetUserSettingsWithLocationArgs {
    /**
     * The provider location
     */
    location: string;
    /**
     * The name of the user settings
     */
    userSettingsName: string;
}

/**
 * Response to get user settings
 */
export interface GetUserSettingsWithLocationResult {
    /**
     * The cloud shell user settings properties.
     */
    readonly properties: types.outputs.UserPropertiesResponse;
}
/**
 * Get current user settings for current signed in user. This operation returns settings for the user's cloud shell preferences including preferred location, storage profile, shell type, font and size settings.
 * Azure REST API version: 2018-10-01.
 */
export function getUserSettingsWithLocationOutput(args: GetUserSettingsWithLocationOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetUserSettingsWithLocationResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:portal:getUserSettingsWithLocation", {
        "location": args.location,
        "userSettingsName": args.userSettingsName,
    }, opts);
}

export interface GetUserSettingsWithLocationOutputArgs {
    /**
     * The provider location
     */
    location: pulumi.Input<string>;
    /**
     * The name of the user settings
     */
    userSettingsName: pulumi.Input<string>;
}