import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * This operation lists all the built-in policy set definition versions for all built-in policy set definitions.
 */
export function listPolicySetDefinitionVersionAllBuiltins(args?: ListPolicySetDefinitionVersionAllBuiltinsArgs, opts?: pulumi.InvokeOptions): Promise<ListPolicySetDefinitionVersionAllBuiltinsResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:authorization/v20230401:listPolicySetDefinitionVersionAllBuiltins", {
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
 */
export function listPolicySetDefinitionVersionAllBuiltinsOutput(opts?: pulumi.InvokeOptions): pulumi.Output<ListPolicySetDefinitionVersionAllBuiltinsResult> {
    return pulumi.output(listPolicySetDefinitionVersionAllBuiltins(opts))
}