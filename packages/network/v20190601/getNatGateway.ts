import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the specified nat gateway in a specified resource group.
 */
export function getNatGateway(args: GetNatGatewayArgs, opts?: pulumi.InvokeOptions): Promise<GetNatGatewayResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:network/v20190601:getNatGateway", {
        "expand": args.expand,
        "natGatewayName": args.natGatewayName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetNatGatewayArgs {
    /**
     * Expands referenced resources.
     */
    expand?: string;
    /**
     * The name of the nat gateway.
     */
    natGatewayName: string;
    /**
     * The name of the resource group.
     */
    resourceGroupName: string;
}

/**
 * Nat Gateway resource.
 */
export interface GetNatGatewayResult {
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    readonly etag?: string;
    /**
     * Resource ID.
     */
    readonly id?: string;
    /**
     * The idle timeout of the nat gateway.
     */
    readonly idleTimeoutInMinutes?: number;
    /**
     * Resource location.
     */
    readonly location?: string;
    /**
     * Resource name.
     */
    readonly name: string;
    /**
     * The provisioning state of the NatGateway resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
     */
    readonly provisioningState?: string;
    /**
     * An array of public ip addresses associated with the nat gateway resource.
     */
    readonly publicIpAddresses?: types.outputs.SubResourceResponse[];
    /**
     * An array of public ip prefixes associated with the nat gateway resource.
     */
    readonly publicIpPrefixes?: types.outputs.SubResourceResponse[];
    /**
     * The resource GUID property of the nat gateway resource.
     */
    readonly resourceGuid?: string;
    /**
     * The nat gateway SKU.
     */
    readonly sku?: types.outputs.NatGatewaySkuResponse;
    /**
     * An array of references to the subnets using this nat gateway resource.
     */
    readonly subnets: types.outputs.SubResourceResponse[];
    /**
     * Resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * Resource type.
     */
    readonly type: string;
    /**
     * A list of availability zones denoting the zone in which Nat Gateway should be deployed.
     */
    readonly zones?: string[];
}
/**
 * Gets the specified nat gateway in a specified resource group.
 */
export function getNatGatewayOutput(args: GetNatGatewayOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetNatGatewayResult> {
    return pulumi.output(args).apply((a: any) => getNatGateway(a, opts))
}

export interface GetNatGatewayOutputArgs {
    /**
     * Expands referenced resources.
     */
    expand?: pulumi.Input<string>;
    /**
     * The name of the nat gateway.
     */
    natGatewayName: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
}