import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * A set of properties that can be defined in the context of a specific item type. Each type may have its own properties.
     */
    export interface ApplicationInsightsComponentAnalyticsItemPropertiesArgs {
        /**
         * A function alias, used when the type of the item is Function
         */
        functionAlias?: pulumi.Input<string>;
    }

    /**
     * An Application Insights component daily data volume cap
     */
    export interface ApplicationInsightsComponentDataVolumeCapArgs {
        /**
         * Daily data volume cap in GB.
         */
        cap?: pulumi.Input<number>;
        /**
         * Do not send a notification email when the daily data volume cap is met.
         */
        stopSendNotificationWhenHitCap?: pulumi.Input<boolean>;
        /**
         * Reserved, not used for now.
         */
        stopSendNotificationWhenHitThreshold?: pulumi.Input<boolean>;
        /**
         * Reserved, not used for now.
         */
        warningThreshold?: pulumi.Input<number>;
    }

    /**
     * Static definitions of the ProactiveDetection configuration rule (same values for all components).
     */
    export interface ApplicationInsightsComponentProactiveDetectionConfigurationRuleDefinitionsArgs {
        /**
         * The rule description
         */
        description?: pulumi.Input<string>;
        /**
         * The rule name as it is displayed in UI
         */
        displayName?: pulumi.Input<string>;
        /**
         * URL which displays additional info about the proactive detection rule
         */
        helpUrl?: pulumi.Input<string>;
        /**
         * A flag indicating whether the rule is enabled by default
         */
        isEnabledByDefault?: pulumi.Input<boolean>;
        /**
         * A flag indicating whether the rule is hidden (from the UI)
         */
        isHidden?: pulumi.Input<boolean>;
        /**
         * A flag indicating whether the rule is in preview
         */
        isInPreview?: pulumi.Input<boolean>;
        /**
         * The rule name
         */
        name?: pulumi.Input<string>;
        /**
         * A flag indicating whether email notifications are supported for detections for this rule
         */
        supportsEmailNotifications?: pulumi.Input<boolean>;
    }