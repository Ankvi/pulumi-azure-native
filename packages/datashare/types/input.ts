import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * Identity of resource
 */
export interface IdentityArgs {
    /**
     * Identity Type
     */
    type?: pulumi.Input<string | enums.Type>;
}

/**
 * Table level sharing properties dto for kusto data set properties
 */
export interface TableLevelSharingPropertiesArgs {
    /**
     * External tables to be excluded in the data set
     */
    externalTablesToExclude?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * External tables to be included in the data set
     */
    externalTablesToInclude?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Materialized views to be excluded in the data set
     */
    materializedViewsToExclude?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Materialized views to be included in the data set
     */
    materializedViewsToInclude?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Tables to be excluded in the data set
     */
    tablesToExclude?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Tables to be included in the data set
     */
    tablesToInclude?: pulumi.Input<pulumi.Input<string>[]>;
}

