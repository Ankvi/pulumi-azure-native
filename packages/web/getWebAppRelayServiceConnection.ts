import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Description for Gets a hybrid connection configuration by its name.
 *
 * Uses Azure REST API version 2022-09-01.
 *
 * Other available API versions: 2020-10-01, 2023-01-01, 2023-12-01, 2024-04-01.
 */
export function getWebAppRelayServiceConnection(args: GetWebAppRelayServiceConnectionArgs, opts?: pulumi.InvokeOptions): Promise<GetWebAppRelayServiceConnectionResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:web:getWebAppRelayServiceConnection", {
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
     * Resource type.
     */
    readonly type: string;
}
/**
 * Description for Gets a hybrid connection configuration by its name.
 *
 * Uses Azure REST API version 2022-09-01.
 *
 * Other available API versions: 2020-10-01, 2023-01-01, 2023-12-01, 2024-04-01.
 */
export function getWebAppRelayServiceConnectionOutput(args: GetWebAppRelayServiceConnectionOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetWebAppRelayServiceConnectionResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:web:getWebAppRelayServiceConnection", {
        "entityName": args.entityName,
        "name": args.name,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
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