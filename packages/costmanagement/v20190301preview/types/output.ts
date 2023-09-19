import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * Details of any error encountered on last collection attempt
     */
    export interface ConnectorCollectionErrorInfoResponse {
        /**
         * Short error code
         */
        errorCode: string;
        /**
         * External Provider error message
         */
        errorInnerMessage: string;
        /**
         * Detailed error message
         */
        errorMessage: string;
        /**
         * Time the error started occurring (Last time error occurred in lastChecked)
         */
        errorStartTime: string;
    }

    /**
     * Collection and ingestion information
     */
    export interface ConnectorCollectionInfoResponse {
        /**
         * Error information of last collection
         */
        error?: ConnectorCollectionErrorInfoResponse;
        /**
         * Last time the data acquisition process initiated connecting to the external provider
         */
        lastChecked: string;
        /**
         * Last time the external data was updated into Azure
         */
        lastUpdated: string;
        /**
         * Source timestamp of external data currently available in Azure (eg AWS last processed CUR file timestamp)
         */
        sourceLastUpdated: string;
    }
