import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * Retrieve protection policy with specified name within a resource group.
 */
export function getPolicy(args: GetPolicyArgs, opts?: pulumi.InvokeOptions): Promise<GetPolicyResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:cdn/v20230501:getPolicy", {
        "policyName": args.policyName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetPolicyArgs {
    /**
     * The name of the CdnWebApplicationFirewallPolicy.
     */
    policyName: string;
    /**
     * Name of the Resource group within the Azure subscription.
     */
    resourceGroupName: string;
}

/**
 * Defines web application firewall policy for Azure CDN.
 */
export interface GetPolicyResult {
    /**
     * Describes custom rules inside the policy.
     */
    readonly customRules?: types.outputs.cdn.v20230501.CustomRuleListResponse;
    /**
     * Describes Azure CDN endpoints associated with this Web Application Firewall policy.
     */
    readonly endpointLinks: types.outputs.cdn.v20230501.CdnEndpointResponse[];
    /**
     * Gets a unique read-only string that changes whenever the resource is updated.
     */
    readonly etag?: string;
    /**
     * Key-Value pair representing additional properties for Web Application Firewall policy.
     */
    readonly extendedProperties?: {[key: string]: string};
    /**
     * Resource ID.
     */
    readonly id: string;
    /**
     * Resource location.
     */
    readonly location: string;
    /**
     * Describes managed rules inside the policy.
     */
    readonly managedRules?: types.outputs.cdn.v20230501.ManagedRuleSetListResponse;
    /**
     * Resource name.
     */
    readonly name: string;
    /**
     * Describes  policySettings for policy
     */
    readonly policySettings?: types.outputs.cdn.v20230501.PolicySettingsResponse;
    /**
     * Provisioning state of the WebApplicationFirewallPolicy.
     */
    readonly provisioningState: string;
    /**
     * Describes rate limit rules inside the policy.
     */
    readonly rateLimitRules?: types.outputs.cdn.v20230501.RateLimitRuleListResponse;
    readonly resourceState: string;
    /**
     * The pricing tier (defines a CDN provider, feature list and rate) of the CdnWebApplicationFirewallPolicy.
     */
    readonly sku: types.outputs.cdn.v20230501.SkuResponse;
    /**
     * Read only system data
     */
    readonly systemData: types.outputs.cdn.v20230501.SystemDataResponse;
    /**
     * Resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * Resource type.
     */
    readonly type: string;
}
/**
 * Retrieve protection policy with specified name within a resource group.
 */
export function getPolicyOutput(args: GetPolicyOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetPolicyResult> {
    return pulumi.output(args).apply((a: any) => getPolicy(a, opts))
}

export interface GetPolicyOutputArgs {
    /**
     * The name of the CdnWebApplicationFirewallPolicy.
     */
    policyName: pulumi.Input<string>;
    /**
     * Name of the Resource group within the Azure subscription.
     */
    resourceGroupName: pulumi.Input<string>;
}
