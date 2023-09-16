import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get Elastic Organization To Azure Subscription Mapping details for the logged-in user.
 * Azure REST API version: 2023-06-15-preview.
 */
export function getOrganizationElasticToAzureSubscriptionMapping(args?: GetOrganizationElasticToAzureSubscriptionMappingArgs, opts?: pulumi.InvokeOptions): Promise<GetOrganizationElasticToAzureSubscriptionMappingResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:elastic:getOrganizationElasticToAzureSubscriptionMapping", {
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
    readonly properties: types.outputs.elastic.ElasticOrganizationToAzureSubscriptionMappingResponsePropertiesResponse;
}
/**
 * Get Elastic Organization To Azure Subscription Mapping details for the logged-in user.
 * Azure REST API version: 2023-06-15-preview.
 */
export function getOrganizationElasticToAzureSubscriptionMappingOutput(opts?: pulumi.InvokeOptions): pulumi.Output<GetOrganizationElasticToAzureSubscriptionMappingResult> {
    return pulumi.output(getOrganizationElasticToAzureSubscriptionMapping(opts))
}
