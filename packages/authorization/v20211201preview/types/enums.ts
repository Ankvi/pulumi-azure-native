export const AccessReviewRecurrencePatternType = {
    Weekly: "weekly",
    AbsoluteMonthly: "absoluteMonthly",
} as const;

/**
 * The recurrence type : weekly, monthly, etc.
 */
export type AccessReviewRecurrencePatternType = (typeof AccessReviewRecurrencePatternType)[keyof typeof AccessReviewRecurrencePatternType];

export const AccessReviewRecurrenceRangeType = {
    EndDate: "endDate",
    NoEnd: "noEnd",
    Numbered: "numbered",
} as const;

/**
 * The recurrence range type. The possible values are: endDate, noEnd, numbered.
 */
export type AccessReviewRecurrenceRangeType = (typeof AccessReviewRecurrenceRangeType)[keyof typeof AccessReviewRecurrenceRangeType];

export const AccessReviewResult = {
    Approve: "Approve",
    Deny: "Deny",
    NotReviewed: "NotReviewed",
    DontKnow: "DontKnow",
    NotNotified: "NotNotified",
} as const;

/**
 * Represents a reviewer's decision for a given review
 */
export type AccessReviewResult = (typeof AccessReviewResult)[keyof typeof AccessReviewResult];

export const DefaultDecisionType = {
    Approve: "Approve",
    Deny: "Deny",
    Recommendation: "Recommendation",
} as const;

/**
 * This specifies the behavior for the autoReview feature when an access review completes.
 */
export type DefaultDecisionType = (typeof DefaultDecisionType)[keyof typeof DefaultDecisionType];
