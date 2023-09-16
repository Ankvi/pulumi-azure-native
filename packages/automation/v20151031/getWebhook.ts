import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * Retrieve the webhook identified by webhook name.
 */
export function getWebhook(args: GetWebhookArgs, opts?: pulumi.InvokeOptions): Promise<GetWebhookResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:automation/v20151031:getWebhook", {
        "automationAccountName": args.automationAccountName,
        "resourceGroupName": args.resourceGroupName,
        "webhookName": args.webhookName,
    }, opts);
}

export interface GetWebhookArgs {
    /**
     * The name of the automation account.
     */
    automationAccountName: string;
    /**
     * Name of an Azure Resource group.
     */
    resourceGroupName: string;
    /**
     * The webhook name.
     */
    webhookName: string;
}

/**
 * Definition of the webhook type.
 */
export interface GetWebhookResult {
    /**
     * Gets or sets the creation time.
     */
    readonly creationTime?: string;
    /**
     * Gets or sets the description.
     */
    readonly description?: string;
    /**
     * Gets or sets the expiry time.
     */
    readonly expiryTime?: string;
    /**
     * Fully qualified resource Id for the resource
     */
    readonly id: string;
    /**
     * Gets or sets the value of the enabled flag of the webhook.
     */
    readonly isEnabled?: boolean;
    /**
     * Gets or sets the last invoked time.
     */
    readonly lastInvokedTime?: string;
    /**
     * Details of the user who last modified the Webhook
     */
    readonly lastModifiedBy?: string;
    /**
     * Gets or sets the last modified time.
     */
    readonly lastModifiedTime?: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Gets or sets the parameters of the job that is created when the webhook calls the runbook it is associated with.
     */
    readonly parameters?: {[key: string]: string};
    /**
     * Gets or sets the name of the hybrid worker group the webhook job will run on.
     */
    readonly runOn?: string;
    /**
     * Gets or sets the runbook the webhook is associated with.
     */
    readonly runbook?: types.outputs.automation.v20151031.RunbookAssociationPropertyResponse;
    /**
     * The type of the resource.
     */
    readonly type: string;
    /**
     * Gets or sets the webhook uri.
     */
    readonly uri?: string;
}
/**
 * Retrieve the webhook identified by webhook name.
 */
export function getWebhookOutput(args: GetWebhookOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetWebhookResult> {
    return pulumi.output(args).apply((a: any) => getWebhook(a, opts))
}

export interface GetWebhookOutputArgs {
    /**
     * The name of the automation account.
     */
    automationAccountName: pulumi.Input<string>;
    /**
     * Name of an Azure Resource group.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The webhook name.
     */
    webhookName: pulumi.Input<string>;
}
