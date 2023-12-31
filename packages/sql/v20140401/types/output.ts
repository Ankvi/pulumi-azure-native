import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * The impact of an operation, both in absolute and relative terms.
     */
    export interface OperationImpactResponse {
        /**
         * The absolute impact to dimension.
         */
        changeValueAbsolute: number;
        /**
         * The relative impact to dimension (null if not applicable)
         */
        changeValueRelative: number;
        /**
         * The name of the impact dimension.
         */
        name: string;
        /**
         * The unit in which estimated impact to dimension is measured.
         */
        unit: string;
    }

    /**
     * Represents a database recommended index.
     */
    export interface RecommendedIndexResponse {
        /**
         * The proposed index action. You can create a missing index, drop an unused index, or rebuild an existing index to improve its performance.
         */
        action: string;
        /**
         * Columns over which to build index
         */
        columns: string[];
        /**
         * The UTC datetime showing when this resource was created (ISO8601 format).
         */
        created: string;
        /**
         * The estimated impact of doing recommended index action.
         */
        estimatedImpact: OperationImpactResponse[];
        /**
         * Resource ID.
         */
        id: string;
        /**
         * The list of column names to be included in the index
         */
        includedColumns: string[];
        /**
         * The full build index script
         */
        indexScript: string;
        /**
         * The type of index (CLUSTERED, NONCLUSTERED, COLUMNSTORE, CLUSTERED COLUMNSTORE)
         */
        indexType: string;
        /**
         * The UTC datetime of when was this resource last changed (ISO8601 format).
         */
        lastModified: string;
        /**
         * Resource name.
         */
        name: string;
        /**
         * The values reported after index action is complete.
         */
        reportedImpact: OperationImpactResponse[];
        /**
         * The schema where table to build index over resides
         */
        schema: string;
        /**
         * The current recommendation state.
         */
        state: string;
        /**
         * The table on which to build index.
         */
        table: string;
        /**
         * Resource type.
         */
        type: string;
    }

    /**
     * Represents a Service Tier Advisor.
     */
    export interface ServiceTierAdvisorResponse {
        /**
         * The activeTimeRatio for service tier advisor.
         */
        activeTimeRatio: number;
        /**
         * Gets or sets avgDtu for service tier advisor.
         */
        avgDtu: number;
        /**
         * Gets or sets confidence for service tier advisor.
         */
        confidence: number;
        /**
         * Gets or sets currentServiceLevelObjective for service tier advisor.
         */
        currentServiceLevelObjective: string;
        /**
         * Gets or sets currentServiceLevelObjectiveId for service tier advisor.
         */
        currentServiceLevelObjectiveId: string;
        /**
         * Gets or sets databaseSizeBasedRecommendationServiceLevelObjective for service tier advisor.
         */
        databaseSizeBasedRecommendationServiceLevelObjective: string;
        /**
         * Gets or sets databaseSizeBasedRecommendationServiceLevelObjectiveId for service tier advisor.
         */
        databaseSizeBasedRecommendationServiceLevelObjectiveId: string;
        /**
         * Gets or sets disasterPlanBasedRecommendationServiceLevelObjective for service tier advisor.
         */
        disasterPlanBasedRecommendationServiceLevelObjective: string;
        /**
         * Gets or sets disasterPlanBasedRecommendationServiceLevelObjectiveId for service tier advisor.
         */
        disasterPlanBasedRecommendationServiceLevelObjectiveId: string;
        /**
         * Resource ID.
         */
        id: string;
        /**
         * Gets or sets maxDtu for service tier advisor.
         */
        maxDtu: number;
        /**
         * Gets or sets maxSizeInGB for service tier advisor.
         */
        maxSizeInGB: number;
        /**
         * Gets or sets minDtu for service tier advisor.
         */
        minDtu: number;
        /**
         * Resource name.
         */
        name: string;
        /**
         * The observation period start (ISO8601 format).
         */
        observationPeriodEnd: string;
        /**
         * The observation period start (ISO8601 format).
         */
        observationPeriodStart: string;
        /**
         * Gets or sets overallRecommendationServiceLevelObjective for service tier advisor.
         */
        overallRecommendationServiceLevelObjective: string;
        /**
         * Gets or sets overallRecommendationServiceLevelObjectiveId for service tier advisor.
         */
        overallRecommendationServiceLevelObjectiveId: string;
        /**
         * Gets or sets serviceLevelObjectiveUsageMetrics for the service tier advisor.
         */
        serviceLevelObjectiveUsageMetrics: SloUsageMetricResponse[];
        /**
         * Resource type.
         */
        type: string;
        /**
         * Gets or sets usageBasedRecommendationServiceLevelObjective for service tier advisor.
         */
        usageBasedRecommendationServiceLevelObjective: string;
        /**
         * Gets or sets usageBasedRecommendationServiceLevelObjectiveId for service tier advisor.
         */
        usageBasedRecommendationServiceLevelObjectiveId: string;
    }

    /**
     * A Slo Usage Metric.
     */
    export interface SloUsageMetricResponse {
        /**
         * Gets or sets inRangeTimeRatio for SLO usage metric.
         */
        inRangeTimeRatio: number;
        /**
         * The serviceLevelObjective for SLO usage metric.
         */
        serviceLevelObjective: string;
        /**
         * The serviceLevelObjectiveId for SLO usage metric.
         */
        serviceLevelObjectiveId: string;
    }

    /**
     * Represents a database transparent data encryption configuration.
     */
    export interface TransparentDataEncryptionResponse {
        /**
         * Resource ID.
         */
        id: string;
        /**
         * Resource location.
         */
        location: string;
        /**
         * Resource name.
         */
        name: string;
        /**
         * The status of the database transparent data encryption.
         */
        status?: string;
        /**
         * Resource type.
         */
        type: string;
    }
