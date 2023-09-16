import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
export namespace datashare {
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

    export namespace v20201001preview {
        /**
         * Defines a single ADLS Gen2 storage account path.
         */
        export interface ADLSGen2StorageAccountPathArgs {
            /**
             * Gets or sets the path on the consumer side where the dataset is to be mapped.
             */
            consumerPath?: pulumi.Input<string>;
            /**
             * Gets or sets the container name to share.
             */
            containerName: pulumi.Input<string>;
            /**
             * Gets or sets the path to file/folder within the container.
             */
            providerPath?: pulumi.Input<string>;
        }

        /**
         * Defines a single blob storage account path.
         */
        export interface BlobStorageAccountPathArgs {
            /**
             * Gets or sets the path on the consumer side where the dataset is to be mapped.
             */
            consumerPath?: pulumi.Input<string>;
            /**
             * Gets or sets the container name to share.
             */
            containerName: pulumi.Input<string>;
            /**
             * Gets or sets the path to file/folder within the container.
             */
            providerPath?: pulumi.Input<string>;
        }

    }

    export namespace v20210801 {
        /**
         * Identity of resource
         */
        export interface IdentityArgs {
            /**
             * Identity Type
             */
            type?: pulumi.Input<string | enums.v20210801.Type>;
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

    }
}
