import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Returns the properties of a Linked Subscription resource.
 *
 * Uses Azure REST API version 2020-06-01-preview.
 */
export function getLinkedSubscription(args: GetLinkedSubscriptionArgs, opts?: pulumi.InvokeOptions): Promise<GetLinkedSubscriptionResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:azurestack:getLinkedSubscription", {
        "linkedSubscriptionName": args.linkedSubscriptionName,
        "resourceGroup": args.resourceGroup,
    }, opts);
}

export interface GetLinkedSubscriptionArgs {
    /**
     * Name of the Linked Subscription resource.
     */
    linkedSubscriptionName: string;
    /**
     * Name of the resource group.
     */
    resourceGroup: string;
}

/**
 * Linked Subscription information.
 */
export interface GetLinkedSubscriptionResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * The status of the remote management connection of the Azure Stack device.
     */
    readonly deviceConnectionStatus: string;
    /**
     * The identifier of the Azure Stack device for remote management.
     */
    readonly deviceId: string;
    /**
     * The connection state of the Azure Stack device.
     */
    readonly deviceLinkState: string;
    /**
     * The object identifier associated with the Azure Stack device connecting to Azure.
     */
    readonly deviceObjectId: string;
    /**
     * The entity tag used for optimistic concurrency when modifying the resource.
     */
    readonly etag?: string;
    /**
     * ID of the resource.
     */
    readonly id: string;
    /**
     * The kind of the resource.
     */
    readonly kind: string;
    /**
     * The last remote management connection time for the Azure Stack device connected to the linked subscription resource.
     */
    readonly lastConnectedTime: string;
    /**
     * The identifier associated with the device subscription.
     */
    readonly linkedSubscriptionId?: string;
    /**
     * Location of the resource.
     */
    readonly location: string;
    /**
     * Name of the resource.
     */
    readonly name: string;
    /**
     * The identifier associated with the device registration.
     */
    readonly registrationResourceId?: string;
    /**
     * Metadata pertaining to creation and last modification of the resource.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * Custom tags for the resource.
     */
    readonly tags?: {[key: string]: string};
    /**
     * Type of Resource.
     */
    readonly type: string;
}
/**
 * Returns the properties of a Linked Subscription resource.
 *
 * Uses Azure REST API version 2020-06-01-preview.
 */
export function getLinkedSubscriptionOutput(args: GetLinkedSubscriptionOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetLinkedSubscriptionResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:azurestack:getLinkedSubscription", {
        "linkedSubscriptionName": args.linkedSubscriptionName,
        "resourceGroup": args.resourceGroup,
    }, opts);
}

export interface GetLinkedSubscriptionOutputArgs {
    /**
     * Name of the Linked Subscription resource.
     */
    linkedSubscriptionName: pulumi.Input<string>;
    /**
     * Name of the resource group.
     */
    resourceGroup: pulumi.Input<string>;
}