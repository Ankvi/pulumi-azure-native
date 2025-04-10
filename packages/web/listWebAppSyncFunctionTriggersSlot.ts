import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Description for This is to allow calling via powershell and ARM template.
 *
 * Uses Azure REST API version 2022-09-01.
 *
 * Other available API versions: 2016-08-01, 2018-11-01, 2020-10-01, 2023-01-01, 2023-12-01, 2024-04-01.
 */
export function listWebAppSyncFunctionTriggersSlot(args: ListWebAppSyncFunctionTriggersSlotArgs, opts?: pulumi.InvokeOptions): Promise<ListWebAppSyncFunctionTriggersSlotResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:web:listWebAppSyncFunctionTriggersSlot", {
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
 * Description for This is to allow calling via powershell and ARM template.
 *
 * Uses Azure REST API version 2022-09-01.
 *
 * Other available API versions: 2016-08-01, 2018-11-01, 2020-10-01, 2023-01-01, 2023-12-01, 2024-04-01.
 */
export function listWebAppSyncFunctionTriggersSlotOutput(args: ListWebAppSyncFunctionTriggersSlotOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<ListWebAppSyncFunctionTriggersSlotResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:web:listWebAppSyncFunctionTriggersSlot", {
        "name": args.name,
        "resourceGroupName": args.resourceGroupName,
        "slot": args.slot,
    }, opts);
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