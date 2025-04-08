import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets an existing prefix with the specified name under the given subscription, resource group and peering service.
 *
 * Uses Azure REST API version 2022-10-01.
 */
export function getPrefix(args: GetPrefixArgs, opts?: pulumi.InvokeOptions): Promise<GetPrefixResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:peering:getPrefix", {
        "expand": args.expand,
        "peeringServiceName": args.peeringServiceName,
        "prefixName": args.prefixName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetPrefixArgs {
    /**
     * The properties to be expanded.
     */
    expand?: string;
    /**
     * The name of the peering service.
     */
    peeringServiceName: string;
    /**
     * The name of the prefix.
     */
    prefixName: string;
    /**
     * The name of the resource group.
     */
    resourceGroupName: string;
}

/**
 * The peering service prefix class.
 */
export interface GetPrefixResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * The error message for validation state
     */
    readonly errorMessage: string;
    /**
     * The list of events for peering service prefix
     */
    readonly events: types.outputs.PeeringServicePrefixEventResponse[];
    /**
     * The ID of the resource.
     */
    readonly id: string;
    /**
     * The prefix learned type
     */
    readonly learnedType: string;
    /**
     * The name of the resource.
     */
    readonly name: string;
    /**
     * The peering service prefix key
     */
    readonly peeringServicePrefixKey?: string;
    /**
     * The prefix from which your traffic originates.
     */
    readonly prefix?: string;
    /**
     * The prefix validation state
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
 * Gets an existing prefix with the specified name under the given subscription, resource group and peering service.
 *
 * Uses Azure REST API version 2022-10-01.
 */
export function getPrefixOutput(args: GetPrefixOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetPrefixResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:peering:getPrefix", {
        "expand": args.expand,
        "peeringServiceName": args.peeringServiceName,
        "prefixName": args.prefixName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetPrefixOutputArgs {
    /**
     * The properties to be expanded.
     */
    expand?: pulumi.Input<string>;
    /**
     * The name of the peering service.
     */
    peeringServiceName: pulumi.Input<string>;
    /**
     * The name of the prefix.
     */
    prefixName: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
}