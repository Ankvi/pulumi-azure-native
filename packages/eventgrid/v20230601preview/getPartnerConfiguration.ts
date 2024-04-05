import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get properties of a partner configuration.
 */
export function getPartnerConfiguration(args: GetPartnerConfigurationArgs, opts?: pulumi.InvokeOptions): Promise<GetPartnerConfigurationResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:eventgrid/v20230601preview:getPartnerConfiguration", {
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetPartnerConfigurationArgs {
    /**
     * The name of the resource group within the user's subscription.
     */
    resourceGroupName: string;
}

/**
 * Partner configuration information
 */
export interface GetPartnerConfigurationResult {
    /**
     * Fully qualified identifier of the resource.
     */
    readonly id: string;
    /**
     * Location of the resource.
     */
    readonly location?: string;
    /**
     * Name of the resource.
     */
    readonly name: string;
    /**
     * The details of authorized partners.
     */
    readonly partnerAuthorization?: types.outputs.PartnerAuthorizationResponse;
    /**
     * Provisioning state of the partner configuration.
     */
    readonly provisioningState?: string;
    /**
     * The system metadata relating to partner configuration resource.
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
 * Get properties of a partner configuration.
 */
export function getPartnerConfigurationOutput(args: GetPartnerConfigurationOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetPartnerConfigurationResult> {
    return pulumi.output(args).apply((a: any) => getPartnerConfiguration(a, opts))
}

export interface GetPartnerConfigurationOutputArgs {
    /**
     * The name of the resource group within the user's subscription.
     */
    resourceGroupName: pulumi.Input<string>;
}