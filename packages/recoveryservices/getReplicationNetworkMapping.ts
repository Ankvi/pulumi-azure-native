import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the details of an ASR network mapping.
 * Azure REST API version: 2023-04-01.
 */
export function getReplicationNetworkMapping(args: GetReplicationNetworkMappingArgs, opts?: pulumi.InvokeOptions): Promise<GetReplicationNetworkMappingResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:recoveryservices:getReplicationNetworkMapping", {
        "fabricName": args.fabricName,
        "networkMappingName": args.networkMappingName,
        "networkName": args.networkName,
        "resourceGroupName": args.resourceGroupName,
        "resourceName": args.resourceName,
    }, opts);
}

export interface GetReplicationNetworkMappingArgs {
    /**
     * Primary fabric name.
     */
    fabricName: string;
    /**
     * Network mapping name.
     */
    networkMappingName: string;
    /**
     * Primary network name.
     */
    networkName: string;
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
 * Network Mapping model. Ideally it should have been possible to inherit this class from prev version in InheritedModels as long as there is no difference in structure or method signature. Since there were no base Models for certain fields and methods viz NetworkMappingProperties and Load with required return type, the class has been introduced in its entirety with references to base models to facilitate extensions in subsequent versions.
 */
export interface GetReplicationNetworkMappingResult {
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
     * The Network Mapping Properties.
     */
    readonly properties: types.outputs.recoveryservices.NetworkMappingPropertiesResponse;
    /**
     * Resource Type
     */
    readonly type: string;
}
/**
 * Gets the details of an ASR network mapping.
 * Azure REST API version: 2023-04-01.
 */
export function getReplicationNetworkMappingOutput(args: GetReplicationNetworkMappingOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetReplicationNetworkMappingResult> {
    return pulumi.output(args).apply((a: any) => getReplicationNetworkMapping(a, opts))
}

export interface GetReplicationNetworkMappingOutputArgs {
    /**
     * Primary fabric name.
     */
    fabricName: pulumi.Input<string>;
    /**
     * Network mapping name.
     */
    networkMappingName: pulumi.Input<string>;
    /**
     * Primary network name.
     */
    networkName: pulumi.Input<string>;
    /**
     * The name of the resource group where the recovery services vault is present.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the recovery services vault.
     */
    resourceName: pulumi.Input<string>;
}
