import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * This operation lists all the built-in policy definition versions for all built-in policy definitions.
 *
 * Uses Azure REST API version 2025-01-01.
 *
 * Other available API versions: 2023-04-01, 2024-05-01, 2025-03-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native authorization [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function listPolicyDefinitionVersionAllBuiltins(args?: ListPolicyDefinitionVersionAllBuiltinsArgs, opts?: pulumi.InvokeOptions): Promise<ListPolicyDefinitionVersionAllBuiltinsResult> {
    args = args || {};
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:authorization:listPolicyDefinitionVersionAllBuiltins", {
    }, opts);
}

export interface ListPolicyDefinitionVersionAllBuiltinsArgs {
}

/**
 * List of policy definition versions.
 */
export interface ListPolicyDefinitionVersionAllBuiltinsResult {
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
 * This operation lists all the built-in policy definition versions for all built-in policy definitions.
 *
 * Uses Azure REST API version 2025-01-01.
 *
 * Other available API versions: 2023-04-01, 2024-05-01, 2025-03-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native authorization [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function listPolicyDefinitionVersionAllBuiltinsOutput(opts?: pulumi.InvokeOutputOptions): pulumi.Output<ListPolicyDefinitionVersionAllBuiltinsResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:authorization:listPolicyDefinitionVersionAllBuiltins", {
    }, opts);
}