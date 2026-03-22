import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
export interface PlanArgs {
    /**
     * Plan accessibility
     */
    accessibility?: pulumi.Input<string | enums.Accessibility>;
}

export interface ProductArgs {
    description?: pulumi.Input<string>;
    displayName?: pulumi.Input<string>;
    pricingTypes?: pulumi.Input<pulumi.Input<string>[]>;
    productType?: pulumi.Input<string>;
    publisherDisplayName?: pulumi.Input<string>;
    ratingAverage?: pulumi.Input<number>;
    smallIconUri?: pulumi.Input<string>;
    storeFronts?: pulumi.Input<pulumi.Input<string>[]>;
    summary?: pulumi.Input<string>;
    uniqueProductId?: pulumi.Input<string>;
}
