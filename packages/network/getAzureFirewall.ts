import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the specified Azure Firewall.
 *
 * Uses Azure REST API version 2024-05-01.
 *
 * Other available API versions: 2018-06-01, 2018-07-01, 2018-08-01, 2018-10-01, 2018-11-01, 2018-12-01, 2019-02-01, 2019-04-01, 2019-06-01, 2019-07-01, 2019-08-01, 2019-09-01, 2019-11-01, 2019-12-01, 2020-03-01, 2020-04-01, 2020-05-01, 2020-06-01, 2020-07-01, 2020-08-01, 2020-11-01, 2021-02-01, 2021-03-01, 2021-05-01, 2021-08-01, 2022-01-01, 2022-05-01, 2022-07-01, 2022-09-01, 2022-11-01, 2023-02-01, 2023-04-01, 2023-05-01, 2023-06-01, 2023-09-01, 2023-11-01, 2024-01-01, 2024-03-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native network [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getAzureFirewall(args: GetAzureFirewallArgs, opts?: pulumi.InvokeOptions): Promise<GetAzureFirewallResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:network:getAzureFirewall", {
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
    readonly applicationRuleCollections?: types.outputs.AzureFirewallApplicationRuleCollectionResponse[];
    /**
     * Properties to provide a custom autoscale configuration to this azure firewall.
     */
    readonly autoscaleConfiguration?: types.outputs.AzureFirewallAutoscaleConfigurationResponse;
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    readonly etag: string;
    /**
     * The firewallPolicy associated with this azure firewall.
     */
    readonly firewallPolicy?: types.outputs.SubResourceResponse;
    /**
     * IP addresses associated with AzureFirewall.
     */
    readonly hubIPAddresses?: types.outputs.HubIPAddressesResponse;
    /**
     * Resource ID.
     */
    readonly id?: string;
    /**
     * IP configuration of the Azure Firewall resource.
     */
    readonly ipConfigurations?: types.outputs.AzureFirewallIPConfigurationResponse[];
    /**
     * IpGroups associated with AzureFirewall.
     */
    readonly ipGroups: types.outputs.AzureFirewallIpGroupsResponse[];
    /**
     * Resource location.
     */
    readonly location?: string;
    /**
     * IP configuration of the Azure Firewall used for management traffic.
     */
    readonly managementIpConfiguration?: types.outputs.AzureFirewallIPConfigurationResponse;
    /**
     * Resource name.
     */
    readonly name: string;
    /**
     * Collection of NAT rule collections used by Azure Firewall.
     */
    readonly natRuleCollections?: types.outputs.AzureFirewallNatRuleCollectionResponse[];
    /**
     * Collection of network rule collections used by Azure Firewall.
     */
    readonly networkRuleCollections?: types.outputs.AzureFirewallNetworkRuleCollectionResponse[];
    /**
     * The provisioning state of the Azure firewall resource.
     */
    readonly provisioningState: string;
    /**
     * The Azure Firewall Resource SKU.
     */
    readonly sku?: types.outputs.AzureFirewallSkuResponse;
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
    readonly virtualHub?: types.outputs.SubResourceResponse;
    /**
     * A list of availability zones denoting where the resource needs to come from.
     */
    readonly zones?: string[];
}
/**
 * Gets the specified Azure Firewall.
 *
 * Uses Azure REST API version 2024-05-01.
 *
 * Other available API versions: 2018-06-01, 2018-07-01, 2018-08-01, 2018-10-01, 2018-11-01, 2018-12-01, 2019-02-01, 2019-04-01, 2019-06-01, 2019-07-01, 2019-08-01, 2019-09-01, 2019-11-01, 2019-12-01, 2020-03-01, 2020-04-01, 2020-05-01, 2020-06-01, 2020-07-01, 2020-08-01, 2020-11-01, 2021-02-01, 2021-03-01, 2021-05-01, 2021-08-01, 2022-01-01, 2022-05-01, 2022-07-01, 2022-09-01, 2022-11-01, 2023-02-01, 2023-04-01, 2023-05-01, 2023-06-01, 2023-09-01, 2023-11-01, 2024-01-01, 2024-03-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native network [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getAzureFirewallOutput(args: GetAzureFirewallOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetAzureFirewallResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:network:getAzureFirewall", {
        "azureFirewallName": args.azureFirewallName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
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