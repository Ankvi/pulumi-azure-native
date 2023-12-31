import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * Properties of the additional workspaces.
     */
    export interface AdditionalWorkspacesPropertiesArgs {
        /**
         * List of data types sent to workspace
         */
        dataTypes?: pulumi.Input<pulumi.Input<string | enums.AdditionalWorkspaceDataType>[]>;
        /**
         * Workspace type.
         */
        type?: pulumi.Input<string | enums.AdditionalWorkspaceType>;
        /**
         * Workspace resource id
         */
        workspace?: pulumi.Input<string>;
    }
    /**
     * additionalWorkspacesPropertiesArgsProvideDefaults sets the appropriate defaults for AdditionalWorkspacesPropertiesArgs
     */
    export function additionalWorkspacesPropertiesArgsProvideDefaults(val: AdditionalWorkspacesPropertiesArgs): AdditionalWorkspacesPropertiesArgs {
        return {
            ...val,
            type: (val.type) ?? "Sentinel",
        };
    }

    /**
     * A custom alert rule that checks if a value (depends on the custom alert type) is allowed.
     */
    export interface AllowlistCustomAlertRuleArgs {
        /**
         * The values to allow. The format of the values depends on the rule type.
         */
        allowlistValues: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * Status of the custom alert.
         */
        isEnabled: pulumi.Input<boolean>;
        /**
         * The type of the custom alert rule.
         * Expected value is 'AllowlistCustomAlertRule'.
         */
        ruleType: pulumi.Input<"AllowlistCustomAlertRule">;
    }

    /**
     * A custom alert rule that checks if a value (depends on the custom alert type) is denied.
     */
    export interface DenylistCustomAlertRuleArgs {
        /**
         * The values to deny. The format of the values depends on the rule type.
         */
        denylistValues: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * Status of the custom alert.
         */
        isEnabled: pulumi.Input<boolean>;
        /**
         * The type of the custom alert rule.
         * Expected value is 'DenylistCustomAlertRule'.
         */
        ruleType: pulumi.Input<"DenylistCustomAlertRule">;
    }

    /**
     * The type of IoT Security recommendation.
     */
    export interface RecommendationConfigurationPropertiesArgs {
        /**
         * The type of IoT Security recommendation.
         */
        recommendationType: pulumi.Input<string | enums.RecommendationType>;
        /**
         * Recommendation status. When the recommendation status is disabled recommendations are not generated.
         */
        status: pulumi.Input<string | enums.RecommendationConfigStatus>;
    }
    /**
     * recommendationConfigurationPropertiesArgsProvideDefaults sets the appropriate defaults for RecommendationConfigurationPropertiesArgs
     */
    export function recommendationConfigurationPropertiesArgsProvideDefaults(val: RecommendationConfigurationPropertiesArgs): RecommendationConfigurationPropertiesArgs {
        return {
            ...val,
            status: (val.status) ?? "Enabled",
        };
    }

    /**
     * A custom alert rule that checks if a value (depends on the custom alert type) is within the given range.
     */
    export interface ThresholdCustomAlertRuleArgs {
        /**
         * Status of the custom alert.
         */
        isEnabled: pulumi.Input<boolean>;
        /**
         * The maximum threshold.
         */
        maxThreshold: pulumi.Input<number>;
        /**
         * The minimum threshold.
         */
        minThreshold: pulumi.Input<number>;
        /**
         * The type of the custom alert rule.
         * Expected value is 'ThresholdCustomAlertRule'.
         */
        ruleType: pulumi.Input<"ThresholdCustomAlertRule">;
    }

    /**
     * A custom alert rule that checks if the number of activities (depends on the custom alert type) in a time window is within the given range.
     */
    export interface TimeWindowCustomAlertRuleArgs {
        /**
         * Status of the custom alert.
         */
        isEnabled: pulumi.Input<boolean>;
        /**
         * The maximum threshold.
         */
        maxThreshold: pulumi.Input<number>;
        /**
         * The minimum threshold.
         */
        minThreshold: pulumi.Input<number>;
        /**
         * The type of the custom alert rule.
         * Expected value is 'TimeWindowCustomAlertRule'.
         */
        ruleType: pulumi.Input<"TimeWindowCustomAlertRule">;
        /**
         * The time window size in iso8601 format.
         */
        timeWindowSize: pulumi.Input<string>;
    }

    /**
     * Properties of the IoT Security solution's user defined resources.
     */
    export interface UserDefinedResourcesPropertiesArgs {
        /**
         * Azure Resource Graph query which represents the security solution's user defined resources. Required to start with "where type != "Microsoft.Devices/IotHubs""
         */
        query: pulumi.Input<string>;
        /**
         * List of Azure subscription ids on which the user defined resources query should be executed.
         */
        querySubscriptions: pulumi.Input<pulumi.Input<string>[]>;
    }
