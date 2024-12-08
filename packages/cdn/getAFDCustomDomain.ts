import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets an existing AzureFrontDoor domain with the specified domain name under the specified subscription, resource group and profile.
 * Azure REST API version: 2023-05-01.
 *
 * Other available API versions: 2023-07-01-preview, 2024-02-01, 2024-05-01-preview, 2024-06-01-preview, 2024-09-01.
 */
export function getAFDCustomDomain(args: GetAFDCustomDomainArgs, opts?: pulumi.InvokeOptions): Promise<GetAFDCustomDomainResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:cdn:getAFDCustomDomain", {
        "customDomainName": args.customDomainName,
        "profileName": args.profileName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetAFDCustomDomainArgs {
    /**
     * Name of the domain under the profile which is unique globally.
     */
    customDomainName: string;
    /**
     * Name of the Azure Front Door Standard or Azure Front Door Premium profile which is unique within the resource group.
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
export interface GetAFDCustomDomainResult {
    /**
     * Resource reference to the Azure DNS zone
     */
    readonly azureDnsZone?: types.outputs.ResourceReferenceResponse;
    readonly deploymentStatus: string;
    /**
     * Provisioning substate shows the progress of custom HTTPS enabling/disabling process step by step. DCV stands for DomainControlValidation.
     */
    readonly domainValidationState: string;
    /**
     * Key-Value pair representing migration properties for domains.
     */
    readonly extendedProperties?: {[key: string]: string};
    /**
     * The host name of the domain. Must be a domain name.
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
     * Resource reference to the Azure resource where custom domain ownership was prevalidated
     */
    readonly preValidatedCustomDomainResourceId?: types.outputs.ResourceReferenceResponse;
    /**
     * The name of the profile which holds the domain.
     */
    readonly profileName: string;
    /**
     * Provisioning status
     */
    readonly provisioningState: string;
    /**
     * Read only system data
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * The configuration specifying how to enable HTTPS for the domain - using AzureFrontDoor managed certificate or user's own certificate. If not specified, enabling ssl uses AzureFrontDoor managed certificate by default.
     */
    readonly tlsSettings?: types.outputs.AFDDomainHttpsParametersResponse;
    /**
     * Resource type.
     */
    readonly type: string;
    /**
     * Values the customer needs to validate domain ownership
     */
    readonly validationProperties: types.outputs.DomainValidationPropertiesResponse;
}
/**
 * Gets an existing AzureFrontDoor domain with the specified domain name under the specified subscription, resource group and profile.
 * Azure REST API version: 2023-05-01.
 *
 * Other available API versions: 2023-07-01-preview, 2024-02-01, 2024-05-01-preview, 2024-06-01-preview, 2024-09-01.
 */
export function getAFDCustomDomainOutput(args: GetAFDCustomDomainOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetAFDCustomDomainResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:cdn:getAFDCustomDomain", {
        "customDomainName": args.customDomainName,
        "profileName": args.profileName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetAFDCustomDomainOutputArgs {
    /**
     * Name of the domain under the profile which is unique globally.
     */
    customDomainName: pulumi.Input<string>;
    /**
     * Name of the Azure Front Door Standard or Azure Front Door Premium profile which is unique within the resource group.
     */
    profileName: pulumi.Input<string>;
    /**
     * Name of the Resource group within the Azure subscription.
     */
    resourceGroupName: pulumi.Input<string>;
}