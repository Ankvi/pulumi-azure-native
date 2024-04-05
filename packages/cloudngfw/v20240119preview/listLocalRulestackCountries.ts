import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * List of countries for Rulestack
 */
export function listLocalRulestackCountries(args: ListLocalRulestackCountriesArgs, opts?: pulumi.InvokeOptions): Promise<ListLocalRulestackCountriesResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:cloudngfw/v20240119preview:listLocalRulestackCountries", {
        "localRulestackName": args.localRulestackName,
        "resourceGroupName": args.resourceGroupName,
        "skip": args.skip,
        "top": args.top,
    }, opts);
}

export interface ListLocalRulestackCountriesArgs {
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
 * Countries Response Object
 */
export interface ListLocalRulestackCountriesResult {
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
export function listLocalRulestackCountriesOutput(args: ListLocalRulestackCountriesOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<ListLocalRulestackCountriesResult> {
    return pulumi.output(args).apply((a: any) => listLocalRulestackCountries(a, opts))
}

export interface ListLocalRulestackCountriesOutputArgs {
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