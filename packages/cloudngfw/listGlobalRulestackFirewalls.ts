import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * List of Firewalls associated with Rulestack
 *
 * Uses Azure REST API version 2025-02-06-preview.
 *
 * Other available API versions: 2023-09-01, 2023-10-10-preview, 2024-01-19-preview, 2024-02-07-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native cloudngfw [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function listGlobalRulestackFirewalls(args: ListGlobalRulestackFirewallsArgs, opts?: pulumi.InvokeOptions): Promise<ListGlobalRulestackFirewallsResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:cloudngfw:listGlobalRulestackFirewalls", {
        "globalRulestackName": args.globalRulestackName,
    }, opts);
}

export interface ListGlobalRulestackFirewallsArgs {
    /**
     * GlobalRulestack resource name
     */
    globalRulestackName: string;
}

/**
 * List firewalls response
 */
export interface ListGlobalRulestackFirewallsResult {
    /**
     * next link
     */
    readonly nextLink?: string;
    /**
     * firewalls list
     */
    readonly value: string[];
}
/**
 * List of Firewalls associated with Rulestack
 *
 * Uses Azure REST API version 2025-02-06-preview.
 *
 * Other available API versions: 2023-09-01, 2023-10-10-preview, 2024-01-19-preview, 2024-02-07-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native cloudngfw [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function listGlobalRulestackFirewallsOutput(args: ListGlobalRulestackFirewallsOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<ListGlobalRulestackFirewallsResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:cloudngfw:listGlobalRulestackFirewalls", {
        "globalRulestackName": args.globalRulestackName,
    }, opts);
}

export interface ListGlobalRulestackFirewallsOutputArgs {
    /**
     * GlobalRulestack resource name
     */
    globalRulestackName: pulumi.Input<string>;
}