import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets an existing security policy within a profile.
 * Azure REST API version: 2023-05-01.
 *
 * Other available API versions: 2023-07-01-preview, 2024-02-01, 2024-05-01-preview, 2024-06-01-preview, 2024-09-01.
 */
export function getSecurityPolicy(args: GetSecurityPolicyArgs, opts?: pulumi.InvokeOptions): Promise<GetSecurityPolicyResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:cdn:getSecurityPolicy", {
        "profileName": args.profileName,
        "resourceGroupName": args.resourceGroupName,
        "securityPolicyName": args.securityPolicyName,
    }, opts);
}

export interface GetSecurityPolicyArgs {
    /**
     * Name of the Azure Front Door Standard or Azure Front Door Premium profile which is unique within the resource group.
     */
    profileName: string;
    /**
     * Name of the Resource group within the Azure subscription.
     */
    resourceGroupName: string;
    /**
     * Name of the security policy under the profile.
     */
    securityPolicyName: string;
}

/**
 * SecurityPolicy association for AzureFrontDoor profile
 */
export interface GetSecurityPolicyResult {
    readonly deploymentStatus: string;
    /**
     * Resource ID.
     */
    readonly id: string;
    /**
     * Resource name.
     */
    readonly name: string;
    /**
     * object which contains security policy parameters
     */
    readonly parameters?: types.outputs.SecurityPolicyWebApplicationFirewallParametersResponse;
    /**
     * The name of the profile which holds the security policy.
     */
    readonly profileName: string;
    /**
     * Provisioning status
     */
    readonly provisioningState: string;
    /**
     * Read only system data
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * Resource type.
     */
    readonly type: string;
}
/**
 * Gets an existing security policy within a profile.
 * Azure REST API version: 2023-05-01.
 *
 * Other available API versions: 2023-07-01-preview, 2024-02-01, 2024-05-01-preview, 2024-06-01-preview, 2024-09-01.
 */
export function getSecurityPolicyOutput(args: GetSecurityPolicyOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetSecurityPolicyResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:cdn:getSecurityPolicy", {
        "profileName": args.profileName,
        "resourceGroupName": args.resourceGroupName,
        "securityPolicyName": args.securityPolicyName,
    }, opts);
}

export interface GetSecurityPolicyOutputArgs {
    /**
     * Name of the Azure Front Door Standard or Azure Front Door Premium profile which is unique within the resource group.
     */
    profileName: pulumi.Input<string>;
    /**
     * Name of the Resource group within the Azure subscription.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Name of the security policy under the profile.
     */
    securityPolicyName: pulumi.Input<string>;
}