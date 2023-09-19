import * as pulumi from "@pulumi/pulumi";
    /**
     * A dashboard lens.
     */
    export interface DashboardLensResponse {
        /**
         * The dashboard len's metadata.
         */
        metadata?: {[key: string]: any};
        /**
         * The lens order.
         */
        order: number;
        /**
         * The dashboard parts.
         */
        parts: {[key: string]: DashboardPartsResponse};
    }

    /**
     * A dashboard part.
     */
    export interface DashboardPartsResponse {
        /**
         * A dashboard part metadata.
         */
        metadata?: any;
        /**
         * The dashboard's part position.
         */
        position: DashboardPartsResponsePosition;
    }

    /**
     * The dashboard's part position.
     */
    export interface DashboardPartsResponsePosition {
        /**
         * The dashboard's part column span.
         */
        colSpan: number;
        /**
         * The dashboard part's metadata.
         */
        metadata?: {[key: string]: any};
        /**
         * The dashboard's part row span.
         */
        rowSpan: number;
        /**
         * The dashboard's part x coordinate.
         */
        x: number;
        /**
         * The dashboard's part y coordinate.
         */
        y: number;
    }
