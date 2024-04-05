import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * List of AppIds for LocalRulestack ApiVersion
 */
export function listLocalRulestackAppIds(args: ListLocalRulestackAppIdsArgs, opts?: pulumi.InvokeOptions): Promise<ListLocalRulestackAppIdsResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:cloudngfw/v20220829:listLocalRulestackAppIds", {
        "appIdVersion": args.appIdVersion,
        "appPrefix": args.appPrefix,
        "localRulestackName": args.localRulestackName,
        "resourceGroupName": args.resourceGroupName,
        "skip": args.skip,
        "top": args.top,
    }, opts);
}

export interface ListLocalRulestackAppIdsArgs {
    appIdVersion?: string;
    appPrefix?: string;
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

export interface ListLocalRulestackAppIdsResult {
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
 * List of AppIds for LocalRulestack ApiVersion
 */
export function listLocalRulestackAppIdsOutput(args: ListLocalRulestackAppIdsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<ListLocalRulestackAppIdsResult> {
    return pulumi.output(args).apply((a: any) => listLocalRulestackAppIds(a, opts))
}

export interface ListLocalRulestackAppIdsOutputArgs {
    appIdVersion?: pulumi.Input<string>;
    appPrefix?: pulumi.Input<string>;
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