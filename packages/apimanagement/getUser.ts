import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the details of the user specified by its identifier.
 *
 * Uses Azure REST API version 2022-08-01.
 *
 * Other available API versions: 2016-10-10, 2017-03-01, 2018-01-01, 2022-09-01-preview, 2023-03-01-preview, 2023-05-01-preview, 2023-09-01-preview, 2024-05-01, 2024-06-01-preview.
 */
export function getUser(args: GetUserArgs, opts?: pulumi.InvokeOptions): Promise<GetUserResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:apimanagement:getUser", {
        "resourceGroupName": args.resourceGroupName,
        "serviceName": args.serviceName,
        "userId": args.userId,
    }, opts);
}

export interface GetUserArgs {
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
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
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
     * The name of the resource
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
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Gets the details of the user specified by its identifier.
 *
 * Uses Azure REST API version 2022-08-01.
 *
 * Other available API versions: 2016-10-10, 2017-03-01, 2018-01-01, 2022-09-01-preview, 2023-03-01-preview, 2023-05-01-preview, 2023-09-01-preview, 2024-05-01, 2024-06-01-preview.
 */
export function getUserOutput(args: GetUserOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetUserResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:apimanagement:getUser", {
        "resourceGroupName": args.resourceGroupName,
        "serviceName": args.serviceName,
        "userId": args.userId,
    }, opts);
}

export interface GetUserOutputArgs {
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