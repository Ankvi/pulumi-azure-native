import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * This operation retrieves the resiliency information for an Express Route Gateway, including the gateway's current resiliency score and recommendations to further improve the score
 *
 * Uses Azure REST API version 2024-07-01.
 *
 * Other available API versions: 2024-10-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native network [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getVirtualNetworkGatewayResiliencyInformation(args: GetVirtualNetworkGatewayResiliencyInformationArgs, opts?: pulumi.InvokeOptions): Promise<GetVirtualNetworkGatewayResiliencyInformationResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:network:getVirtualNetworkGatewayResiliencyInformation", {
        "attemptRefresh": args.attemptRefresh,
        "resourceGroupName": args.resourceGroupName,
        "virtualNetworkGatewayName": args.virtualNetworkGatewayName,
    }, opts);
}

export interface GetVirtualNetworkGatewayResiliencyInformationArgs {
    /**
     * Attempt to recalculate the Resiliency Information for the gateway
     */
    attemptRefresh?: boolean;
    /**
     * The name of the resource group.
     */
    resourceGroupName: string;
    /**
     * The name of the virtual network gateway.
     */
    virtualNetworkGatewayName: string;
}

/**
 * Gateway Resiliency Information
 */
export interface GetVirtualNetworkGatewayResiliencyInformationResult {
    /**
     * List of Resiliency based Recommendation Components for the gateway
     */
    readonly components?: types.outputs.ResiliencyRecommendationComponentsResponse[];
    /**
     * Timestamp denoting the last time when the resiliency score was computed for the gateway
     */
    readonly lastComputedTime?: string;
    /**
     * Maximum increase expected in the score if all of the recommendations are applied for the gateway
     */
    readonly maxScoreFromRecommendations?: string;
    /**
     * Minimum increase expected in the score if the at least one of the recommendations is applied for the gateway
     */
    readonly minScoreFromRecommendations?: string;
    /**
     * Timestamp denoting the next eligible time to re-compute the resiliency score for the gateway
     */
    readonly nextEligibleComputeTime?: string;
    /**
     * Current Resiliency Score for the gateway
     */
    readonly overallScore?: string;
    /**
     * Update in the Resiliency Score for the gateway from the last computed score
     */
    readonly scoreChange?: string;
}
/**
 * This operation retrieves the resiliency information for an Express Route Gateway, including the gateway's current resiliency score and recommendations to further improve the score
 *
 * Uses Azure REST API version 2024-07-01.
 *
 * Other available API versions: 2024-10-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native network [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getVirtualNetworkGatewayResiliencyInformationOutput(args: GetVirtualNetworkGatewayResiliencyInformationOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetVirtualNetworkGatewayResiliencyInformationResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:network:getVirtualNetworkGatewayResiliencyInformation", {
        "attemptRefresh": args.attemptRefresh,
        "resourceGroupName": args.resourceGroupName,
        "virtualNetworkGatewayName": args.virtualNetworkGatewayName,
    }, opts);
}

export interface GetVirtualNetworkGatewayResiliencyInformationOutputArgs {
    /**
     * Attempt to recalculate the Resiliency Information for the gateway
     */
    attemptRefresh?: pulumi.Input<boolean>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the virtual network gateway.
     */
    virtualNetworkGatewayName: pulumi.Input<string>;
}