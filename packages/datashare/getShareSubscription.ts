import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a shareSubscription in an account
 *
 * Uses Azure REST API version 2021-08-01.
 */
export function getShareSubscription(args: GetShareSubscriptionArgs, opts?: pulumi.InvokeOptions): Promise<GetShareSubscriptionResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:datashare:getShareSubscription", {
        "accountName": args.accountName,
        "resourceGroupName": args.resourceGroupName,
        "shareSubscriptionName": args.shareSubscriptionName,
    }, opts);
}

export interface GetShareSubscriptionArgs {
    /**
     * The name of the share account.
     */
    accountName: string;
    /**
     * The resource group name.
     */
    resourceGroupName: string;
    /**
     * The name of the shareSubscription.
     */
    shareSubscriptionName: string;
}

/**
 * A share subscription data transfer object.
 */
export interface GetShareSubscriptionResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * Time at which the share subscription was created.
     */
    readonly createdAt: string;
    /**
     * The expiration date of the share subscription.
     */
    readonly expirationDate?: string;
    /**
     * The resource id of the azure resource
     */
    readonly id: string;
    /**
     * The invitation id.
     */
    readonly invitationId: string;
    /**
     * Name of the azure resource
     */
    readonly name: string;
    /**
     * Email of the provider who created the resource
     */
    readonly providerEmail: string;
    /**
     * Name of the provider who created the resource
     */
    readonly providerName: string;
    /**
     * Tenant name of the provider who created the resource
     */
    readonly providerTenantName: string;
    /**
     * Provisioning state of the share subscription
     */
    readonly provisioningState: string;
    /**
     * Description of share
     */
    readonly shareDescription: string;
    /**
     * Kind of share
     */
    readonly shareKind: string;
    /**
     * Name of the share
     */
    readonly shareName: string;
    /**
     * Gets the current status of share subscription.
     */
    readonly shareSubscriptionStatus: string;
    /**
     * Terms of a share
     */
    readonly shareTerms: string;
    /**
     * Source share location.
     */
    readonly sourceShareLocation: string;
    /**
     * System Data of the Azure resource.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * Type of the azure resource
     */
    readonly type: string;
    /**
     * Email of the user who created the resource
     */
    readonly userEmail: string;
    /**
     * Name of the user who created the resource
     */
    readonly userName: string;
}
/**
 * Get a shareSubscription in an account
 *
 * Uses Azure REST API version 2021-08-01.
 */
export function getShareSubscriptionOutput(args: GetShareSubscriptionOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetShareSubscriptionResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:datashare:getShareSubscription", {
        "accountName": args.accountName,
        "resourceGroupName": args.resourceGroupName,
        "shareSubscriptionName": args.shareSubscriptionName,
    }, opts);
}

export interface GetShareSubscriptionOutputArgs {
    /**
     * The name of the share account.
     */
    accountName: pulumi.Input<string>;
    /**
     * The resource group name.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the shareSubscription.
     */
    shareSubscriptionName: pulumi.Input<string>;
}