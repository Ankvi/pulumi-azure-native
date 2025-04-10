import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Gets the send key name and value for a Hybrid Connection.
 *
 * Uses Azure REST API version 2018-11-01.
 */
export function listWebAppHybridConnectionKeysSlot(args: ListWebAppHybridConnectionKeysSlotArgs, opts?: pulumi.InvokeOptions): Promise<ListWebAppHybridConnectionKeysSlotResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:web:listWebAppHybridConnectionKeysSlot", {
        "name": args.name,
        "namespaceName": args.namespaceName,
        "relayName": args.relayName,
        "resourceGroupName": args.resourceGroupName,
        "slot": args.slot,
    }, opts);
}

export interface ListWebAppHybridConnectionKeysSlotArgs {
    /**
     * The name of the web app.
     */
    name: string;
    /**
     * The namespace for this hybrid connection.
     */
    namespaceName: string;
    /**
     * The relay name for this hybrid connection.
     */
    relayName: string;
    /**
     * Name of the resource group to which the resource belongs.
     */
    resourceGroupName: string;
    /**
     * The name of the slot for the web app.
     */
    slot: string;
}

/**
 * Hybrid Connection key contract. This has the send key name and value for a Hybrid Connection.
 */
export interface ListWebAppHybridConnectionKeysSlotResult {
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
     * The name of the send key.
     */
    readonly sendKeyName: string;
    /**
     * The value of the send key.
     */
    readonly sendKeyValue: string;
    /**
     * Resource type.
     */
    readonly type: string;
}
/**
 * Gets the send key name and value for a Hybrid Connection.
 *
 * Uses Azure REST API version 2018-11-01.
 */
export function listWebAppHybridConnectionKeysSlotOutput(args: ListWebAppHybridConnectionKeysSlotOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<ListWebAppHybridConnectionKeysSlotResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:web:listWebAppHybridConnectionKeysSlot", {
        "name": args.name,
        "namespaceName": args.namespaceName,
        "relayName": args.relayName,
        "resourceGroupName": args.resourceGroupName,
        "slot": args.slot,
    }, opts);
}

export interface ListWebAppHybridConnectionKeysSlotOutputArgs {
    /**
     * The name of the web app.
     */
    name: pulumi.Input<string>;
    /**
     * The namespace for this hybrid connection.
     */
    namespaceName: pulumi.Input<string>;
    /**
     * The relay name for this hybrid connection.
     */
    relayName: pulumi.Input<string>;
    /**
     * Name of the resource group to which the resource belongs.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the slot for the web app.
     */
    slot: pulumi.Input<string>;
}