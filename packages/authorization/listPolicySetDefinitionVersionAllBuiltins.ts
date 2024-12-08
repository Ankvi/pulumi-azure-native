import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * This operation lists all the built-in policy set definition versions for all built-in policy set definitions.
 * Azure REST API version: 2023-04-01.
 *
 * Other available API versions: 2024-05-01, 2025-01-01.
 */
export function listPolicySetDefinitionVersionAllBuiltins(args?: ListPolicySetDefinitionVersionAllBuiltinsArgs, opts?: pulumi.InvokeOptions): Promise<ListPolicySetDefinitionVersionAllBuiltinsResult> {
    args = args || {};
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:authorization:listPolicySetDefinitionVersionAllBuiltins", {
    }, opts);
}

export interface ListPolicySetDefinitionVersionAllBuiltinsArgs {
}

/**
 * List of policy set definition versions.
 */
export interface ListPolicySetDefinitionVersionAllBuiltinsResult {
    /**
     * The URL to use for getting the next set of results.
     */
    readonly nextLink?: string;
    /**
     * An array of policy set definition versions.
     */
    readonly value?: types.outputs.PolicySetDefinitionVersionResponse[];
}
/**
 * This operation lists all the built-in policy set definition versions for all built-in policy set definitions.
 * Azure REST API version: 2023-04-01.
 *
 * Other available API versions: 2024-05-01, 2025-01-01.
 */
export function listPolicySetDefinitionVersionAllBuiltinsOutput(opts?: pulumi.InvokeOutputOptions): pulumi.Output<ListPolicySetDefinitionVersionAllBuiltinsResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:authorization:listPolicySetDefinitionVersionAllBuiltins", {
    }, opts);
}