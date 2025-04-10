import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the properties of the specified user.
 *
 * Uses Azure REST API version 2022-03-01.
 *
 * Other available API versions: 2021-02-01-preview, 2023-01-01-preview, 2023-07-01, 2023-12-01.
 */
export function getUser(args: GetUserArgs, opts?: pulumi.InvokeOptions): Promise<GetUserResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:databoxedge:getUser", {
        "deviceName": args.deviceName,
        "name": args.name,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetUserArgs {
    /**
     * The device name.
     */
    deviceName: string;
    /**
     * The user name.
     */
    name: string;
    /**
     * The resource group name.
     */
    resourceGroupName: string;
}

/**
 * Represents a user who has access to one or more shares on the Data Box Edge/Gateway device.
 */
export interface GetUserResult {
    /**
     * The password details.
     */
    readonly encryptedPassword?: types.outputs.AsymmetricEncryptedSecretResponse;
    /**
     * The path ID that uniquely identifies the object.
     */
    readonly id: string;
    /**
     * The object name.
     */
    readonly name: string;
    /**
     * List of shares that the user has rights on. This field should not be specified during user creation.
     */
    readonly shareAccessRights: types.outputs.ShareAccessRightResponse[];
    /**
     * Metadata pertaining to creation and last modification of User
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * The hierarchical type of the object.
     */
    readonly type: string;
    /**
     * Type of the user.
     */
    readonly userType: string;
}
/**
 * Gets the properties of the specified user.
 *
 * Uses Azure REST API version 2022-03-01.
 *
 * Other available API versions: 2021-02-01-preview, 2023-01-01-preview, 2023-07-01, 2023-12-01.
 */
export function getUserOutput(args: GetUserOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetUserResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:databoxedge:getUser", {
        "deviceName": args.deviceName,
        "name": args.name,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetUserOutputArgs {
    /**
     * The device name.
     */
    deviceName: pulumi.Input<string>;
    /**
     * The user name.
     */
    name: pulumi.Input<string>;
    /**
     * The resource group name.
     */
    resourceGroupName: pulumi.Input<string>;
}