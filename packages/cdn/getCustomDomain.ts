import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets an existing custom domain within an endpoint.
 * Azure REST API version: 2023-05-01.
 */
export function getCustomDomain(args: GetCustomDomainArgs, opts?: pulumi.InvokeOptions): Promise<GetCustomDomainResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:cdn:getCustomDomain", {
        "customDomainName": args.customDomainName,
        "endpointName": args.endpointName,
        "profileName": args.profileName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetCustomDomainArgs {
    /**
     * Name of the custom domain within an endpoint.
     */
    customDomainName: string;
    /**
     * Name of the endpoint under the profile which is unique globally.
     */
    endpointName: string;
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
 * Friendly domain name mapping to the endpoint hostname that the customer provides for branding purposes, e.g. www.contoso.com.
 */
export interface GetCustomDomainResult {
    /**
     * Certificate parameters for securing custom HTTPS
     */
    readonly customHttpsParameters?: types.outputs.CdnManagedHttpsParametersResponse | types.outputs.UserManagedHttpsParametersResponse;
    /**
     * Provisioning status of the custom domain.
     */
    readonly customHttpsProvisioningState: string;
    /**
     * Provisioning substate shows the progress of custom HTTPS enabling/disabling process step by step.
     */
    readonly customHttpsProvisioningSubstate: string;
    /**
     * The host name of the custom domain. Must be a domain name.
     */
    readonly hostName: string;
    /**
     * Resource ID.
     */
    readonly id: string;
    /**
     * Resource name.
     */
    readonly name: string;
    /**
     * Provisioning status of Custom Https of the custom domain.
     */
    readonly provisioningState: string;
    /**
     * Resource status of the custom domain.
     */
    readonly resourceState: string;
    /**
     * Read only system data
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * Resource type.
     */
    readonly type: string;
    /**
     * Special validation or data may be required when delivering CDN to some regions due to local compliance reasons. E.g. ICP license number of a custom domain is required to deliver content in China.
     */
    readonly validationData?: string;
}
/**
 * Gets an existing custom domain within an endpoint.
 * Azure REST API version: 2023-05-01.
 */
export function getCustomDomainOutput(args: GetCustomDomainOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetCustomDomainResult> {
    return pulumi.output(args).apply((a: any) => getCustomDomain(a, opts))
}

export interface GetCustomDomainOutputArgs {
    /**
     * Name of the custom domain within an endpoint.
     */
    customDomainName: pulumi.Input<string>;
    /**
     * Name of the endpoint under the profile which is unique globally.
     */
    endpointName: pulumi.Input<string>;
    /**
     * Name of the CDN profile which is unique within the resource group.
     */
    profileName: pulumi.Input<string>;
    /**
     * Name of the Resource group within the Azure subscription.
     */
    resourceGroupName: pulumi.Input<string>;
}
