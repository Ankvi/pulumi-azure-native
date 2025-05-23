import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * This operation lists all the policy definition versions for all policy definitions at the management group scope.
 *
 * Uses Azure REST API version 2025-01-01.
 *
 * Other available API versions: 2023-04-01, 2024-05-01, 2025-03-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native authorization [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function listPolicyDefinitionVersionAllAtManagementGroup(args: ListPolicyDefinitionVersionAllAtManagementGroupArgs, opts?: pulumi.InvokeOptions): Promise<ListPolicyDefinitionVersionAllAtManagementGroupResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:authorization:listPolicyDefinitionVersionAllAtManagementGroup", {
        "managementGroupName": args.managementGroupName,
    }, opts);
}

export interface ListPolicyDefinitionVersionAllAtManagementGroupArgs {
    /**
     * The name of the management group. The name is case insensitive.
     */
    managementGroupName: string;
}

/**
 * List of policy definition versions.
 */
export interface ListPolicyDefinitionVersionAllAtManagementGroupResult {
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
 * This operation lists all the policy definition versions for all policy definitions at the management group scope.
 *
 * Uses Azure REST API version 2025-01-01.
 *
 * Other available API versions: 2023-04-01, 2024-05-01, 2025-03-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native authorization [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function listPolicyDefinitionVersionAllAtManagementGroupOutput(args: ListPolicyDefinitionVersionAllAtManagementGroupOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<ListPolicyDefinitionVersionAllAtManagementGroupResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:authorization:listPolicyDefinitionVersionAllAtManagementGroup", {
        "managementGroupName": args.managementGroupName,
    }, opts);
}

export interface ListPolicyDefinitionVersionAllAtManagementGroupOutputArgs {
    /**
     * The name of the management group. The name is case insensitive.
     */
    managementGroupName: pulumi.Input<string>;
}