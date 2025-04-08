import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get properties of a partner topic.
 *
 * Uses Azure REST API version 2025-02-15.
 *
 * Other available API versions: 2022-06-15, 2023-06-01-preview, 2023-12-15-preview, 2024-06-01-preview, 2024-12-15-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native eventgrid [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getPartnerTopic(args: GetPartnerTopicArgs, opts?: pulumi.InvokeOptions): Promise<GetPartnerTopicResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:eventgrid:getPartnerTopic", {
        "partnerTopicName": args.partnerTopicName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetPartnerTopicArgs {
    /**
     * Name of the partner topic.
     */
    partnerTopicName: string;
    /**
     * The name of the resource group within the user's subscription.
     */
    resourceGroupName: string;
}

/**
 * Event Grid Partner Topic.
 */
export interface GetPartnerTopicResult {
    /**
     * Activation state of the partner topic.
     */
    readonly activationState?: string;
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * Event Type information from the corresponding event channel.
     */
    readonly eventTypeInfo?: types.outputs.EventTypeInfoResponse;
    /**
     * Expiration time of the partner topic. If this timer expires while the partner topic is still never activated,
     * the partner topic and corresponding event channel are deleted.
     */
    readonly expirationTimeIfNotActivatedUtc?: string;
    /**
     * Fully qualified identifier of the resource.
     */
    readonly id: string;
    /**
     * Identity information for the Partner Topic resource.
     */
    readonly identity?: types.outputs.IdentityInfoResponse;
    /**
     * Location of the resource.
     */
    readonly location: string;
    /**
     * Context or helpful message that can be used during the approval process by the subscriber.
     */
    readonly messageForActivation?: string;
    /**
     * Name of the resource.
     */
    readonly name: string;
    /**
     * The immutableId of the corresponding partner registration.
     */
    readonly partnerRegistrationImmutableId?: string;
    /**
     * Friendly description about the topic. This can be set by the publisher/partner to show custom description for the customer partner topic.
     * This will be helpful to remove any ambiguity of the origin of creation of the partner topic for the customer.
     */
    readonly partnerTopicFriendlyDescription?: string;
    /**
     * Provisioning state of the partner topic.
     */
    readonly provisioningState: string;
    /**
     * Source associated with this partner topic. This represents a unique partner resource.
     */
    readonly source?: string;
    /**
     * The system metadata relating to the Event Grid resource.
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
 * Get properties of a partner topic.
 *
 * Uses Azure REST API version 2025-02-15.
 *
 * Other available API versions: 2022-06-15, 2023-06-01-preview, 2023-12-15-preview, 2024-06-01-preview, 2024-12-15-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native eventgrid [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getPartnerTopicOutput(args: GetPartnerTopicOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetPartnerTopicResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:eventgrid:getPartnerTopic", {
        "partnerTopicName": args.partnerTopicName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetPartnerTopicOutputArgs {
    /**
     * Name of the partner topic.
     */
    partnerTopicName: pulumi.Input<string>;
    /**
     * The name of the resource group within the user's subscription.
     */
    resourceGroupName: pulumi.Input<string>;
}