import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * Returns the specified product.
 */
export function getCustomerSubscription(args: GetCustomerSubscriptionArgs, opts?: pulumi.InvokeOptions): Promise<GetCustomerSubscriptionResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:azurestack/v20200601preview:getCustomerSubscription", {
        "customerSubscriptionName": args.customerSubscriptionName,
        "registrationName": args.registrationName,
        "resourceGroup": args.resourceGroup,
    }, opts);
}

export interface GetCustomerSubscriptionArgs {
    /**
     * Name of the product.
     */
    customerSubscriptionName: string;
    /**
     * Name of the Azure Stack registration.
     */
    registrationName: string;
    /**
     * Name of the resource group.
     */
    resourceGroup: string;
}

/**
 * Customer subscription.
 */
export interface GetCustomerSubscriptionResult {
    /**
     * The entity tag used for optimistic concurrency when modifying the resource.
     */
    readonly etag?: string;
    /**
     * ID of the resource.
     */
    readonly id: string;
    /**
     * Name of the resource.
     */
    readonly name: string;
    /**
     * Metadata pertaining to creation and last modification of the resource.
     */
    readonly systemData: types.outputs.azurestack.v20200601preview.SystemDataResponse;
    /**
     * Tenant Id.
     */
    readonly tenantId?: string;
    /**
     * Type of Resource.
     */
    readonly type: string;
}
/**
 * Returns the specified product.
 */
export function getCustomerSubscriptionOutput(args: GetCustomerSubscriptionOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetCustomerSubscriptionResult> {
    return pulumi.output(args).apply((a: any) => getCustomerSubscription(a, opts))
}

export interface GetCustomerSubscriptionOutputArgs {
    /**
     * Name of the product.
     */
    customerSubscriptionName: pulumi.Input<string>;
    /**
     * Name of the Azure Stack registration.
     */
    registrationName: pulumi.Input<string>;
    /**
     * Name of the resource group.
     */
    resourceGroup: pulumi.Input<string>;
}
