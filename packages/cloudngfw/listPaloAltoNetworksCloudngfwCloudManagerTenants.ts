import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Cloud Manager Tenant
 *
 * Uses Azure REST API version 2024-02-07-preview.
 *
 * Other available API versions: 2025-02-06-preview.
 */
export function listPaloAltoNetworksCloudngfwCloudManagerTenants(args?: ListPaloAltoNetworksCloudngfwCloudManagerTenantsArgs, opts?: pulumi.InvokeOptions): Promise<ListPaloAltoNetworksCloudngfwCloudManagerTenantsResult> {
    args = args || {};
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:cloudngfw:listPaloAltoNetworksCloudngfwCloudManagerTenants", {
    }, opts);
}

export interface ListPaloAltoNetworksCloudngfwCloudManagerTenantsArgs {
}

/**
 * Cloud Manager Tenant
 */
export interface ListPaloAltoNetworksCloudngfwCloudManagerTenantsResult {
    /**
     * List of Cloud Manager Tenants
     */
    readonly value: string[];
}
/**
 * Cloud Manager Tenant
 *
 * Uses Azure REST API version 2024-02-07-preview.
 *
 * Other available API versions: 2025-02-06-preview.
 */
export function listPaloAltoNetworksCloudngfwCloudManagerTenantsOutput(opts?: pulumi.InvokeOutputOptions): pulumi.Output<ListPaloAltoNetworksCloudngfwCloudManagerTenantsResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:cloudngfw:listPaloAltoNetworksCloudngfwCloudManagerTenants", {
    }, opts);
}