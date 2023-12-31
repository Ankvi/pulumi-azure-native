import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * Access Review History Definition Instance.
     */
    export interface AccessReviewHistoryInstanceArgs {
        /**
         * The display name for the parent history definition.
         */
        displayName?: pulumi.Input<string>;
        /**
         * Date time when history data report expires and the associated data is deleted.
         */
        expiration?: pulumi.Input<string>;
        /**
         * Date time when the history data report is scheduled to be generated.
         */
        fulfilledDateTime?: pulumi.Input<string>;
        /**
         * Date time used when selecting review data, all reviews included in data end on or before this date. For use only with one-time/non-recurring reports.
         */
        reviewHistoryPeriodEndDateTime?: pulumi.Input<string>;
        /**
         * Date time used when selecting review data, all reviews included in data start on or after this date. For use only with one-time/non-recurring reports.
         */
        reviewHistoryPeriodStartDateTime?: pulumi.Input<string>;
        /**
         * Date time when the history data report is scheduled to be generated.
         */
        runDateTime?: pulumi.Input<string>;
    }

    /**
     * Access Review Instance.
     */
    export interface AccessReviewInstanceArgs {
        /**
         * This is the collection of backup reviewers.
         */
        backupReviewers?: pulumi.Input<pulumi.Input<AccessReviewReviewerArgs>[]>;
        /**
         * The DateTime when the review instance is scheduled to end.
         */
        endDateTime?: pulumi.Input<string>;
        /**
         * This is the collection of reviewers.
         */
        reviewers?: pulumi.Input<pulumi.Input<AccessReviewReviewerArgs>[]>;
        /**
         * The DateTime when the review instance is scheduled to be start.
         */
        startDateTime?: pulumi.Input<string>;
    }

    /**
     * Descriptor for what needs to be reviewed
     */
    export interface AccessReviewReviewerArgs {
        /**
         * The id of the reviewer(user/servicePrincipal)
         */
        principalId?: pulumi.Input<string>;
    }

    /**
     * Descriptor for what needs to be reviewed
     */
    export interface AccessReviewScopeArgs {
        /**
         * This is used to indicate the resource id(s) to exclude
         */
        excludeResourceId?: pulumi.Input<string>;
        /**
         * This is used to indicate the role definition id(s) to exclude
         */
        excludeRoleDefinitionId?: pulumi.Input<string>;
        /**
         * Flag to indicate whether to expand nested memberships or not.
         */
        expandNestedMemberships?: pulumi.Input<boolean>;
        /**
         * Duration users are inactive for. The value should be in ISO  8601 format (http://en.wikipedia.org/wiki/ISO_8601#Durations).This code can be used to convert TimeSpan to a valid interval string: XmlConvert.ToString(new TimeSpan(hours, minutes, seconds))
         */
        inactiveDuration?: pulumi.Input<string>;
        /**
         * Flag to indicate whether to expand nested memberships or not.
         */
        includeAccessBelowResource?: pulumi.Input<boolean>;
        /**
         * Flag to indicate whether to expand nested memberships or not.
         */
        includeInheritedAccess?: pulumi.Input<boolean>;
    }
