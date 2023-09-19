import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * Class for migrate project properties.
     */
    export interface MigrateProjectPropertiesArgs {
        /**
         * Provisioning state of the migrate project.
         */
        provisioningState?: pulumi.Input<string | enums.ProvisioningState>;
        /**
         * Gets or sets the list of tools registered with the migrate project.
         */
        registeredTools?: pulumi.Input<pulumi.Input<string>[]>;
    }

    /**
     * Gets or sets the tags.
     */
    export interface MigrateProjectTagsArgs {
        additionalProperties?: pulumi.Input<string>;
    }

    /**
     * Class representing the details of the solution.
     */
    export interface SolutionDetailsArgs {
        /**
         * Gets or sets the count of assessments reported by the solution.
         */
        assessmentCount?: pulumi.Input<number>;
        /**
         * Gets or sets the extended details reported by the solution.
         */
        extendedDetails?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
        /**
         * Gets or sets the count of groups reported by the solution.
         */
        groupCount?: pulumi.Input<number>;
    }

    /**
     * Class for solution properties.
     */
    export interface SolutionPropertiesArgs {
        /**
         * Gets or sets the cleanup state of the solution.
         */
        cleanupState?: pulumi.Input<string>;
        /**
         * Gets or sets the details of the solution.
         */
        details?: pulumi.Input<SolutionDetailsArgs>;
        /**
         * Gets or sets the goal of the solution.
         */
        goal?: pulumi.Input<string>;
        /**
         * Gets or sets the purpose of the solution.
         */
        purpose?: pulumi.Input<string>;
        /**
         * Gets or sets the current status of the solution.
         */
        status?: pulumi.Input<string>;
        /**
         * Gets or sets the tool being used in the solution.
         */
        tool?: pulumi.Input<string>;
    }
