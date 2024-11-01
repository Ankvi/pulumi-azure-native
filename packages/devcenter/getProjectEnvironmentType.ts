import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets a project environment type.
 * Azure REST API version: 2023-04-01.
 *
 * Other available API versions: 2023-08-01-preview, 2023-10-01-preview, 2024-02-01, 2024-05-01-preview, 2024-06-01-preview, 2024-07-01-preview, 2024-08-01-preview, 2024-10-01-preview.
 */
export function getProjectEnvironmentType(args: GetProjectEnvironmentTypeArgs, opts?: pulumi.InvokeOptions): Promise<GetProjectEnvironmentTypeResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:devcenter:getProjectEnvironmentType", {
        "environmentTypeName": args.environmentTypeName,
        "projectName": args.projectName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetProjectEnvironmentTypeArgs {
    /**
     * The name of the environment type.
     */
    environmentTypeName: string;
    /**
     * The name of the project.
     */
    projectName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * Represents an environment type.
 */
export interface GetProjectEnvironmentTypeResult {
    /**
     * The role definition assigned to the environment creator on backing resources.
     */
    readonly creatorRoleAssignment?: types.outputs.ProjectEnvironmentTypeUpdatePropertiesResponseCreatorRoleAssignment;
    /**
     * Id of a subscription that the environment type will be mapped to. The environment's resources will be deployed into this subscription.
     */
    readonly deploymentTargetId?: string;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * Managed identity properties
     */
    readonly identity?: types.outputs.ManagedServiceIdentityResponse;
    /**
     * The geo-location for the environment type
     */
    readonly location?: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The provisioning state of the resource.
     */
    readonly provisioningState: string;
    /**
     * Defines whether this Environment Type can be used in this Project.
     */
    readonly status?: string;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * Resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
    /**
     * Role Assignments created on environment backing resources. This is a mapping from a user object ID to an object of role definition IDs.
     */
    readonly userRoleAssignments?: {[key: string]: types.outputs.UserRoleAssignmentResponse};
}
/**
 * Gets a project environment type.
 * Azure REST API version: 2023-04-01.
 *
 * Other available API versions: 2023-08-01-preview, 2023-10-01-preview, 2024-02-01, 2024-05-01-preview, 2024-06-01-preview, 2024-07-01-preview, 2024-08-01-preview, 2024-10-01-preview.
 */
export function getProjectEnvironmentTypeOutput(args: GetProjectEnvironmentTypeOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetProjectEnvironmentTypeResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:devcenter:getProjectEnvironmentType", {
        "environmentTypeName": args.environmentTypeName,
        "projectName": args.projectName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetProjectEnvironmentTypeOutputArgs {
    /**
     * The name of the environment type.
     */
    environmentTypeName: pulumi.Input<string>;
    /**
     * The name of the project.
     */
    projectName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}