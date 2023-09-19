import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Retrieve protection policy with specified name within a resource group.
 */
export function getPolicy(args: GetPolicyArgs, opts?: pulumi.InvokeOptions): Promise<GetPolicyResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:network/v20220501:getPolicy", {
        "policyName": args.policyName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetPolicyArgs {
    /**
     * The name of the Web Application Firewall Policy.
     */
    policyName: string;
    /**
     * Name of the Resource group within the Azure subscription.
     */
    resourceGroupName: string;
}

/**
 * Defines web application firewall policy.
 */
export interface GetPolicyResult {
    /**
     * Describes custom rules inside the policy.
     */
    readonly customRules?: types.outputs.CustomRuleListResponse;
    /**
     * Gets a unique read-only string that changes whenever the resource is updated.
     */
    readonly etag?: string;
    /**
     * Describes Frontend Endpoints associated with this Web Application Firewall policy.
     */
    readonly frontendEndpointLinks: types.outputs.FrontendEndpointLinkResponse[];
    /**
     * Resource ID.
     */
    readonly id: string;
    /**
     * Resource location.
     */
    readonly location?: string;
    /**
     * Describes managed rules inside the policy.
     */
    readonly managedRules?: types.outputs.ManagedRuleSetListResponse;
    /**
     * Resource name.
     */
    readonly name: string;
    /**
     * Describes settings for the policy.
     */
    readonly policySettings?: types.outputs.FrontDoorPolicySettingsResponse;
    /**
     * Provisioning state of the policy.
     */
    readonly provisioningState: string;
    readonly resourceState: string;
    /**
     * Describes Routing Rules associated with this Web Application Firewall policy.
     */
    readonly routingRuleLinks: types.outputs.RoutingRuleLinkResponse[];
    /**
     * Describes Security Policy associated with this Web Application Firewall policy.
     */
    readonly securityPolicyLinks: types.outputs.SecurityPolicyLinkResponse[];
    /**
     * The pricing tier of web application firewall policy. Defaults to Classic_AzureFrontDoor if not specified.
     */
    readonly sku?: types.outputs.SkuResponse;
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
     * The name of the Web Application Firewall Policy.
     */
    policyName: pulumi.Input<string>;
    /**
     * Name of the Resource group within the Azure subscription.
     */
    resourceGroupName: pulumi.Input<string>;
}
