import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * Autoscale notification.
     */
    export interface AutoscaleNotificationResponse {
        /**
         * the email notification.
         */
        email?: EmailNotificationResponse;
        /**
         * the operation associated with the notification and its value must be "scale"
         */
        operation: string;
        /**
         * the collection of webhook notifications.
         */
        webhooks?: WebhookNotificationResponse[];
    }
    /**
     * autoscaleNotificationResponseProvideDefaults sets the appropriate defaults for AutoscaleNotificationResponse
     */
    export function autoscaleNotificationResponseProvideDefaults(val: AutoscaleNotificationResponse): AutoscaleNotificationResponse {
        return {
            ...val,
            email: (val.email ? emailNotificationResponseProvideDefaults(val.email) : undefined),
        };
    }

    /**
     * Autoscale profile.
     */
    export interface AutoscaleProfileResponse {
        /**
         * the number of instances that can be used during this profile.
         */
        capacity: ScaleCapacityResponse;
        /**
         * the specific date-time for the profile. This element is not used if the Recurrence element is used.
         */
        fixedDate?: TimeWindowResponse;
        /**
         * the name of the profile.
         */
        name: string;
        /**
         * the repeating times at which this profile begins. This element is not used if the FixedDate element is used.
         */
        recurrence?: RecurrenceResponse;
        /**
         * the collection of rules that provide the triggers and parameters for the scaling action. A maximum of 10 rules can be specified.
         */
        rules: ScaleRuleResponse[];
    }

    /**
     * Email notification of an autoscale event.
     */
    export interface EmailNotificationResponse {
        /**
         * the custom e-mails list. This value can be null or empty, in which case this attribute will be ignored.
         */
        customEmails?: string[];
        /**
         * a value indicating whether to send email to subscription administrator.
         */
        sendToSubscriptionAdministrator?: boolean;
        /**
         * a value indicating whether to send email to subscription co-administrators.
         */
        sendToSubscriptionCoAdministrators?: boolean;
    }
    /**
     * emailNotificationResponseProvideDefaults sets the appropriate defaults for EmailNotificationResponse
     */
    export function emailNotificationResponseProvideDefaults(val: EmailNotificationResponse): EmailNotificationResponse {
        return {
            ...val,
            sendToSubscriptionAdministrator: (val.sendToSubscriptionAdministrator) ?? false,
            sendToSubscriptionCoAdministrators: (val.sendToSubscriptionCoAdministrators) ?? false,
        };
    }

    /**
     * The trigger that results in a scaling action.
     */
    export interface MetricTriggerResponse {
        /**
         * List of dimension conditions. For example: [{"DimensionName":"AppName","Operator":"Equals","Values":["App1"]},{"DimensionName":"Deployment","Operator":"Equals","Values":["default"]}].
         */
        dimensions?: ScaleRuleMetricDimensionResponse[];
        /**
         * a value indicating whether metric should divide per instance.
         */
        dividePerInstance?: boolean;
        /**
         * the name of the metric that defines what the rule monitors.
         */
        metricName: string;
        /**
         * the namespace of the metric that defines what the rule monitors.
         */
        metricNamespace?: string;
        /**
         * the location of the resource the rule monitors.
         */
        metricResourceLocation?: string;
        /**
         * the resource identifier of the resource the rule monitors.
         */
        metricResourceUri: string;
        /**
         * the operator that is used to compare the metric data and the threshold.
         */
        operator: string;
        /**
         * the metric statistic type. How the metrics from multiple instances are combined.
         */
        statistic: string;
        /**
         * the threshold of the metric that triggers the scale action.
         */
        threshold: number;
        /**
         * time aggregation type. How the data that is collected should be combined over time. The default value is Average.
         */
        timeAggregation: string;
        /**
         * the granularity of metrics the rule monitors. Must be one of the predefined values returned from metric definitions for the metric. Must be between 12 hours and 1 minute.
         */
        timeGrain: string;
        /**
         * the range of time in which instance data is collected. This value must be greater than the delay in metric collection, which can vary from resource-to-resource. Must be between 12 hours and 5 minutes.
         */
        timeWindow: string;
    }

    /**
     * The parameters for enabling predictive autoscale.
     */
    export interface PredictiveAutoscalePolicyResponse {
        /**
         * the amount of time to specify by which instances are launched in advance. It must be between 1 minute and 60 minutes in ISO 8601 format.
         */
        scaleLookAheadTime?: string;
        /**
         * the predictive autoscale mode
         */
        scaleMode: string;
    }

    /**
     * The repeating times at which this profile begins. This element is not used if the FixedDate element is used.
     */
    export interface RecurrenceResponse {
        /**
         * the recurrence frequency. How often the schedule profile should take effect. This value must be Week, meaning each week will have the same set of profiles. For example, to set a daily schedule, set **schedule** to every day of the week. The frequency property specifies that the schedule is repeated weekly.
         */
        frequency: string;
        /**
         * the scheduling constraints for when the profile begins.
         */
        schedule: RecurrentScheduleResponse;
    }

    /**
     * The scheduling constraints for when the profile begins.
     */
    export interface RecurrentScheduleResponse {
        /**
         * the collection of days that the profile takes effect on. Possible values are Sunday through Saturday.
         */
        days: string[];
        /**
         * A collection of hours that the profile takes effect on. Values supported are 0 to 23 on the 24-hour clock (AM/PM times are not supported).
         */
        hours: number[];
        /**
         * A collection of minutes at which the profile takes effect at.
         */
        minutes: number[];
        /**
         * the timezone for the hours of the profile. Some examples of valid time zones are: Dateline Standard Time, UTC-11, Hawaiian Standard Time, Alaskan Standard Time, Pacific Standard Time (Mexico), Pacific Standard Time, US Mountain Standard Time, Mountain Standard Time (Mexico), Mountain Standard Time, Central America Standard Time, Central Standard Time, Central Standard Time (Mexico), Canada Central Standard Time, SA Pacific Standard Time, Eastern Standard Time, US Eastern Standard Time, Venezuela Standard Time, Paraguay Standard Time, Atlantic Standard Time, Central Brazilian Standard Time, SA Western Standard Time, Pacific SA Standard Time, Newfoundland Standard Time, E. South America Standard Time, Argentina Standard Time, SA Eastern Standard Time, Greenland Standard Time, Montevideo Standard Time, Bahia Standard Time, UTC-02, Mid-Atlantic Standard Time, Azores Standard Time, Cape Verde Standard Time, Morocco Standard Time, UTC, GMT Standard Time, Greenwich Standard Time, W. Europe Standard Time, Central Europe Standard Time, Romance Standard Time, Central European Standard Time, W. Central Africa Standard Time, Namibia Standard Time, Jordan Standard Time, GTB Standard Time, Middle East Standard Time, Egypt Standard Time, Syria Standard Time, E. Europe Standard Time, South Africa Standard Time, FLE Standard Time, Turkey Standard Time, Israel Standard Time, Kaliningrad Standard Time, Libya Standard Time, Arabic Standard Time, Arab Standard Time, Belarus Standard Time, Russian Standard Time, E. Africa Standard Time, Iran Standard Time, Arabian Standard Time, Azerbaijan Standard Time, Russia Time Zone 3, Mauritius Standard Time, Georgian Standard Time, Caucasus Standard Time, Afghanistan Standard Time, West Asia Standard Time, Ekaterinburg Standard Time, Pakistan Standard Time, India Standard Time, Sri Lanka Standard Time, Nepal Standard Time, Central Asia Standard Time, Bangladesh Standard Time, N. Central Asia Standard Time, Myanmar Standard Time, SE Asia Standard Time, North Asia Standard Time, China Standard Time, North Asia East Standard Time, Singapore Standard Time, W. Australia Standard Time, Taipei Standard Time, Ulaanbaatar Standard Time, Tokyo Standard Time, Korea Standard Time, Yakutsk Standard Time, Cen. Australia Standard Time, AUS Central Standard Time, E. Australia Standard Time, AUS Eastern Standard Time, West Pacific Standard Time, Tasmania Standard Time, Magadan Standard Time, Vladivostok Standard Time, Russia Time Zone 10, Central Pacific Standard Time, Russia Time Zone 11, New Zealand Standard Time, UTC+12, Fiji Standard Time, Kamchatka Standard Time, Tonga Standard Time, Samoa Standard Time, Line Islands Standard Time
         */
        timeZone: string;
    }

    /**
     * The parameters for the scaling action.
     */
    export interface ScaleActionResponse {
        /**
         * the amount of time to wait since the last scaling action before this action occurs. It must be between 1 week and 1 minute in ISO 8601 format.
         */
        cooldown: string;
        /**
         * the scale direction. Whether the scaling action increases or decreases the number of instances.
         */
        direction: string;
        /**
         * the type of action that should occur when the scale rule fires.
         */
        type: string;
        /**
         * the number of instances that are involved in the scaling action. This value must be 1 or greater. The default value is 1.
         */
        value?: string;
    }
    /**
     * scaleActionResponseProvideDefaults sets the appropriate defaults for ScaleActionResponse
     */
    export function scaleActionResponseProvideDefaults(val: ScaleActionResponse): ScaleActionResponse {
        return {
            ...val,
            value: (val.value) ?? "1",
        };
    }

    /**
     * The number of instances that can be used during this profile.
     */
    export interface ScaleCapacityResponse {
        /**
         * the number of instances that will be set if metrics are not available for evaluation. The default is only used if the current instance count is lower than the default.
         */
        default: string;
        /**
         * the maximum number of instances for the resource. The actual maximum number of instances is limited by the cores that are available in the subscription.
         */
        maximum: string;
        /**
         * the minimum number of instances for the resource.
         */
        minimum: string;
    }

    /**
     * Specifies an auto scale rule metric dimension.
     */
    export interface ScaleRuleMetricDimensionResponse {
        /**
         * Name of the dimension.
         */
        dimensionName: string;
        /**
         * the dimension operator. Only 'Equals' and 'NotEquals' are supported. 'Equals' being equal to any of the values. 'NotEquals' being not equal to all of the values
         */
        operator: string;
        /**
         * list of dimension values. For example: ["App1","App2"].
         */
        values: string[];
    }

    /**
     * A rule that provide the triggers and parameters for the scaling action.
     */
    export interface ScaleRuleResponse {
        /**
         * the trigger that results in a scaling action.
         */
        metricTrigger: MetricTriggerResponse;
        /**
         * the parameters for the scaling action.
         */
        scaleAction: ScaleActionResponse;
    }
    /**
     * scaleRuleResponseProvideDefaults sets the appropriate defaults for ScaleRuleResponse
     */
    export function scaleRuleResponseProvideDefaults(val: ScaleRuleResponse): ScaleRuleResponse {
        return {
            ...val,
            scaleAction: scaleActionResponseProvideDefaults(val.scaleAction),
        };
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
     * A specific date-time for the profile.
     */
    export interface TimeWindowResponse {
        /**
         * the end time for the profile in ISO 8601 format.
         */
        end: string;
        /**
         * the start time for the profile in ISO 8601 format.
         */
        start: string;
        /**
         * the timezone of the start and end times for the profile. Some examples of valid time zones are: Dateline Standard Time, UTC-11, Hawaiian Standard Time, Alaskan Standard Time, Pacific Standard Time (Mexico), Pacific Standard Time, US Mountain Standard Time, Mountain Standard Time (Mexico), Mountain Standard Time, Central America Standard Time, Central Standard Time, Central Standard Time (Mexico), Canada Central Standard Time, SA Pacific Standard Time, Eastern Standard Time, US Eastern Standard Time, Venezuela Standard Time, Paraguay Standard Time, Atlantic Standard Time, Central Brazilian Standard Time, SA Western Standard Time, Pacific SA Standard Time, Newfoundland Standard Time, E. South America Standard Time, Argentina Standard Time, SA Eastern Standard Time, Greenland Standard Time, Montevideo Standard Time, Bahia Standard Time, UTC-02, Mid-Atlantic Standard Time, Azores Standard Time, Cape Verde Standard Time, Morocco Standard Time, UTC, GMT Standard Time, Greenwich Standard Time, W. Europe Standard Time, Central Europe Standard Time, Romance Standard Time, Central European Standard Time, W. Central Africa Standard Time, Namibia Standard Time, Jordan Standard Time, GTB Standard Time, Middle East Standard Time, Egypt Standard Time, Syria Standard Time, E. Europe Standard Time, South Africa Standard Time, FLE Standard Time, Turkey Standard Time, Israel Standard Time, Kaliningrad Standard Time, Libya Standard Time, Arabic Standard Time, Arab Standard Time, Belarus Standard Time, Russian Standard Time, E. Africa Standard Time, Iran Standard Time, Arabian Standard Time, Azerbaijan Standard Time, Russia Time Zone 3, Mauritius Standard Time, Georgian Standard Time, Caucasus Standard Time, Afghanistan Standard Time, West Asia Standard Time, Ekaterinburg Standard Time, Pakistan Standard Time, India Standard Time, Sri Lanka Standard Time, Nepal Standard Time, Central Asia Standard Time, Bangladesh Standard Time, N. Central Asia Standard Time, Myanmar Standard Time, SE Asia Standard Time, North Asia Standard Time, China Standard Time, North Asia East Standard Time, Singapore Standard Time, W. Australia Standard Time, Taipei Standard Time, Ulaanbaatar Standard Time, Tokyo Standard Time, Korea Standard Time, Yakutsk Standard Time, Cen. Australia Standard Time, AUS Central Standard Time, E. Australia Standard Time, AUS Eastern Standard Time, West Pacific Standard Time, Tasmania Standard Time, Magadan Standard Time, Vladivostok Standard Time, Russia Time Zone 10, Central Pacific Standard Time, Russia Time Zone 11, New Zealand Standard Time, UTC+12, Fiji Standard Time, Kamchatka Standard Time, Tonga Standard Time, Samoa Standard Time, Line Islands Standard Time
         */
        timeZone?: string;
    }

    /**
     * Webhook notification of an autoscale event.
     */
    export interface WebhookNotificationResponse {
        /**
         * a property bag of settings. This value can be empty.
         */
        properties?: {[key: string]: string};
        /**
         * the service address to receive the notification.
         */
        serviceUri?: string;
    }
