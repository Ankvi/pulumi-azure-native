import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * List predefined URL categories for rulestack
 * Azure REST API version: 2023-09-01.
 *
 * Other available API versions: 2022-08-29, 2022-08-29-preview, 2023-09-01-preview, 2023-10-10-preview, 2024-01-19-preview, 2024-02-07-preview.
 */
export function listGlobalRulestackPredefinedUrlCategories(args: ListGlobalRulestackPredefinedUrlCategoriesArgs, opts?: pulumi.InvokeOptions): Promise<ListGlobalRulestackPredefinedUrlCategoriesResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:cloudngfw:listGlobalRulestackPredefinedUrlCategories", {
        "globalRulestackName": args.globalRulestackName,
        "skip": args.skip,
        "top": args.top,
    }, opts);
}

export interface ListGlobalRulestackPredefinedUrlCategoriesArgs {
    /**
     * GlobalRulestack resource name
     */
    globalRulestackName: string;
    skip?: string;
    top?: number;
}

/**
 * predefined url categories response
 */
export interface ListGlobalRulestackPredefinedUrlCategoriesResult {
    /**
     * next link
     */
    readonly nextLink?: string;
    /**
     * predefined url categories
     */
    readonly value: types.outputs.PredefinedUrlCategoryResponse[];
}
/**
 * List predefined URL categories for rulestack
 * Azure REST API version: 2023-09-01.
 *
 * Other available API versions: 2022-08-29, 2022-08-29-preview, 2023-09-01-preview, 2023-10-10-preview, 2024-01-19-preview, 2024-02-07-preview.
 */
export function listGlobalRulestackPredefinedUrlCategoriesOutput(args: ListGlobalRulestackPredefinedUrlCategoriesOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<ListGlobalRulestackPredefinedUrlCategoriesResult> {
    return pulumi.output(args).apply((a: any) => listGlobalRulestackPredefinedUrlCategories(a, opts))
}

export interface ListGlobalRulestackPredefinedUrlCategoriesOutputArgs {
    /**
     * GlobalRulestack resource name
     */
    globalRulestackName: pulumi.Input<string>;
    skip?: pulumi.Input<string>;
    top?: pulumi.Input<number>;
}