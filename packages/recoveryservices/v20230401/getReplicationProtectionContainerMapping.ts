import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the details of a protection container mapping.
 */
export function getReplicationProtectionContainerMapping(args: GetReplicationProtectionContainerMappingArgs, opts?: pulumi.InvokeOptions): Promise<GetReplicationProtectionContainerMappingResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:recoveryservices/v20230401:getReplicationProtectionContainerMapping", {
        "fabricName": args.fabricName,
        "mappingName": args.mappingName,
        "protectionContainerName": args.protectionContainerName,
        "resourceGroupName": args.resourceGroupName,
        "resourceName": args.resourceName,
    }, opts);
}

export interface GetReplicationProtectionContainerMappingArgs {
    /**
     * Fabric name.
     */
    fabricName: string;
    /**
     * Protection Container mapping name.
     */
    mappingName: string;
    /**
     * Protection container name.
     */
    protectionContainerName: string;
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
 * Protection container mapping object.
 */
export interface GetReplicationProtectionContainerMappingResult {
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
     * The custom data.
     */
    readonly properties: types.outputs.ProtectionContainerMappingPropertiesResponse;
    /**
     * Resource Type
     */
    readonly type: string;
}
/**
 * Gets the details of a protection container mapping.
 */
export function getReplicationProtectionContainerMappingOutput(args: GetReplicationProtectionContainerMappingOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetReplicationProtectionContainerMappingResult> {
    return pulumi.output(args).apply((a: any) => getReplicationProtectionContainerMapping(a, opts))
}

export interface GetReplicationProtectionContainerMappingOutputArgs {
    /**
     * Fabric name.
     */
    fabricName: pulumi.Input<string>;
    /**
     * Protection Container mapping name.
     */
    mappingName: pulumi.Input<string>;
    /**
     * Protection container name.
     */
    protectionContainerName: pulumi.Input<string>;
    /**
     * The name of the resource group where the recovery services vault is present.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the recovery services vault.
     */
    resourceName: pulumi.Input<string>;
}