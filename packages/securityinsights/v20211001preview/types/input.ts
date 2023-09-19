import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * Settings for how to dynamically override alert static details
     */
    export interface AlertDetailsOverrideArgs {
        /**
         * the format containing columns name(s) to override the alert description
         */
        alertDescriptionFormat?: pulumi.Input<string>;
        /**
         * the format containing columns name(s) to override the alert name
         */
        alertDisplayNameFormat?: pulumi.Input<string>;
        /**
         * the column name to take the alert severity from
         */
        alertSeverityColumnName?: pulumi.Input<string>;
        /**
         * the column name to take the alert tactics from
         */
        alertTacticsColumnName?: pulumi.Input<string>;
    }

    /**
     * Single entity mapping for the alert rule
     */
    export interface EntityMappingArgs {
        /**
         * The V3 type of the mapped entity
         */
        entityType?: pulumi.Input<string | enums.EntityMappingType>;
        /**
         * array of field mappings for the given entity mapping
         */
        fieldMappings?: pulumi.Input<pulumi.Input<FieldMappingArgs>[]>;
    }

    /**
     * A single field mapping of the mapped entity
     */
    export interface FieldMappingArgs {
        /**
         * the column name to be mapped to the identifier
         */
        columnName?: pulumi.Input<string>;
        /**
         * the V3 identifier of the entity
         */
        identifier?: pulumi.Input<string>;
    }

    /**
     * Represents a Fusion scenario exclusion patterns in Fusion detection.
     */
    export interface FusionScenarioExclusionPatternArgs {
        /**
         * DateTime when scenario exclusion pattern is added in UTC.
         */
        dateAddedInUTC: pulumi.Input<string>;
        /**
         * Scenario exclusion pattern.
         */
        exclusionPattern: pulumi.Input<string>;
    }

    /**
     * Represents a supported source signal configuration in Fusion detection.
     */
    export interface FusionSourceSettingsArgs {
        /**
         * Determines whether this source signal is enabled or disabled in Fusion detection.
         */
        enabled: pulumi.Input<boolean>;
        /**
         * Name of the Fusion source signal. Refer to Fusion alert rule template for supported values.
         */
        sourceName: pulumi.Input<string>;
        /**
         * Configuration for all source subtypes under this source signal consumed in fusion detection.
         */
        sourceSubTypes?: pulumi.Input<pulumi.Input<FusionSourceSubTypeSettingArgs>[]>;
    }

    /**
     * Represents a supported source subtype configuration under a source signal in Fusion detection.
     */
    export interface FusionSourceSubTypeSettingArgs {
        /**
         * Determines whether this source subtype under source signal is enabled or disabled in Fusion detection.
         */
        enabled: pulumi.Input<boolean>;
        /**
         * Severity configuration for a source subtype consumed in fusion detection.
         */
        severityFilters: pulumi.Input<FusionSubTypeSeverityFilterArgs>;
        /**
         * The Name of the source subtype under a given source signal in Fusion detection. Refer to Fusion alert rule template for supported values.
         */
        sourceSubTypeName: pulumi.Input<string>;
    }

    /**
     * Represents severity configuration for a source subtype consumed in Fusion detection.
     */
    export interface FusionSubTypeSeverityFilterArgs {
        /**
         * Individual Severity configuration settings for a given source subtype consumed in Fusion detection.
         */
        filters?: pulumi.Input<pulumi.Input<FusionSubTypeSeverityFiltersItemArgs>[]>;
    }

    /**
     * Represents a Severity filter setting for a given source subtype consumed in Fusion detection.
     */
    export interface FusionSubTypeSeverityFiltersItemArgs {
        /**
         * Determines whether this severity is enabled or disabled for this source subtype consumed in Fusion detection.
         */
        enabled: pulumi.Input<boolean>;
        /**
         * The Severity for a given source subtype consumed in Fusion detection.
         */
        severity: pulumi.Input<string | enums.AlertSeverity>;
    }

    /**
     * Grouping configuration property bag.
     */
    export interface GroupingConfigurationArgs {
        /**
         * Grouping enabled
         */
        enabled: pulumi.Input<boolean>;
        /**
         * A list of alert details to group by (when matchingMethod is Selected)
         */
        groupByAlertDetails?: pulumi.Input<pulumi.Input<string | enums.AlertDetail>[]>;
        /**
         * A list of custom details keys to group by (when matchingMethod is Selected). Only keys defined in the current alert rule may be used.
         */
        groupByCustomDetails?: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * A list of entity types to group by (when matchingMethod is Selected). Only entities defined in the current alert rule may be used.
         */
        groupByEntities?: pulumi.Input<pulumi.Input<string | enums.EntityMappingType>[]>;
        /**
         * Limit the group to alerts created within the lookback duration (in ISO 8601 duration format)
         */
        lookbackDuration: pulumi.Input<string>;
        /**
         * Grouping matching method. When method is Selected at least one of groupByEntities, groupByAlertDetails, groupByCustomDetails must be provided and not empty.
         */
        matchingMethod: pulumi.Input<string | enums.MatchingMethod>;
        /**
         * Re-open closed matching incidents
         */
        reopenClosedIncident: pulumi.Input<boolean>;
    }

    /**
     * Incident Configuration property bag.
     */
    export interface IncidentConfigurationArgs {
        /**
         * Create incidents from alerts triggered by this analytics rule
         */
        createIncident: pulumi.Input<boolean>;
        /**
         * Set how the alerts that are triggered by this analytics rule, are grouped into incidents
         */
        groupingConfiguration?: pulumi.Input<GroupingConfigurationArgs>;
    }

    /**
     * User information that made some action
     */
    export interface WatchlistUserInfoArgs {
        /**
         * The object id of the user.
         */
        objectId?: pulumi.Input<string>;
    }
