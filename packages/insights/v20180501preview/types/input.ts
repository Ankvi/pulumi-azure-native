import * as pulumi from "@pulumi/pulumi";
    /**
     * Static definitions of the ProactiveDetection configuration rule (same values for all components).
     */
    export interface ApplicationInsightsComponentProactiveDetectionConfigurationPropertiesRuleDefinitionsArgs {
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