import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets properties of a DNS resolver domain list.
 *
 * Uses Azure REST API version 2023-07-01-preview.
 */
export function getDnsResolverDomainList(args: GetDnsResolverDomainListArgs, opts?: pulumi.InvokeOptions): Promise<GetDnsResolverDomainListResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:dnsresolver:getDnsResolverDomainList", {
        "dnsResolverDomainListName": args.dnsResolverDomainListName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetDnsResolverDomainListArgs {
    /**
     * The name of the DNS resolver domain list.
     */
    dnsResolverDomainListName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * Describes a DNS resolver domain list.
 */
export interface GetDnsResolverDomainListResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * The domains in the domain list.
     */
    readonly domains: string[];
    /**
     * ETag of the DNS resolver domain list.
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
     * The current provisioning state of the DNS resolver domain list. This is a read-only property and any attempt to set this value will be ignored.
     */
    readonly provisioningState: string;
    /**
     * The resourceGuid property of the DNS resolver domain list resource.
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
 * Gets properties of a DNS resolver domain list.
 *
 * Uses Azure REST API version 2023-07-01-preview.
 */
export function getDnsResolverDomainListOutput(args: GetDnsResolverDomainListOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetDnsResolverDomainListResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:dnsresolver:getDnsResolverDomainList", {
        "dnsResolverDomainListName": args.dnsResolverDomainListName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetDnsResolverDomainListOutputArgs {
    /**
     * The name of the DNS resolver domain list.
     */
    dnsResolverDomainListName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}