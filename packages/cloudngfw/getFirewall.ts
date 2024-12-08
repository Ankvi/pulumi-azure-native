import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a FirewallResource
 * Azure REST API version: 2023-09-01.
 *
 * Other available API versions: 2022-08-29, 2022-08-29-preview, 2023-09-01-preview, 2023-10-10-preview, 2024-01-19-preview, 2024-02-07-preview.
 */
export function getFirewall(args: GetFirewallArgs, opts?: pulumi.InvokeOptions): Promise<GetFirewallResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:cloudngfw:getFirewall", {
        "firewallName": args.firewallName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetFirewallArgs {
    /**
     * Firewall resource name
     */
    firewallName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * PaloAltoNetworks Firewall
 */
export interface GetFirewallResult {
    /**
     * Associated Rulestack
     */
    readonly associatedRulestack?: types.outputs.RulestackDetailsResponse;
    /**
     * DNS settings for Firewall
     */
    readonly dnsSettings: types.outputs.DNSSettingsResponse;
    /**
     * Frontend settings for Firewall
     */
    readonly frontEndSettings?: types.outputs.FrontendSettingResponse[];
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The managed service identities assigned to this resource.
     */
    readonly identity?: types.outputs.AzureResourceManagerManagedIdentityPropertiesResponse;
    /**
     * Panorama Managed: Default is False. Default will be CloudSec managed
     */
    readonly isPanoramaManaged?: string;
    /**
     * The geo-location where the resource lives
     */
    readonly location: string;
    /**
     * Marketplace details
     */
    readonly marketplaceDetails: types.outputs.MarketplaceDetailsResponse;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Network settings
     */
    readonly networkProfile: types.outputs.NetworkProfileResponse;
    /**
     * panEtag info
     */
    readonly panEtag?: string;
    /**
     * Panorama Configuration
     */
    readonly panoramaConfig?: types.outputs.PanoramaConfigResponse;
    /**
     * Billing plan information.
     */
    readonly planData: types.outputs.PlanDataResponse;
    /**
     * Provisioning state of the resource.
     */
    readonly provisioningState: string;
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
 * Get a FirewallResource
 * Azure REST API version: 2023-09-01.
 *
 * Other available API versions: 2022-08-29, 2022-08-29-preview, 2023-09-01-preview, 2023-10-10-preview, 2024-01-19-preview, 2024-02-07-preview.
 */
export function getFirewallOutput(args: GetFirewallOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetFirewallResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:cloudngfw:getFirewall", {
        "firewallName": args.firewallName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetFirewallOutputArgs {
    /**
     * Firewall resource name
     */
    firewallName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}