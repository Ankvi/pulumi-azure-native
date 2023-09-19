export const AccessReviewRecurrencePatternType = {
    Weekly: "weekly",
    AbsoluteMonthly: "absoluteMonthly",
} as const;

export type AccessReviewRecurrencePatternType = (typeof AccessReviewRecurrencePatternType)[keyof typeof AccessReviewRecurrencePatternType];

export const AccessReviewRecurrenceRangeType = {
    EndDate: "endDate",
    NoEnd: "noEnd",
    Numbered: "numbered",
} as const;

export type AccessReviewRecurrenceRangeType = (typeof AccessReviewRecurrenceRangeType)[keyof typeof AccessReviewRecurrenceRangeType];

export const AccessReviewResult = {
    Approve: "Approve",
    Deny: "Deny",
    NotReviewed: "NotReviewed",
    DontKnow: "DontKnow",
    NotNotified: "NotNotified",
} as const;

export type AccessReviewResult = (typeof AccessReviewResult)[keyof typeof AccessReviewResult];

export const DefaultDecisionType = {
    Approve: "Approve",
    Deny: "Deny",
    Recommendation: "Recommendation",
} as const;

export type DefaultDecisionType = (typeof DefaultDecisionType)[keyof typeof DefaultDecisionType];
