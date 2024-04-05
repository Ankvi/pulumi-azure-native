import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets a partner registration with the specified parameters.
 */
export function getPartnerRegistration(args: GetPartnerRegistrationArgs, opts?: pulumi.InvokeOptions): Promise<GetPartnerRegistrationResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:eventgrid/v20220615:getPartnerRegistration", {
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
     * Fully qualified identifier of the resource.
     */
    readonly id: string;
    /**
     * Location of the resource.
     */
    readonly location: string;
    /**
     * Name of the resource.
     */
    readonly name: string;
    /**
     * The immutableId of the corresponding partner registration.
     * Note: This property is marked for deprecation and is not supported in any future GA API version
     */
    readonly partnerRegistrationImmutableId?: string;
    /**
     * Provisioning state of the partner registration.
     */
    readonly provisioningState: string;
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