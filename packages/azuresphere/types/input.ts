import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
export namespace azuresphere {
    /**
     * An image resource belonging to a catalog resource.
     */
    export interface ImageArgs {
        /**
         * Image as a UTF-8 encoded base 64 string on image create. This field contains the image URI on image reads.
         */
        image?: pulumi.Input<string>;
        /**
         * Image ID
         */
        imageId?: pulumi.Input<string>;
        /**
         * Regional data boundary for an image
         */
        regionalDataBoundary?: pulumi.Input<string | enums.RegionalDataBoundary>;
    }

    export namespace v20220901preview {
        /**
         * An image resource belonging to a catalog resource.
         */
        export interface ImageArgs {
            /**
             * Image as a UTF-8 encoded base 64 string on image create. This field contains the image URI on image reads.
             */
            image?: pulumi.Input<string>;
            /**
             * Image ID
             */
            imageId?: pulumi.Input<string>;
            /**
             * Regional data boundary for an image
             */
            regionalDataBoundary?: pulumi.Input<string | enums.v20220901preview.RegionalDataBoundary>;
        }

    }
}
