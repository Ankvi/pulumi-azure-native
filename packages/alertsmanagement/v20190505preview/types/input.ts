import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * Action rule with action group configuration
     */
    export interface ActionGroupArgs {
        /**
         * Action group to trigger if action rule matches
         */
        actionGroupId: pulumi.Input<string>;
        /**
         * conditions on which alerts will be filtered
         */
        conditions?: pulumi.Input<ConditionsArgs>;
        /**
         * Description of action rule
         */
        description?: pulumi.Input<string>;
        /**
         * scope on which action rule will apply
         */
        scope?: pulumi.Input<ScopeArgs>;
        /**
         * Indicates if the given action rule is enabled or disabled
         */
        status?: pulumi.Input<string | enums.ActionRuleStatus>;
        /**
         * Indicates type of action rule
         * Expected value is 'ActionGroup'.
         */
        type: pulumi.Input<"ActionGroup">;
    }

    /**
     * condition to trigger an action rule
     */
    export interface ConditionArgs {
        /**
         * operator for a given condition
         */
        operator?: pulumi.Input<string | enums.Operator>;
        /**
         * list of values to match for a given condition.
         */
        values?: pulumi.Input<pulumi.Input<string>[]>;
    }

    /**
     * Conditions in alert instance to be matched for a given action rule. Default value is all. Multiple values could be provided with comma separation.
     */
    export interface ConditionsArgs {
        /**
         * filter alerts by alert context (payload)
         */
        alertContext?: pulumi.Input<ConditionArgs>;
        /**
         * filter alerts by alert rule id
         */
        alertRuleId?: pulumi.Input<ConditionArgs>;
        /**
         * filter alerts by alert rule name
         */
        alertRuleName?: pulumi.Input<ConditionArgs>;
        /**
         * filter alerts by alert rule description
         */
        description?: pulumi.Input<ConditionArgs>;
        /**
         * filter alerts by monitor condition
         */
        monitorCondition?: pulumi.Input<ConditionArgs>;
        /**
         * filter alerts by monitor service
         */
        monitorService?: pulumi.Input<ConditionArgs>;
        /**
         * filter alerts by severity
         */
        severity?: pulumi.Input<ConditionArgs>;
        /**
         * filter alerts by target resource type
         */
        targetResourceType?: pulumi.Input<ConditionArgs>;
    }

    /**
     * Action rule with diagnostics configuration
     */
    export interface DiagnosticsArgs {
        /**
         * conditions on which alerts will be filtered
         */
        conditions?: pulumi.Input<ConditionsArgs>;
        /**
         * Description of action rule
         */
        description?: pulumi.Input<string>;
        /**
         * scope on which action rule will apply
         */
        scope?: pulumi.Input<ScopeArgs>;
        /**
         * Indicates if the given action rule is enabled or disabled
         */
        status?: pulumi.Input<string | enums.ActionRuleStatus>;
        /**
         * Indicates type of action rule
         * Expected value is 'Diagnostics'.
         */
        type: pulumi.Input<"Diagnostics">;
    }

    /**
     * Target scope for a given action rule. By default scope will be the subscription. User can also provide list of resource groups or list of resources from the scope subscription as well.
     */
    export interface ScopeArgs {
        /**
         * type of target scope
         */
        scopeType?: pulumi.Input<string | enums.ScopeType>;
        /**
         * list of ARM IDs of the given scope type which will be the target of the given action rule.
         */
        values?: pulumi.Input<pulumi.Input<string>[]>;
    }

    /**
     * Action rule with suppression configuration
     */
    export interface SuppressionArgs {
        /**
         * conditions on which alerts will be filtered
         */
        conditions?: pulumi.Input<ConditionsArgs>;
        /**
         * Description of action rule
         */
        description?: pulumi.Input<string>;
        /**
         * scope on which action rule will apply
         */
        scope?: pulumi.Input<ScopeArgs>;
        /**
         * Indicates if the given action rule is enabled or disabled
         */
        status?: pulumi.Input<string | enums.ActionRuleStatus>;
        /**
         * suppression configuration for the action rule
         */
        suppressionConfig: pulumi.Input<SuppressionConfigArgs>;
        /**
         * Indicates type of action rule
         * Expected value is 'Suppression'.
         */
        type: pulumi.Input<"Suppression">;
    }

    /**
     * Suppression logic for a given action rule
     */
    export interface SuppressionConfigArgs {
        /**
         * Specifies when the suppression should be applied
         */
        recurrenceType: pulumi.Input<string | enums.SuppressionType>;
        /**
         * suppression schedule configuration
         */
        schedule?: pulumi.Input<SuppressionScheduleArgs>;
    }

    /**
     * Schedule for a given suppression configuration.
     */
    export interface SuppressionScheduleArgs {
        /**
         * End date for suppression
         */
        endDate?: pulumi.Input<string>;
        /**
         * End date for suppression
         */
        endTime?: pulumi.Input<string>;
        /**
         * Specifies the values for recurrence pattern
         */
        recurrenceValues?: pulumi.Input<pulumi.Input<number>[]>;
        /**
         * Start date for suppression
         */
        startDate?: pulumi.Input<string>;
        /**
         * Start time for suppression
         */
        startTime?: pulumi.Input<string>;
    }
