import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Get changelog
 */
export function getLocalRulestackChangeLog(args: GetLocalRulestackChangeLogArgs, opts?: pulumi.InvokeOptions): Promise<GetLocalRulestackChangeLogResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:cloudngfw/v20220829preview:getLocalRulestackChangeLog", {
        "localRulestackName": args.localRulestackName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetLocalRulestackChangeLogArgs {
    /**
     * LocalRulestack resource name
     */
    localRulestackName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * Changelog list
 */
export interface GetLocalRulestackChangeLogResult {
    /**
     * list of changes
     */
    readonly changes: string[];
    /**
     * lastCommitted timestamp
     */
    readonly lastCommitted?: string;
    /**
     * lastModified timestamp
     */
    readonly lastModified?: string;
}
/**
 * Get changelog
 */
export function getLocalRulestackChangeLogOutput(args: GetLocalRulestackChangeLogOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetLocalRulestackChangeLogResult> {
    return pulumi.output(args).apply((a: any) => getLocalRulestackChangeLog(a, opts))
}

export interface GetLocalRulestackChangeLogOutputArgs {
    /**
     * LocalRulestack resource name
     */
    localRulestackName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}