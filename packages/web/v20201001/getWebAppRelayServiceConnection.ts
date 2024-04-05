import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets a hybrid connection configuration by its name.
 */
export function getWebAppRelayServiceConnection(args: GetWebAppRelayServiceConnectionArgs, opts?: pulumi.InvokeOptions): Promise<GetWebAppRelayServiceConnectionResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:web/v20201001:getWebAppRelayServiceConnection", {
        "entityName": args.entityName,
        "name": args.name,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetWebAppRelayServiceConnectionArgs {
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
}

/**
 * Hybrid Connection for an App Service app.
 */
export interface GetWebAppRelayServiceConnectionResult {
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
export function getWebAppRelayServiceConnectionOutput(args: GetWebAppRelayServiceConnectionOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetWebAppRelayServiceConnectionResult> {
    return pulumi.output(args).apply((a: any) => getWebAppRelayServiceConnection(a, opts))
}

export interface GetWebAppRelayServiceConnectionOutputArgs {
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
}