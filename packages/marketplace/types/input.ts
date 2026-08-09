import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
export interface PlanArgs {
    /**
     * Plan accessibility
     */
    accessibility?: pulumi.Input<string | enums.Accessibility | undefined>;
}

export interface ProductArgs {
    description?: pulumi.Input<string | undefined>;
    displayName?: pulumi.Input<string | undefined>;
    pricingTypes?: pulumi.Input<pulumi.Input<string>[] | undefined>;
    productType?: pulumi.Input<string | undefined>;
    publisherDisplayName?: pulumi.Input<string | undefined>;
    ratingAverage?: pulumi.Input<number | undefined>;
    smallIconUri?: pulumi.Input<string | undefined>;
    storeFronts?: pulumi.Input<pulumi.Input<string>[] | undefined>;
    summary?: pulumi.Input<string | undefined>;
    uniqueProductId?: pulumi.Input<string | undefined>;
}
