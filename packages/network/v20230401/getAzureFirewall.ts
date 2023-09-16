import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * Gets the specified Azure Firewall.
 */
export function getAzureFirewall(args: GetAzureFirewallArgs, opts?: pulumi.InvokeOptions): Promise<GetAzureFirewallResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:network/v20230401:getAzureFirewall", {
        "azureFirewallName": args.azureFirewallName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetAzureFirewallArgs {
    /**
     * The name of the Azure Firewall.
     */
    azureFirewallName: string;
    /**
     * The name of the resource group.
     */
    resourceGroupName: string;
}

/**
 * Azure Firewall resource.
 */
export interface GetAzureFirewallResult {
    /**
     * The additional properties used to further config this azure firewall.
     */
    readonly additionalProperties?: {[key: string]: string};
    /**
     * Collection of application rule collections used by Azure Firewall.
     */
    readonly applicationRuleCollections?: types.outputs.network.v20230401.AzureFirewallApplicationRuleCollectionResponse[];
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    readonly etag: string;
    /**
     * The firewallPolicy associated with this azure firewall.
     */
    readonly firewallPolicy?: types.outputs.network.v20230401.SubResourceResponse;
    /**
     * IP addresses associated with AzureFirewall.
     */
    readonly hubIPAddresses?: types.outputs.network.v20230401.HubIPAddressesResponse;
    /**
     * Resource ID.
     */
    readonly id?: string;
    /**
     * IP configuration of the Azure Firewall resource.
     */
    readonly ipConfigurations?: types.outputs.network.v20230401.AzureFirewallIPConfigurationResponse[];
    /**
     * IpGroups associated with AzureFirewall.
     */
    readonly ipGroups: types.outputs.network.v20230401.AzureFirewallIpGroupsResponse[];
    /**
     * Resource location.
     */
    readonly location?: string;
    /**
     * IP configuration of the Azure Firewall used for management traffic.
     */
    readonly managementIpConfiguration?: types.outputs.network.v20230401.AzureFirewallIPConfigurationResponse;
    /**
     * Resource name.
     */
    readonly name: string;
    /**
     * Collection of NAT rule collections used by Azure Firewall.
     */
    readonly natRuleCollections?: types.outputs.network.v20230401.AzureFirewallNatRuleCollectionResponse[];
    /**
     * Collection of network rule collections used by Azure Firewall.
     */
    readonly networkRuleCollections?: types.outputs.network.v20230401.AzureFirewallNetworkRuleCollectionResponse[];
    /**
     * The provisioning state of the Azure firewall resource.
     */
    readonly provisioningState: string;
    /**
     * The Azure Firewall Resource SKU.
     */
    readonly sku?: types.outputs.network.v20230401.AzureFirewallSkuResponse;
    /**
     * Resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * The operation mode for Threat Intelligence.
     */
    readonly threatIntelMode?: string;
    /**
     * Resource type.
     */
    readonly type: string;
    /**
     * The virtualHub to which the firewall belongs.
     */
    readonly virtualHub?: types.outputs.network.v20230401.SubResourceResponse;
    /**
     * A list of availability zones denoting where the resource needs to come from.
     */
    readonly zones?: string[];
}
/**
 * Gets the specified Azure Firewall.
 */
export function getAzureFirewallOutput(args: GetAzureFirewallOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetAzureFirewallResult> {
    return pulumi.output(args).apply((a: any) => getAzureFirewall(a, opts))
}

export interface GetAzureFirewallOutputArgs {
    /**
     * The name of the Azure Firewall.
     */
    azureFirewallName: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
}
