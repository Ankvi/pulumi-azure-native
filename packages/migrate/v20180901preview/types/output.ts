import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * The database project summary class.
     */
    export interface DatabaseProjectSummaryResponse {
        /**
         * Gets or sets the extended summary.
         */
        extendedSummary?: {[key: string]: string};
        /**
         * Gets the Instance type.
         * Expected value is 'Databases'.
         */
        instanceType: "Databases";
        /**
         * Gets or sets the time when summary was last refreshed.
         */
        lastSummaryRefreshedTime?: string;
        /**
         * Gets or sets the state of refresh summary.
         */
        refreshSummaryState?: string;
    }

    /**
     * Class representing the databases solution summary.
     */
    export interface DatabasesSolutionSummaryResponse {
        /**
         * Gets or sets the count of database instances assessed.
         */
        databaseInstancesAssessedCount?: number;
        /**
         * Gets or sets the count of databases assessed.
         */
        databasesAssessedCount?: number;
        /**
         * Gets the Instance type.
         * Expected value is 'Databases'.
         */
        instanceType: "Databases";
        /**
         * Gets or sets the count of databases ready for migration.
         */
        migrationReadyCount?: number;
    }

    /**
     * Class for migrate project properties.
     */
    export interface MigrateProjectPropertiesResponse {
        /**
         * Gets the last time the project summary was refreshed.
         */
        lastSummaryRefreshedTime: string;
        /**
         * Provisioning state of the migrate project.
         */
        provisioningState?: string;
        /**
         * Gets the refresh summary state.
         */
        refreshSummaryState: string;
        /**
         * Gets or sets the list of tools registered with the migrate project.
         */
        registeredTools?: string[];
        /**
         * Gets the summary of the migrate project.
         */
        summary: {[key: string]: DatabaseProjectSummaryResponse | ServersProjectSummaryResponse};
    }

    /**
     * Gets or sets the tags.
     */
    export interface MigrateProjectResponseTags {
        additionalProperties?: string;
    }

    /**
     * Class representing the servers project summary.
     */
    export interface ServersProjectSummaryResponse {
        /**
         * Gets or sets the count of entities assessed.
         */
        assessedCount?: number;
        /**
         * Gets or sets the count of entities discovered.
         */
        discoveredCount?: number;
        /**
         * Gets or sets the extended summary.
         */
        extendedSummary?: {[key: string]: string};
        /**
         * Gets the Instance type.
         * Expected value is 'Servers'.
         */
        instanceType: "Servers";
        /**
         * Gets or sets the time when summary was last refreshed.
         */
        lastSummaryRefreshedTime?: string;
        /**
         * Gets or sets the count of entities migrated.
         */
        migratedCount?: number;
        /**
         * Gets or sets the state of refresh summary.
         */
        refreshSummaryState?: string;
        /**
         * Gets or sets the count of entities being replicated.
         */
        replicatingCount?: number;
        /**
         * Gets or sets the count of entities test migrated.
         */
        testMigratedCount?: number;
    }

    /**
     * Class representing the servers solution summary.
     */
    export interface ServersSolutionSummaryResponse {
        /**
         * Gets or sets the count of servers assessed.
         */
        assessedCount?: number;
        /**
         * Gets or sets the count of servers discovered.
         */
        discoveredCount?: number;
        /**
         * Gets the Instance type.
         * Expected value is 'Servers'.
         */
        instanceType: "Servers";
        /**
         * Gets or sets the count of servers migrated.
         */
        migratedCount?: number;
        /**
         * Gets or sets the count of servers being replicated.
         */
        replicatingCount?: number;
        /**
         * Gets or sets the count of servers test migrated.
         */
        testMigratedCount?: number;
    }

    /**
     * Class representing the details of the solution.
     */
    export interface SolutionDetailsResponse {
        /**
         * Gets or sets the count of assessments reported by the solution.
         */
        assessmentCount?: number;
        /**
         * Gets or sets the extended details reported by the solution.
         */
        extendedDetails?: {[key: string]: string};
        /**
         * Gets or sets the count of groups reported by the solution.
         */
        groupCount?: number;
    }

    /**
     * Class for solution properties.
     */
    export interface SolutionPropertiesResponse {
        /**
         * Gets or sets the cleanup state of the solution.
         */
        cleanupState?: string;
        /**
         * Gets or sets the details of the solution.
         */
        details?: SolutionDetailsResponse;
        /**
         * Gets or sets the goal of the solution.
         */
        goal?: string;
        /**
         * Gets or sets the purpose of the solution.
         */
        purpose?: string;
        /**
         * Gets or sets the current status of the solution.
         */
        status?: string;
        /**
         * Gets or sets the summary of the solution.
         */
        summary?: DatabasesSolutionSummaryResponse | ServersSolutionSummaryResponse;
        /**
         * Gets or sets the tool being used in the solution.
         */
        tool?: string;
    }
