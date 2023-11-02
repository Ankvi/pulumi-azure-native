import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Description for Retrieves a specific Service Bus Hybrid Connection used by this Web App.
 * Azure REST API version: 2022-09-01.
 *
 * Other available API versions: 2020-10-01.
 */
export function getWebAppHybridConnectionSlot(args: GetWebAppHybridConnectionSlotArgs, opts?: pulumi.InvokeOptions): Promise<GetWebAppHybridConnectionSlotResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:web:getWebAppHybridConnectionSlot", {
        "name": args.name,
        "namespaceName": args.namespaceName,
        "relayName": args.relayName,
        "resourceGroupName": args.resourceGroupName,
        "slot": args.slot,
    }, opts);
}

export interface GetWebAppHybridConnectionSlotArgs {
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
 * Hybrid Connection contract. This is used to configure a Hybrid Connection.
 */
export interface GetWebAppHybridConnectionSlotResult {
    /**
     * The hostname of the endpoint.
     */
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
    /**
     * The port of the endpoint.
     */
    readonly port?: number;
    /**
     * The ARM URI to the Service Bus relay.
     */
    readonly relayArmUri?: string;
    /**
     * The name of the Service Bus relay.
     */
    readonly relayName?: string;
    /**
     * The name of the Service Bus key which has Send permissions. This is used to authenticate to Service Bus.
     */
    readonly sendKeyName?: string;
    /**
     * The value of the Service Bus key. This is used to authenticate to Service Bus. In ARM this key will not be returned
     * normally, use the POST /listKeys API instead.
     */
    readonly sendKeyValue?: string;
    /**
     * The name of the Service Bus namespace.
     */
    readonly serviceBusNamespace?: string;
    /**
     * The suffix for the service bus endpoint. By default this is .servicebus.windows.net
     */
    readonly serviceBusSuffix?: string;
    /**
     * Resource type.
     */
    readonly type: string;
}
/**
 * Description for Retrieves a specific Service Bus Hybrid Connection used by this Web App.
 * Azure REST API version: 2022-09-01.
 *
 * Other available API versions: 2020-10-01.
 */
export function getWebAppHybridConnectionSlotOutput(args: GetWebAppHybridConnectionSlotOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetWebAppHybridConnectionSlotResult> {
    return pulumi.output(args).apply((a: any) => getWebAppHybridConnectionSlot(a, opts))
}

export interface GetWebAppHybridConnectionSlotOutputArgs {
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
