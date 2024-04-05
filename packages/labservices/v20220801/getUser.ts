import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Returns the properties of a lab user.
 */
export function getUser(args: GetUserArgs, opts?: pulumi.InvokeOptions): Promise<GetUserResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:labservices/v20220801:getUser", {
        "labName": args.labName,
        "resourceGroupName": args.resourceGroupName,
        "userName": args.userName,
    }, opts);
}

export interface GetUserArgs {
    /**
     * The name of the lab that uniquely identifies it within containing lab plan. Used in resource URIs.
     */
    labName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * The name of the user that uniquely identifies it within containing lab. Used in resource URIs.
     */
    userName: string;
}

/**
 * User of a lab that can register for and use virtual machines within the lab.
 */
export interface GetUserResult {
    /**
     * The amount of usage quota time the user gets in addition to the lab usage quota.
     */
    readonly additionalUsageQuota?: string;
    /**
     * Display name of the user, for example user's full name.
     */
    readonly displayName: string;
    /**
     * Email address of the user.
     */
    readonly email: string;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * Date and time when the invitation message was sent to the user.
     */
    readonly invitationSent: string;
    /**
     * State of the invitation message for the user.
     */
    readonly invitationState: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Current provisioning state of the user resource.
     */
    readonly provisioningState: string;
    /**
     * State of the user's registration within the lab.
     */
    readonly registrationState: string;
    /**
     * Metadata pertaining to creation and last modification of the user resource.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * How long the user has used their virtual machines in this lab.
     */
    readonly totalUsage: string;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Returns the properties of a lab user.
 */
export function getUserOutput(args: GetUserOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetUserResult> {
    return pulumi.output(args).apply((a: any) => getUser(a, opts))
}

export interface GetUserOutputArgs {
    /**
     * The name of the lab that uniquely identifies it within containing lab plan. Used in resource URIs.
     */
    labName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the user that uniquely identifies it within containing lab. Used in resource URIs.
     */
    userName: pulumi.Input<string>;
}