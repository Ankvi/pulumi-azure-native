import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Security contact configurations for the subscription
 */
export function getSecurityContact(args: GetSecurityContactArgs, opts?: pulumi.InvokeOptions): Promise<GetSecurityContactResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:security/v20170801preview:getSecurityContact", {
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
 * Contact details for security issues
 */
export interface GetSecurityContactResult {
    /**
     * Whether to send security alerts notifications to the security contact
     */
    readonly alertNotifications: string;
    /**
     * Whether to send security alerts notifications to subscription admins
     */
    readonly alertsToAdmins: string;
    /**
     * The email of this security contact
     */
    readonly email: string;
    /**
     * Resource Id
     */
    readonly id: string;
    /**
     * Resource name
     */
    readonly name: string;
    /**
     * The phone number of this security contact
     */
    readonly phone?: string;
    /**
     * Resource type
     */
    readonly type: string;
}
/**
 * Security contact configurations for the subscription
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