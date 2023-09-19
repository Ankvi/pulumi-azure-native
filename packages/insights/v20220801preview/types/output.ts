import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * Actions to invoke when the alert fires.
     */
    export interface ActionsResponse {
        /**
         * Action Group resource Ids to invoke when the alert fires.
         */
        actionGroups?: string[];
        /**
         * The properties of an alert payload.
         */
        customProperties?: {[key: string]: string};
    }

    /**
     * A condition of the scheduled query rule.
     */
    export interface ConditionResponse {
        /**
         * List of Dimensions conditions
         */
        dimensions?: DimensionResponse[];
        /**
         * The minimum number of violations required within the selected lookback time window required to raise an alert. Relevant only for rules of the kind LogAlert.
         */
        failingPeriods?: ConditionResponseFailingPeriods;
        /**
         * The column containing the metric measure number. Relevant only for rules of the kind LogAlert.
         */
        metricMeasureColumn?: string;
        /**
         * The name of the metric to be sent. Relevant and required only for rules of the kind LogToMetric.
         */
        metricName?: string;
        /**
         * The criteria operator. Relevant and required only for rules of the kind LogAlert.
         */
        operator?: string;
        /**
         * Log query alert
         */
        query?: string;
        /**
         * The column containing the resource id. The content of the column must be a uri formatted as resource id. Relevant only for rules of the kind LogAlert.
         */
        resourceIdColumn?: string;
        /**
         * the criteria threshold value that activates the alert. Relevant and required only for rules of the kind LogAlert.
         */
        threshold?: number;
        /**
         * Aggregation type. Relevant and required only for rules of the kind LogAlert.
         */
        timeAggregation?: string;
    }
    /**
     * conditionResponseProvideDefaults sets the appropriate defaults for ConditionResponse
     */
    export function conditionResponseProvideDefaults(val: ConditionResponse): ConditionResponse {
        return {
            ...val,
            failingPeriods: (val.failingPeriods ? conditionResponseFailingPeriodsProvideDefaults(val.failingPeriods) : undefined),
        };
    }

    /**
     * The minimum number of violations required within the selected lookback time window required to raise an alert. Relevant only for rules of the kind LogAlert.
     */
    export interface ConditionResponseFailingPeriods {
        /**
         * The number of violations to trigger an alert. Should be smaller or equal to numberOfEvaluationPeriods. Default value is 1
         */
        minFailingPeriodsToAlert?: number;
        /**
         * The number of aggregated lookback points. The lookback time window is calculated based on the aggregation granularity (windowSize) and the selected number of aggregated points. Default value is 1
         */
        numberOfEvaluationPeriods?: number;
    }
    /**
     * conditionResponseFailingPeriodsProvideDefaults sets the appropriate defaults for ConditionResponseFailingPeriods
     */
    export function conditionResponseFailingPeriodsProvideDefaults(val: ConditionResponseFailingPeriods): ConditionResponseFailingPeriods {
        return {
            ...val,
            minFailingPeriodsToAlert: (val.minFailingPeriodsToAlert) ?? 1,
            numberOfEvaluationPeriods: (val.numberOfEvaluationPeriods) ?? 1,
        };
    }

    /**
     * Dimension splitting and filtering definition
     */
    export interface DimensionResponse {
        /**
         * Name of the dimension
         */
        name: string;
        /**
         * Operator for dimension values
         */
        operator: string;
        /**
         * List of dimension values
         */
        values: string[];
    }

    /**
     * Identity for the resource.
     */
    export interface IdentityResponse {
        /**
         * The principal ID of resource identity.
         */
        principalId: string;
        /**
         * The tenant ID of resource.
         */
        tenantId: string;
        /**
         * Type of managed service identity.
         */
        type: string;
        /**
         * The list of user identities associated with the resource. The user identity dictionary key references will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'.
         */
        userAssignedIdentities?: {[key: string]: UserIdentityPropertiesResponse};
    }

    /**
     * TBD. Relevant only for rules of the kind LogAlert.
     */
    export interface RuleResolveConfigurationResponse {
        /**
         * The flag that indicates whether or not to auto resolve a fired alert.
         */
        autoResolved?: boolean;
        /**
         * The duration a rule must evaluate as healthy before the fired alert is automatically resolved represented in ISO 8601 duration format.
         */
        timeToResolve?: string;
    }

    /**
     * The rule criteria that defines the conditions of the scheduled query rule.
     */
    export interface ScheduledQueryRuleCriteriaResponse {
        /**
         * A list of conditions to evaluate against the specified scopes
         */
        allOf?: ConditionResponse[];
    }

    /**
     * Metadata pertaining to creation and last modification of the resource.
     */
    export interface SystemDataResponse {
        /**
         * The timestamp of resource creation (UTC).
         */
        createdAt?: string;
        /**
         * The identity that created the resource.
         */
        createdBy?: string;
        /**
         * The type of identity that created the resource.
         */
        createdByType?: string;
        /**
         * The timestamp of resource last modification (UTC)
         */
        lastModifiedAt?: string;
        /**
         * The identity that last modified the resource.
         */
        lastModifiedBy?: string;
        /**
         * The type of identity that last modified the resource.
         */
        lastModifiedByType?: string;
    }

    /**
     * User assigned identity properties.
     */
    export interface UserIdentityPropertiesResponse {
        /**
         * The client id of user assigned identity.
         */
        clientId: string;
        /**
         * The principal id of user assigned identity.
         */
        principalId: string;
    }
