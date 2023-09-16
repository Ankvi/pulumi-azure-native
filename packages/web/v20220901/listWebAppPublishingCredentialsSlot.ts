import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Description for Gets the Git/FTP publishing credentials of an app.
 */
export function listWebAppPublishingCredentialsSlot(args: ListWebAppPublishingCredentialsSlotArgs, opts?: pulumi.InvokeOptions): Promise<ListWebAppPublishingCredentialsSlotResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:web/v20220901:listWebAppPublishingCredentialsSlot", {
        "name": args.name,
        "resourceGroupName": args.resourceGroupName,
        "slot": args.slot,
    }, opts);
}

export interface ListWebAppPublishingCredentialsSlotArgs {
    /**
     * Name of the app.
     */
    name: string;
    /**
     * Name of the resource group to which the resource belongs.
     */
    resourceGroupName: string;
    /**
     * Name of the deployment slot. If a slot is not specified, the API will get the publishing credentials for the production slot.
     */
    slot: string;
}

/**
 * User credentials used for publishing activity.
 */
export interface ListWebAppPublishingCredentialsSlotResult {
    /**
     * Resource Id.
     */
    readonly id: string;
    /**
     * Kind of resource.
     */
    readonly kind?: string;
    /**
     * Resource Name.
     */
    readonly name: string;
    /**
     * Password used for publishing.
     */
    readonly publishingPassword?: string;
    /**
     * Password hash used for publishing.
     */
    readonly publishingPasswordHash?: string;
    /**
     * Password hash salt used for publishing.
     */
    readonly publishingPasswordHashSalt?: string;
    /**
     * Username used for publishing.
     */
    readonly publishingUserName: string;
    /**
     * Url of SCM site.
     */
    readonly scmUri?: string;
    /**
     * Resource type.
     */
    readonly type: string;
}
/**
 * Description for Gets the Git/FTP publishing credentials of an app.
 */
export function listWebAppPublishingCredentialsSlotOutput(args: ListWebAppPublishingCredentialsSlotOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<ListWebAppPublishingCredentialsSlotResult> {
    return pulumi.output(args).apply((a: any) => listWebAppPublishingCredentialsSlot(a, opts))
}

export interface ListWebAppPublishingCredentialsSlotOutputArgs {
    /**
     * Name of the app.
     */
    name: pulumi.Input<string>;
    /**
     * Name of the resource group to which the resource belongs.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Name of the deployment slot. If a slot is not specified, the API will get the publishing credentials for the production slot.
     */
    slot: pulumi.Input<string>;
}
