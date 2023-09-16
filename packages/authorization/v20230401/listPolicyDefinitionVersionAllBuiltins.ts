import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * This operation lists all the built-in policy definition versions for all built-in policy definitions.
 */
export function listPolicyDefinitionVersionAllBuiltins(args?: ListPolicyDefinitionVersionAllBuiltinsArgs, opts?: pulumi.InvokeOptions): Promise<ListPolicyDefinitionVersionAllBuiltinsResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:authorization/v20230401:listPolicyDefinitionVersionAllBuiltins", {
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
    readonly value?: types.outputs.authorization.v20230401.PolicyDefinitionVersionResponse[];
}
/**
 * This operation lists all the built-in policy definition versions for all built-in policy definitions.
 */
export function listPolicyDefinitionVersionAllBuiltinsOutput(opts?: pulumi.InvokeOptions): pulumi.Output<ListPolicyDefinitionVersionAllBuiltinsResult> {
    return pulumi.output(listPolicyDefinitionVersionAllBuiltins(opts))
}
