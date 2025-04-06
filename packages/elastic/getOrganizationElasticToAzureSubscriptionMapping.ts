import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get Elastic Organization To Azure Subscription Mapping details for the logged-in user.
 *
 * Uses Azure REST API version 2024-03-01.
 *
 * Other available API versions: 2023-06-15-preview, 2023-07-01-preview, 2023-10-01-preview, 2023-11-01-preview, 2024-01-01-preview, 2024-05-01-preview, 2024-06-15-preview, 2024-10-01-preview, 2025-01-15-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native elastic [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
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
    readonly properties: types.outputs.ElasticOrganizationToAzureSubscriptionMappingResponsePropertiesResponse;
}
/**
 * Get Elastic Organization To Azure Subscription Mapping details for the logged-in user.
 *
 * Uses Azure REST API version 2024-03-01.
 *
 * Other available API versions: 2023-06-15-preview, 2023-07-01-preview, 2023-10-01-preview, 2023-11-01-preview, 2024-01-01-preview, 2024-05-01-preview, 2024-06-15-preview, 2024-10-01-preview, 2025-01-15-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native elastic [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getOrganizationElasticToAzureSubscriptionMappingOutput(opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetOrganizationElasticToAzureSubscriptionMappingResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:elastic:getOrganizationElasticToAzureSubscriptionMapping", {
    }, opts);
}