import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * Defines contents of a web application rule
     */
    export interface CustomRuleArgs {
        /**
         * Describes what action to be applied when rule matches.
         */
        action: pulumi.Input<string | enums.ActionType>;
        /**
         * Describes if the custom rule is in enabled or disabled state. Defaults to Enabled if not specified.
         */
        enabledState?: pulumi.Input<string | enums.CustomRuleEnabledState>;
        /**
         * List of match conditions.
         */
        matchConditions: pulumi.Input<pulumi.Input<FrontDoorMatchConditionArgs>[]>;
        /**
         * Describes the name of the rule.
         */
        name?: pulumi.Input<string>;
        /**
         * Describes priority of the rule. Rules with a lower value will be evaluated before rules with a higher value.
         */
        priority: pulumi.Input<number>;
        /**
         * Time window for resetting the rate limit count. Default is 1 minute.
         */
        rateLimitDurationInMinutes?: pulumi.Input<number>;
        /**
         * Number of allowed requests per client within the time window.
         */
        rateLimitThreshold?: pulumi.Input<number>;
        /**
         * Describes type of rule.
         */
        ruleType: pulumi.Input<string | enums.RuleType>;
    }

    /**
     * Defines contents of custom rules
     */
    export interface CustomRuleListArgs {
        /**
         * List of rules
         */
        rules?: pulumi.Input<pulumi.Input<CustomRuleArgs>[]>;
    }

    /**
     * Defines a managed rule group override setting.
     */
    export interface FrontDoorManagedRuleGroupOverrideArgs {
        /**
         * Describes the exclusions that are applied to all rules in the group.
         */
        exclusions?: pulumi.Input<pulumi.Input<ManagedRuleExclusionArgs>[]>;
        /**
         * Describes the managed rule group to override.
         */
        ruleGroupName: pulumi.Input<string>;
        /**
         * List of rules that will be disabled. If none specified, all rules in the group will be disabled.
         */
        rules?: pulumi.Input<pulumi.Input<FrontDoorManagedRuleOverrideArgs>[]>;
    }

    /**
     * Defines a managed rule group override setting.
     */
    export interface FrontDoorManagedRuleOverrideArgs {
        /**
         * Describes the override action to be applied when rule matches.
         */
        action?: pulumi.Input<string | enums.ActionType>;
        /**
         * Describes if the managed rule is in enabled or disabled state. Defaults to Disabled if not specified.
         */
        enabledState?: pulumi.Input<string | enums.ManagedRuleEnabledState>;
        /**
         * Describes the exclusions that are applied to this specific rule.
         */
        exclusions?: pulumi.Input<pulumi.Input<ManagedRuleExclusionArgs>[]>;
        /**
         * Identifier for the managed rule.
         */
        ruleId: pulumi.Input<string>;
    }

    /**
     * Defines a managed rule set.
     */
    export interface FrontDoorManagedRuleSetArgs {
        /**
         * Describes the exclusions that are applied to all rules in the set.
         */
        exclusions?: pulumi.Input<pulumi.Input<ManagedRuleExclusionArgs>[]>;
        /**
         * Defines the rule group overrides to apply to the rule set.
         */
        ruleGroupOverrides?: pulumi.Input<pulumi.Input<FrontDoorManagedRuleGroupOverrideArgs>[]>;
        /**
         * Defines the rule set action.
         */
        ruleSetAction?: pulumi.Input<string | enums.ManagedRuleSetActionType>;
        /**
         * Defines the rule set type to use.
         */
        ruleSetType: pulumi.Input<string>;
        /**
         * Defines the version of the rule set to use.
         */
        ruleSetVersion: pulumi.Input<string>;
    }

    /**
     * Define a match condition.
     */
    export interface FrontDoorMatchConditionArgs {
        /**
         * List of possible match values.
         */
        matchValue: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * Request variable to compare with.
         */
        matchVariable: pulumi.Input<string | enums.FrontDoorMatchVariable>;
        /**
         * Describes if the result of this condition should be negated.
         */
        negateCondition?: pulumi.Input<boolean>;
        /**
         * Comparison type to use for matching with the variable value.
         */
        operator: pulumi.Input<string | enums.Operator>;
        /**
         * Match against a specific key from the QueryString, PostArgs, RequestHeader or Cookies variables. Default is null.
         */
        selector?: pulumi.Input<string>;
        /**
         * List of transforms.
         */
        transforms?: pulumi.Input<pulumi.Input<string | enums.TransformType>[]>;
    }

    /**
     * Defines top-level WebApplicationFirewallPolicy configuration settings.
     */
    export interface FrontDoorPolicySettingsArgs {
        /**
         * If the action type is block, customer can override the response body. The body must be specified in base64 encoding.
         */
        customBlockResponseBody?: pulumi.Input<string>;
        /**
         * If the action type is block, customer can override the response status code.
         */
        customBlockResponseStatusCode?: pulumi.Input<number>;
        /**
         * Describes if the policy is in enabled or disabled state. Defaults to Enabled if not specified.
         */
        enabledState?: pulumi.Input<string | enums.PolicyEnabledState>;
        /**
         * Describes if it is in detection mode or prevention mode at policy level.
         */
        mode?: pulumi.Input<string | enums.PolicyMode>;
        /**
         * If action type is redirect, this field represents redirect URL for the client.
         */
        redirectUrl?: pulumi.Input<string>;
        /**
         * Describes if policy managed rules will inspect the request body content.
         */
        requestBodyCheck?: pulumi.Input<string | enums.PolicyRequestBodyCheck>;
    }

    /**
     * Exclude variables from managed rule evaluation.
     */
    export interface ManagedRuleExclusionArgs {
        /**
         * The variable type to be excluded.
         */
        matchVariable: pulumi.Input<string | enums.ManagedRuleExclusionMatchVariable>;
        /**
         * Selector value for which elements in the collection this exclusion applies to.
         */
        selector: pulumi.Input<string>;
        /**
         * Comparison operator to apply to the selector when specifying which elements in the collection this exclusion applies to.
         */
        selectorMatchOperator: pulumi.Input<string | enums.ManagedRuleExclusionSelectorMatchOperator>;
    }

    /**
     * Defines the list of managed rule sets for the policy.
     */
    export interface ManagedRuleSetListArgs {
        /**
         * List of rule sets.
         */
        managedRuleSets?: pulumi.Input<pulumi.Input<FrontDoorManagedRuleSetArgs>[]>;
    }

    /**
     * The pricing tier of the web application firewall policy.
     */
    export interface SkuArgs {
        /**
         * Name of the pricing tier.
         */
        name?: pulumi.Input<string | enums.SkuName>;
    }
