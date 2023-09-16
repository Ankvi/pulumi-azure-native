import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * Gets a project environment type.
 */
export function getProjectEnvironmentType(args: GetProjectEnvironmentTypeArgs, opts?: pulumi.InvokeOptions): Promise<GetProjectEnvironmentTypeResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:devcenter/v20230401:getProjectEnvironmentType", {
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
    readonly creatorRoleAssignment?: types.outputs.devcenter.v20230401.ProjectEnvironmentTypeUpdatePropertiesResponseCreatorRoleAssignment;
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
    readonly identity?: types.outputs.devcenter.v20230401.ManagedServiceIdentityResponse;
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
    readonly systemData: types.outputs.devcenter.v20230401.SystemDataResponse;
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
    readonly userRoleAssignments?: {[key: string]: types.outputs.devcenter.v20230401.UserRoleAssignmentResponse};
}
/**
 * Gets a project environment type.
 */
export function getProjectEnvironmentTypeOutput(args: GetProjectEnvironmentTypeOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetProjectEnvironmentTypeResult> {
    return pulumi.output(args).apply((a: any) => getProjectEnvironmentType(a, opts))
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
