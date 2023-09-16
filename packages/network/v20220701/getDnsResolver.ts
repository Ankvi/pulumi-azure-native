import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * Gets properties of a DNS resolver.
 */
export function getDnsResolver(args: GetDnsResolverArgs, opts?: pulumi.InvokeOptions): Promise<GetDnsResolverResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:network/v20220701:getDnsResolver", {
        "dnsResolverName": args.dnsResolverName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetDnsResolverArgs {
    /**
     * The name of the DNS resolver.
     */
    dnsResolverName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * Describes a DNS resolver.
 */
export interface GetDnsResolverResult {
    /**
     * The current status of the DNS resolver. This is a read-only property and any attempt to set this value will be ignored.
     */
    readonly dnsResolverState: string;
    /**
     * ETag of the DNS resolver.
     */
    readonly etag: string;
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
     * The current provisioning state of the DNS resolver. This is a read-only property and any attempt to set this value will be ignored.
     */
    readonly provisioningState: string;
    /**
     * The resourceGuid property of the DNS resolver resource.
     */
    readonly resourceGuid: string;
    /**
     * Metadata pertaining to creation and last modification of the resource.
     */
    readonly systemData: types.outputs.network.v20220701.SystemDataResponse;
    /**
     * Resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
    /**
     * The reference to the virtual network. This cannot be changed after creation.
     */
    readonly virtualNetwork: types.outputs.network.v20220701.SubResourceResponse;
}
/**
 * Gets properties of a DNS resolver.
 */
export function getDnsResolverOutput(args: GetDnsResolverOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetDnsResolverResult> {
    return pulumi.output(args).apply((a: any) => getDnsResolver(a, opts))
}

export interface GetDnsResolverOutputArgs {
    /**
     * The name of the DNS resolver.
     */
    dnsResolverName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}
