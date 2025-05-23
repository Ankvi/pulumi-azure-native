import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get the specified role eligibility schedule request.
 *
 * Uses Azure REST API version 2020-10-01.
 */
export function getPimRoleEligibilitySchedule(args: GetPimRoleEligibilityScheduleArgs, opts?: pulumi.InvokeOptions): Promise<GetPimRoleEligibilityScheduleResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:authorization:getPimRoleEligibilitySchedule", {
        "roleEligibilityScheduleRequestName": args.roleEligibilityScheduleRequestName,
        "scope": args.scope,
    }, opts);
}

export interface GetPimRoleEligibilityScheduleArgs {
    /**
     * The name (guid) of the role eligibility schedule request to get.
     */
    roleEligibilityScheduleRequestName: string;
    /**
     * The scope of the role eligibility schedule request.
     */
    scope: string;
}

/**
 * Role Eligibility schedule request
 */
export interface GetPimRoleEligibilityScheduleResult {
    /**
     * The approvalId of the role eligibility schedule request.
     */
    readonly approvalId: string;
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * The conditions on the role assignment. This limits the resources it can be assigned to. e.g.: @Resource[Microsoft.Storage/storageAccounts/blobServices/containers:ContainerName] StringEqualsIgnoreCase 'foo_storage_container'
     */
    readonly condition?: string;
    /**
     * Version of the condition. Currently accepted value is '2.0'
     */
    readonly conditionVersion?: string;
    /**
     * DateTime when role eligibility schedule request was created
     */
    readonly createdOn: string;
    /**
     * Additional properties of principal, scope and role definition
     */
    readonly expandedProperties: types.outputs.ExpandedPropertiesResponse;
    /**
     * The role eligibility schedule request ID.
     */
    readonly id: string;
    /**
     * Justification for the role eligibility
     */
    readonly justification?: string;
    /**
     * The role eligibility schedule request name.
     */
    readonly name: string;
    /**
     * The principal ID.
     */
    readonly principalId: string;
    /**
     * The principal type of the assigned principal ID.
     */
    readonly principalType: string;
    /**
     * The type of the role assignment schedule request. Eg: SelfActivate, AdminAssign etc
     */
    readonly requestType: string;
    /**
     * Id of the user who created this request
     */
    readonly requestorId: string;
    /**
     * The role definition ID.
     */
    readonly roleDefinitionId: string;
    /**
     * Schedule info of the role eligibility schedule
     */
    readonly scheduleInfo?: types.outputs.RoleEligibilityScheduleRequestPropertiesResponseScheduleInfo;
    /**
     * The role eligibility schedule request scope.
     */
    readonly scope: string;
    /**
     * The status of the role eligibility schedule request.
     */
    readonly status: string;
    /**
     * The resultant role eligibility schedule id or the role eligibility schedule id being updated
     */
    readonly targetRoleEligibilityScheduleId?: string;
    /**
     * The role eligibility schedule instance id being updated
     */
    readonly targetRoleEligibilityScheduleInstanceId?: string;
    /**
     * Ticket Info of the role eligibility
     */
    readonly ticketInfo?: types.outputs.RoleEligibilityScheduleRequestPropertiesResponseTicketInfo;
    /**
     * The role eligibility schedule request type.
     */
    readonly type: string;
}
/**
 * Get the specified role eligibility schedule request.
 *
 * Uses Azure REST API version 2020-10-01.
 */
export function getPimRoleEligibilityScheduleOutput(args: GetPimRoleEligibilityScheduleOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetPimRoleEligibilityScheduleResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:authorization:getPimRoleEligibilitySchedule", {
        "roleEligibilityScheduleRequestName": args.roleEligibilityScheduleRequestName,
        "scope": args.scope,
    }, opts);
}

export interface GetPimRoleEligibilityScheduleOutputArgs {
    /**
     * The name (guid) of the role eligibility schedule request to get.
     */
    roleEligibilityScheduleRequestName: pulumi.Input<string>;
    /**
     * The scope of the role eligibility schedule request.
     */
    scope: pulumi.Input<string>;
}