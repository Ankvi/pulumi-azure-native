import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * This operation lists all the policy set definition versions for all policy set definitions at the management group scope.
 */
export function listPolicySetDefinitionVersionAllAtManagementGroup(args: ListPolicySetDefinitionVersionAllAtManagementGroupArgs, opts?: pulumi.InvokeOptions): Promise<ListPolicySetDefinitionVersionAllAtManagementGroupResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:authorization/v20230401:listPolicySetDefinitionVersionAllAtManagementGroup", {
        "managementGroupName": args.managementGroupName,
    }, opts);
}

export interface ListPolicySetDefinitionVersionAllAtManagementGroupArgs {
    /**
     * The name of the management group. The name is case insensitive.
     */
    managementGroupName: string;
}

/**
 * List of policy set definition versions.
 */
export interface ListPolicySetDefinitionVersionAllAtManagementGroupResult {
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
 * This operation lists all the policy set definition versions for all policy set definitions at the management group scope.
 */
export function listPolicySetDefinitionVersionAllAtManagementGroupOutput(args: ListPolicySetDefinitionVersionAllAtManagementGroupOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<ListPolicySetDefinitionVersionAllAtManagementGroupResult> {
    return pulumi.output(args).apply((a: any) => listPolicySetDefinitionVersionAllAtManagementGroup(a, opts))
}

export interface ListPolicySetDefinitionVersionAllAtManagementGroupOutputArgs {
    /**
     * The name of the management group. The name is case insensitive.
     */
    managementGroupName: pulumi.Input<string>;
}
