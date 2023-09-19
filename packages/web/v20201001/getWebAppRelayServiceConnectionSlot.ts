import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets a hybrid connection configuration by its name.
 */
export function getWebAppRelayServiceConnectionSlot(args: GetWebAppRelayServiceConnectionSlotArgs, opts?: pulumi.InvokeOptions): Promise<GetWebAppRelayServiceConnectionSlotResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:web/v20201001:getWebAppRelayServiceConnectionSlot", {
        "entityName": args.entityName,
        "name": args.name,
        "resourceGroupName": args.resourceGroupName,
        "slot": args.slot,
    }, opts);
}

export interface GetWebAppRelayServiceConnectionSlotArgs {
    /**
     * Name of the hybrid connection.
     */
    entityName: string;
    /**
     * Name of the app.
     */
    name: string;
    /**
     * Name of the resource group to which the resource belongs.
     */
    resourceGroupName: string;
    /**
     * Name of the deployment slot. If a slot is not specified, the API will get a hybrid connection for the production slot.
     */
    slot: string;
}

/**
 * Hybrid Connection for an App Service app.
 */
export interface GetWebAppRelayServiceConnectionSlotResult {
    readonly biztalkUri?: string;
    readonly entityConnectionString?: string;
    readonly entityName?: string;
    readonly hostname?: string;
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
    readonly port?: number;
    readonly resourceConnectionString?: string;
    readonly resourceType?: string;
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
 * Gets a hybrid connection configuration by its name.
 */
export function getWebAppRelayServiceConnectionSlotOutput(args: GetWebAppRelayServiceConnectionSlotOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetWebAppRelayServiceConnectionSlotResult> {
    return pulumi.output(args).apply((a: any) => getWebAppRelayServiceConnectionSlot(a, opts))
}

export interface GetWebAppRelayServiceConnectionSlotOutputArgs {
    /**
     * Name of the hybrid connection.
     */
    entityName: pulumi.Input<string>;
    /**
     * Name of the app.
     */
    name: pulumi.Input<string>;
    /**
     * Name of the resource group to which the resource belongs.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Name of the deployment slot. If a slot is not specified, the API will get a hybrid connection for the production slot.
     */
    slot: pulumi.Input<string>;
}
