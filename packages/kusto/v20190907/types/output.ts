import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * A class that contains database statistics information.
     */
    export interface DatabaseStatisticsResponse {
        /**
         * The database size - the total size of compressed data and index in bytes.
         */
        size?: number;
    }
