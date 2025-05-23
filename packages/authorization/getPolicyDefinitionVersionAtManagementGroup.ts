import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * This operation retrieves the policy definition version in the given management group with the given name.
 *
 * Uses Azure REST API version 2025-01-01.
 *
 * Other available API versions: 2023-04-01, 2024-05-01, 2025-03-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native authorization [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getPolicyDefinitionVersionAtManagementGroup(args: GetPolicyDefinitionVersionAtManagementGroupArgs, opts?: pulumi.InvokeOptions): Promise<GetPolicyDefinitionVersionAtManagementGroupResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:authorization:getPolicyDefinitionVersionAtManagementGroup", {
        "managementGroupName": args.managementGroupName,
        "policyDefinitionName": args.policyDefinitionName,
        "policyDefinitionVersion": args.policyDefinitionVersion,
    }, opts);
}

export interface GetPolicyDefinitionVersionAtManagementGroupArgs {
    /**
     * The name of the management group. The name is case insensitive.
     */
    managementGroupName: string;
    /**
     * The name of the policy definition.
     */
    policyDefinitionName: string;
    /**
     * The policy definition version.  The format is x.y.z where x is the major version number, y is the minor version number, and z is the patch number
     */
    policyDefinitionVersion: string;
}

/**
 * The ID of the policy definition version.
 */
export interface GetPolicyDefinitionVersionAtManagementGroupResult {
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
     * The ID of the policy definition version.
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
     * The name of the policy definition version.
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
     * The type of the resource (Microsoft.Authorization/policyDefinitions/versions).
     */
    readonly type: string;
    /**
     * The policy definition version in #.#.# format.
     */
    readonly version?: string;
}
/**
 * This operation retrieves the policy definition version in the given management group with the given name.
 *
 * Uses Azure REST API version 2025-01-01.
 *
 * Other available API versions: 2023-04-01, 2024-05-01, 2025-03-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native authorization [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getPolicyDefinitionVersionAtManagementGroupOutput(args: GetPolicyDefinitionVersionAtManagementGroupOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetPolicyDefinitionVersionAtManagementGroupResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:authorization:getPolicyDefinitionVersionAtManagementGroup", {
        "managementGroupName": args.managementGroupName,
        "policyDefinitionName": args.policyDefinitionName,
        "policyDefinitionVersion": args.policyDefinitionVersion,
    }, opts);
}

export interface GetPolicyDefinitionVersionAtManagementGroupOutputArgs {
    /**
     * The name of the management group. The name is case insensitive.
     */
    managementGroupName: pulumi.Input<string>;
    /**
     * The name of the policy definition.
     */
    policyDefinitionName: pulumi.Input<string>;
    /**
     * The policy definition version.  The format is x.y.z where x is the major version number, y is the minor version number, and z is the patch number
     */
    policyDefinitionVersion: pulumi.Input<string>;
}