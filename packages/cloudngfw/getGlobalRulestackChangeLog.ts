import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Get changelog
 * Azure REST API version: 2023-09-01.
 *
 * Other available API versions: 2022-08-29, 2022-08-29-preview, 2023-09-01-preview, 2023-10-10-preview, 2024-01-19-preview, 2024-02-07-preview, 2025-02-06-preview.
 */
export function getGlobalRulestackChangeLog(args: GetGlobalRulestackChangeLogArgs, opts?: pulumi.InvokeOptions): Promise<GetGlobalRulestackChangeLogResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:cloudngfw:getGlobalRulestackChangeLog", {
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
 * Azure REST API version: 2023-09-01.
 *
 * Other available API versions: 2022-08-29, 2022-08-29-preview, 2023-09-01-preview, 2023-10-10-preview, 2024-01-19-preview, 2024-02-07-preview, 2025-02-06-preview.
 */
export function getGlobalRulestackChangeLogOutput(args: GetGlobalRulestackChangeLogOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetGlobalRulestackChangeLogResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:cloudngfw:getGlobalRulestackChangeLog", {
        "globalRulestackName": args.globalRulestackName,
    }, opts);
}

export interface GetGlobalRulestackChangeLogOutputArgs {
    /**
     * GlobalRulestack resource name
     */
    globalRulestackName: pulumi.Input<string>;
}