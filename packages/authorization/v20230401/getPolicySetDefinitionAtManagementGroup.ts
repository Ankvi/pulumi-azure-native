import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * This operation retrieves the policy set definition in the given management group with the given name.
 */
export function getPolicySetDefinitionAtManagementGroup(args: GetPolicySetDefinitionAtManagementGroupArgs, opts?: pulumi.InvokeOptions): Promise<GetPolicySetDefinitionAtManagementGroupResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:authorization/v20230401:getPolicySetDefinitionAtManagementGroup", {
        "managementGroupId": args.managementGroupId,
        "policySetDefinitionName": args.policySetDefinitionName,
    }, opts);
}

export interface GetPolicySetDefinitionAtManagementGroupArgs {
    /**
     * The ID of the management group.
     */
    managementGroupId: string;
    /**
     * The name of the policy set definition to get.
     */
    policySetDefinitionName: string;
}

/**
 * The policy set definition.
 */
export interface GetPolicySetDefinitionAtManagementGroupResult {
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
     * The type of policy set definition. Possible values are NotSpecified, BuiltIn, Custom, and Static.
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
    /**
     * The policy set definition version in #.#.# format.
     */
    readonly version?: string;
    /**
     * A list of available versions for this policy set definition.
     */
    readonly versions?: string[];
}
/**
 * This operation retrieves the policy set definition in the given management group with the given name.
 */
export function getPolicySetDefinitionAtManagementGroupOutput(args: GetPolicySetDefinitionAtManagementGroupOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetPolicySetDefinitionAtManagementGroupResult> {
    return pulumi.output(args).apply((a: any) => getPolicySetDefinitionAtManagementGroup(a, opts))
}

export interface GetPolicySetDefinitionAtManagementGroupOutputArgs {
    /**
     * The ID of the management group.
     */
    managementGroupId: pulumi.Input<string>;
    /**
     * The name of the policy set definition to get.
     */
    policySetDefinitionName: pulumi.Input<string>;
}
