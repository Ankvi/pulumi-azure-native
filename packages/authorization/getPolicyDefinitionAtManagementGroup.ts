import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * This operation retrieves the policy definition in the given management group with the given name.
 *
 * Uses Azure REST API version 2025-01-01.
 *
 * Other available API versions: 2020-09-01, 2021-06-01, 2023-04-01, 2024-05-01, 2025-03-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native authorization [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getPolicyDefinitionAtManagementGroup(args: GetPolicyDefinitionAtManagementGroupArgs, opts?: pulumi.InvokeOptions): Promise<GetPolicyDefinitionAtManagementGroupResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:authorization:getPolicyDefinitionAtManagementGroup", {
        "managementGroupId": args.managementGroupId,
        "policyDefinitionName": args.policyDefinitionName,
    }, opts);
}

export interface GetPolicyDefinitionAtManagementGroupArgs {
    /**
     * The ID of the management group.
     */
    managementGroupId: string;
    /**
     * The name of the policy definition to get.
     */
    policyDefinitionName: string;
}

/**
 * The policy definition.
 */
export interface GetPolicyDefinitionAtManagementGroupResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * The policy definition description.
     */
    readonly description?: string;
    /**
     * The display name of the policy definition.
     */
    readonly displayName?: string;
    /**
     * The ID of the policy definition.
     */
    readonly id: string;
    /**
     * The policy definition metadata.  Metadata is an open ended object and is typically a collection of key value pairs.
     */
    readonly metadata?: any;
    /**
     * The policy definition mode. Some examples are All, Indexed, Microsoft.KeyVault.Data.
     */
    readonly mode?: string;
    /**
     * The name of the policy definition.
     */
    readonly name: string;
    /**
     * The parameter definitions for parameters used in the policy rule. The keys are the parameter names.
     */
    readonly parameters?: {[key: string]: types.outputs.ParameterDefinitionsValueResponse};
    /**
     * The policy rule.
     */
    readonly policyRule?: any;
    /**
     * The type of policy definition. Possible values are NotSpecified, BuiltIn, Custom, and Static.
     */
    readonly policyType?: string;
    /**
     * The system metadata relating to this resource.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * The type of the resource (Microsoft.Authorization/policyDefinitions).
     */
    readonly type: string;
    /**
     * The policy definition version in #.#.# format.
     */
    readonly version?: string;
    /**
     * A list of available versions for this policy definition.
     */
    readonly versions?: string[];
}
/**
 * This operation retrieves the policy definition in the given management group with the given name.
 *
 * Uses Azure REST API version 2025-01-01.
 *
 * Other available API versions: 2020-09-01, 2021-06-01, 2023-04-01, 2024-05-01, 2025-03-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native authorization [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getPolicyDefinitionAtManagementGroupOutput(args: GetPolicyDefinitionAtManagementGroupOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetPolicyDefinitionAtManagementGroupResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:authorization:getPolicyDefinitionAtManagementGroup", {
        "managementGroupId": args.managementGroupId,
        "policyDefinitionName": args.policyDefinitionName,
    }, opts);
}

export interface GetPolicyDefinitionAtManagementGroupOutputArgs {
    /**
     * The ID of the management group.
     */
    managementGroupId: pulumi.Input<string>;
    /**
     * The name of the policy definition to get.
     */
    policyDefinitionName: pulumi.Input<string>;
}