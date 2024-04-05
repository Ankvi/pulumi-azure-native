import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Description for Get host secrets for a function app.
 */
export function listWebAppHostKeysSlot(args: ListWebAppHostKeysSlotArgs, opts?: pulumi.InvokeOptions): Promise<ListWebAppHostKeysSlotResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:web/v20220901:listWebAppHostKeysSlot", {
        "name": args.name,
        "resourceGroupName": args.resourceGroupName,
        "slot": args.slot,
    }, opts);
}

export interface ListWebAppHostKeysSlotArgs {
    /**
     * Site name.
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
 * Functions host level keys.
 */
export interface ListWebAppHostKeysSlotResult {
    /**
     * Host level function keys.
     */
    readonly functionKeys?: {[key: string]: string};
    /**
     * Secret key.
     */
    readonly masterKey?: string;
    /**
     * System keys.
     */
    readonly systemKeys?: {[key: string]: string};
}
/**
 * Description for Get host secrets for a function app.
 */
export function listWebAppHostKeysSlotOutput(args: ListWebAppHostKeysSlotOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<ListWebAppHostKeysSlotResult> {
    return pulumi.output(args).apply((a: any) => listWebAppHostKeysSlot(a, opts))
}

export interface ListWebAppHostKeysSlotOutputArgs {
    /**
     * Site name.
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