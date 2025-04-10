import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * List the security services for rulestack
 *
 * Uses Azure REST API version 2023-09-01.
 *
 * Other available API versions: 2022-08-29, 2022-08-29-preview, 2023-09-01-preview, 2023-10-10-preview, 2024-01-19-preview, 2024-02-07-preview, 2025-02-06-preview.
 */
export function listGlobalRulestackSecurityServices(args: ListGlobalRulestackSecurityServicesArgs, opts?: pulumi.InvokeOptions): Promise<ListGlobalRulestackSecurityServicesResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:cloudngfw:listGlobalRulestackSecurityServices", {
        "globalRulestackName": args.globalRulestackName,
        "skip": args.skip,
        "top": args.top,
        "type": args.type,
    }, opts);
}

export interface ListGlobalRulestackSecurityServicesArgs {
    /**
     * GlobalRulestack resource name
     */
    globalRulestackName: string;
    skip?: string;
    top?: number;
    type: string;
}

/**
 * Security services list response
 */
export interface ListGlobalRulestackSecurityServicesResult {
    /**
     * next link
     */
    readonly nextLink?: string;
    /**
     * response value
     */
    readonly value: types.outputs.SecurityServicesTypeListResponse;
}
/**
 * List the security services for rulestack
 *
 * Uses Azure REST API version 2023-09-01.
 *
 * Other available API versions: 2022-08-29, 2022-08-29-preview, 2023-09-01-preview, 2023-10-10-preview, 2024-01-19-preview, 2024-02-07-preview, 2025-02-06-preview.
 */
export function listGlobalRulestackSecurityServicesOutput(args: ListGlobalRulestackSecurityServicesOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<ListGlobalRulestackSecurityServicesResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:cloudngfw:listGlobalRulestackSecurityServices", {
        "globalRulestackName": args.globalRulestackName,
        "skip": args.skip,
        "top": args.top,
        "type": args.type,
    }, opts);
}

export interface ListGlobalRulestackSecurityServicesOutputArgs {
    /**
     * GlobalRulestack resource name
     */
    globalRulestackName: pulumi.Input<string>;
    skip?: pulumi.Input<string>;
    top?: pulumi.Input<number>;
    type: pulumi.Input<string>;
}