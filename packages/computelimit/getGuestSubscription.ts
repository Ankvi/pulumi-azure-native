import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the properties of a guest subscription.
 *
 * Uses Azure REST API version 2025-08-15.
 */
export function getGuestSubscription(args: GetGuestSubscriptionArgs, opts?: pulumi.InvokeOptions): Promise<GetGuestSubscriptionResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:computelimit:getGuestSubscription", {
        "guestSubscriptionId": args.guestSubscriptionId,
        "location": args.location,
    }, opts);
}

export interface GetGuestSubscriptionArgs {
    /**
     * The name of the GuestSubscription
     */
    guestSubscriptionId: string;
    /**
     * The name of the Azure region.
     */
    location: string;
}

/**
 * Guest subscription that consumes shared compute limits.
 */
export interface GetGuestSubscriptionResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
     */
    readonly id: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The provisioning state of the resource.
     */
    readonly provisioningState: string;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Gets the properties of a guest subscription.
 *
 * Uses Azure REST API version 2025-08-15.
 */
export function getGuestSubscriptionOutput(args: GetGuestSubscriptionOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetGuestSubscriptionResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:computelimit:getGuestSubscription", {
        "guestSubscriptionId": args.guestSubscriptionId,
        "location": args.location,
    }, opts);
}

export interface GetGuestSubscriptionOutputArgs {
    /**
     * The name of the GuestSubscription
     */
    guestSubscriptionId: pulumi.Input<string>;
    /**
     * The name of the Azure region.
     */
    location: pulumi.Input<string>;
}