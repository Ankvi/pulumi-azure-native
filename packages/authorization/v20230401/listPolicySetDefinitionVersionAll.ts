import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * This operation lists all the policy set definition versions for all policy set definitions within a subscription.
 */
export function listPolicySetDefinitionVersionAll(args?: ListPolicySetDefinitionVersionAllArgs, opts?: pulumi.InvokeOptions): Promise<ListPolicySetDefinitionVersionAllResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:authorization/v20230401:listPolicySetDefinitionVersionAll", {
    }, opts);
}

export interface ListPolicySetDefinitionVersionAllArgs {
}

/**
 * List of policy set definition versions.
 */
export interface ListPolicySetDefinitionVersionAllResult {
    /**
     * The URL to use for getting the next set of results.
     */
    readonly nextLink?: string;
    /**
     * An array of policy set definition versions.
     */
    readonly value?: types.outputs.authorization.v20230401.PolicySetDefinitionVersionResponse[];
}
/**
 * This operation lists all the policy set definition versions for all policy set definitions within a subscription.
 */
export function listPolicySetDefinitionVersionAllOutput(opts?: pulumi.InvokeOptions): pulumi.Output<ListPolicySetDefinitionVersionAllResult> {
    return pulumi.output(listPolicySetDefinitionVersionAll(opts))
}
