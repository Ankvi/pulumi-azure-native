import * as pulumi from "@pulumi/pulumi";
    /**
     * Metadata pertaining to the geographic location of the resource.
     */
    export interface LocationDataArgs {
        /**
         * The city or locality where the resource is located.
         */
        city?: pulumi.Input<string>;
        /**
         * The country or region where the resource is located
         */
        countryOrRegion?: pulumi.Input<string>;
        /**
         * The district, state, or province where the resource is located.
         */
        district?: pulumi.Input<string>;
        /**
         * A canonical name for the geographic or physical location.
         */
        name: pulumi.Input<string>;
    }

    export interface MachineIdentityArgs {
        /**
         * The identity type.
         */
        type?: pulumi.Input<string>;
    }
