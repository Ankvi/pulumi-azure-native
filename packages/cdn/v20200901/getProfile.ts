import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets a CDN profile with the specified profile name under the specified subscription and resource group.
 */
export function getProfile(args: GetProfileArgs, opts?: pulumi.InvokeOptions): Promise<GetProfileResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:cdn/v20200901:getProfile", {
        "profileName": args.profileName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetProfileArgs {
    /**
     * Name of the CDN profile which is unique within the resource group.
     */
    profileName: string;
    /**
     * Name of the Resource group within the Azure subscription.
     */
    resourceGroupName: string;
}

/**
 * CDN profile is a logical grouping of endpoints that share the same settings, such as CDN provider and pricing tier.
 */
export interface GetProfileResult {
    /**
     * The Id of the frontdoor.
     */
    readonly frontdoorId: string;
    /**
     * Resource ID.
     */
    readonly id: string;
    /**
     * Resource location.
     */
    readonly location: string;
    /**
     * Resource name.
     */
    readonly name: string;
    /**
     * Provisioning status of the profile.
     */
    readonly provisioningState: string;
    /**
     * Resource status of the profile.
     */
    readonly resourceState: string;
    /**
     * The pricing tier (defines a CDN provider, feature list and rate) of the CDN profile.
     */
    readonly sku: types.outputs.SkuResponse;
    /**
     * Read only system data
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * Resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * Resource type.
     */
    readonly type: string;
}
/**
 * Gets a CDN profile with the specified profile name under the specified subscription and resource group.
 */
export function getProfileOutput(args: GetProfileOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetProfileResult> {
    return pulumi.output(args).apply((a: any) => getProfile(a, opts))
}

export interface GetProfileOutputArgs {
    /**
     * Name of the CDN profile which is unique within the resource group.
     */
    profileName: pulumi.Input<string>;
    /**
     * Name of the Resource group within the Azure subscription.
     */
    resourceGroupName: pulumi.Input<string>;
}