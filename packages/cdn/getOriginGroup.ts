import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets an existing origin group within an endpoint.
 * Azure REST API version: 2023-05-01.
 *
 * Other available API versions: 2023-07-01-preview, 2024-02-01, 2024-05-01-preview, 2024-06-01-preview, 2024-09-01.
 */
export function getOriginGroup(args: GetOriginGroupArgs, opts?: pulumi.InvokeOptions): Promise<GetOriginGroupResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:cdn:getOriginGroup", {
        "endpointName": args.endpointName,
        "originGroupName": args.originGroupName,
        "profileName": args.profileName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetOriginGroupArgs {
    /**
     * Name of the endpoint under the profile which is unique globally.
     */
    endpointName: string;
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
 * Origin group comprising of origins is used for load balancing to origins when the content cannot be served from CDN.
 */
export interface GetOriginGroupResult {
    /**
     * Health probe settings to the origin that is used to determine the health of the origin.
     */
    readonly healthProbeSettings?: types.outputs.HealthProbeParametersResponse;
    /**
     * Resource ID.
     */
    readonly id: string;
    /**
     * Resource name.
     */
    readonly name: string;
    /**
     * The source of the content being delivered via CDN within given origin group.
     */
    readonly origins: types.outputs.ResourceReferenceResponse[];
    /**
     * Provisioning status of the origin group.
     */
    readonly provisioningState: string;
    /**
     * Resource status of the origin group.
     */
    readonly resourceState: string;
    /**
     * The JSON object that contains the properties to determine origin health using real requests/responses. This property is currently not supported.
     */
    readonly responseBasedOriginErrorDetectionSettings?: types.outputs.ResponseBasedOriginErrorDetectionParametersResponse;
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
 * Gets an existing origin group within an endpoint.
 * Azure REST API version: 2023-05-01.
 *
 * Other available API versions: 2023-07-01-preview, 2024-02-01, 2024-05-01-preview, 2024-06-01-preview, 2024-09-01.
 */
export function getOriginGroupOutput(args: GetOriginGroupOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetOriginGroupResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:cdn:getOriginGroup", {
        "endpointName": args.endpointName,
        "originGroupName": args.originGroupName,
        "profileName": args.profileName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetOriginGroupOutputArgs {
    /**
     * Name of the endpoint under the profile which is unique globally.
     */
    endpointName: pulumi.Input<string>;
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