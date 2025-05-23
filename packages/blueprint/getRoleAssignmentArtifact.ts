import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Get a blueprint artifact.
 *
 * Uses Azure REST API version 2018-11-01-preview.
 */
export function getRoleAssignmentArtifact(args: GetRoleAssignmentArtifactArgs, opts?: pulumi.InvokeOptions): Promise<GetRoleAssignmentArtifactResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:blueprint:getRoleAssignmentArtifact", {
        "artifactName": args.artifactName,
        "blueprintName": args.blueprintName,
        "resourceScope": args.resourceScope,
    }, opts);
}

export interface GetRoleAssignmentArtifactArgs {
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
 * Blueprint artifact that applies a Role assignment.
 */
export interface GetRoleAssignmentArtifactResult {
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
     * Expected value is 'roleAssignment'.
     */
    readonly kind: "roleAssignment";
    /**
     * Name of this resource.
     */
    readonly name: string;
    /**
     * Array of user or group identities in Azure Active Directory. The roleDefinition will apply to each identity.
     */
    readonly principalIds: any;
    /**
     * RoleAssignment will be scope to this resourceGroup. If empty, it scopes to the subscription.
     */
    readonly resourceGroup?: string;
    /**
     * Azure resource ID of the RoleDefinition.
     */
    readonly roleDefinitionId: string;
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
export function getRoleAssignmentArtifactOutput(args: GetRoleAssignmentArtifactOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetRoleAssignmentArtifactResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:blueprint:getRoleAssignmentArtifact", {
        "artifactName": args.artifactName,
        "blueprintName": args.blueprintName,
        "resourceScope": args.resourceScope,
    }, opts);
}

export interface GetRoleAssignmentArtifactOutputArgs {
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