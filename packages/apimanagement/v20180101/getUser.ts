import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the details of the user specified by its identifier.
 */
export function getUser(args: GetUserArgs, opts?: pulumi.InvokeOptions): Promise<GetUserResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:apimanagement/v20180101:getUser", {
        "resourceGroupName": args.resourceGroupName,
        "serviceName": args.serviceName,
        "uid": args.uid,
    }, opts);
}

export interface GetUserArgs {
    /**
     * The name of the resource group.
     */
    resourceGroupName: string;
    /**
     * The name of the API Management service.
     */
    serviceName: string;
    /**
     * User identifier. Must be unique in the current API Management service instance.
     */
    uid: string;
}

/**
 * User details.
 */
export interface GetUserResult {
    /**
     * Email address.
     */
    readonly email?: string;
    /**
     * First name.
     */
    readonly firstName?: string;
    /**
     * Collection of groups user is part of.
     */
    readonly groups: types.outputs.GroupContractPropertiesResponse[];
    /**
     * Resource ID.
     */
    readonly id: string;
    /**
     * Collection of user identities.
     */
    readonly identities?: types.outputs.UserIdentityContractResponse[];
    /**
     * Last name.
     */
    readonly lastName?: string;
    /**
     * Resource name.
     */
    readonly name: string;
    /**
     * Optional note about a user set by the administrator.
     */
    readonly note?: string;
    /**
     * Date of user registration. The date conforms to the following format: `yyyy-MM-ddTHH:mm:ssZ` as specified by the ISO 8601 standard.
     */
    readonly registrationDate?: string;
    /**
     * Account state. Specifies whether the user is active or not. Blocked users are unable to sign into the developer portal or call any APIs of subscribed products. Default state is Active.
     */
    readonly state?: string;
    /**
     * Resource type for API Management resource.
     */
    readonly type: string;
}
/**
 * Gets the details of the user specified by its identifier.
 */
export function getUserOutput(args: GetUserOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetUserResult> {
    return pulumi.output(args).apply((a: any) => getUser(a, opts))
}

export interface GetUserOutputArgs {
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the API Management service.
     */
    serviceName: pulumi.Input<string>;
    /**
     * User identifier. Must be unique in the current API Management service instance.
     */
    uid: pulumi.Input<string>;
}