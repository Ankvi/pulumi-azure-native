import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    export interface DatasetCreateRequestDataPathArgs {
        /**
         * The datastore name.
         */
        datastoreName?: pulumi.Input<string>;
        /**
         * Path within the datastore.
         */
        relativePath?: pulumi.Input<string>;
    }

    export interface DatasetCreateRequestParametersArgs {
        /**
         * Header type.
         */
        header?: pulumi.Input<string | enums.Header>;
        /**
         * Boolean to keep path information as column in the dataset. Defaults to False. This is useful when reading multiple files, and want to know which file a particular record originated from, or to keep useful information in file path.
         */
        includePath?: pulumi.Input<boolean>;
        /**
         * The partition information of each path will be extracted into columns based on the specified format. Format part '{column_name}' creates string column, and '{column_name:yyyy/MM/dd/HH/mm/ss}' creates datetime column, where 'yyyy', 'MM', 'dd', 'HH', 'mm' and 'ss' are used to extract year, month, day, hour, minute and second for the datetime type. The format should start from the position of first partition key until the end of file path. For example, given the path '../USA/2019/01/01/data.parquet' where the partition is by country/region and time, partition_format='/{CountryOrRegion}/{PartitionDate:yyyy/MM/dd}/data.csv' creates a string column 'CountryOrRegion' with the value 'USA' and a datetime column 'PartitionDate' with the value '2019-01-01
         */
        partitionFormat?: pulumi.Input<string>;
        path?: pulumi.Input<DatasetCreateRequestPathArgs>;
        query?: pulumi.Input<DatasetCreateRequestQueryArgs>;
        /**
         * The separator used to split columns for 'delimited_files' sourceType.
         */
        separator?: pulumi.Input<string>;
        /**
         * Data source type.
         */
        sourceType?: pulumi.Input<string | enums.SourceType>;
    }
    /**
     * datasetCreateRequestParametersArgsProvideDefaults sets the appropriate defaults for DatasetCreateRequestParametersArgs
     */
    export function datasetCreateRequestParametersArgsProvideDefaults(val: DatasetCreateRequestParametersArgs): DatasetCreateRequestParametersArgs {
        return {
            ...val,
            includePath: (val.includePath) ?? false,
        };
    }

    export interface DatasetCreateRequestPathArgs {
        dataPath?: pulumi.Input<DatasetCreateRequestDataPathArgs>;
        /**
         * The Http URL.
         */
        httpUrl?: pulumi.Input<string>;
    }

    export interface DatasetCreateRequestQueryArgs {
        /**
         * The SQL/PostgreSQL/MySQL datastore name.
         */
        datastoreName?: pulumi.Input<string>;
        /**
         * SQL Quey.
         */
        query?: pulumi.Input<string>;
    }

    export interface DatasetCreateRequestRegistrationArgs {
        /**
         * The description for the dataset.
         */
        description?: pulumi.Input<string>;
        /**
         * The name of the dataset.
         */
        name?: pulumi.Input<string>;
        /**
         * Tags associated with the dataset.
         */
        tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    }

    export interface DatasetCreateRequestTimeSeriesArgs {
        /**
         * Column name to be used as CoarseGrainTimestamp. Can only be used if 'fineGrainTimestamp' is specified and cannot be same as 'fineGrainTimestamp'.
         */
        coarseGrainTimestamp?: pulumi.Input<string>;
        /**
         *  Column name to be used as FineGrainTimestamp
         */
        fineGrainTimestamp?: pulumi.Input<string>;
    }
