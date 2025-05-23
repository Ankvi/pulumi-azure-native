import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets a DNS forwarding ruleset properties.
 *
 * Uses Azure REST API version 2023-07-01-preview.
 *
 * Other available API versions: 2020-04-01-preview, 2022-07-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native dnsresolver [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getDnsForwardingRuleset(args: GetDnsForwardingRulesetArgs, opts?: pulumi.InvokeOptions): Promise<GetDnsForwardingRulesetResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:dnsresolver:getDnsForwardingRuleset", {
        "dnsForwardingRulesetName": args.dnsForwardingRulesetName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetDnsForwardingRulesetArgs {
    /**
     * The name of the DNS forwarding ruleset.
     */
    dnsForwardingRulesetName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * Describes a DNS forwarding ruleset.
 */
export interface GetDnsForwardingRulesetResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * The reference to the DNS resolver outbound endpoints that are used to route DNS queries matching the forwarding rules in the ruleset to the target DNS servers.
     */
    readonly dnsResolverOutboundEndpoints: types.outputs.SubResourceResponse[];
    /**
     * ETag of the DNS forwarding ruleset.
     */
    readonly etag: string;
    /**
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
     */
    readonly id: string;
    /**
     * The geo-location where the resource lives
     */
    readonly location: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The current provisioning state of the DNS forwarding ruleset. This is a read-only property and any attempt to set this value will be ignored.
     */
    readonly provisioningState: string;
    /**
     * The resourceGuid for the DNS forwarding ruleset.
     */
    readonly resourceGuid: string;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * Resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Gets a DNS forwarding ruleset properties.
 *
 * Uses Azure REST API version 2023-07-01-preview.
 *
 * Other available API versions: 2020-04-01-preview, 2022-07-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native dnsresolver [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getDnsForwardingRulesetOutput(args: GetDnsForwardingRulesetOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetDnsForwardingRulesetResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:dnsresolver:getDnsForwardingRuleset", {
        "dnsForwardingRulesetName": args.dnsForwardingRulesetName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetDnsForwardingRulesetOutputArgs {
    /**
     * The name of the DNS forwarding ruleset.
     */
    dnsForwardingRulesetName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}