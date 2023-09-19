import * as pulumi from "@pulumi/pulumi";
    /**
     * A dashboard lens.
     */
    export interface DashboardLensArgs {
        /**
         * The dashboard len's metadata.
         */
        metadata?: pulumi.Input<{[key: string]: any}>;
        /**
         * The lens order.
         */
        order: pulumi.Input<number>;
        /**
         * The dashboard parts.
         */
        parts: pulumi.Input<{[key: string]: pulumi.Input<DashboardPartsArgs>}>;
    }

    /**
     * A dashboard part.
     */
    export interface DashboardPartsArgs {
        /**
         * A dashboard part metadata.
         */
        metadata?: any;
        /**
         * The dashboard's part position.
         */
        position: pulumi.Input<DashboardPartsPositionArgs>;
    }

    /**
     * The dashboard's part position.
     */
    export interface DashboardPartsPositionArgs {
        /**
         * The dashboard's part column span.
         */
        colSpan: pulumi.Input<number>;
        /**
         * The dashboard part's metadata.
         */
        metadata?: pulumi.Input<{[key: string]: any}>;
        /**
         * The dashboard's part row span.
         */
        rowSpan: pulumi.Input<number>;
        /**
         * The dashboard's part x coordinate.
         */
        x: pulumi.Input<number>;
        /**
         * The dashboard's part y coordinate.
         */
        y: pulumi.Input<number>;
    }
