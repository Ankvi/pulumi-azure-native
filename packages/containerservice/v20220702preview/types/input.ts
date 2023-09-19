import * as pulumi from "@pulumi/pulumi";
    /**
     * The FleetHubProfile configures the fleet hub.
     */
    export interface FleetHubProfileArgs {
        /**
         * DNS prefix used to create the FQDN for the Fleet hub.
         */
        dnsPrefix?: pulumi.Input<string>;
    }
