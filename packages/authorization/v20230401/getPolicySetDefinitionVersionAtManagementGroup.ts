import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * This operation retrieves the policy set definition version in the given management group with the given name and version.
 */
export function getPolicySetDefinitionVersionAtManagementGroup(args: GetPolicySetDefinitionVersionAtManagementGroupArgs, opts?: pulumi.InvokeOptions): Promise<GetPolicySetDefinitionVersionAtManagementGroupResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:authorization/v20230401:getPolicySetDefinitionVersionAtManagementGroup", {
        "managementGroupName": args.managementGroupName,
        "policyDefinitionVersion": args.policyDefinitionVersion,
        "policySetDefinitionName": args.policySetDefinitionName,
    }, opts);
}

export interface GetPolicySetDefinitionVersionAtManagementGroupArgs {
    /**
     * The name of the management group. The name is case insensitive.
     */
    managementGroupName: string;
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
export interface GetPolicySetDefinitionVersionAtManagementGroupResult {
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
 * This operation retrieves the policy set definition version in the given management group with the given name and version.
 */
export function getPolicySetDefinitionVersionAtManagementGroupOutput(args: GetPolicySetDefinitionVersionAtManagementGroupOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetPolicySetDefinitionVersionAtManagementGroupResult> {
    return pulumi.output(args).apply((a: any) => getPolicySetDefinitionVersionAtManagementGroup(a, opts))
}

export interface GetPolicySetDefinitionVersionAtManagementGroupOutputArgs {
    /**
     * The name of the management group. The name is case insensitive.
     */
    managementGroupName: pulumi.Input<string>;
    /**
     * The policy set definition version.  The format is x.y.z where x is the major version number, y is the minor version number, and z is the patch number
     */
    policyDefinitionVersion: pulumi.Input<string>;
    /**
     * The name of the policy set definition.
     */
    policySetDefinitionName: pulumi.Input<string>;
}
