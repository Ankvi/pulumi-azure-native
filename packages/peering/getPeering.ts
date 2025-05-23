import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets an existing peering with the specified name under the given subscription and resource group.
 *
 * Uses Azure REST API version 2022-10-01.
 */
export function getPeering(args: GetPeeringArgs, opts?: pulumi.InvokeOptions): Promise<GetPeeringResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:peering:getPeering", {
        "peeringName": args.peeringName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetPeeringArgs {
    /**
     * The name of the peering.
     */
    peeringName: string;
    /**
     * The name of the resource group.
     */
    resourceGroupName: string;
}

/**
 * Peering is a logical representation of a set of connections to the Microsoft Cloud Edge at a location.
 */
export interface GetPeeringResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * The properties that define a direct peering.
     */
    readonly direct?: types.outputs.PeeringPropertiesDirectResponse;
    /**
     * The properties that define an exchange peering.
     */
    readonly exchange?: types.outputs.PeeringPropertiesExchangeResponse;
    /**
     * The ID of the resource.
     */
    readonly id: string;
    /**
     * The kind of the peering.
     */
    readonly kind: string;
    /**
     * The location of the resource.
     */
    readonly location: string;
    /**
     * The name of the resource.
     */
    readonly name: string;
    /**
     * The location of the peering.
     */
    readonly peeringLocation?: string;
    /**
     * The provisioning state of the resource.
     */
    readonly provisioningState: string;
    /**
     * The SKU that defines the tier and kind of the peering.
     */
    readonly sku: types.outputs.PeeringSkuResponse;
    /**
     * The resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * The type of the resource.
     */
    readonly type: string;
}
/**
 * Gets an existing peering with the specified name under the given subscription and resource group.
 *
 * Uses Azure REST API version 2022-10-01.
 */
export function getPeeringOutput(args: GetPeeringOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetPeeringResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:peering:getPeering", {
        "peeringName": args.peeringName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetPeeringOutputArgs {
    /**
     * The name of the peering.
     */
    peeringName: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
}