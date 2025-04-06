import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Description for Gets the Push settings associated with web app.
 *
 * Uses Azure REST API version 2024-04-01.
 *
 * Other available API versions: 2016-08-01, 2018-02-01, 2018-11-01, 2019-08-01, 2020-06-01, 2020-09-01, 2020-10-01, 2020-12-01, 2021-01-01, 2021-01-15, 2021-02-01, 2021-03-01, 2022-03-01, 2022-09-01, 2023-01-01, 2023-12-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native web [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function listWebAppSitePushSettingsSlot(args: ListWebAppSitePushSettingsSlotArgs, opts?: pulumi.InvokeOptions): Promise<ListWebAppSitePushSettingsSlotResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:web:listWebAppSitePushSettingsSlot", {
        "name": args.name,
        "resourceGroupName": args.resourceGroupName,
        "slot": args.slot,
    }, opts);
}

export interface ListWebAppSitePushSettingsSlotArgs {
    /**
     * Name of web app.
     */
    name: string;
    /**
     * Name of the resource group to which the resource belongs.
     */
    resourceGroupName: string;
    /**
     * Name of web app slot. If not specified then will default to production slot.
     */
    slot: string;
}

/**
 * Push settings for the App.
 */
export interface ListWebAppSitePushSettingsSlotResult {
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
 * Uses Azure REST API version 2024-04-01.
 *
 * Other available API versions: 2016-08-01, 2018-02-01, 2018-11-01, 2019-08-01, 2020-06-01, 2020-09-01, 2020-10-01, 2020-12-01, 2021-01-01, 2021-01-15, 2021-02-01, 2021-03-01, 2022-03-01, 2022-09-01, 2023-01-01, 2023-12-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native web [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function listWebAppSitePushSettingsSlotOutput(args: ListWebAppSitePushSettingsSlotOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<ListWebAppSitePushSettingsSlotResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:web:listWebAppSitePushSettingsSlot", {
        "name": args.name,
        "resourceGroupName": args.resourceGroupName,
        "slot": args.slot,
    }, opts);
}

export interface ListWebAppSitePushSettingsSlotOutputArgs {
    /**
     * Name of web app.
     */
    name: pulumi.Input<string>;
    /**
     * Name of the resource group to which the resource belongs.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Name of web app slot. If not specified then will default to production slot.
     */
    slot: pulumi.Input<string>;
}