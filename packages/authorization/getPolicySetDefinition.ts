import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * This operation retrieves the policy set definition in the given subscription with the given name.
 *
 * Uses Azure REST API version 2021-06-01.
 *
 * Other available API versions: 2019-06-01, 2023-04-01, 2024-05-01, 2025-01-01, 2025-03-01.
 */
export function getPolicySetDefinition(args: GetPolicySetDefinitionArgs, opts?: pulumi.InvokeOptions): Promise<GetPolicySetDefinitionResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:authorization:getPolicySetDefinition", {
        "policySetDefinitionName": args.policySetDefinitionName,
    }, opts);
}

export interface GetPolicySetDefinitionArgs {
    /**
     * The name of the policy set definition to get.
     */
    policySetDefinitionName: string;
}

/**
 * The policy set definition.
 */
export interface GetPolicySetDefinitionResult {
    /**
     * The policy set definition description.
     */
    readonly description?: string;
    /**
     * The display name of the policy set definition.
     */
    readonly displayName?: string;
    /**
     * The ID of the policy set definition.
     */
    readonly id: string;
    /**
     * The policy set definition metadata.  Metadata is an open ended object and is typically a collection of key value pairs.
     */
    readonly metadata?: any;
    /**
     * The name of the policy set definition.
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
     * The type of the resource (Microsoft.Authorization/policySetDefinitions).
     */
    readonly type: string;
}
/**
 * This operation retrieves the policy set definition in the given subscription with the given name.
 *
 * Uses Azure REST API version 2021-06-01.
 *
 * Other available API versions: 2019-06-01, 2023-04-01, 2024-05-01, 2025-01-01, 2025-03-01.
 */
export function getPolicySetDefinitionOutput(args: GetPolicySetDefinitionOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetPolicySetDefinitionResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:authorization:getPolicySetDefinition", {
        "policySetDefinitionName": args.policySetDefinitionName,
    }, opts);
}

export interface GetPolicySetDefinitionOutputArgs {
    /**
     * The name of the policy set definition to get.
     */
    policySetDefinitionName: pulumi.Input<string>;
}