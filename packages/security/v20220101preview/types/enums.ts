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

export type GovernanceRuleOwnerSourceType = (typeof GovernanceRuleOwnerSourceType)[keyof typeof GovernanceRuleOwnerSourceType];

export const GovernanceRuleSourceResourceType = {
    /**
     * The source of the governance rule is assessments
     */
    Assessments: "Assessments",
} as const;

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

export type GovernanceRuleType = (typeof GovernanceRuleType)[keyof typeof GovernanceRuleType];
