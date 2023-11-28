import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Description for Gets the application settings of an app.
 */
export function listWebAppApplicationSettings(args: ListWebAppApplicationSettingsArgs, opts?: pulumi.InvokeOptions): Promise<ListWebAppApplicationSettingsResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:web/v20230101:listWebAppApplicationSettings", {
        "name": args.name,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface ListWebAppApplicationSettingsArgs {
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
 * String dictionary resource.
 */
export interface ListWebAppApplicationSettingsResult {
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
 * Description for Gets the application settings of an app.
 */
export function listWebAppApplicationSettingsOutput(args: ListWebAppApplicationSettingsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<ListWebAppApplicationSettingsResult> {
    return pulumi.output(args).apply((a: any) => listWebAppApplicationSettings(a, opts))
}

export interface ListWebAppApplicationSettingsOutputArgs {
    /**
     * Name of the app.
     */
    name: pulumi.Input<string>;
    /**
     * Name of the resource group to which the resource belongs.
     */
    resourceGroupName: pulumi.Input<string>;
}
