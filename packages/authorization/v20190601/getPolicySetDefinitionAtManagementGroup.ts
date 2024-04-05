import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * This operation retrieves the policy set definition in the given management group with the given name.
 */
export function getPolicySetDefinitionAtManagementGroup(args: GetPolicySetDefinitionAtManagementGroupArgs, opts?: pulumi.InvokeOptions): Promise<GetPolicySetDefinitionAtManagementGroupResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:authorization/v20190601:getPolicySetDefinitionAtManagementGroup", {
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
     * The policy set definition metadata.
     */
    readonly metadata?: any;
    /**
     * The name of the policy set definition.
     */
    readonly name: string;
    /**
     * The policy set definition parameters that can be used in policy definition references.
     */
    readonly parameters?: any;
    /**
     * An array of policy definition references.
     */
    readonly policyDefinitions: types.outputs.PolicyDefinitionReferenceResponse[];
    /**
     * The type of policy definition. Possible values are NotSpecified, BuiltIn, and Custom.
     */
    readonly policyType?: string;
    /**
     * The type of the resource (Microsoft.Authorization/policySetDefinitions).
     */
    readonly type: string;
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