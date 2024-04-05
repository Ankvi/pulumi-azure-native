import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * This is to allow calling via powershell and ARM template.
 */
export function listWebAppSyncFunctionTriggersSlot(args: ListWebAppSyncFunctionTriggersSlotArgs, opts?: pulumi.InvokeOptions): Promise<ListWebAppSyncFunctionTriggersSlotResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:web/v20201001:listWebAppSyncFunctionTriggersSlot", {
        "name": args.name,
        "resourceGroupName": args.resourceGroupName,
        "slot": args.slot,
    }, opts);
}

export interface ListWebAppSyncFunctionTriggersSlotArgs {
    /**
     * Name of the app.
     */
    name: string;
    /**
     * Name of the resource group to which the resource belongs.
     */
    resourceGroupName: string;
    /**
     * Name of the deployment slot.
     */
    slot: string;
}

/**
 * Function secrets.
 */
export interface ListWebAppSyncFunctionTriggersSlotResult {
    /**
     * Secret key.
     */
    readonly key?: string;
    /**
     * Trigger URL.
     */
    readonly triggerUrl?: string;
}
/**
 * This is to allow calling via powershell and ARM template.
 */
export function listWebAppSyncFunctionTriggersSlotOutput(args: ListWebAppSyncFunctionTriggersSlotOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<ListWebAppSyncFunctionTriggersSlotResult> {
    return pulumi.output(args).apply((a: any) => listWebAppSyncFunctionTriggersSlot(a, opts))
}

export interface ListWebAppSyncFunctionTriggersSlotOutputArgs {
    /**
     * Name of the app.
     */
    name: pulumi.Input<string>;
    /**
     * Name of the resource group to which the resource belongs.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Name of the deployment slot.
     */
    slot: pulumi.Input<string>;
}