import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * List of AppIds for GlobalRulestack ApiVersion
 */
export function listGlobalRulestackAppIds(args: ListGlobalRulestackAppIdsArgs, opts?: pulumi.InvokeOptions): Promise<ListGlobalRulestackAppIdsResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:cloudngfw/v20230901:listGlobalRulestackAppIds", {
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
 */
export function listGlobalRulestackAppIdsOutput(args: ListGlobalRulestackAppIdsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<ListGlobalRulestackAppIdsResult> {
    return pulumi.output(args).apply((a: any) => listGlobalRulestackAppIds(a, opts))
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