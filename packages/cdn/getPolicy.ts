import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Retrieve protection policy with specified name within a resource group.
 *
 * Uses Azure REST API version 2024-09-01.
 *
 * Other available API versions: 2023-05-01, 2023-07-01-preview, 2024-02-01, 2024-05-01-preview, 2024-06-01-preview, 2025-04-15. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native cdn [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getPolicy(args: GetPolicyArgs, opts?: pulumi.InvokeOptions): Promise<GetPolicyResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:cdn:getPolicy", {
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
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * Describes custom rules inside the policy.
     */
    readonly customRules?: types.outputs.CustomRuleListResponse;
    /**
     * Describes Azure CDN endpoints associated with this Web Application Firewall policy.
     */
    readonly endpointLinks: types.outputs.CdnEndpointResponse[];
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
    readonly managedRules?: types.outputs.ManagedRuleSetListResponse;
    /**
     * Resource name.
     */
    readonly name: string;
    /**
     * Describes  policySettings for policy
     */
    readonly policySettings?: types.outputs.PolicySettingsResponse;
    /**
     * Provisioning state of the WebApplicationFirewallPolicy.
     */
    readonly provisioningState: string;
    /**
     * Describes rate limit rules inside the policy.
     */
    readonly rateLimitRules?: types.outputs.RateLimitRuleListResponse;
    readonly resourceState: string;
    /**
     * The pricing tier (defines a CDN provider, feature list and rate) of the CdnWebApplicationFirewallPolicy.
     */
    readonly sku: types.outputs.SkuResponse;
    /**
     * Read only system data
     */
    readonly systemData: types.outputs.SystemDataResponse;
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
 *
 * Uses Azure REST API version 2024-09-01.
 *
 * Other available API versions: 2023-05-01, 2023-07-01-preview, 2024-02-01, 2024-05-01-preview, 2024-06-01-preview, 2025-04-15. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native cdn [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getPolicyOutput(args: GetPolicyOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetPolicyResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:cdn:getPolicy", {
        "policyName": args.policyName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
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