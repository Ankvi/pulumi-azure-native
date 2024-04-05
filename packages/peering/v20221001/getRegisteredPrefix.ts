import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Gets an existing registered prefix with the specified name under the given subscription, resource group and peering.
 */
export function getRegisteredPrefix(args: GetRegisteredPrefixArgs, opts?: pulumi.InvokeOptions): Promise<GetRegisteredPrefixResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:peering/v20221001:getRegisteredPrefix", {
        "peeringName": args.peeringName,
        "registeredPrefixName": args.registeredPrefixName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetRegisteredPrefixArgs {
    /**
     * The name of the peering.
     */
    peeringName: string;
    /**
     * The name of the registered prefix.
     */
    registeredPrefixName: string;
    /**
     * The name of the resource group.
     */
    resourceGroupName: string;
}

/**
 * The customer's prefix that is registered by the peering service provider.
 */
export interface GetRegisteredPrefixResult {
    /**
     * The error message associated with the validation state, if any.
     */
    readonly errorMessage: string;
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
     * The customer's prefix from which traffic originates.
     */
    readonly prefix?: string;
    /**
     * The prefix validation state.
     */
    readonly prefixValidationState: string;
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
 * Gets an existing registered prefix with the specified name under the given subscription, resource group and peering.
 */
export function getRegisteredPrefixOutput(args: GetRegisteredPrefixOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetRegisteredPrefixResult> {
    return pulumi.output(args).apply((a: any) => getRegisteredPrefix(a, opts))
}

export interface GetRegisteredPrefixOutputArgs {
    /**
     * The name of the peering.
     */
    peeringName: pulumi.Input<string>;
    /**
     * The name of the registered prefix.
     */
    registeredPrefixName: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
}