export const GovernanceRuleOwnerSourceType = {
    /**
     * The rule source type defined using resource tag
     */
    ByTag: "ByTag",
    /**
     * The rule source type defined manually
     */
    Manually: "Manually",
} as const;

/**
 * The owner type for the governance rule owner source
 */
export type GovernanceRuleOwnerSourceType = (typeof GovernanceRuleOwnerSourceType)[keyof typeof GovernanceRuleOwnerSourceType];

export const GovernanceRuleSourceResourceType = {
    /**
     * The source of the governance rule is assessments
     */
    Assessments: "Assessments",
} as const;

/**
 * The governance rule source, what the rule affects, e.g. Assessments
 */
export type GovernanceRuleSourceResourceType = (typeof GovernanceRuleSourceResourceType)[keyof typeof GovernanceRuleSourceResourceType];

export const GovernanceRuleType = {
    /**
     * The source of the rule type definition is integrated
     */
    Integrated: "Integrated",
    /**
     * The source of the rule type definition is ServiceNow
     */
    ServiceNow: "ServiceNow",
} as const;

/**
 * The rule type of the governance rule, defines the source of the rule e.g. Integrated
 */
export type GovernanceRuleType = (typeof GovernanceRuleType)[keyof typeof GovernanceRuleType];
