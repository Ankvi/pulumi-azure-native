import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Gets the ISV access token for a specified Subscription Level SaaS.
 */
export function listSaasSubscriptionLevelAccessToken(args: ListSaasSubscriptionLevelAccessTokenArgs, opts?: pulumi.InvokeOptions): Promise<ListSaasSubscriptionLevelAccessTokenResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:saas/v20180301beta:listSaasSubscriptionLevelAccessToken", {
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
 */
export function listSaasSubscriptionLevelAccessTokenOutput(args: ListSaasSubscriptionLevelAccessTokenOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<ListSaasSubscriptionLevelAccessTokenResult> {
    return pulumi.output(args).apply((a: any) => listSaasSubscriptionLevelAccessToken(a, opts))
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
