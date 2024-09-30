import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets properties of a DNS resolver policy.
 * Azure REST API version: 2023-07-01-preview.
 */
export function getDnsResolverPolicy(args: GetDnsResolverPolicyArgs, opts?: pulumi.InvokeOptions): Promise<GetDnsResolverPolicyResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:network:getDnsResolverPolicy", {
        "dnsResolverPolicyName": args.dnsResolverPolicyName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetDnsResolverPolicyArgs {
    /**
     * The name of the DNS resolver policy.
     */
    dnsResolverPolicyName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * Describes a DNS resolver policy.
 */
export interface GetDnsResolverPolicyResult {
    /**
     * ETag of the DNS resolver policy.
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
     * The current provisioning state of the DNS resolver policy. This is a read-only property and any attempt to set this value will be ignored.
     */
    readonly provisioningState: string;
    /**
     * The resourceGuid property of the DNS resolver policy resource.
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
 * Gets properties of a DNS resolver policy.
 * Azure REST API version: 2023-07-01-preview.
 */
export function getDnsResolverPolicyOutput(args: GetDnsResolverPolicyOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetDnsResolverPolicyResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:network:getDnsResolverPolicy", {
        "dnsResolverPolicyName": args.dnsResolverPolicyName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetDnsResolverPolicyOutputArgs {
    /**
     * The name of the DNS resolver policy.
     */
    dnsResolverPolicyName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}