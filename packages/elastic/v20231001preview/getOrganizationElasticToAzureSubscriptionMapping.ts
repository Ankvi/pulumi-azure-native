import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get Elastic Organization To Azure Subscription Mapping details for the logged-in user.
 */
export function getOrganizationElasticToAzureSubscriptionMapping(args?: GetOrganizationElasticToAzureSubscriptionMappingArgs, opts?: pulumi.InvokeOptions): Promise<GetOrganizationElasticToAzureSubscriptionMappingResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:elastic/v20231001preview:getOrganizationElasticToAzureSubscriptionMapping", {
    }, opts);
}

export interface GetOrganizationElasticToAzureSubscriptionMappingArgs {
}

/**
 * The Azure Subscription ID to which the Organization of the logged in user belongs and gets billed into.
 */
export interface GetOrganizationElasticToAzureSubscriptionMappingResult {
    /**
     * The properties of Azure Subscription ID to which the Organization of the logged in user belongs and gets billed into.
     */
    readonly properties: types.outputs.ElasticOrganizationToAzureSubscriptionMappingResponsePropertiesResponse;
}
/**
 * Get Elastic Organization To Azure Subscription Mapping details for the logged-in user.
 */
export function getOrganizationElasticToAzureSubscriptionMappingOutput(opts?: pulumi.InvokeOptions): pulumi.Output<GetOrganizationElasticToAzureSubscriptionMappingResult> {
    return pulumi.output(getOrganizationElasticToAzureSubscriptionMapping(opts))
}
