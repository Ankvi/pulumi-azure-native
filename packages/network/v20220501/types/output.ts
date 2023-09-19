import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * Defines contents of custom rules
     */
    export interface CustomRuleListResponse {
        /**
         * List of rules
         */
        rules?: CustomRuleResponse[];
    }

    /**
     * Defines contents of a web application rule
     */
    export interface CustomRuleResponse {
        /**
         * Describes what action to be applied when rule matches.
         */
        action: string;
        /**
         * Describes if the custom rule is in enabled or disabled state. Defaults to Enabled if not specified.
         */
        enabledState?: string;
        /**
         * List of match conditions.
         */
        matchConditions: FrontDoorMatchConditionResponse[];
        /**
         * Describes the name of the rule.
         */
        name?: string;
        /**
         * Describes priority of the rule. Rules with a lower value will be evaluated before rules with a higher value.
         */
        priority: number;
        /**
         * Time window for resetting the rate limit count. Default is 1 minute.
         */
        rateLimitDurationInMinutes?: number;
        /**
         * Number of allowed requests per client within the time window.
         */
        rateLimitThreshold?: number;
        /**
         * Describes type of rule.
         */
        ruleType: string;
    }

    /**
     * Defines a managed rule group override setting.
     */
    export interface FrontDoorManagedRuleGroupOverrideResponse {
        /**
         * Describes the exclusions that are applied to all rules in the group.
         */
        exclusions?: ManagedRuleExclusionResponse[];
        /**
         * Describes the managed rule group to override.
         */
        ruleGroupName: string;
        /**
         * List of rules that will be disabled. If none specified, all rules in the group will be disabled.
         */
        rules?: FrontDoorManagedRuleOverrideResponse[];
    }

    /**
     * Defines a managed rule group override setting.
     */
    export interface FrontDoorManagedRuleOverrideResponse {
        /**
         * Describes the override action to be applied when rule matches.
         */
        action?: string;
        /**
         * Describes if the managed rule is in enabled or disabled state. Defaults to Disabled if not specified.
         */
        enabledState?: string;
        /**
         * Describes the exclusions that are applied to this specific rule.
         */
        exclusions?: ManagedRuleExclusionResponse[];
        /**
         * Identifier for the managed rule.
         */
        ruleId: string;
    }

    /**
     * Defines a managed rule set.
     */
    export interface FrontDoorManagedRuleSetResponse {
        /**
         * Describes the exclusions that are applied to all rules in the set.
         */
        exclusions?: ManagedRuleExclusionResponse[];
        /**
         * Defines the rule group overrides to apply to the rule set.
         */
        ruleGroupOverrides?: FrontDoorManagedRuleGroupOverrideResponse[];
        /**
         * Defines the rule set action.
         */
        ruleSetAction?: string;
        /**
         * Defines the rule set type to use.
         */
        ruleSetType: string;
        /**
         * Defines the version of the rule set to use.
         */
        ruleSetVersion: string;
    }

    /**
     * Define a match condition.
     */
    export interface FrontDoorMatchConditionResponse {
        /**
         * List of possible match values.
         */
        matchValue: string[];
        /**
         * Request variable to compare with.
         */
        matchVariable: string;
        /**
         * Describes if the result of this condition should be negated.
         */
        negateCondition?: boolean;
        /**
         * Comparison type to use for matching with the variable value.
         */
        operator: string;
        /**
         * Match against a specific key from the QueryString, PostArgs, RequestHeader or Cookies variables. Default is null.
         */
        selector?: string;
        /**
         * List of transforms.
         */
        transforms?: string[];
    }

    /**
     * Defines top-level WebApplicationFirewallPolicy configuration settings.
     */
    export interface FrontDoorPolicySettingsResponse {
        /**
         * If the action type is block, customer can override the response body. The body must be specified in base64 encoding.
         */
        customBlockResponseBody?: string;
        /**
         * If the action type is block, customer can override the response status code.
         */
        customBlockResponseStatusCode?: number;
        /**
         * Describes if the policy is in enabled or disabled state. Defaults to Enabled if not specified.
         */
        enabledState?: string;
        /**
         * Describes if it is in detection mode or prevention mode at policy level.
         */
        mode?: string;
        /**
         * If action type is redirect, this field represents redirect URL for the client.
         */
        redirectUrl?: string;
        /**
         * Describes if policy managed rules will inspect the request body content.
         */
        requestBodyCheck?: string;
    }

    /**
     * Defines the Resource ID for a Frontend Endpoint.
     */
    export interface FrontendEndpointLinkResponse {
        /**
         * Resource ID.
         */
        id?: string;
    }

    /**
     * Exclude variables from managed rule evaluation.
     */
    export interface ManagedRuleExclusionResponse {
        /**
         * The variable type to be excluded.
         */
        matchVariable: string;
        /**
         * Selector value for which elements in the collection this exclusion applies to.
         */
        selector: string;
        /**
         * Comparison operator to apply to the selector when specifying which elements in the collection this exclusion applies to.
         */
        selectorMatchOperator: string;
    }

    /**
     * Defines the list of managed rule sets for the policy.
     */
    export interface ManagedRuleSetListResponse {
        /**
         * List of rule sets.
         */
        managedRuleSets?: FrontDoorManagedRuleSetResponse[];
    }

    /**
     * Defines the Resource ID for a Routing Rule.
     */
    export interface RoutingRuleLinkResponse {
        /**
         * Resource ID.
         */
        id?: string;
    }

    /**
     * Defines the Resource ID for a Security Policy.
     */
    export interface SecurityPolicyLinkResponse {
        /**
         * Resource ID.
         */
        id?: string;
    }

    /**
     * The pricing tier of the web application firewall policy.
     */
    export interface SkuResponse {
        /**
         * Name of the pricing tier.
         */
        name?: string;
    }

    /**
     * Reference to another subresource.
     */
    export interface SubResourceResponse {
        /**
         * Resource ID.
         */
        id?: string;
    }
