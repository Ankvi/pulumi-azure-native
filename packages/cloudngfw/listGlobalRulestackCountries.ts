import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * List of countries for Rulestack
 *
 * Uses Azure REST API version 2025-02-06-preview.
 *
 * Other available API versions: 2023-09-01, 2023-10-10-preview, 2024-01-19-preview, 2024-02-07-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native cloudngfw [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function listGlobalRulestackCountries(args: ListGlobalRulestackCountriesArgs, opts?: pulumi.InvokeOptions): Promise<ListGlobalRulestackCountriesResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:cloudngfw:listGlobalRulestackCountries", {
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
 *
 * Uses Azure REST API version 2025-02-06-preview.
 *
 * Other available API versions: 2023-09-01, 2023-10-10-preview, 2024-01-19-preview, 2024-02-07-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native cloudngfw [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function listGlobalRulestackCountriesOutput(args: ListGlobalRulestackCountriesOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<ListGlobalRulestackCountriesResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:cloudngfw:listGlobalRulestackCountries", {
        "globalRulestackName": args.globalRulestackName,
        "skip": args.skip,
        "top": args.top,
    }, opts);
}

export interface ListGlobalRulestackCountriesOutputArgs {
    /**
     * GlobalRulestack resource name
     */
    globalRulestackName: pulumi.Input<string>;
    skip?: pulumi.Input<string>;
    top?: pulumi.Input<number>;
}