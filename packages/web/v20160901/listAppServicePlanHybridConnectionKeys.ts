import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Get the send key name and value of a Hybrid Connection.
 */
export function listAppServicePlanHybridConnectionKeys(args: ListAppServicePlanHybridConnectionKeysArgs, opts?: pulumi.InvokeOptions): Promise<ListAppServicePlanHybridConnectionKeysResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:web/v20160901:listAppServicePlanHybridConnectionKeys", {
        "name": args.name,
        "namespaceName": args.namespaceName,
        "relayName": args.relayName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface ListAppServicePlanHybridConnectionKeysArgs {
    /**
     * Name of the App Service plan.
     */
    name: string;
    /**
     * The name of the Service Bus namespace.
     */
    namespaceName: string;
    /**
     * The name of the Service Bus relay.
     */
    relayName: string;
    /**
     * Name of the resource group to which the resource belongs.
     */
    resourceGroupName: string;
}

/**
 * Hybrid Connection key contract. This has the send key name and value for a Hybrid Connection.
 */
export interface ListAppServicePlanHybridConnectionKeysResult {
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
 * Get the send key name and value of a Hybrid Connection.
 */
export function listAppServicePlanHybridConnectionKeysOutput(args: ListAppServicePlanHybridConnectionKeysOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<ListAppServicePlanHybridConnectionKeysResult> {
    return pulumi.output(args).apply((a: any) => listAppServicePlanHybridConnectionKeys(a, opts))
}

export interface ListAppServicePlanHybridConnectionKeysOutputArgs {
    /**
     * Name of the App Service plan.
     */
    name: pulumi.Input<string>;
    /**
     * The name of the Service Bus namespace.
     */
    namespaceName: pulumi.Input<string>;
    /**
     * The name of the Service Bus relay.
     */
    relayName: pulumi.Input<string>;
    /**
     * Name of the resource group to which the resource belongs.
     */
    resourceGroupName: pulumi.Input<string>;
}