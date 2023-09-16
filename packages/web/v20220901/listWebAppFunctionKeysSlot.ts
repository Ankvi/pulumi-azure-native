import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Description for Get function keys for a function in a web site, or a deployment slot.
 */
export function listWebAppFunctionKeysSlot(args: ListWebAppFunctionKeysSlotArgs, opts?: pulumi.InvokeOptions): Promise<ListWebAppFunctionKeysSlotResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:web/v20220901:listWebAppFunctionKeysSlot", {
        "functionName": args.functionName,
        "name": args.name,
        "resourceGroupName": args.resourceGroupName,
        "slot": args.slot,
    }, opts);
}

export interface ListWebAppFunctionKeysSlotArgs {
    /**
     * Function name.
     */
    functionName: string;
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
 * String dictionary resource.
 */
export interface ListWebAppFunctionKeysSlotResult {
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
 * Description for Get function keys for a function in a web site, or a deployment slot.
 */
export function listWebAppFunctionKeysSlotOutput(args: ListWebAppFunctionKeysSlotOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<ListWebAppFunctionKeysSlotResult> {
    return pulumi.output(args).apply((a: any) => listWebAppFunctionKeysSlot(a, opts))
}

export interface ListWebAppFunctionKeysSlotOutputArgs {
    /**
     * Function name.
     */
    functionName: pulumi.Input<string>;
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
