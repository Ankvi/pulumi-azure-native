import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Gets the application settings of a static site build.
 */
export function listStaticSiteBuildAppSettings(args: ListStaticSiteBuildAppSettingsArgs, opts?: pulumi.InvokeOptions): Promise<ListStaticSiteBuildAppSettingsResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:web/v20210201:listStaticSiteBuildAppSettings", {
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
 * Gets the application settings of a static site build.
 */
export function listStaticSiteBuildAppSettingsOutput(args: ListStaticSiteBuildAppSettingsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<ListStaticSiteBuildAppSettingsResult> {
    return pulumi.output(args).apply((a: any) => listStaticSiteBuildAppSettings(a, opts))
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