import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get Default Security contact configurations for the subscription
 */
export function getSecurityContact(args: GetSecurityContactArgs, opts?: pulumi.InvokeOptions): Promise<GetSecurityContactResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:security/v20231201preview:getSecurityContact", {
        "securityContactName": args.securityContactName,
    }, opts);
}

export interface GetSecurityContactArgs {
    /**
     * Name of the security contact object
     */
    securityContactName: string;
}

/**
 * Contact details and configurations for notifications coming from Microsoft Defender for Cloud.
 */
export interface GetSecurityContactResult {
    /**
     * List of email addresses which will get notifications from Microsoft Defender for Cloud by the configurations defined in this security contact.
     */
    readonly emails?: string;
    /**
     * Resource Id
     */
    readonly id: string;
    /**
     * Indicates whether the security contact is enabled.
     */
    readonly isEnabled?: boolean;
    /**
     * Resource name
     */
    readonly name: string;
    /**
     * Defines whether to send email notifications from Microsoft Defender for Cloud to persons with specific RBAC roles on the subscription.
     */
    readonly notificationsByRole?: types.outputs.SecurityContactPropertiesResponseNotificationsByRole;
    /**
     * A collection of sources types which evaluate the email notification.
     */
    readonly notificationsSources?: (types.outputs.NotificationsSourceAlertResponse | types.outputs.NotificationsSourceAttackPathResponse)[];
    /**
     * The security contact's phone number
     */
    readonly phone?: string;
    /**
     * Resource type
     */
    readonly type: string;
}
/**
 * Get Default Security contact configurations for the subscription
 */
export function getSecurityContactOutput(args: GetSecurityContactOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetSecurityContactResult> {
    return pulumi.output(args).apply((a: any) => getSecurityContact(a, opts))
}

export interface GetSecurityContactOutputArgs {
    /**
     * Name of the security contact object
     */
    securityContactName: pulumi.Input<string>;
}