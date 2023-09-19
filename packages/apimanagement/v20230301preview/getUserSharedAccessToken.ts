import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the Shared Access Authorization Token for the User.
 */
export function getUserSharedAccessToken(args: GetUserSharedAccessTokenArgs, opts?: pulumi.InvokeOptions): Promise<GetUserSharedAccessTokenResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:apimanagement/v20230301preview:getUserSharedAccessToken", {
        "expiry": args.expiry,
        "keyType": args.keyType,
        "resourceGroupName": args.resourceGroupName,
        "serviceName": args.serviceName,
        "userId": args.userId,
    }, opts);
}

export interface GetUserSharedAccessTokenArgs {
    /**
     * The Expiry time of the Token. Maximum token expiry time is set to 30 days. The date conforms to the following format: `yyyy-MM-ddTHH:mm:ssZ` as specified by the ISO 8601 standard.
     */
    expiry: string;
    /**
     * The Key to be used to generate token for user.
     */
    keyType: types.enums.KeyType;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * The name of the API Management service.
     */
    serviceName: string;
    /**
     * User identifier. Must be unique in the current API Management service instance.
     */
    userId: string;
}

/**
 * Get User Token response details.
 */
export interface GetUserSharedAccessTokenResult {
    /**
     * Shared Access Authorization token for the User.
     */
    readonly value?: string;
}
/**
 * Gets the Shared Access Authorization Token for the User.
 */
export function getUserSharedAccessTokenOutput(args: GetUserSharedAccessTokenOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetUserSharedAccessTokenResult> {
    return pulumi.output(args).apply((a: any) => getUserSharedAccessToken(a, opts))
}

export interface GetUserSharedAccessTokenOutputArgs {
    /**
     * The Expiry time of the Token. Maximum token expiry time is set to 30 days. The date conforms to the following format: `yyyy-MM-ddTHH:mm:ssZ` as specified by the ISO 8601 standard.
     */
    expiry: pulumi.Input<string>;
    /**
     * The Key to be used to generate token for user.
     */
    keyType: pulumi.Input<types.enums.KeyType>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the API Management service.
     */
    serviceName: pulumi.Input<string>;
    /**
     * User identifier. Must be unique in the current API Management service instance.
     */
    userId: pulumi.Input<string>;
}
