import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a SecurityPolicy
 *
 * Uses Azure REST API version 2024-05-01-preview.
 *
 * Other available API versions: 2025-01-01, 2025-03-01-preview.
 */
export function getSecurityPoliciesInterface(args: GetSecurityPoliciesInterfaceArgs, opts?: pulumi.InvokeOptions): Promise<GetSecurityPoliciesInterfaceResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:servicenetworking:getSecurityPoliciesInterface", {
        "resourceGroupName": args.resourceGroupName,
        "securityPolicyName": args.securityPolicyName,
        "trafficControllerName": args.trafficControllerName,
    }, opts);
}

export interface GetSecurityPoliciesInterfaceArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * SecurityPolicy
     */
    securityPolicyName: string;
    /**
     * traffic controller name for path
     */
    trafficControllerName: string;
}

/**
 * SecurityPolicy Subresource of Traffic Controller.
 */
export interface GetSecurityPoliciesInterfaceResult {
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
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
     * Type of the Traffic Controller Security Policy
     */
    readonly policyType: string;
    /**
     * Provisioning State of Traffic Controller SecurityPolicy Resource
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
    /**
     * Web Application Firewall Policy of the Traffic Controller Security Policy. Single Security Policy can have only one policy type set.
     */
    readonly wafPolicy?: types.outputs.WafPolicyResponse;
}
/**
 * Get a SecurityPolicy
 *
 * Uses Azure REST API version 2024-05-01-preview.
 *
 * Other available API versions: 2025-01-01, 2025-03-01-preview.
 */
export function getSecurityPoliciesInterfaceOutput(args: GetSecurityPoliciesInterfaceOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSecurityPoliciesInterfaceResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:servicenetworking:getSecurityPoliciesInterface", {
        "resourceGroupName": args.resourceGroupName,
        "securityPolicyName": args.securityPolicyName,
        "trafficControllerName": args.trafficControllerName,
    }, opts);
}

export interface GetSecurityPoliciesInterfaceOutputArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * SecurityPolicy
     */
    securityPolicyName: pulumi.Input<string>;
    /**
     * traffic controller name for path
     */
    trafficControllerName: pulumi.Input<string>;
}