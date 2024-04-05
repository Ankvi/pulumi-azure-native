import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets existing backups of an app.
 */
export function listWebAppSiteBackupsSlot(args: ListWebAppSiteBackupsSlotArgs, opts?: pulumi.InvokeOptions): Promise<ListWebAppSiteBackupsSlotResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:web/v20201001:listWebAppSiteBackupsSlot", {
        "name": args.name,
        "resourceGroupName": args.resourceGroupName,
        "slot": args.slot,
    }, opts);
}

export interface ListWebAppSiteBackupsSlotArgs {
    /**
     * Name of the app.
     */
    name: string;
    /**
     * Name of the resource group to which the resource belongs.
     */
    resourceGroupName: string;
    /**
     * Name of the deployment slot. If a slot is not specified, the API will get backups of the production slot.
     */
    slot: string;
}

/**
 * Collection of backup items.
 */
export interface ListWebAppSiteBackupsSlotResult {
    /**
     * Link to next page of resources.
     */
    readonly nextLink: string;
    /**
     * Collection of resources.
     */
    readonly value: types.outputs.BackupItemResponse[];
}
/**
 * Gets existing backups of an app.
 */
export function listWebAppSiteBackupsSlotOutput(args: ListWebAppSiteBackupsSlotOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<ListWebAppSiteBackupsSlotResult> {
    return pulumi.output(args).apply((a: any) => listWebAppSiteBackupsSlot(a, opts))
}

export interface ListWebAppSiteBackupsSlotOutputArgs {
    /**
     * Name of the app.
     */
    name: pulumi.Input<string>;
    /**
     * Name of the resource group to which the resource belongs.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Name of the deployment slot. If a slot is not specified, the API will get backups of the production slot.
     */
    slot: pulumi.Input<string>;
}