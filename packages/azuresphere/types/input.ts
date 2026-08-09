import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * An image resource belonging to a catalog resource.
 */
export interface ImageArgs {
    /**
     * Image as a UTF-8 encoded base 64 string on image create. This field contains the image URI on image reads.
     */
    image?: pulumi.Input<string | undefined>;
    /**
     * Image ID
     */
    imageId?: pulumi.Input<string | undefined>;
    /**
     * Regional data boundary for an image
     */
    regionalDataBoundary?: pulumi.Input<string | enums.RegionalDataBoundary | undefined>;
}
