import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * This operation retrieves the policy set definition version in the given subscription with the given name and version.
 *
 * Uses Azure REST API version 2025-01-01.
 *
 * Other available API versions: 2023-04-01, 2024-05-01, 2025-03-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native authorization [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getPolicySetDefinitionVersion(args: GetPolicySetDefinitionVersionArgs, opts?: pulumi.InvokeOptions): Promise<GetPolicySetDefinitionVersionResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:authorization:getPolicySetDefinitionVersion", {
        "expand": args.expand,
        "policyDefinitionVersion": args.policyDefinitionVersion,
        "policySetDefinitionName": args.policySetDefinitionName,
    }, opts);
}

export interface GetPolicySetDefinitionVersionArgs {
    /**
     * Comma-separated list of additional properties to be included in the response. Supported values are 'LatestDefinitionVersion, EffectiveDefinitionVersion'.
     */
    expand?: string;
    /**
     * The policy set definition version.  The format is x.y.z where x is the major version number, y is the minor version number, and z is the patch number
     */
    policyDefinitionVersion: string;
    /**
     * The name of the policy set definition.
     */
    policySetDefinitionName: string;
}

/**
 * The policy set definition version.
 */
export interface GetPolicySetDefinitionVersionResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * The policy set definition description.
     */
    readonly description?: string;
    /**
     * The display name of the policy set definition.
     */
    readonly displayName?: string;
    /**
     * The ID of the policy set definition version.
     */
    readonly id: string;
    /**
     * The policy set definition metadata.  Metadata is an open ended object and is typically a collection of key value pairs.
     */
    readonly metadata?: any;
    /**
     * The name of the policy set definition version.
     */
    readonly name: string;
    /**
     * The policy set definition parameters that can be used in policy definition references.
     */
    readonly parameters?: {[key: string]: types.outputs.ParameterDefinitionsValueResponse};
    /**
     * The metadata describing groups of policy definition references within the policy set definition.
     */
    readonly policyDefinitionGroups?: types.outputs.PolicyDefinitionGroupResponse[];
    /**
     * An array of policy definition references.
     */
    readonly policyDefinitions: types.outputs.PolicyDefinitionReferenceResponse[];
    /**
     * The type of policy definition. Possible values are NotSpecified, BuiltIn, Custom, and Static.
     */
    readonly policyType?: string;
    /**
     * The system metadata relating to this resource.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * The type of the resource (Microsoft.Authorization/policySetDefinitions/versions).
     */
    readonly type: string;
    /**
     * The policy set definition version in #.#.# format.
     */
    readonly version?: string;
}
/**
 * This operation retrieves the policy set definition version in the given subscription with the given name and version.
 *
 * Uses Azure REST API version 2025-01-01.
 *
 * Other available API versions: 2023-04-01, 2024-05-01, 2025-03-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native authorization [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getPolicySetDefinitionVersionOutput(args: GetPolicySetDefinitionVersionOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetPolicySetDefinitionVersionResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:authorization:getPolicySetDefinitionVersion", {
        "expand": args.expand,
        "policyDefinitionVersion": args.policyDefinitionVersion,
        "policySetDefinitionName": args.policySetDefinitionName,
    }, opts);
}

export interface GetPolicySetDefinitionVersionOutputArgs {
    /**
     * Comma-separated list of additional properties to be included in the response. Supported values are 'LatestDefinitionVersion, EffectiveDefinitionVersion'.
     */
    expand?: pulumi.Input<string>;
    /**
     * The policy set definition version.  The format is x.y.z where x is the major version number, y is the minor version number, and z is the patch number
     */
    policyDefinitionVersion: pulumi.Input<string>;
    /**
     * The name of the policy set definition.
     */
    policySetDefinitionName: pulumi.Input<string>;
}