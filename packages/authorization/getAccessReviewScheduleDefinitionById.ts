import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get single access review definition
 * Azure REST API version: 2021-12-01-preview.
 */
export function getAccessReviewScheduleDefinitionById(args: GetAccessReviewScheduleDefinitionByIdArgs, opts?: pulumi.InvokeOptions): Promise<GetAccessReviewScheduleDefinitionByIdResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:authorization:getAccessReviewScheduleDefinitionById", {
        "scheduleDefinitionId": args.scheduleDefinitionId,
    }, opts);
}

export interface GetAccessReviewScheduleDefinitionByIdArgs {
    /**
     * The id of the access review schedule definition.
     */
    scheduleDefinitionId: string;
}

/**
 * Access Review Schedule Definition.
 */
export interface GetAccessReviewScheduleDefinitionByIdResult {
    /**
     * The role assignment state eligible/active to review
     */
    readonly assignmentState: string;
    /**
     * Flag to indicate whether auto-apply capability, to automatically change the target object access resource, is enabled. If not enabled, a user must, after the review completes, apply the access review.
     */
    readonly autoApplyDecisionsEnabled?: boolean;
    /**
     * This is the collection of backup reviewers.
     */
    readonly backupReviewers?: types.outputs.authorization.AccessReviewReviewerResponse[];
    /**
     * This specifies the behavior for the autoReview feature when an access review completes.
     */
    readonly defaultDecision?: string;
    /**
     * Flag to indicate whether reviewers are required to provide a justification when reviewing access.
     */
    readonly defaultDecisionEnabled?: boolean;
    /**
     * The description provided by the access review creator and visible to admins.
     */
    readonly descriptionForAdmins?: string;
    /**
     * The description provided by the access review creator to be shown to reviewers.
     */
    readonly descriptionForReviewers?: string;
    /**
     * The display name for the schedule definition.
     */
    readonly displayName?: string;
    /**
     * The DateTime when the review is scheduled to end. Required if type is endDate
     */
    readonly endDate?: string;
    /**
     * This is used to indicate the resource id(s) to exclude
     */
    readonly excludeResourceId?: string;
    /**
     * This is used to indicate the role definition id(s) to exclude
     */
    readonly excludeRoleDefinitionId?: string;
    /**
     * Flag to indicate whether to expand nested memberships or not.
     */
    readonly expandNestedMemberships?: boolean;
    /**
     * The access review schedule definition id.
     */
    readonly id: string;
    /**
     * Duration users are inactive for. The value should be in ISO  8601 format (http://en.wikipedia.org/wiki/ISO_8601#Durations).This code can be used to convert TimeSpan to a valid interval string: XmlConvert.ToString(new TimeSpan(hours, minutes, seconds))
     */
    readonly inactiveDuration?: string;
    /**
     * Flag to indicate whether to expand nested memberships or not.
     */
    readonly includeAccessBelowResource?: boolean;
    /**
     * Flag to indicate whether to expand nested memberships or not.
     */
    readonly includeInheritedAccess?: boolean;
    /**
     * The duration in days for an instance.
     */
    readonly instanceDurationInDays?: number;
    /**
     * This is the collection of instances returned when one does an expand on it.
     */
    readonly instances?: types.outputs.authorization.AccessReviewInstanceResponse[];
    /**
     * The interval for recurrence. For a quarterly review, the interval is 3 for type : absoluteMonthly.
     */
    readonly interval?: number;
    /**
     * Flag to indicate whether the reviewer is required to pass justification when recording a decision.
     */
    readonly justificationRequiredOnApproval?: boolean;
    /**
     * Flag to indicate whether sending mails to reviewers and the review creator is enabled.
     */
    readonly mailNotificationsEnabled?: boolean;
    /**
     * The access review schedule definition unique id.
     */
    readonly name: string;
    /**
     * The number of times to repeat the access review. Required and must be positive if type is numbered.
     */
    readonly numberOfOccurrences?: number;
    /**
     * The identity id
     */
    readonly principalId: string;
    /**
     * The identity display name
     */
    readonly principalName: string;
    /**
     * The identity type user/servicePrincipal to review
     */
    readonly principalType: string;
    /**
     * Recommendations for access reviews are calculated by looking back at 30 days of data(w.r.t the start date of the review) by default. However, in some scenarios, customers want to change how far back to look at and want to configure 60 days, 90 days, etc. instead. This setting allows customers to configure this duration. The value should be in ISO  8601 format (http://en.wikipedia.org/wiki/ISO_8601#Durations).This code can be used to convert TimeSpan to a valid interval string: XmlConvert.ToString(new TimeSpan(hours, minutes, seconds))
     */
    readonly recommendationLookBackDuration?: string;
    /**
     * Flag to indicate whether showing recommendations to reviewers is enabled.
     */
    readonly recommendationsEnabled?: boolean;
    /**
     * Flag to indicate whether sending reminder emails to reviewers are enabled.
     */
    readonly reminderNotificationsEnabled?: boolean;
    /**
     * ResourceId in which this review is getting created
     */
    readonly resourceId: string;
    /**
     * This is the collection of reviewers.
     */
    readonly reviewers?: types.outputs.authorization.AccessReviewReviewerResponse[];
    /**
     * This field specifies the type of reviewers for a review. Usually for a review, reviewers are explicitly assigned. However, in some cases, the reviewers may not be assigned and instead be chosen dynamically. For example managers review or self review.
     */
    readonly reviewersType: string;
    /**
     * This is used to indicate the role being reviewed
     */
    readonly roleDefinitionId: string;
    /**
     * The DateTime when the review is scheduled to be start. This could be a date in the future. Required on create.
     */
    readonly startDate?: string;
    /**
     * This read-only field specifies the status of an accessReview.
     */
    readonly status: string;
    /**
     * The resource type.
     */
    readonly type: string;
    /**
     * The user principal name(if valid)
     */
    readonly userPrincipalName: string;
}
/**
 * Get single access review definition
 * Azure REST API version: 2021-12-01-preview.
 */
export function getAccessReviewScheduleDefinitionByIdOutput(args: GetAccessReviewScheduleDefinitionByIdOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetAccessReviewScheduleDefinitionByIdResult> {
    return pulumi.output(args).apply((a: any) => getAccessReviewScheduleDefinitionById(a, opts))
}

export interface GetAccessReviewScheduleDefinitionByIdOutputArgs {
    /**
     * The id of the access review schedule definition.
     */
    scheduleDefinitionId: pulumi.Input<string>;
}
