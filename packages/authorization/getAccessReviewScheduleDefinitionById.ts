import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get single access review definition
 *
 * Uses Azure REST API version 2021-12-01-preview.
 *
 * Other available API versions: 2021-03-01-preview, 2021-07-01-preview, 2021-11-16-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native authorization [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
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
     * Flag to indicate whether auto-apply capability, to automatically change the target object access resource, is enabled. If not enabled, a user must, after the review completes, apply the access review.
     */
    readonly autoApplyDecisionsEnabled?: boolean;
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * This is the collection of backup reviewers.
     */
    readonly backupReviewers?: types.outputs.AccessReviewReviewerResponse[];
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
     * The access review schedule definition id.
     */
    readonly id: string;
    /**
     * The duration in days for an instance.
     */
    readonly instanceDurationInDays?: number;
    /**
     * This is the collection of instances returned when one does an expand on it.
     */
    readonly instances?: types.outputs.AccessReviewInstanceResponse[];
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
     * The identity id
     */
    readonly principalId: string;
    /**
     * The identity display name
     */
    readonly principalName: string;
    /**
     * The identity type : user/servicePrincipal
     */
    readonly principalType: string;
    /**
     * Access Review schedule definition recurrence range.
     */
    readonly range?: types.outputs.AccessReviewRecurrenceRangeResponse;
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
     * This is the collection of reviewers.
     */
    readonly reviewers?: types.outputs.AccessReviewReviewerResponse[];
    /**
     * This field specifies the type of reviewers for a review. Usually for a review, reviewers are explicitly assigned. However, in some cases, the reviewers may not be assigned and instead be chosen dynamically. For example managers review or self review.
     */
    readonly reviewersType: string;
    /**
     * This is used to define what to include in scope of the review. The scope definition includes the resourceId and roleDefinitionId.
     */
    readonly scope: types.outputs.AccessReviewScopeResponse;
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
 *
 * Uses Azure REST API version 2021-12-01-preview.
 *
 * Other available API versions: 2021-03-01-preview, 2021-07-01-preview, 2021-11-16-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native authorization [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getAccessReviewScheduleDefinitionByIdOutput(args: GetAccessReviewScheduleDefinitionByIdOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetAccessReviewScheduleDefinitionByIdResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:authorization:getAccessReviewScheduleDefinitionById", {
        "scheduleDefinitionId": args.scheduleDefinitionId,
    }, opts);
}

export interface GetAccessReviewScheduleDefinitionByIdOutputArgs {
    /**
     * The id of the access review schedule definition.
     */
    scheduleDefinitionId: pulumi.Input<string>;
}