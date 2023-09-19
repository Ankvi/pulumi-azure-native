import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get Data Plane access.
 * Azure REST API version: 2018-06-01.
 */
export function getFactoryDataPlaneAccess(args: GetFactoryDataPlaneAccessArgs, opts?: pulumi.InvokeOptions): Promise<GetFactoryDataPlaneAccessResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:datafactory:getFactoryDataPlaneAccess", {
        "accessResourcePath": args.accessResourcePath,
        "expireTime": args.expireTime,
        "factoryName": args.factoryName,
        "permissions": args.permissions,
        "profileName": args.profileName,
        "resourceGroupName": args.resourceGroupName,
        "startTime": args.startTime,
    }, opts);
}

export interface GetFactoryDataPlaneAccessArgs {
    /**
     * The resource path to get access relative to factory. Currently only empty string is supported which corresponds to the factory resource.
     */
    accessResourcePath?: string;
    /**
     * Expiration time for the token. Maximum duration for the token is eight hours and by default the token will expire in eight hours.
     */
    expireTime?: string;
    /**
     * The factory name.
     */
    factoryName: string;
    /**
     * The string with permissions for Data Plane access. Currently only 'r' is supported which grants read only access.
     */
    permissions?: string;
    /**
     * The name of the profile. Currently only the default is supported. The default value is DefaultProfile.
     */
    profileName?: string;
    /**
     * The resource group name.
     */
    resourceGroupName: string;
    /**
     * Start time for the token. If not specified the current time will be used.
     */
    startTime?: string;
}

/**
 * Get Data Plane read only token response definition.
 */
export interface GetFactoryDataPlaneAccessResult {
    /**
     * Data Plane read only access token.
     */
    readonly accessToken?: string;
    /**
     * Data Plane service base URL.
     */
    readonly dataPlaneUrl?: string;
    /**
     * The user access policy.
     */
    readonly policy?: types.outputs.UserAccessPolicyResponse;
}
/**
 * Get Data Plane access.
 * Azure REST API version: 2018-06-01.
 */
export function getFactoryDataPlaneAccessOutput(args: GetFactoryDataPlaneAccessOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetFactoryDataPlaneAccessResult> {
    return pulumi.output(args).apply((a: any) => getFactoryDataPlaneAccess(a, opts))
}

export interface GetFactoryDataPlaneAccessOutputArgs {
    /**
     * The resource path to get access relative to factory. Currently only empty string is supported which corresponds to the factory resource.
     */
    accessResourcePath?: pulumi.Input<string>;
    /**
     * Expiration time for the token. Maximum duration for the token is eight hours and by default the token will expire in eight hours.
     */
    expireTime?: pulumi.Input<string>;
    /**
     * The factory name.
     */
    factoryName: pulumi.Input<string>;
    /**
     * The string with permissions for Data Plane access. Currently only 'r' is supported which grants read only access.
     */
    permissions?: pulumi.Input<string>;
    /**
     * The name of the profile. Currently only the default is supported. The default value is DefaultProfile.
     */
    profileName?: pulumi.Input<string>;
    /**
     * The resource group name.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Start time for the token. If not specified the current time will be used.
     */
    startTime?: pulumi.Input<string>;
}
