import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * A set of properties that can be defined in the context of a specific item type. Each type may have its own properties.
     */
    export interface ApplicationInsightsComponentAnalyticsItemPropertiesResponse {
        /**
         * A function alias, used when the type of the item is Function
         */
        functionAlias?: string;
    }

    /**
     * An Application Insights component daily data volume cap
     */
    export interface ApplicationInsightsComponentDataVolumeCapResponse {
        /**
         * Daily data volume cap in GB.
         */
        cap?: number;
        /**
         * Maximum daily data volume cap that the user can set for this component.
         */
        maxHistoryCap: number;
        /**
         * Daily data volume cap UTC reset hour.
         */
        resetTime: number;
        /**
         * Do not send a notification email when the daily data volume cap is met.
         */
        stopSendNotificationWhenHitCap?: boolean;
        /**
         * Reserved, not used for now.
         */
        stopSendNotificationWhenHitThreshold?: boolean;
        /**
         * Reserved, not used for now.
         */
        warningThreshold?: number;
    }

    /**
     * Static definitions of the ProactiveDetection configuration rule (same values for all components).
     */
    export interface ApplicationInsightsComponentProactiveDetectionConfigurationResponseRuleDefinitions {
        /**
         * The rule description
         */
        description?: string;
        /**
         * The rule name as it is displayed in UI
         */
        displayName?: string;
        /**
         * URL which displays additional info about the proactive detection rule
         */
        helpUrl?: string;
        /**
         * A flag indicating whether the rule is enabled by default
         */
        isEnabledByDefault?: boolean;
        /**
         * A flag indicating whether the rule is hidden (from the UI)
         */
        isHidden?: boolean;
        /**
         * A flag indicating whether the rule is in preview
         */
        isInPreview?: boolean;
        /**
         * The rule name
         */
        name?: string;
        /**
         * A flag indicating whether email notifications are supported for detections for this rule
         */
        supportsEmailNotifications?: boolean;
    }
