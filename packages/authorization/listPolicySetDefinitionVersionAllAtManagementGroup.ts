import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * This operation lists all the policy set definition versions for all policy set definitions at the management group scope.
 *
 * Uses Azure REST API version 2025-01-01.
 *
 * Other available API versions: 2023-04-01, 2024-05-01, 2025-03-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native authorization [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function listPolicySetDefinitionVersionAllAtManagementGroup(args: ListPolicySetDefinitionVersionAllAtManagementGroupArgs, opts?: pulumi.InvokeOptions): Promise<ListPolicySetDefinitionVersionAllAtManagementGroupResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:authorization:listPolicySetDefinitionVersionAllAtManagementGroup", {
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
    readonly value?: types.outputs.PolicySetDefinitionVersionResponse[];
}
/**
 * This operation lists all the policy set definition versions for all policy set definitions at the management group scope.
 *
 * Uses Azure REST API version 2025-01-01.
 *
 * Other available API versions: 2023-04-01, 2024-05-01, 2025-03-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native authorization [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function listPolicySetDefinitionVersionAllAtManagementGroupOutput(args: ListPolicySetDefinitionVersionAllAtManagementGroupOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<ListPolicySetDefinitionVersionAllAtManagementGroupResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:authorization:listPolicySetDefinitionVersionAllAtManagementGroup", {
        "managementGroupName": args.managementGroupName,
    }, opts);
}

export interface ListPolicySetDefinitionVersionAllAtManagementGroupOutputArgs {
    /**
     * The name of the management group. The name is case insensitive.
     */
    managementGroupName: pulumi.Input<string>;
}