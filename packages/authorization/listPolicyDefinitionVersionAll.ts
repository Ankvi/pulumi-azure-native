import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * This operation lists all the policy definition versions for all policy definitions within a subscription.
 * Azure REST API version: 2023-04-01.
 *
 * Other available API versions: 2024-05-01, 2025-01-01.
 */
export function listPolicyDefinitionVersionAll(args?: ListPolicyDefinitionVersionAllArgs, opts?: pulumi.InvokeOptions): Promise<ListPolicyDefinitionVersionAllResult> {
    args = args || {};
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:authorization:listPolicyDefinitionVersionAll", {
    }, opts);
}

export interface ListPolicyDefinitionVersionAllArgs {
}

/**
 * List of policy definition versions.
 */
export interface ListPolicyDefinitionVersionAllResult {
    /**
     * The URL to use for getting the next set of results.
     */
    readonly nextLink?: string;
    /**
     * An array of policy definitions versions.
     */
    readonly value?: types.outputs.PolicyDefinitionVersionResponse[];
}
/**
 * This operation lists all the policy definition versions for all policy definitions within a subscription.
 * Azure REST API version: 2023-04-01.
 *
 * Other available API versions: 2024-05-01, 2025-01-01.
 */
export function listPolicyDefinitionVersionAllOutput(opts?: pulumi.InvokeOptions): pulumi.Output<ListPolicyDefinitionVersionAllResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:authorization:listPolicyDefinitionVersionAll", {
    }, opts);
}