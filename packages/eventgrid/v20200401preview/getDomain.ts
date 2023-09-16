import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * Get properties of a domain.
 */
export function getDomain(args: GetDomainArgs, opts?: pulumi.InvokeOptions): Promise<GetDomainResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:eventgrid/v20200401preview:getDomain", {
        "domainName": args.domainName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetDomainArgs {
    /**
     * Name of the domain.
     */
    domainName: string;
    /**
     * The name of the resource group within the user's subscription.
     */
    resourceGroupName: string;
}

/**
 * EventGrid Domain.
 */
export interface GetDomainResult {
    /**
     * Endpoint for the domain.
     */
    readonly endpoint: string;
    /**
     * Fully qualified identifier of the resource.
     */
    readonly id: string;
    /**
     * Identity information for the resource.
     */
    readonly identity?: types.outputs.eventgrid.v20200401preview.IdentityInfoResponse;
    /**
     * This can be used to restrict traffic from specific IPs instead of all IPs. Note: These are considered only if PublicNetworkAccess is enabled.
     */
    readonly inboundIpRules?: types.outputs.eventgrid.v20200401preview.InboundIpRuleResponse[];
    /**
     * This determines the format that Event Grid should expect for incoming events published to the domain.
     */
    readonly inputSchema?: string;
    /**
     * Information about the InputSchemaMapping which specified the info about mapping event payload.
     */
    readonly inputSchemaMapping?: types.outputs.eventgrid.v20200401preview.JsonInputSchemaMappingResponse;
    /**
     * Location of the resource.
     */
    readonly location: string;
    /**
     * Metric resource id for the domain.
     */
    readonly metricResourceId: string;
    /**
     * Name of the resource.
     */
    readonly name: string;
    /**
     * List of private endpoint connections.
     */
    readonly privateEndpointConnections?: types.outputs.eventgrid.v20200401preview.PrivateEndpointConnectionResponse[];
    /**
     * Provisioning state of the domain.
     */
    readonly provisioningState: string;
    /**
     * This determines if traffic is allowed over public network. By default it is enabled. 
     * You can further restrict to specific IPs by configuring <seealso cref="P:Microsoft.Azure.Events.ResourceProvider.Common.Contracts.DomainProperties.InboundIpRules" />
     */
    readonly publicNetworkAccess?: string;
    /**
     * The Sku pricing tier for the domain.
     */
    readonly sku?: types.outputs.eventgrid.v20200401preview.ResourceSkuResponse;
    /**
     * Tags of the resource.
     */
    readonly tags?: {[key: string]: string};
    /**
     * Type of the resource.
     */
    readonly type: string;
}
/**
 * Get properties of a domain.
 */
export function getDomainOutput(args: GetDomainOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetDomainResult> {
    return pulumi.output(args).apply((a: any) => getDomain(a, opts))
}

export interface GetDomainOutputArgs {
    /**
     * Name of the domain.
     */
    domainName: pulumi.Input<string>;
    /**
     * The name of the resource group within the user's subscription.
     */
    resourceGroupName: pulumi.Input<string>;
}
