import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get an invitation in a share
 *
 * Uses Azure REST API version 2021-08-01.
 */
export function getInvitation(args: GetInvitationArgs, opts?: pulumi.InvokeOptions): Promise<GetInvitationResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:datashare:getInvitation", {
        "accountName": args.accountName,
        "invitationName": args.invitationName,
        "resourceGroupName": args.resourceGroupName,
        "shareName": args.shareName,
    }, opts);
}

export interface GetInvitationArgs {
    /**
     * The name of the share account.
     */
    accountName: string;
    /**
     * The name of the invitation.
     */
    invitationName: string;
    /**
     * The resource group name.
     */
    resourceGroupName: string;
    /**
     * The name of the share.
     */
    shareName: string;
}

/**
 * A Invitation data transfer object.
 */
export interface GetInvitationResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * The expiration date for the invitation and share subscription.
     */
    readonly expirationDate?: string;
    /**
     * The resource id of the azure resource
     */
    readonly id: string;
    /**
     * unique invitation id
     */
    readonly invitationId: string;
    /**
     * The status of the invitation.
     */
    readonly invitationStatus: string;
    /**
     * Name of the azure resource
     */
    readonly name: string;
    /**
     * The time the recipient responded to the invitation.
     */
    readonly respondedAt: string;
    /**
     * Gets the time at which the invitation was sent.
     */
    readonly sentAt: string;
    /**
     * System Data of the Azure resource.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * The target Azure AD Id. Can't be combined with email.
     */
    readonly targetActiveDirectoryId?: string;
    /**
     * The email the invitation is directed to.
     */
    readonly targetEmail?: string;
    /**
     * The target user or application Id that invitation is being sent to.
     * Must be specified along TargetActiveDirectoryId. This enables sending
     * invitations to specific users or applications in an AD tenant.
     */
    readonly targetObjectId?: string;
    /**
     * Type of the azure resource
     */
    readonly type: string;
    /**
     * Email of the user who created the resource
     */
    readonly userEmail: string;
    /**
     * Name of the user who created the resource
     */
    readonly userName: string;
}
/**
 * Get an invitation in a share
 *
 * Uses Azure REST API version 2021-08-01.
 */
export function getInvitationOutput(args: GetInvitationOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetInvitationResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:datashare:getInvitation", {
        "accountName": args.accountName,
        "invitationName": args.invitationName,
        "resourceGroupName": args.resourceGroupName,
        "shareName": args.shareName,
    }, opts);
}

export interface GetInvitationOutputArgs {
    /**
     * The name of the share account.
     */
    accountName: pulumi.Input<string>;
    /**
     * The name of the invitation.
     */
    invitationName: pulumi.Input<string>;
    /**
     * The resource group name.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the share.
     */
    shareName: pulumi.Input<string>;
}