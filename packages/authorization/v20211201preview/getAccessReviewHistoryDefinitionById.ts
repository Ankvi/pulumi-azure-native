import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get access review history definition by definition Id
 */
export function getAccessReviewHistoryDefinitionById(args: GetAccessReviewHistoryDefinitionByIdArgs, opts?: pulumi.InvokeOptions): Promise<GetAccessReviewHistoryDefinitionByIdResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:authorization/v20211201preview:getAccessReviewHistoryDefinitionById", {
        "historyDefinitionId": args.historyDefinitionId,
    }, opts);
}

export interface GetAccessReviewHistoryDefinitionByIdArgs {
    /**
     * The id of the access review history definition.
     */
    historyDefinitionId: string;
}

/**
 * Access Review History Definition.
 */
export interface GetAccessReviewHistoryDefinitionByIdResult {
    /**
     * Date time when history definition was created
     */
    readonly createdDateTime: string;
    /**
     * Collection of review decisions which the history data should be filtered on. For example if Approve and Deny are supplied the data will only contain review results in which the decision maker approved or denied a review request.
     */
    readonly decisions?: string[];
    /**
     * The display name for the history definition.
     */
    readonly displayName?: string;
    /**
     * The DateTime when the review is scheduled to end. Required if type is endDate
     */
    readonly endDate?: string;
    /**
     * The access review history definition id.
     */
    readonly id: string;
    /**
     * Set of access review history instances for this history definition.
     */
    readonly instances?: types.outputs.AccessReviewHistoryInstanceResponse[];
    /**
     * The interval for recurrence. For a quarterly review, the interval is 3 for type : absoluteMonthly.
     */
    readonly interval?: number;
    /**
     * The access review history definition unique id.
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
     * The identity type : user/servicePrincipal
     */
    readonly principalType: string;
    /**
     * Date time used when selecting review data, all reviews included in data end on or before this date. For use only with one-time/non-recurring reports.
     */
    readonly reviewHistoryPeriodEndDateTime: string;
    /**
     * Date time used when selecting review data, all reviews included in data start on or after this date. For use only with one-time/non-recurring reports.
     */
    readonly reviewHistoryPeriodStartDateTime: string;
    /**
     * A collection of scopes used when selecting review history data
     */
    readonly scopes?: types.outputs.AccessReviewScopeResponse[];
    /**
     * The DateTime when the review is scheduled to be start. This could be a date in the future. Required on create.
     */
    readonly startDate?: string;
    /**
     * This read-only field specifies the of the requested review history data. This is either requested, in-progress, done or error.
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
 * Get access review history definition by definition Id
 */
export function getAccessReviewHistoryDefinitionByIdOutput(args: GetAccessReviewHistoryDefinitionByIdOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetAccessReviewHistoryDefinitionByIdResult> {
    return pulumi.output(args).apply((a: any) => getAccessReviewHistoryDefinitionById(a, opts))
}

export interface GetAccessReviewHistoryDefinitionByIdOutputArgs {
    /**
     * The id of the access review history definition.
     */
    historyDefinitionId: pulumi.Input<string>;
}
