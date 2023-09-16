import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Description for Gets the metadata of an app.
 */
export function listWebAppMetadataSlot(args: ListWebAppMetadataSlotArgs, opts?: pulumi.InvokeOptions): Promise<ListWebAppMetadataSlotResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:web/v20220901:listWebAppMetadataSlot", {
        "name": args.name,
        "resourceGroupName": args.resourceGroupName,
        "slot": args.slot,
    }, opts);
}

export interface ListWebAppMetadataSlotArgs {
    /**
     * Name of the app.
     */
    name: string;
    /**
     * Name of the resource group to which the resource belongs.
     */
    resourceGroupName: string;
    /**
     * Name of the deployment slot. If a slot is not specified, the API will get the metadata for the production slot.
     */
    slot: string;
}

/**
 * String dictionary resource.
 */
export interface ListWebAppMetadataSlotResult {
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
 * Description for Gets the metadata of an app.
 */
export function listWebAppMetadataSlotOutput(args: ListWebAppMetadataSlotOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<ListWebAppMetadataSlotResult> {
    return pulumi.output(args).apply((a: any) => listWebAppMetadataSlot(a, opts))
}

export interface ListWebAppMetadataSlotOutputArgs {
    /**
     * Name of the app.
     */
    name: pulumi.Input<string>;
    /**
     * Name of the resource group to which the resource belongs.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Name of the deployment slot. If a slot is not specified, the API will get the metadata for the production slot.
     */
    slot: pulumi.Input<string>;
}
