import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the details of a registered vCenter server(Add vCenter server).
 * Azure REST API version: 2023-04-01.
 */
export function getReplicationvCenter(args: GetReplicationvCenterArgs, opts?: pulumi.InvokeOptions): Promise<GetReplicationvCenterResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:recoveryservices:getReplicationvCenter", {
        "fabricName": args.fabricName,
        "resourceGroupName": args.resourceGroupName,
        "resourceName": args.resourceName,
        "vcenterName": args.vcenterName,
    }, opts);
}

export interface GetReplicationvCenterArgs {
    /**
     * Fabric name.
     */
    fabricName: string;
    /**
     * The name of the resource group where the recovery services vault is present.
     */
    resourceGroupName: string;
    /**
     * The name of the recovery services vault.
     */
    resourceName: string;
    /**
     * vcenter name.
     */
    vcenterName: string;
}

/**
 * vCenter definition.
 */
export interface GetReplicationvCenterResult {
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
     * VCenter related data.
     */
    readonly properties: types.outputs.VCenterPropertiesResponse;
    /**
     * Resource Type
     */
    readonly type: string;
}
/**
 * Gets the details of a registered vCenter server(Add vCenter server).
 * Azure REST API version: 2023-04-01.
 */
export function getReplicationvCenterOutput(args: GetReplicationvCenterOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetReplicationvCenterResult> {
    return pulumi.output(args).apply((a: any) => getReplicationvCenter(a, opts))
}

export interface GetReplicationvCenterOutputArgs {
    /**
     * Fabric name.
     */
    fabricName: pulumi.Input<string>;
    /**
     * The name of the resource group where the recovery services vault is present.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the recovery services vault.
     */
    resourceName: pulumi.Input<string>;
    /**
     * vcenter name.
     */
    vcenterName: pulumi.Input<string>;
}
