import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get the of private link proxy resources from a migrate project and private link proxy resource.
 */
export function getPrivateEndpointConnectionProxyController(args: GetPrivateEndpointConnectionProxyControllerArgs, opts?: pulumi.InvokeOptions): Promise<GetPrivateEndpointConnectionProxyControllerResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:migrate/v20230101:getPrivateEndpointConnectionProxyController", {
        "migrateProjectName": args.migrateProjectName,
        "pecProxyName": args.pecProxyName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetPrivateEndpointConnectionProxyControllerArgs {
    /**
     * Name of the Azure Migrate project.
     */
    migrateProjectName: string;
    /**
     * Private link proxy name.
     */
    pecProxyName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * Defines Private endpoint proxy resource.
 */
export interface GetPrivateEndpointConnectionProxyControllerResult {
    readonly eTag?: string;
    readonly id: string;
    readonly name: string;
    /**
     * Properties of a private endpoint connection proxy.
     */
    readonly properties: types.outputs.PrivateEndpointConnectionProxyPropertiesResponse;
    /**
     * Metadata pertaining to creation and last modification of the resource.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    readonly type: string;
}
/**
 * Get the of private link proxy resources from a migrate project and private link proxy resource.
 */
export function getPrivateEndpointConnectionProxyControllerOutput(args: GetPrivateEndpointConnectionProxyControllerOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetPrivateEndpointConnectionProxyControllerResult> {
    return pulumi.output(args).apply((a: any) => getPrivateEndpointConnectionProxyController(a, opts))
}

export interface GetPrivateEndpointConnectionProxyControllerOutputArgs {
    /**
     * Name of the Azure Migrate project.
     */
    migrateProjectName: pulumi.Input<string>;
    /**
     * Private link proxy name.
     */
    pecProxyName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}
