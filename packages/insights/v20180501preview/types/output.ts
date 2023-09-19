import * as pulumi from "@pulumi/pulumi";
    /**
     * Static definitions of the ProactiveDetection configuration rule (same values for all components).
     */
    export interface ApplicationInsightsComponentProactiveDetectionConfigurationPropertiesResponseRuleDefinitions {
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
