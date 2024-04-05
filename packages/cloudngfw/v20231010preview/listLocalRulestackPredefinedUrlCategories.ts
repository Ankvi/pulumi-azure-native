import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * List predefined URL categories for rulestack
 */
export function listLocalRulestackPredefinedUrlCategories(args: ListLocalRulestackPredefinedUrlCategoriesArgs, opts?: pulumi.InvokeOptions): Promise<ListLocalRulestackPredefinedUrlCategoriesResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:cloudngfw/v20231010preview:listLocalRulestackPredefinedUrlCategories", {
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
 */
export function listLocalRulestackPredefinedUrlCategoriesOutput(args: ListLocalRulestackPredefinedUrlCategoriesOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<ListLocalRulestackPredefinedUrlCategoriesResult> {
    return pulumi.output(args).apply((a: any) => listLocalRulestackPredefinedUrlCategories(a, opts))
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