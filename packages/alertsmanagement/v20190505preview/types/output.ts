import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * Action rule with action group configuration
     */
    export interface ActionGroupResponse {
        /**
         * Action group to trigger if action rule matches
         */
        actionGroupId: string;
        /**
         * conditions on which alerts will be filtered
         */
        conditions?: ConditionsResponse;
        /**
         * Creation time of action rule. Date-Time in ISO-8601 format.
         */
        createdAt: string;
        /**
         * Created by user name.
         */
        createdBy: string;
        /**
         * Description of action rule
         */
        description?: string;
        /**
         * Last updated time of action rule. Date-Time in ISO-8601 format.
         */
        lastModifiedAt: string;
        /**
         * Last modified by user name.
         */
        lastModifiedBy: string;
        /**
         * scope on which action rule will apply
         */
        scope?: ScopeResponse;
        /**
         * Indicates if the given action rule is enabled or disabled
         */
        status?: string;
        /**
         * Indicates type of action rule
         * Expected value is 'ActionGroup'.
         */
        type: "ActionGroup";
    }

    /**
     * condition to trigger an action rule
     */
    export interface ConditionResponse {
        /**
         * operator for a given condition
         */
        operator?: string;
        /**
         * list of values to match for a given condition.
         */
        values?: string[];
    }

    /**
     * Conditions in alert instance to be matched for a given action rule. Default value is all. Multiple values could be provided with comma separation.
     */
    export interface ConditionsResponse {
        /**
         * filter alerts by alert context (payload)
         */
        alertContext?: ConditionResponse;
        /**
         * filter alerts by alert rule id
         */
        alertRuleId?: ConditionResponse;
        /**
         * filter alerts by alert rule name
         */
        alertRuleName?: ConditionResponse;
        /**
         * filter alerts by alert rule description
         */
        description?: ConditionResponse;
        /**
         * filter alerts by monitor condition
         */
        monitorCondition?: ConditionResponse;
        /**
         * filter alerts by monitor service
         */
        monitorService?: ConditionResponse;
        /**
         * filter alerts by severity
         */
        severity?: ConditionResponse;
        /**
         * filter alerts by target resource type
         */
        targetResourceType?: ConditionResponse;
    }

    /**
     * Action rule with diagnostics configuration
     */
    export interface DiagnosticsResponse {
        /**
         * conditions on which alerts will be filtered
         */
        conditions?: ConditionsResponse;
        /**
         * Creation time of action rule. Date-Time in ISO-8601 format.
         */
        createdAt: string;
        /**
         * Created by user name.
         */
        createdBy: string;
        /**
         * Description of action rule
         */
        description?: string;
        /**
         * Last updated time of action rule. Date-Time in ISO-8601 format.
         */
        lastModifiedAt: string;
        /**
         * Last modified by user name.
         */
        lastModifiedBy: string;
        /**
         * scope on which action rule will apply
         */
        scope?: ScopeResponse;
        /**
         * Indicates if the given action rule is enabled or disabled
         */
        status?: string;
        /**
         * Indicates type of action rule
         * Expected value is 'Diagnostics'.
         */
        type: "Diagnostics";
    }

    /**
     * Target scope for a given action rule. By default scope will be the subscription. User can also provide list of resource groups or list of resources from the scope subscription as well.
     */
    export interface ScopeResponse {
        /**
         * type of target scope
         */
        scopeType?: string;
        /**
         * list of ARM IDs of the given scope type which will be the target of the given action rule.
         */
        values?: string[];
    }

    /**
     * Suppression logic for a given action rule
     */
    export interface SuppressionConfigResponse {
        /**
         * Specifies when the suppression should be applied
         */
        recurrenceType: string;
        /**
         * suppression schedule configuration
         */
        schedule?: SuppressionScheduleResponse;
    }

    /**
     * Action rule with suppression configuration
     */
    export interface SuppressionResponse {
        /**
         * conditions on which alerts will be filtered
         */
        conditions?: ConditionsResponse;
        /**
         * Creation time of action rule. Date-Time in ISO-8601 format.
         */
        createdAt: string;
        /**
         * Created by user name.
         */
        createdBy: string;
        /**
         * Description of action rule
         */
        description?: string;
        /**
         * Last updated time of action rule. Date-Time in ISO-8601 format.
         */
        lastModifiedAt: string;
        /**
         * Last modified by user name.
         */
        lastModifiedBy: string;
        /**
         * scope on which action rule will apply
         */
        scope?: ScopeResponse;
        /**
         * Indicates if the given action rule is enabled or disabled
         */
        status?: string;
        /**
         * suppression configuration for the action rule
         */
        suppressionConfig: SuppressionConfigResponse;
        /**
         * Indicates type of action rule
         * Expected value is 'Suppression'.
         */
        type: "Suppression";
    }

    /**
     * Schedule for a given suppression configuration.
     */
    export interface SuppressionScheduleResponse {
        /**
         * End date for suppression
         */
        endDate?: string;
        /**
         * End date for suppression
         */
        endTime?: string;
        /**
         * Specifies the values for recurrence pattern
         */
        recurrenceValues?: number[];
        /**
         * Start date for suppression
         */
        startDate?: string;
        /**
         * Start time for suppression
         */
        startTime?: string;
    }
