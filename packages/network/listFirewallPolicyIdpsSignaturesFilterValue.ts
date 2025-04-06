import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Retrieves the current filter values for the signatures overrides
 *
 * Uses Azure REST API version 2024-05-01.
 *
 * Other available API versions: 2021-05-01, 2021-08-01, 2022-01-01, 2022-05-01, 2022-07-01, 2022-09-01, 2022-11-01, 2023-02-01, 2023-04-01, 2023-05-01, 2023-06-01, 2023-09-01, 2023-11-01, 2024-01-01, 2024-03-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native network [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function listFirewallPolicyIdpsSignaturesFilterValue(args: ListFirewallPolicyIdpsSignaturesFilterValueArgs, opts?: pulumi.InvokeOptions): Promise<ListFirewallPolicyIdpsSignaturesFilterValueResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:network:listFirewallPolicyIdpsSignaturesFilterValue", {
        "filterName": args.filterName,
        "firewallPolicyName": args.firewallPolicyName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface ListFirewallPolicyIdpsSignaturesFilterValueArgs {
    /**
     * Describes the name of the column which values will be returned
     */
    filterName?: string;
    /**
     * The name of the Firewall Policy.
     */
    firewallPolicyName: string;
    /**
     * The name of the resource group.
     */
    resourceGroupName: string;
}

/**
 * Describes the list of all possible values for a specific filter value
 */
export interface ListFirewallPolicyIdpsSignaturesFilterValueResult {
    /**
     * Describes the possible values
     */
    readonly filterValues?: string[];
}
/**
 * Retrieves the current filter values for the signatures overrides
 *
 * Uses Azure REST API version 2024-05-01.
 *
 * Other available API versions: 2021-05-01, 2021-08-01, 2022-01-01, 2022-05-01, 2022-07-01, 2022-09-01, 2022-11-01, 2023-02-01, 2023-04-01, 2023-05-01, 2023-06-01, 2023-09-01, 2023-11-01, 2024-01-01, 2024-03-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native network [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function listFirewallPolicyIdpsSignaturesFilterValueOutput(args: ListFirewallPolicyIdpsSignaturesFilterValueOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<ListFirewallPolicyIdpsSignaturesFilterValueResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:network:listFirewallPolicyIdpsSignaturesFilterValue", {
        "filterName": args.filterName,
        "firewallPolicyName": args.firewallPolicyName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface ListFirewallPolicyIdpsSignaturesFilterValueOutputArgs {
    /**
     * Describes the name of the column which values will be returned
     */
    filterName?: pulumi.Input<string>;
    /**
     * The name of the Firewall Policy.
     */
    firewallPolicyName: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
}