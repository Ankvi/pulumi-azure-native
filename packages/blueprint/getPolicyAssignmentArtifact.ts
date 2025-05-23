import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a blueprint artifact.
 *
 * Uses Azure REST API version 2018-11-01-preview.
 */
export function getPolicyAssignmentArtifact(args: GetPolicyAssignmentArtifactArgs, opts?: pulumi.InvokeOptions): Promise<GetPolicyAssignmentArtifactResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:blueprint:getPolicyAssignmentArtifact", {
        "artifactName": args.artifactName,
        "blueprintName": args.blueprintName,
        "resourceScope": args.resourceScope,
    }, opts);
}

export interface GetPolicyAssignmentArtifactArgs {
    /**
     * Name of the blueprint artifact.
     */
    artifactName: string;
    /**
     * Name of the blueprint definition.
     */
    blueprintName: string;
    /**
     * The scope of the resource. Valid scopes are: management group (format: '/providers/Microsoft.Management/managementGroups/{managementGroup}'), subscription (format: '/subscriptions/{subscriptionId}').
     */
    resourceScope: string;
}

/**
 * Blueprint artifact that applies a Policy assignment.
 */
export interface GetPolicyAssignmentArtifactResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * Artifacts which need to be deployed before the specified artifact.
     */
    readonly dependsOn?: string[];
    /**
     * Multi-line explain this resource.
     */
    readonly description?: string;
    /**
     * One-liner string explain this resource.
     */
    readonly displayName?: string;
    /**
     * String Id used to locate any resource on Azure.
     */
    readonly id: string;
    /**
     * Specifies the kind of blueprint artifact.
     * Expected value is 'policyAssignment'.
     */
    readonly kind: "policyAssignment";
    /**
     * Name of this resource.
     */
    readonly name: string;
    /**
     * Parameter values for the policy definition.
     */
    readonly parameters: {[key: string]: types.outputs.ParameterValueResponse};
    /**
     * Azure resource ID of the policy definition.
     */
    readonly policyDefinitionId: string;
    /**
     * Name of the resource group placeholder to which the policy will be assigned.
     */
    readonly resourceGroup?: string;
    /**
     * Type of this resource.
     */
    readonly type: string;
}
/**
 * Get a blueprint artifact.
 *
 * Uses Azure REST API version 2018-11-01-preview.
 */
export function getPolicyAssignmentArtifactOutput(args: GetPolicyAssignmentArtifactOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetPolicyAssignmentArtifactResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:blueprint:getPolicyAssignmentArtifact", {
        "artifactName": args.artifactName,
        "blueprintName": args.blueprintName,
        "resourceScope": args.resourceScope,
    }, opts);
}

export interface GetPolicyAssignmentArtifactOutputArgs {
    /**
     * Name of the blueprint artifact.
     */
    artifactName: pulumi.Input<string>;
    /**
     * Name of the blueprint definition.
     */
    blueprintName: pulumi.Input<string>;
    /**
     * The scope of the resource. Valid scopes are: management group (format: '/providers/Microsoft.Management/managementGroups/{managementGroup}'), subscription (format: '/subscriptions/{subscriptionId}').
     */
    resourceScope: pulumi.Input<string>;
}