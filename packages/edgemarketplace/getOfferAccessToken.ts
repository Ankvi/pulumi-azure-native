import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * get access token.
 *
 * Uses Azure REST API version 2023-08-01-preview.
 *
 * Other available API versions: 2023-08-01.
 */
export function getOfferAccessToken(args: GetOfferAccessTokenArgs, opts?: pulumi.InvokeOptions): Promise<GetOfferAccessTokenResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:edgemarketplace:getOfferAccessToken", {
        "offerId": args.offerId,
        "requestId": args.requestId,
        "resourceUri": args.resourceUri,
    }, opts);
}

export interface GetOfferAccessTokenArgs {
    /**
     * Id of the offer
     */
    offerId: string;
    /**
     * The name of the publisher.
     */
    requestId: string;
    /**
     * The fully qualified Azure Resource manager identifier of the resource.
     */
    resourceUri: string;
}

/**
 * The disk access token
 */
export interface GetOfferAccessTokenResult {
    /**
     * The access token.
     */
    readonly accessToken: string;
    /**
     * The disk id.
     */
    readonly diskId?: string;
    /**
     * The access token creation status.
     */
    readonly status?: string;
}
/**
 * get access token.
 *
 * Uses Azure REST API version 2023-08-01-preview.
 *
 * Other available API versions: 2023-08-01.
 */
export function getOfferAccessTokenOutput(args: GetOfferAccessTokenOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetOfferAccessTokenResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:edgemarketplace:getOfferAccessToken", {
        "offerId": args.offerId,
        "requestId": args.requestId,
        "resourceUri": args.resourceUri,
    }, opts);
}

export interface GetOfferAccessTokenOutputArgs {
    /**
     * Id of the offer
     */
    offerId: pulumi.Input<string>;
    /**
     * The name of the publisher.
     */
    requestId: pulumi.Input<string>;
    /**
     * The fully qualified Azure Resource manager identifier of the resource.
     */
    resourceUri: pulumi.Input<string>;
}