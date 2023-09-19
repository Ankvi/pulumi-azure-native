import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets list of items that violate tenant's configuration.
 * Azure REST API version: 2020-09-01-preview.
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
     * The URL to use for getting the next set of results.
     */
    readonly nextLink?: string;
    /**
     * The array of violations.
     */
    readonly value?: types.outputs.ViolationResponse[];
}
/**
 * Gets list of items that violate tenant's configuration.
 * Azure REST API version: 2020-09-01-preview.
 */
export function listListTenantConfigurationViolationOutput(opts?: pulumi.InvokeOptions): pulumi.Output<ListListTenantConfigurationViolationResult> {
    return pulumi.output(listListTenantConfigurationViolation(opts))
}
