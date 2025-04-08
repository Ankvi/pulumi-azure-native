import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets list of items that violate tenant's configuration.
 *
 * Uses Azure REST API version 2020-09-01-preview.
 *
 * Other available API versions: 2022-12-01-preview, 2025-04-01-preview.
 */
export function listListTenantConfigurationViolation(args?: ListListTenantConfigurationViolationArgs, opts?: pulumi.InvokeOptions): Promise<ListListTenantConfigurationViolationResult> {
    args = args || {};
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:portal:listListTenantConfigurationViolation", {
    }, opts);
}

export interface ListListTenantConfigurationViolationArgs {
}

/**
 * List of list of items that violate tenant's configuration.
 */
export interface ListListTenantConfigurationViolationResult {
    /**
     * The link to the next page of items
     */
    readonly nextLink?: string;
    /**
     * The Violation items on this page
     */
    readonly value: types.outputs.ViolationResponse[];
}
/**
 * Gets list of items that violate tenant's configuration.
 *
 * Uses Azure REST API version 2020-09-01-preview.
 *
 * Other available API versions: 2022-12-01-preview, 2025-04-01-preview.
 */
export function listListTenantConfigurationViolationOutput(opts?: pulumi.InvokeOutputOptions): pulumi.Output<ListListTenantConfigurationViolationResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:portal:listListTenantConfigurationViolation", {
    }, opts);
}