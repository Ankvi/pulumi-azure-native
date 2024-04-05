import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * List of countries for Rulestack
 */
export function listGlobalRulestackCountries(args: ListGlobalRulestackCountriesArgs, opts?: pulumi.InvokeOptions): Promise<ListGlobalRulestackCountriesResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:cloudngfw/v20231010preview:listGlobalRulestackCountries", {
        "globalRulestackName": args.globalRulestackName,
        "skip": args.skip,
        "top": args.top,
    }, opts);
}

export interface ListGlobalRulestackCountriesArgs {
    /**
     * GlobalRulestack resource name
     */
    globalRulestackName: string;
    skip?: string;
    top?: number;
}

/**
 * Countries Response Object
 */
export interface ListGlobalRulestackCountriesResult {
    /**
     * next link
     */
    readonly nextLink?: string;
    /**
     * List of countries
     */
    readonly value: types.outputs.CountryResponse[];
}
/**
 * List of countries for Rulestack
 */
export function listGlobalRulestackCountriesOutput(args: ListGlobalRulestackCountriesOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<ListGlobalRulestackCountriesResult> {
    return pulumi.output(args).apply((a: any) => listGlobalRulestackCountries(a, opts))
}

export interface ListGlobalRulestackCountriesOutputArgs {
    /**
     * GlobalRulestack resource name
     */
    globalRulestackName: pulumi.Input<string>;
    skip?: pulumi.Input<string>;
    top?: pulumi.Input<number>;
}