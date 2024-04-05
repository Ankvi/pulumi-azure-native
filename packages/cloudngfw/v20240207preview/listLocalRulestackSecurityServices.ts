import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * List the security services for rulestack
 */
export function listLocalRulestackSecurityServices(args: ListLocalRulestackSecurityServicesArgs, opts?: pulumi.InvokeOptions): Promise<ListLocalRulestackSecurityServicesResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:cloudngfw/v20240207preview:listLocalRulestackSecurityServices", {
        "localRulestackName": args.localRulestackName,
        "resourceGroupName": args.resourceGroupName,
        "skip": args.skip,
        "top": args.top,
        "type": args.type,
    }, opts);
}

export interface ListLocalRulestackSecurityServicesArgs {
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
    type: string;
}

/**
 * Security services list response
 */
export interface ListLocalRulestackSecurityServicesResult {
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
export function listLocalRulestackSecurityServicesOutput(args: ListLocalRulestackSecurityServicesOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<ListLocalRulestackSecurityServicesResult> {
    return pulumi.output(args).apply((a: any) => listLocalRulestackSecurityServices(a, opts))
}

export interface ListLocalRulestackSecurityServicesOutputArgs {
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
    type: pulumi.Input<string>;
}