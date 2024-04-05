import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Get changelog
 */
export function getGlobalRulestackChangeLog(args: GetGlobalRulestackChangeLogArgs, opts?: pulumi.InvokeOptions): Promise<GetGlobalRulestackChangeLogResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:cloudngfw/v20240207preview:getGlobalRulestackChangeLog", {
        "globalRulestackName": args.globalRulestackName,
    }, opts);
}

export interface GetGlobalRulestackChangeLogArgs {
    /**
     * GlobalRulestack resource name
     */
    globalRulestackName: string;
}

/**
 * Changelog list
 */
export interface GetGlobalRulestackChangeLogResult {
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
export function getGlobalRulestackChangeLogOutput(args: GetGlobalRulestackChangeLogOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetGlobalRulestackChangeLogResult> {
    return pulumi.output(args).apply((a: any) => getGlobalRulestackChangeLog(a, opts))
}

export interface GetGlobalRulestackChangeLogOutputArgs {
    /**
     * GlobalRulestack resource name
     */
    globalRulestackName: pulumi.Input<string>;
}