import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get personal preferences for a user
 */
export function getGlobalUserPersonalPreferences(args: GetGlobalUserPersonalPreferencesArgs, opts?: pulumi.InvokeOptions): Promise<GetGlobalUserPersonalPreferencesResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:labservices/v20181015:getGlobalUserPersonalPreferences", {
        "addRemove": args.addRemove,
        "labAccountResourceId": args.labAccountResourceId,
        "labResourceId": args.labResourceId,
        "userName": args.userName,
    }, opts);
}

export interface GetGlobalUserPersonalPreferencesArgs {
    /**
     * Enum indicating if user is adding or removing a favorite lab
     */
    addRemove?: string | types.enums.AddRemove;
    /**
     * Resource Id of the lab account
     */
    labAccountResourceId?: string;
    /**
     * Resource Id of the lab to add/remove from the favorites list
     */
    labResourceId?: string;
    /**
     * The name of the user.
     */
    userName: string;
}

/**
 * Represents the PersonalPreferences for the user
 */
export interface GetGlobalUserPersonalPreferencesResult {
    /**
     * Array of favorite lab resource ids
     */
    readonly favoriteLabResourceIds?: string[];
    /**
     * Id to be used by the cache orchestrator
     */
    readonly id?: string;
}
/**
 * Get personal preferences for a user
 */
export function getGlobalUserPersonalPreferencesOutput(args: GetGlobalUserPersonalPreferencesOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetGlobalUserPersonalPreferencesResult> {
    return pulumi.output(args).apply((a: any) => getGlobalUserPersonalPreferences(a, opts))
}

export interface GetGlobalUserPersonalPreferencesOutputArgs {
    /**
     * Enum indicating if user is adding or removing a favorite lab
     */
    addRemove?: pulumi.Input<string | types.enums.AddRemove>;
    /**
     * Resource Id of the lab account
     */
    labAccountResourceId?: pulumi.Input<string>;
    /**
     * Resource Id of the lab to add/remove from the favorites list
     */
    labResourceId?: pulumi.Input<string>;
    /**
     * The name of the user.
     */
    userName: pulumi.Input<string>;
}