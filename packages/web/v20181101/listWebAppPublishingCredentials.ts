import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Gets the Git/FTP publishing credentials of an app.
 */
export function listWebAppPublishingCredentials(args: ListWebAppPublishingCredentialsArgs, opts?: pulumi.InvokeOptions): Promise<ListWebAppPublishingCredentialsResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:web/v20181101:listWebAppPublishingCredentials", {
        "name": args.name,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface ListWebAppPublishingCredentialsArgs {
    /**
     * Name of the app.
     */
    name: string;
    /**
     * Name of the resource group to which the resource belongs.
     */
    resourceGroupName: string;
}

/**
 * User credentials used for publishing activity.
 */
export interface ListWebAppPublishingCredentialsResult {
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
 * Gets the Git/FTP publishing credentials of an app.
 */
export function listWebAppPublishingCredentialsOutput(args: ListWebAppPublishingCredentialsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<ListWebAppPublishingCredentialsResult> {
    return pulumi.output(args).apply((a: any) => listWebAppPublishingCredentials(a, opts))
}

export interface ListWebAppPublishingCredentialsOutputArgs {
    /**
     * Name of the app.
     */
    name: pulumi.Input<string>;
    /**
     * Name of the resource group to which the resource belongs.
     */
    resourceGroupName: pulumi.Input<string>;
}
