import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * get access token.
 */
export function getOfferAccessToken(args: GetOfferAccessTokenArgs, opts?: pulumi.InvokeOptions): Promise<GetOfferAccessTokenResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:edgemarketplace/v20230801:getOfferAccessToken", {
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
 */
export function getOfferAccessTokenOutput(args: GetOfferAccessTokenOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetOfferAccessTokenResult> {
    return pulumi.output(args).apply((a: any) => getOfferAccessToken(a, opts))
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
