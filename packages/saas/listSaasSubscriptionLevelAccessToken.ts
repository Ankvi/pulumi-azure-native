import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Gets the ISV access token for a specified Subscription Level SaaS.
 *
 * Uses Azure REST API version 2018-03-01-beta.
 */
export function listSaasSubscriptionLevelAccessToken(args: ListSaasSubscriptionLevelAccessTokenArgs, opts?: pulumi.InvokeOptions): Promise<ListSaasSubscriptionLevelAccessTokenResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:saas:listSaasSubscriptionLevelAccessToken", {
        "resourceGroupName": args.resourceGroupName,
        "resourceName": args.resourceName,
    }, opts);
}

export interface ListSaasSubscriptionLevelAccessTokenArgs {
    /**
     * The name of the resource group.
     */
    resourceGroupName: string;
    /**
     * The name of the resource.
     */
    resourceName: string;
}

/**
 * the ISV access token result response.
 */
export interface ListSaasSubscriptionLevelAccessTokenResult {
    /**
     * The Publisher Offer Base Uri
     */
    readonly publisherOfferBaseUri?: string;
    /**
     * The generated token
     */
    readonly token?: string;
}
/**
 * Gets the ISV access token for a specified Subscription Level SaaS.
 *
 * Uses Azure REST API version 2018-03-01-beta.
 */
export function listSaasSubscriptionLevelAccessTokenOutput(args: ListSaasSubscriptionLevelAccessTokenOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<ListSaasSubscriptionLevelAccessTokenResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:saas:listSaasSubscriptionLevelAccessToken", {
        "resourceGroupName": args.resourceGroupName,
        "resourceName": args.resourceName,
    }, opts);
}

export interface ListSaasSubscriptionLevelAccessTokenOutputArgs {
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the resource.
     */
    resourceName: pulumi.Input<string>;
}