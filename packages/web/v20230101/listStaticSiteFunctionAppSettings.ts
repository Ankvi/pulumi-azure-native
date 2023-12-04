import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Description for Gets the application settings of a static site.
 */
export function listStaticSiteFunctionAppSettings(args: ListStaticSiteFunctionAppSettingsArgs, opts?: pulumi.InvokeOptions): Promise<ListStaticSiteFunctionAppSettingsResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:web/v20230101:listStaticSiteFunctionAppSettings", {
        "name": args.name,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface ListStaticSiteFunctionAppSettingsArgs {
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
export interface ListStaticSiteFunctionAppSettingsResult {
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
 */
export function listStaticSiteFunctionAppSettingsOutput(args: ListStaticSiteFunctionAppSettingsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<ListStaticSiteFunctionAppSettingsResult> {
    return pulumi.output(args).apply((a: any) => listStaticSiteFunctionAppSettings(a, opts))
}

export interface ListStaticSiteFunctionAppSettingsOutputArgs {
    /**
     * Name of the static site.
     */
    name: pulumi.Input<string>;
    /**
     * Name of the resource group to which the resource belongs.
     */
    resourceGroupName: pulumi.Input<string>;
}