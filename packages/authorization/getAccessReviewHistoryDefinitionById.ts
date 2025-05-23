import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get access review history definition by definition Id
 *
 * Uses Azure REST API version 2021-12-01-preview.
 *
 * Other available API versions: 2021-11-16-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native authorization [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getAccessReviewHistoryDefinitionById(args: GetAccessReviewHistoryDefinitionByIdArgs, opts?: pulumi.InvokeOptions): Promise<GetAccessReviewHistoryDefinitionByIdResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:authorization:getAccessReviewHistoryDefinitionById", {
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
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
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
     * Access Review History Definition recurrence settings.
     */
    readonly range?: types.outputs.AccessReviewRecurrenceRangeResponse;
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
 *
 * Uses Azure REST API version 2021-12-01-preview.
 *
 * Other available API versions: 2021-11-16-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native authorization [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getAccessReviewHistoryDefinitionByIdOutput(args: GetAccessReviewHistoryDefinitionByIdOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetAccessReviewHistoryDefinitionByIdResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:authorization:getAccessReviewHistoryDefinitionById", {
        "historyDefinitionId": args.historyDefinitionId,
    }, opts);
}

export interface GetAccessReviewHistoryDefinitionByIdOutputArgs {
    /**
     * The id of the access review history definition.
     */
    historyDefinitionId: pulumi.Input<string>;
}