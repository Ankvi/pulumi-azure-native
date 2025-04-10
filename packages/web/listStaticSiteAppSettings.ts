import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Description for Gets the application settings of a static site.
 *
 * Uses Azure REST API version 2022-09-01.
 *
 * Other available API versions: 2021-02-01, 2023-01-01, 2023-12-01, 2024-04-01.
 */
export function listStaticSiteAppSettings(args: ListStaticSiteAppSettingsArgs, opts?: pulumi.InvokeOptions): Promise<ListStaticSiteAppSettingsResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:web:listStaticSiteAppSettings", {
        "name": args.name,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface ListStaticSiteAppSettingsArgs {
    /**
     * Name of the static site.
     */
    name: string;
    /**
     * Name of the resource group to which the resource belongs.
     */
    resourceGroupName: string;
}

/**
 * String dictionary resource.
 */
export interface ListStaticSiteAppSettingsResult {
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
     * Settings.
     */
    readonly properties: {[key: string]: string};
    /**
     * Resource type.
     */
    readonly type: string;
}
/**
 * Description for Gets the application settings of a static site.
 *
 * Uses Azure REST API version 2022-09-01.
 *
 * Other available API versions: 2021-02-01, 2023-01-01, 2023-12-01, 2024-04-01.
 */
export function listStaticSiteAppSettingsOutput(args: ListStaticSiteAppSettingsOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<ListStaticSiteAppSettingsResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:web:listStaticSiteAppSettings", {
        "name": args.name,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface ListStaticSiteAppSettingsOutputArgs {
    /**
     * Name of the static site.
     */
    name: pulumi.Input<string>;
    /**
     * Name of the resource group to which the resource belongs.
     */
    resourceGroupName: pulumi.Input<string>;
}