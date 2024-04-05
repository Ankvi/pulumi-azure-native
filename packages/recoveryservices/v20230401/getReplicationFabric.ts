import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the details of an Azure Site Recovery fabric.
 */
export function getReplicationFabric(args: GetReplicationFabricArgs, opts?: pulumi.InvokeOptions): Promise<GetReplicationFabricResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:recoveryservices/v20230401:getReplicationFabric", {
        "fabricName": args.fabricName,
        "filter": args.filter,
        "resourceGroupName": args.resourceGroupName,
        "resourceName": args.resourceName,
    }, opts);
}

export interface GetReplicationFabricArgs {
    /**
     * Fabric name.
     */
    fabricName: string;
    /**
     * OData filter options.
     */
    filter?: string;
    /**
     * The name of the resource group where the recovery services vault is present.
     */
    resourceGroupName: string;
    /**
     * The name of the recovery services vault.
     */
    resourceName: string;
}

/**
 * Fabric definition.
 */
export interface GetReplicationFabricResult {
    /**
     * Resource Id
     */
    readonly id: string;
    /**
     * Resource Location
     */
    readonly location?: string;
    /**
     * Resource Name
     */
    readonly name: string;
    /**
     * Fabric related data.
     */
    readonly properties: types.outputs.FabricPropertiesResponse;
    /**
     * Resource Type
     */
    readonly type: string;
}
/**
 * Gets the details of an Azure Site Recovery fabric.
 */
export function getReplicationFabricOutput(args: GetReplicationFabricOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetReplicationFabricResult> {
    return pulumi.output(args).apply((a: any) => getReplicationFabric(a, opts))
}

export interface GetReplicationFabricOutputArgs {
    /**
     * Fabric name.
     */
    fabricName: pulumi.Input<string>;
    /**
     * OData filter options.
     */
    filter?: pulumi.Input<string>;
    /**
     * The name of the resource group where the recovery services vault is present.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the recovery services vault.
     */
    resourceName: pulumi.Input<string>;
}