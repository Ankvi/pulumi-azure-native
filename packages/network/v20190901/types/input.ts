import * as pulumi from "@pulumi/pulumi";
    /**
     * Describes the destination of connection monitor.
     */
    export interface ConnectionMonitorDestinationArgs {
        /**
         * Address of the connection monitor destination (IP or domain name).
         */
        address?: pulumi.Input<string>;
        /**
         * The destination port used by connection monitor.
         */
        port?: pulumi.Input<number>;
        /**
         * The ID of the resource used as the destination by connection monitor.
         */
        resourceId?: pulumi.Input<string>;
    }

    /**
     * Describes the source of connection monitor.
     */
    export interface ConnectionMonitorSourceArgs {
        /**
         * The source port used by connection monitor.
         */
        port?: pulumi.Input<number>;
        /**
         * The ID of the resource used as the source by connection monitor.
         */
        resourceId: pulumi.Input<string>;
    }
