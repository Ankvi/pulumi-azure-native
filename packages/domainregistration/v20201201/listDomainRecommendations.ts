import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * Get domain name recommendations based on keywords.
 */
export function listDomainRecommendations(args?: ListDomainRecommendationsArgs, opts?: pulumi.InvokeOptions): Promise<ListDomainRecommendationsResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:domainregistration/v20201201:listDomainRecommendations", {
        "keywords": args.keywords,
        "maxDomainRecommendations": args.maxDomainRecommendations,
    }, opts);
}

export interface ListDomainRecommendationsArgs {
    /**
     * Keywords to be used for generating domain recommendations.
     */
    keywords?: string;
    /**
     * Maximum number of recommendations.
     */
    maxDomainRecommendations?: number;
}

/**
 * Collection of domain name identifiers.
 */
export interface ListDomainRecommendationsResult {
    /**
     * Link to next page of resources.
     */
    readonly nextLink: string;
    /**
     * Collection of resources.
     */
    readonly value: types.outputs.domainregistration.v20201201.NameIdentifierResponse[];
}
/**
 * Get domain name recommendations based on keywords.
 */
export function listDomainRecommendationsOutput(args?: ListDomainRecommendationsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<ListDomainRecommendationsResult> {
    return pulumi.output(args).apply((a: any) => listDomainRecommendations(a, opts))
}

export interface ListDomainRecommendationsOutputArgs {
    /**
     * Keywords to be used for generating domain recommendations.
     */
    keywords?: pulumi.Input<string>;
    /**
     * Maximum number of recommendations.
     */
    maxDomainRecommendations?: pulumi.Input<number>;
}
