import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Gets an existing registered ASN with the specified name under the given subscription, resource group and peering.
 */
export function getRegisteredAsn(args: GetRegisteredAsnArgs, opts?: pulumi.InvokeOptions): Promise<GetRegisteredAsnResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:peering/v20221001:getRegisteredAsn", {
        "peeringName": args.peeringName,
        "registeredAsnName": args.registeredAsnName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetRegisteredAsnArgs {
    /**
     * The name of the peering.
     */
    peeringName: string;
    /**
     * The name of the registered ASN.
     */
    registeredAsnName: string;
    /**
     * The name of the resource group.
     */
    resourceGroupName: string;
}

/**
 * The customer's ASN that is registered by the peering service provider.
 */
export interface GetRegisteredAsnResult {
    /**
     * The customer's ASN from which traffic originates.
     */
    readonly asn?: number;
    /**
     * The ID of the resource.
     */
    readonly id: string;
    /**
     * The name of the resource.
     */
    readonly name: string;
    /**
     * The peering service prefix key that is to be shared with the customer.
     */
    readonly peeringServicePrefixKey: string;
    /**
     * The provisioning state of the resource.
     */
    readonly provisioningState: string;
    /**
     * The type of the resource.
     */
    readonly type: string;
}
/**
 * Gets an existing registered ASN with the specified name under the given subscription, resource group and peering.
 */
export function getRegisteredAsnOutput(args: GetRegisteredAsnOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetRegisteredAsnResult> {
    return pulumi.output(args).apply((a: any) => getRegisteredAsn(a, opts))
}

export interface GetRegisteredAsnOutputArgs {
    /**
     * The name of the peering.
     */
    peeringName: pulumi.Input<string>;
    /**
     * The name of the registered ASN.
     */
    registeredAsnName: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
}