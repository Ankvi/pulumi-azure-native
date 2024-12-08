import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get properties of a partner destination.
 * Azure REST API version: 2023-06-01-preview.
 *
 * Other available API versions: 2021-10-15-preview, 2023-12-15-preview, 2024-06-01-preview, 2024-12-15-preview.
 */
export function getPartnerDestination(args: GetPartnerDestinationArgs, opts?: pulumi.InvokeOptions): Promise<GetPartnerDestinationResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:eventgrid:getPartnerDestination", {
        "partnerDestinationName": args.partnerDestinationName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetPartnerDestinationArgs {
    /**
     * Name of the partner destination.
     */
    partnerDestinationName: string;
    /**
     * The name of the resource group within the user's subscription.
     */
    resourceGroupName: string;
}

/**
 * Event Grid Partner Destination.
 */
export interface GetPartnerDestinationResult {
    /**
     * Activation state of the partner destination.
     */
    readonly activationState?: string;
    /**
     * Endpoint Base URL of the partner destination
     */
    readonly endpointBaseUrl?: string;
    /**
     * Endpoint context associated with this partner destination.
     */
    readonly endpointServiceContext?: string;
    /**
     * Expiration time of the partner destination. If this timer expires and the partner destination was never activated,
     * the partner destination and corresponding channel are deleted.
     */
    readonly expirationTimeIfNotActivatedUtc?: string;
    /**
     * Fully qualified identifier of the resource.
     */
    readonly id: string;
    /**
     * Location of the resource.
     */
    readonly location: string;
    /**
     * Context or helpful message that can be used during the approval process.
     */
    readonly messageForActivation?: string;
    /**
     * Name of the resource.
     */
    readonly name: string;
    /**
     * The immutable Id of the corresponding partner registration.
     */
    readonly partnerRegistrationImmutableId?: string;
    /**
     * Provisioning state of the partner destination.
     */
    readonly provisioningState: string;
    /**
     * The system metadata relating to Partner Destination resource.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * Tags of the resource.
     */
    readonly tags?: {[key: string]: string};
    /**
     * Type of the resource.
     */
    readonly type: string;
}
/**
 * Get properties of a partner destination.
 * Azure REST API version: 2023-06-01-preview.
 *
 * Other available API versions: 2021-10-15-preview, 2023-12-15-preview, 2024-06-01-preview, 2024-12-15-preview.
 */
export function getPartnerDestinationOutput(args: GetPartnerDestinationOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetPartnerDestinationResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:eventgrid:getPartnerDestination", {
        "partnerDestinationName": args.partnerDestinationName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetPartnerDestinationOutputArgs {
    /**
     * Name of the partner destination.
     */
    partnerDestinationName: pulumi.Input<string>;
    /**
     * The name of the resource group within the user's subscription.
     */
    resourceGroupName: pulumi.Input<string>;
}