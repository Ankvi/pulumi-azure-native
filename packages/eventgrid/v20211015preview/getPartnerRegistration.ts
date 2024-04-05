import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets a partner registration with the specified parameters.
 */
export function getPartnerRegistration(args: GetPartnerRegistrationArgs, opts?: pulumi.InvokeOptions): Promise<GetPartnerRegistrationResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:eventgrid/v20211015preview:getPartnerRegistration", {
        "partnerRegistrationName": args.partnerRegistrationName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetPartnerRegistrationArgs {
    /**
     * Name of the partner registration.
     */
    partnerRegistrationName: string;
    /**
     * The name of the resource group within the user's subscription.
     */
    resourceGroupName: string;
}

/**
 * Information about a partner registration.
 */
export interface GetPartnerRegistrationResult {
    /**
     * List of Azure subscription Ids that are authorized to create a partner namespace
     * associated with this partner registration. This is an optional property. Creating
     * partner namespaces is always permitted under the same Azure subscription as the one used
     * for creating the partner registration.
     */
    readonly authorizedAzureSubscriptionIds?: string[];
    /**
     * The extension of the customer service URI of the publisher.
     */
    readonly customerServiceUri?: string;
    /**
     * Fully qualified identifier of the resource.
     */
    readonly id: string;
    /**
     * Location of the resource.
     */
    readonly location: string;
    /**
     * URI of the logo.
     */
    readonly logoUri?: string;
    /**
     * Long description for the custom scenarios and integration to be displayed in the portal if needed.
     * Length of this description should not exceed 2048 characters.
     */
    readonly longDescription?: string;
    /**
     * Name of the resource.
     */
    readonly name: string;
    /**
     * The extension of the customer service number of the publisher. Only digits are allowed and number of digits should not exceed 10.
     */
    readonly partnerCustomerServiceExtension?: string;
    /**
     * The customer service number of the publisher. The expected phone format should start with a '+' sign 
     * followed by the country code. The remaining digits are then followed. Only digits and spaces are allowed and its
     * length cannot exceed 16 digits including country code. Examples of valid phone numbers are: +1 515 123 4567 and
     * +966 7 5115 2471. Examples of invalid phone numbers are: +1 (515) 123-4567, 1 515 123 4567 and +966 121 5115 24 7 551 1234 43
     */
    readonly partnerCustomerServiceNumber?: string;
    /**
     * Official name of the partner name. For example: "Contoso".
     */
    readonly partnerName?: string;
    /**
     * The immutableId of the corresponding partner registration.
     */
    readonly partnerRegistrationImmutableId?: string;
    /**
     * Short description of the partner resource type. The length of this description should not exceed 256 characters.
     */
    readonly partnerResourceTypeDescription?: string;
    /**
     * Display name of the partner resource type.
     */
    readonly partnerResourceTypeDisplayName?: string;
    /**
     * Name of the partner resource type.
     */
    readonly partnerResourceTypeName?: string;
    /**
     * Provisioning state of the partner registration.
     */
    readonly provisioningState: string;
    /**
     * URI of the partner website that can be used by Azure customers to setup Event Grid
     * integration on an event source.
     */
    readonly setupUri?: string;
    /**
     * The system metadata relating to Partner Registration resource.
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
    /**
     * Visibility state of the partner registration.
     */
    readonly visibilityState?: string;
}
/**
 * Gets a partner registration with the specified parameters.
 */
export function getPartnerRegistrationOutput(args: GetPartnerRegistrationOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetPartnerRegistrationResult> {
    return pulumi.output(args).apply((a: any) => getPartnerRegistration(a, opts))
}

export interface GetPartnerRegistrationOutputArgs {
    /**
     * Name of the partner registration.
     */
    partnerRegistrationName: pulumi.Input<string>;
    /**
     * The name of the resource group within the user's subscription.
     */
    resourceGroupName: pulumi.Input<string>;
}