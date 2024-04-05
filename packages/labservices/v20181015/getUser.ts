import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get user
 */
export function getUser(args: GetUserArgs, opts?: pulumi.InvokeOptions): Promise<GetUserResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:labservices/v20181015:getUser", {
        "expand": args.expand,
        "labAccountName": args.labAccountName,
        "labName": args.labName,
        "resourceGroupName": args.resourceGroupName,
        "userName": args.userName,
    }, opts);
}

export interface GetUserArgs {
    /**
     * Specify the $expand query. Example: 'properties($select=email)'
     */
    expand?: string;
    /**
     * The name of the lab Account.
     */
    labAccountName: string;
    /**
     * The name of the lab.
     */
    labName: string;
    /**
     * The name of the resource group.
     */
    resourceGroupName: string;
    /**
     * The name of the user.
     */
    userName: string;
}

/**
 * The User registered to a lab
 */
export interface GetUserResult {
    /**
     * The user email address, as it was specified during registration.
     */
    readonly email: string;
    /**
     * The user family name, as it was specified during registration.
     */
    readonly familyName: string;
    /**
     * The user given name, as it was specified during registration.
     */
    readonly givenName: string;
    /**
     * The identifier of the resource.
     */
    readonly id: string;
    /**
     * The details of the latest operation. ex: status, error
     */
    readonly latestOperationResult: types.outputs.LatestOperationResultResponse;
    /**
     * The location of the resource.
     */
    readonly location?: string;
    /**
     * The name of the resource.
     */
    readonly name: string;
    /**
     * The provisioning status of the resource.
     */
    readonly provisioningState?: string;
    /**
     * The tags of the resource.
     */
    readonly tags?: {[key: string]: string};
    /**
     * The user tenant ID, as it was specified during registration.
     */
    readonly tenantId: string;
    /**
     * How long the user has used his VMs in this lab
     */
    readonly totalUsage: string;
    /**
     * The type of the resource.
     */
    readonly type: string;
    /**
     * The unique immutable identifier of a resource (Guid).
     */
    readonly uniqueIdentifier?: string;
}
/**
 * Get user
 */
export function getUserOutput(args: GetUserOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetUserResult> {
    return pulumi.output(args).apply((a: any) => getUser(a, opts))
}

export interface GetUserOutputArgs {
    /**
     * Specify the $expand query. Example: 'properties($select=email)'
     */
    expand?: pulumi.Input<string>;
    /**
     * The name of the lab Account.
     */
    labAccountName: pulumi.Input<string>;
    /**
     * The name of the lab.
     */
    labName: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the user.
     */
    userName: pulumi.Input<string>;
}