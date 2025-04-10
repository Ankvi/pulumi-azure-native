import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Description for Gets the Push settings associated with web app.
 *
 * Uses Azure REST API version 2022-09-01.
 *
 * Other available API versions: 2020-10-01, 2023-01-01, 2023-12-01, 2024-04-01.
 */
export function listWebAppSitePushSettings(args: ListWebAppSitePushSettingsArgs, opts?: pulumi.InvokeOptions): Promise<ListWebAppSitePushSettingsResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:web:listWebAppSitePushSettings", {
        "name": args.name,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface ListWebAppSitePushSettingsArgs {
    /**
     * Name of web app.
     */
    name: string;
    /**
     * Name of the resource group to which the resource belongs.
     */
    resourceGroupName: string;
}

/**
 * Push settings for the App.
 */
export interface ListWebAppSitePushSettingsResult {
    /**
     * Gets or sets a JSON string containing a list of dynamic tags that will be evaluated from user claims in the push registration endpoint.
     */
    readonly dynamicTagsJson?: string;
    /**
     * Resource Id.
     */
    readonly id: string;
    /**
     * Gets or sets a flag indicating whether the Push endpoint is enabled.
     */
    readonly isPushEnabled: boolean;
    /**
     * Kind of resource.
     */
    readonly kind?: string;
    /**
     * Resource Name.
     */
    readonly name: string;
    /**
     * Gets or sets a JSON string containing a list of tags that are whitelisted for use by the push registration endpoint.
     */
    readonly tagWhitelistJson?: string;
    /**
     * Gets or sets a JSON string containing a list of tags that require user authentication to be used in the push registration endpoint.
     * Tags can consist of alphanumeric characters and the following:
     * '_', '@', '#', '.', ':', '-'. 
     * Validation should be performed at the PushRequestHandler.
     */
    readonly tagsRequiringAuth?: string;
    /**
     * Resource type.
     */
    readonly type: string;
}
/**
 * Description for Gets the Push settings associated with web app.
 *
 * Uses Azure REST API version 2022-09-01.
 *
 * Other available API versions: 2020-10-01, 2023-01-01, 2023-12-01, 2024-04-01.
 */
export function listWebAppSitePushSettingsOutput(args: ListWebAppSitePushSettingsOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<ListWebAppSitePushSettingsResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:web:listWebAppSitePushSettings", {
        "name": args.name,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface ListWebAppSitePushSettingsOutputArgs {
    /**
     * Name of web app.
     */
    name: pulumi.Input<string>;
    /**
     * Name of the resource group to which the resource belongs.
     */
    resourceGroupName: pulumi.Input<string>;
}