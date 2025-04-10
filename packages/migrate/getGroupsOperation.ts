import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a Group
 *
 * Uses Azure REST API version 2023-03-15.
 *
 * Other available API versions: 2023-04-01-preview, 2023-05-01-preview, 2023-09-09-preview, 2024-01-01-preview.
 */
export function getGroupsOperation(args: GetGroupsOperationArgs, opts?: pulumi.InvokeOptions): Promise<GetGroupsOperationResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:migrate:getGroupsOperation", {
        "groupName": args.groupName,
        "projectName": args.projectName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetGroupsOperationArgs {
    /**
     * Group ARM name
     */
    groupName: string;
    /**
     * Assessment Project Name
     */
    projectName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * Group resource.
 */
export interface GetGroupsOperationResult {
    /**
     * If the assessments are in running state.
     */
    readonly areAssessmentsRunning: boolean;
    /**
     * List of References to Assessments created on this group.
     */
    readonly assessments: string[];
    /**
     * Time when this group was created. Date-Time represented in ISO-8601 format.
     */
    readonly createdTimestamp: string;
    /**
     * Whether the group has been created and is valid.
     */
    readonly groupStatus: string;
    /**
     * The type of group.
     */
    readonly groupType?: string;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * Number of machines part of this group.
     */
    readonly machineCount: number;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The status of the last operation.
     */
    readonly provisioningState?: string;
    /**
     * List of assessment types supported on this group.
     */
    readonly supportedAssessmentTypes?: string[];
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
    /**
     * Time when this group was last updated. Date-Time represented in ISO-8601 format.
     */
    readonly updatedTimestamp: string;
}
/**
 * Get a Group
 *
 * Uses Azure REST API version 2023-03-15.
 *
 * Other available API versions: 2023-04-01-preview, 2023-05-01-preview, 2023-09-09-preview, 2024-01-01-preview.
 */
export function getGroupsOperationOutput(args: GetGroupsOperationOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetGroupsOperationResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:migrate:getGroupsOperation", {
        "groupName": args.groupName,
        "projectName": args.projectName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetGroupsOperationOutputArgs {
    /**
     * Group ARM name
     */
    groupName: pulumi.Input<string>;
    /**
     * Assessment Project Name
     */
    projectName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}