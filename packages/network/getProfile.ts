import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets a Traffic Manager profile.
 *
 * Uses Azure REST API version 2022-04-01.
 *
 * Other available API versions: 2022-04-01-preview.
 */
export function getProfile(args: GetProfileArgs, opts?: pulumi.InvokeOptions): Promise<GetProfileResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:network:getProfile", {
        "profileName": args.profileName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetProfileArgs {
    /**
     * The name of the Traffic Manager profile.
     */
    profileName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * Class representing a Traffic Manager profile.
 */
export interface GetProfileResult {
    /**
     * The list of allowed endpoint record types.
     */
    readonly allowedEndpointRecordTypes?: string[];
    /**
     * The DNS settings of the Traffic Manager profile.
     */
    readonly dnsConfig?: types.outputs.DnsConfigResponse;
    /**
     * The list of endpoints in the Traffic Manager profile.
     */
    readonly endpoints?: types.outputs.EndpointResponse[];
    /**
     * Fully qualified resource Id for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/trafficManagerProfiles/{resourceName}
     */
    readonly id?: string;
    /**
     * The Azure Region where the resource lives
     */
    readonly location?: string;
    /**
     * Maximum number of endpoints to be returned for MultiValue routing type.
     */
    readonly maxReturn?: number;
    /**
     * The endpoint monitoring settings of the Traffic Manager profile.
     */
    readonly monitorConfig?: types.outputs.MonitorConfigResponse;
    /**
     * The name of the resource
     */
    readonly name?: string;
    /**
     * The status of the Traffic Manager profile.
     */
    readonly profileStatus?: string;
    /**
     * Resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * The traffic routing method of the Traffic Manager profile.
     */
    readonly trafficRoutingMethod?: string;
    /**
     * Indicates whether Traffic View is 'Enabled' or 'Disabled' for the Traffic Manager profile. Null, indicates 'Disabled'. Enabling this feature will increase the cost of the Traffic Manage profile.
     */
    readonly trafficViewEnrollmentStatus?: string;
    /**
     * The type of the resource. Ex- Microsoft.Network/trafficManagerProfiles.
     */
    readonly type?: string;
}
/**
 * Gets a Traffic Manager profile.
 *
 * Uses Azure REST API version 2022-04-01.
 *
 * Other available API versions: 2022-04-01-preview.
 */
export function getProfileOutput(args: GetProfileOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetProfileResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:network:getProfile", {
        "profileName": args.profileName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetProfileOutputArgs {
    /**
     * The name of the Traffic Manager profile.
     */
    profileName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}