import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * List of AppIds for GlobalRulestack ApiVersion
 *
 * Uses Azure REST API version 2023-09-01.
 *
 * Other available API versions: 2022-08-29, 2022-08-29-preview, 2023-09-01-preview, 2023-10-10-preview, 2024-01-19-preview, 2024-02-07-preview, 2025-02-06-preview.
 */
export function listGlobalRulestackAppIds(args: ListGlobalRulestackAppIdsArgs, opts?: pulumi.InvokeOptions): Promise<ListGlobalRulestackAppIdsResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:cloudngfw:listGlobalRulestackAppIds", {
        "appIdVersion": args.appIdVersion,
        "appPrefix": args.appPrefix,
        "globalRulestackName": args.globalRulestackName,
        "skip": args.skip,
        "top": args.top,
    }, opts);
}

export interface ListGlobalRulestackAppIdsArgs {
    appIdVersion?: string;
    appPrefix?: string;
    /**
     * GlobalRulestack resource name
     */
    globalRulestackName: string;
    skip?: string;
    top?: number;
}

export interface ListGlobalRulestackAppIdsResult {
    /**
     * next Link
     */
    readonly nextLink?: string;
    /**
     * List of AppIds
     */
    readonly value: string[];
}
/**
 * List of AppIds for GlobalRulestack ApiVersion
 *
 * Uses Azure REST API version 2023-09-01.
 *
 * Other available API versions: 2022-08-29, 2022-08-29-preview, 2023-09-01-preview, 2023-10-10-preview, 2024-01-19-preview, 2024-02-07-preview, 2025-02-06-preview.
 */
export function listGlobalRulestackAppIdsOutput(args: ListGlobalRulestackAppIdsOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<ListGlobalRulestackAppIdsResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:cloudngfw:listGlobalRulestackAppIds", {
        "appIdVersion": args.appIdVersion,
        "appPrefix": args.appPrefix,
        "globalRulestackName": args.globalRulestackName,
        "skip": args.skip,
        "top": args.top,
    }, opts);
}

export interface ListGlobalRulestackAppIdsOutputArgs {
    appIdVersion?: pulumi.Input<string>;
    appPrefix?: pulumi.Input<string>;
    /**
     * GlobalRulestack resource name
     */
    globalRulestackName: pulumi.Input<string>;
    skip?: pulumi.Input<string>;
    top?: pulumi.Input<number>;
}