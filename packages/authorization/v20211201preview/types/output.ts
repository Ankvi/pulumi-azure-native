import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * Access Review History Definition Instance.
     */
    export interface AccessReviewHistoryInstanceResponse {
        /**
         * The display name for the parent history definition.
         */
        displayName?: string;
        /**
         * Uri which can be used to retrieve review history data. To generate this Uri, generateDownloadUri() must be called for a specific accessReviewHistoryDefinitionInstance. The link expires after a 24 hour period. Callers can see the expiration date time by looking at the 'se' parameter in the generated uri.
         */
        downloadUri: string;
        /**
         * Date time when history data report expires and the associated data is deleted.
         */
        expiration?: string;
        /**
         * Date time when the history data report is scheduled to be generated.
         */
        fulfilledDateTime?: string;
        /**
         * The access review history definition instance id.
         */
        id: string;
        /**
         * The access review history definition instance unique id.
         */
        name: string;
        /**
         * Date time used when selecting review data, all reviews included in data end on or before this date. For use only with one-time/non-recurring reports.
         */
        reviewHistoryPeriodEndDateTime?: string;
        /**
         * Date time used when selecting review data, all reviews included in data start on or after this date. For use only with one-time/non-recurring reports.
         */
        reviewHistoryPeriodStartDateTime?: string;
        /**
         * Date time when the history data report is scheduled to be generated.
         */
        runDateTime?: string;
        /**
         * Status of the requested review history instance data. This is either requested, in-progress, done or error. The state transitions are as follows - Requested -> InProgress -> Done -> Expired
         */
        status: string;
        /**
         * The resource type.
         */
        type: string;
    }

    /**
     * Access Review Instance.
     */
    export interface AccessReviewInstanceResponse {
        /**
         * This is the collection of backup reviewers.
         */
        backupReviewers?: AccessReviewReviewerResponse[];
        /**
         * The DateTime when the review instance is scheduled to end.
         */
        endDateTime?: string;
        /**
         * The access review instance id.
         */
        id: string;
        /**
         * The access review instance name.
         */
        name: string;
        /**
         * This is the collection of reviewers.
         */
        reviewers?: AccessReviewReviewerResponse[];
        /**
         * This field specifies the type of reviewers for a review. Usually for a review, reviewers are explicitly assigned. However, in some cases, the reviewers may not be assigned and instead be chosen dynamically. For example managers review or self review.
         */
        reviewersType: string;
        /**
         * The DateTime when the review instance is scheduled to be start.
         */
        startDateTime?: string;
        /**
         * This read-only field specifies the status of an access review instance.
         */
        status: string;
        /**
         * The resource type.
         */
        type: string;
    }

    /**
     * Descriptor for what needs to be reviewed
     */
    export interface AccessReviewReviewerResponse {
        /**
         * The id of the reviewer(user/servicePrincipal)
         */
        principalId?: string;
        /**
         * The identity type : user/servicePrincipal
         */
        principalType: string;
    }

    /**
     * Descriptor for what needs to be reviewed
     */
    export interface AccessReviewScopeResponse {
        /**
         * The role assignment state eligible/active to review
         */
        assignmentState: string;
        /**
         * This is used to indicate the resource id(s) to exclude
         */
        excludeResourceId?: string;
        /**
         * This is used to indicate the role definition id(s) to exclude
         */
        excludeRoleDefinitionId?: string;
        /**
         * Flag to indicate whether to expand nested memberships or not.
         */
        expandNestedMemberships?: boolean;
        /**
         * Duration users are inactive for. The value should be in ISO  8601 format (http://en.wikipedia.org/wiki/ISO_8601#Durations).This code can be used to convert TimeSpan to a valid interval string: XmlConvert.ToString(new TimeSpan(hours, minutes, seconds))
         */
        inactiveDuration?: string;
        /**
         * Flag to indicate whether to expand nested memberships or not.
         */
        includeAccessBelowResource?: boolean;
        /**
         * Flag to indicate whether to expand nested memberships or not.
         */
        includeInheritedAccess?: boolean;
        /**
         * The identity type user/servicePrincipal to review
         */
        principalType: string;
        /**
         * ResourceId in which this review is getting created
         */
        resourceId: string;
        /**
         * This is used to indicate the role being reviewed
         */
        roleDefinitionId: string;
    }
