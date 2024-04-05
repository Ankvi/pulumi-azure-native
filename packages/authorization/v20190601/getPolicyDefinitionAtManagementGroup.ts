import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * This operation retrieves the policy definition in the given management group with the given name.
 */
export function getPolicyDefinitionAtManagementGroup(args: GetPolicyDefinitionAtManagementGroupArgs, opts?: pulumi.InvokeOptions): Promise<GetPolicyDefinitionAtManagementGroupResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:authorization/v20190601:getPolicyDefinitionAtManagementGroup", {
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
     * The policy definition metadata.
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
     * Required if a parameter is used in policy rule.
     */
    readonly parameters?: any;
    /**
     * The policy rule.
     */
    readonly policyRule?: any;
    /**
     * The type of policy definition. Possible values are NotSpecified, BuiltIn, and Custom.
     */
    readonly policyType?: string;
    /**
     * The type of the resource (Microsoft.Authorization/policyDefinitions).
     */
    readonly type: string;
}
/**
 * This operation retrieves the policy definition in the given management group with the given name.
 */
export function getPolicyDefinitionAtManagementGroupOutput(args: GetPolicyDefinitionAtManagementGroupOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetPolicyDefinitionAtManagementGroupResult> {
    return pulumi.output(args).apply((a: any) => getPolicyDefinitionAtManagementGroup(a, opts))
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