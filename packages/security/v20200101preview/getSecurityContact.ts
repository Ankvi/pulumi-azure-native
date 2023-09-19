import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get Default Security contact configurations for the subscription
 */
export function getSecurityContact(args: GetSecurityContactArgs, opts?: pulumi.InvokeOptions): Promise<GetSecurityContactResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:security/v20200101preview:getSecurityContact", {
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
     * Defines whether to send email notifications about new security alerts
     */
    readonly alertNotifications?: types.outputs.SecurityContactPropertiesResponseAlertNotifications;
    /**
     * List of email addresses which will get notifications from Microsoft Defender for Cloud by the configurations defined in this security contact.
     */
    readonly emails?: string;
    /**
     * Resource Id
     */
    readonly id: string;
    /**
     * Resource name
     */
    readonly name: string;
    /**
     * Defines whether to send email notifications from Microsoft Defender for Cloud to persons with specific RBAC roles on the subscription.
     */
    readonly notificationsByRole?: types.outputs.SecurityContactPropertiesResponseNotificationsByRole;
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
