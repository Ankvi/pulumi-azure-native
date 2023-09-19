import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the connection strings of an app.
 */
export function listWebAppConnectionStringsSlot(args: ListWebAppConnectionStringsSlotArgs, opts?: pulumi.InvokeOptions): Promise<ListWebAppConnectionStringsSlotResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:web/v20201001:listWebAppConnectionStringsSlot", {
        "name": args.name,
        "resourceGroupName": args.resourceGroupName,
        "slot": args.slot,
    }, opts);
}

export interface ListWebAppConnectionStringsSlotArgs {
    /**
     * Name of the app.
     */
    name: string;
    /**
     * Name of the resource group to which the resource belongs.
     */
    resourceGroupName: string;
    /**
     * Name of the deployment slot. If a slot is not specified, the API will get the connection settings for the production slot.
     */
    slot: string;
}

/**
 * String dictionary resource.
 */
export interface ListWebAppConnectionStringsSlotResult {
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
     * Connection strings.
     */
    readonly properties: {[key: string]: types.outputs.ConnStringValueTypePairResponse};
    /**
     * The system metadata relating to this resource.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * Resource type.
     */
    readonly type: string;
}
/**
 * Gets the connection strings of an app.
 */
export function listWebAppConnectionStringsSlotOutput(args: ListWebAppConnectionStringsSlotOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<ListWebAppConnectionStringsSlotResult> {
    return pulumi.output(args).apply((a: any) => listWebAppConnectionStringsSlot(a, opts))
}

export interface ListWebAppConnectionStringsSlotOutputArgs {
    /**
     * Name of the app.
     */
    name: pulumi.Input<string>;
    /**
     * Name of the resource group to which the resource belongs.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Name of the deployment slot. If a slot is not specified, the API will get the connection settings for the production slot.
     */
    slot: pulumi.Input<string>;
}
