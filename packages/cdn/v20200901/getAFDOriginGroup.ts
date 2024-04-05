import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets an existing origin group within a profile.
 */
export function getAFDOriginGroup(args: GetAFDOriginGroupArgs, opts?: pulumi.InvokeOptions): Promise<GetAFDOriginGroupResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:cdn/v20200901:getAFDOriginGroup", {
        "originGroupName": args.originGroupName,
        "profileName": args.profileName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetAFDOriginGroupArgs {
    /**
     * Name of the origin group which is unique within the endpoint.
     */
    originGroupName: string;
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
 * AFDOrigin group comprising of origins is used for load balancing to origins when the content cannot be served from CDN.
 */
export interface GetAFDOriginGroupResult {
    readonly deploymentStatus: string;
    /**
     * Health probe settings to the origin that is used to determine the health of the origin.
     */
    readonly healthProbeSettings?: types.outputs.HealthProbeParametersResponse;
    /**
     * Resource ID.
     */
    readonly id: string;
    /**
     * Load balancing settings for a backend pool
     */
    readonly loadBalancingSettings?: types.outputs.LoadBalancingSettingsParametersResponse;
    /**
     * Resource name.
     */
    readonly name: string;
    /**
     * Provisioning status
     */
    readonly provisioningState: string;
    /**
     * The JSON object that contains the properties to determine origin health using real requests/responses. This property is currently not supported.
     */
    readonly responseBasedAfdOriginErrorDetectionSettings?: types.outputs.ResponseBasedOriginErrorDetectionParametersResponse;
    /**
     * Whether to allow session affinity on this host. Valid options are 'Enabled' or 'Disabled'
     */
    readonly sessionAffinityState?: string;
    /**
     * Read only system data
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * Time in minutes to shift the traffic to the endpoint gradually when an unhealthy endpoint comes healthy or a new endpoint is added. Default is 10 mins. This property is currently not supported.
     */
    readonly trafficRestorationTimeToHealedOrNewEndpointsInMinutes?: number;
    /**
     * Resource type.
     */
    readonly type: string;
}
/**
 * Gets an existing origin group within a profile.
 */
export function getAFDOriginGroupOutput(args: GetAFDOriginGroupOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetAFDOriginGroupResult> {
    return pulumi.output(args).apply((a: any) => getAFDOriginGroup(a, opts))
}

export interface GetAFDOriginGroupOutputArgs {
    /**
     * Name of the origin group which is unique within the endpoint.
     */
    originGroupName: pulumi.Input<string>;
    /**
     * Name of the CDN profile which is unique within the resource group.
     */
    profileName: pulumi.Input<string>;
    /**
     * Name of the Resource group within the Azure subscription.
     */
    resourceGroupName: pulumi.Input<string>;
}