import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * List predefined URL categories for rulestack
 * Azure REST API version: 2023-09-01.
 *
 * Other available API versions: 2022-08-29, 2022-08-29-preview, 2023-09-01-preview, 2023-10-10-preview, 2024-01-19-preview, 2024-02-07-preview.
 */
export function listLocalRulestackPredefinedUrlCategories(args: ListLocalRulestackPredefinedUrlCategoriesArgs, opts?: pulumi.InvokeOptions): Promise<ListLocalRulestackPredefinedUrlCategoriesResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:cloudngfw:listLocalRulestackPredefinedUrlCategories", {
        "localRulestackName": args.localRulestackName,
        "resourceGroupName": args.resourceGroupName,
        "skip": args.skip,
        "top": args.top,
    }, opts);
}

export interface ListLocalRulestackPredefinedUrlCategoriesArgs {
    /**
     * LocalRulestack resource name
     */
    localRulestackName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    skip?: string;
    top?: number;
}

/**
 * predefined url categories response
 */
export interface ListLocalRulestackPredefinedUrlCategoriesResult {
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
export function listLocalRulestackPredefinedUrlCategoriesOutput(args: ListLocalRulestackPredefinedUrlCategoriesOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<ListLocalRulestackPredefinedUrlCategoriesResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:cloudngfw:listLocalRulestackPredefinedUrlCategories", {
        "localRulestackName": args.localRulestackName,
        "resourceGroupName": args.resourceGroupName,
        "skip": args.skip,
        "top": args.top,
    }, opts);
}

export interface ListLocalRulestackPredefinedUrlCategoriesOutputArgs {
    /**
     * LocalRulestack resource name
     */
    localRulestackName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    skip?: pulumi.Input<string>;
    top?: pulumi.Input<number>;
}