import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Description for Get domain name recommendations based on keywords.
 *
 * Uses Azure REST API version 2022-09-01.
 *
 * Other available API versions: 2020-10-01, 2020-12-01, 2021-01-01, 2021-01-15, 2021-02-01, 2021-03-01, 2022-03-01, 2023-01-01, 2023-12-01, 2024-04-01.
 */
export function listDomainRecommendations(args?: ListDomainRecommendationsArgs, opts?: pulumi.InvokeOptions): Promise<ListDomainRecommendationsResult> {
    args = args || {};
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:domainregistration:listDomainRecommendations", {
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
    readonly value: types.outputs.NameIdentifierResponse[];
}
/**
 * Description for Get domain name recommendations based on keywords.
 *
 * Uses Azure REST API version 2022-09-01.
 *
 * Other available API versions: 2020-10-01, 2020-12-01, 2021-01-01, 2021-01-15, 2021-02-01, 2021-03-01, 2022-03-01, 2023-01-01, 2023-12-01, 2024-04-01.
 */
export function listDomainRecommendationsOutput(args?: ListDomainRecommendationsOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<ListDomainRecommendationsResult> {
    args = args || {};
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:domainregistration:listDomainRecommendations", {
        "keywords": args.keywords,
        "maxDomainRecommendations": args.maxDomainRecommendations,
    }, opts);
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