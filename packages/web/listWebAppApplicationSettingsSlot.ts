import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Description for Gets the application settings of an app.
 * Azure REST API version: 2022-09-01.
 *
 * Other available API versions: 2020-10-01, 2023-01-01, 2023-12-01.
 */
export function listWebAppApplicationSettingsSlot(args: ListWebAppApplicationSettingsSlotArgs, opts?: pulumi.InvokeOptions): Promise<ListWebAppApplicationSettingsSlotResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:web:listWebAppApplicationSettingsSlot", {
        "name": args.name,
        "resourceGroupName": args.resourceGroupName,
        "slot": args.slot,
    }, opts);
}

export interface ListWebAppApplicationSettingsSlotArgs {
    /**
     * Name of the app.
     */
    name: string;
    /**
     * Name of the resource group to which the resource belongs.
     */
    resourceGroupName: string;
    /**
     * Name of the deployment slot. If a slot is not specified, the API will get the application settings for the production slot.
     */
    slot: string;
}

/**
 * String dictionary resource.
 */
export interface ListWebAppApplicationSettingsSlotResult {
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
 * Azure REST API version: 2022-09-01.
 *
 * Other available API versions: 2020-10-01, 2023-01-01, 2023-12-01.
 */
export function listWebAppApplicationSettingsSlotOutput(args: ListWebAppApplicationSettingsSlotOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<ListWebAppApplicationSettingsSlotResult> {
    return pulumi.output(args).apply((a: any) => listWebAppApplicationSettingsSlot(a, opts))
}

export interface ListWebAppApplicationSettingsSlotOutputArgs {
    /**
     * Name of the app.
     */
    name: pulumi.Input<string>;
    /**
     * Name of the resource group to which the resource belongs.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Name of the deployment slot. If a slot is not specified, the API will get the application settings for the production slot.
     */
    slot: pulumi.Input<string>;
}