import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get notification channel.
 */
export function getNotificationChannel(args: GetNotificationChannelArgs, opts?: pulumi.InvokeOptions): Promise<GetNotificationChannelResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:devtestlab/v20180915:getNotificationChannel", {
        "expand": args.expand,
        "labName": args.labName,
        "name": args.name,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetNotificationChannelArgs {
    /**
     * Specify the $expand query. Example: 'properties($select=webHookUrl)'
     */
    expand?: string;
    /**
     * The name of the lab.
     */
    labName: string;
    /**
     * The name of the notification channel.
     */
    name: string;
    /**
     * The name of the resource group.
     */
    resourceGroupName: string;
}

/**
 * A notification.
 */
export interface GetNotificationChannelResult {
    /**
     * The creation date of the notification channel.
     */
    readonly createdDate: string;
    /**
     * Description of notification.
     */
    readonly description?: string;
    /**
     * The email recipient to send notifications to (can be a list of semi-colon separated email addresses).
     */
    readonly emailRecipient?: string;
    /**
     * The list of event for which this notification is enabled.
     */
    readonly events?: types.outputs.EventResponse[];
    /**
     * The identifier of the resource.
     */
    readonly id: string;
    /**
     * The location of the resource.
     */
    readonly location?: string;
    /**
     * The name of the resource.
     */
    readonly name: string;
    /**
     * The locale to use when sending a notification (fallback for unsupported languages is EN).
     */
    readonly notificationLocale?: string;
    /**
     * The provisioning status of the resource.
     */
    readonly provisioningState: string;
    /**
     * The tags of the resource.
     */
    readonly tags?: {[key: string]: string};
    /**
     * The type of the resource.
     */
    readonly type: string;
    /**
     * The unique immutable identifier of a resource (Guid).
     */
    readonly uniqueIdentifier: string;
    /**
     * The webhook URL to send notifications to.
     */
    readonly webHookUrl?: string;
}
/**
 * Get notification channel.
 */
export function getNotificationChannelOutput(args: GetNotificationChannelOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetNotificationChannelResult> {
    return pulumi.output(args).apply((a: any) => getNotificationChannel(a, opts))
}

export interface GetNotificationChannelOutputArgs {
    /**
     * Specify the $expand query. Example: 'properties($select=webHookUrl)'
     */
    expand?: pulumi.Input<string>;
    /**
     * The name of the lab.
     */
    labName: pulumi.Input<string>;
    /**
     * The name of the notification channel.
     */
    name: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
}