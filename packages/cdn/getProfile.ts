import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets an Azure Front Door Standard or Azure Front Door Premium or CDN profile with the specified profile name under the specified subscription and resource group.
 * Azure REST API version: 2023-05-01.
 *
 * Other available API versions: 2016-04-02, 2020-09-01, 2023-07-01-preview, 2024-02-01, 2024-05-01-preview, 2024-06-01-preview.
 */
export function getProfile(args: GetProfileArgs, opts?: pulumi.InvokeOptions): Promise<GetProfileResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:cdn:getProfile", {
        "profileName": args.profileName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetProfileArgs {
    /**
     * Name of the Azure Front Door Standard or Azure Front Door Premium or CDN profile which is unique within the resource group.
     */
    profileName: string;
    /**
     * Name of the Resource group within the Azure subscription.
     */
    resourceGroupName: string;
}

/**
 * A profile is a logical grouping of endpoints that share the same settings.
 */
export interface GetProfileResult {
    /**
     * Key-Value pair representing additional properties for profiles.
     */
    readonly extendedProperties: {[key: string]: string};
    /**
     * The Id of the frontdoor.
     */
    readonly frontDoorId: string;
    /**
     * Resource ID.
     */
    readonly id: string;
    /**
     * Managed service identity (system assigned and/or user assigned identities).
     */
    readonly identity?: types.outputs.ManagedServiceIdentityResponse;
    /**
     * Kind of the profile. Used by portal to differentiate traditional CDN profile and new AFD profile.
     */
    readonly kind: string;
    /**
     * Resource location.
     */
    readonly location: string;
    /**
     * Resource name.
     */
    readonly name: string;
    /**
     * Send and receive timeout on forwarding request to the origin. When timeout is reached, the request fails and returns.
     */
    readonly originResponseTimeoutSeconds?: number;
    /**
     * Provisioning status of the profile.
     */
    readonly provisioningState: string;
    /**
     * Resource status of the profile.
     */
    readonly resourceState: string;
    /**
     * The pricing tier (defines Azure Front Door Standard or Premium or a CDN provider, feature list and rate) of the profile.
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
 * Gets an Azure Front Door Standard or Azure Front Door Premium or CDN profile with the specified profile name under the specified subscription and resource group.
 * Azure REST API version: 2023-05-01.
 *
 * Other available API versions: 2016-04-02, 2020-09-01, 2023-07-01-preview, 2024-02-01, 2024-05-01-preview, 2024-06-01-preview.
 */
export function getProfileOutput(args: GetProfileOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetProfileResult> {
    return pulumi.output(args).apply((a: any) => getProfile(a, opts))
}

export interface GetProfileOutputArgs {
    /**
     * Name of the Azure Front Door Standard or Azure Front Door Premium or CDN profile which is unique within the resource group.
     */
    profileName: pulumi.Input<string>;
    /**
     * Name of the Resource group within the Azure subscription.
     */
    resourceGroupName: pulumi.Input<string>;
}