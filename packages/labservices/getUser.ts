import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Returns the properties of a lab user.
 *
 * Uses Azure REST API version 2023-06-07.
 *
 * Other available API versions: 2021-10-01-preview, 2021-11-15-preview, 2022-08-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native labservices [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getUser(args: GetUserArgs, opts?: pulumi.InvokeOptions): Promise<GetUserResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:labservices:getUser", {
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
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
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
     * Error details of last operation done on lab plan.
     */
    readonly resourceOperationError: types.outputs.ResourceOperationErrorResponse;
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
 *
 * Uses Azure REST API version 2023-06-07.
 *
 * Other available API versions: 2021-10-01-preview, 2021-11-15-preview, 2022-08-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native labservices [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getUserOutput(args: GetUserOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetUserResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:labservices:getUser", {
        "labName": args.labName,
        "resourceGroupName": args.resourceGroupName,
        "userName": args.userName,
    }, opts);
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