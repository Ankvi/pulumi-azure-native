import * as pulumi from "@pulumi/pulumi";
    /**
     * Connection string for ingesting security data and logs
     */
    export interface IngestionConnectionStringResponse {
        /**
         * The region where ingested logs and data resides
         */
        location: string;
        /**
         * Connection string value
         */
        value: string;
    }
