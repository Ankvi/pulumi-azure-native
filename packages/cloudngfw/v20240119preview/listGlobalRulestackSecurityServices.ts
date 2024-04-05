import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * List the security services for rulestack
 */
export function listGlobalRulestackSecurityServices(args: ListGlobalRulestackSecurityServicesArgs, opts?: pulumi.InvokeOptions): Promise<ListGlobalRulestackSecurityServicesResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:cloudngfw/v20240119preview:listGlobalRulestackSecurityServices", {
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
 */
export function listGlobalRulestackSecurityServicesOutput(args: ListGlobalRulestackSecurityServicesOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<ListGlobalRulestackSecurityServicesResult> {
    return pulumi.output(args).apply((a: any) => listGlobalRulestackSecurityServices(a, opts))
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