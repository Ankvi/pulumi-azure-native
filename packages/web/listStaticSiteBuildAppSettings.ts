import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Description for Gets the application settings of a static site build.
 *
 * Uses Azure REST API version 2022-09-01.
 *
 * Other available API versions: 2021-02-01, 2023-01-01, 2023-12-01, 2024-04-01.
 */
export function listStaticSiteBuildAppSettings(args: ListStaticSiteBuildAppSettingsArgs, opts?: pulumi.InvokeOptions): Promise<ListStaticSiteBuildAppSettingsResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:web:listStaticSiteBuildAppSettings", {
        "environmentName": args.environmentName,
        "name": args.name,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface ListStaticSiteBuildAppSettingsArgs {
    /**
     * The stage site identifier.
     */
    environmentName: string;
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
export interface ListStaticSiteBuildAppSettingsResult {
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
 * Description for Gets the application settings of a static site build.
 *
 * Uses Azure REST API version 2022-09-01.
 *
 * Other available API versions: 2021-02-01, 2023-01-01, 2023-12-01, 2024-04-01.
 */
export function listStaticSiteBuildAppSettingsOutput(args: ListStaticSiteBuildAppSettingsOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<ListStaticSiteBuildAppSettingsResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:web:listStaticSiteBuildAppSettings", {
        "environmentName": args.environmentName,
        "name": args.name,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface ListStaticSiteBuildAppSettingsOutputArgs {
    /**
     * The stage site identifier.
     */
    environmentName: pulumi.Input<string>;
    /**
     * Name of the static site.
     */
    name: pulumi.Input<string>;
    /**
     * Name of the resource group to which the resource belongs.
     */
    resourceGroupName: pulumi.Input<string>;
}