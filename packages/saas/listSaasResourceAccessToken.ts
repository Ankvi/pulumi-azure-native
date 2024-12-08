import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Gets the ISV access token for a SaaS resource.
 * Azure REST API version: 2018-03-01-beta.
 */
export function listSaasResourceAccessToken(args: ListSaasResourceAccessTokenArgs, opts?: pulumi.InvokeOptions): Promise<ListSaasResourceAccessTokenResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:saas:listSaasResourceAccessToken", {
        "resourceId": args.resourceId,
    }, opts);
}

export interface ListSaasResourceAccessTokenArgs {
    /**
     * The Saas resource ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000)
     */
    resourceId: string;
}

/**
 * the ISV access token result response.
 */
export interface ListSaasResourceAccessTokenResult {
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
 * Gets the ISV access token for a SaaS resource.
 * Azure REST API version: 2018-03-01-beta.
 */
export function listSaasResourceAccessTokenOutput(args: ListSaasResourceAccessTokenOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<ListSaasResourceAccessTokenResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:saas:listSaasResourceAccessToken", {
        "resourceId": args.resourceId,
    }, opts);
}

export interface ListSaasResourceAccessTokenOutputArgs {
    /**
     * The Saas resource ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000)
     */
    resourceId: pulumi.Input<string>;
}