import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * This operation retrieves the policy definition in the given subscription with the given name.
 */
export function getPolicyDefinition(args: GetPolicyDefinitionArgs, opts?: pulumi.InvokeOptions): Promise<GetPolicyDefinitionResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:authorization/v20230401:getPolicyDefinition", {
        "policyDefinitionName": args.policyDefinitionName,
    }, opts);
}

export interface GetPolicyDefinitionArgs {
    /**
     * The name of the policy definition to get.
     */
    policyDefinitionName: string;
}

/**
 * The policy definition.
 */
export interface GetPolicyDefinitionResult {
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
 * This operation retrieves the policy definition in the given subscription with the given name.
 */
export function getPolicyDefinitionOutput(args: GetPolicyDefinitionOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetPolicyDefinitionResult> {
    return pulumi.output(args).apply((a: any) => getPolicyDefinition(a, opts))
}

export interface GetPolicyDefinitionOutputArgs {
    /**
     * The name of the policy definition to get.
     */
    policyDefinitionName: pulumi.Input<string>;
}
