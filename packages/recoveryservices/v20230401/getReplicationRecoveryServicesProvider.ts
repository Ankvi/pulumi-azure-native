import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the details of registered recovery services provider.
 */
export function getReplicationRecoveryServicesProvider(args: GetReplicationRecoveryServicesProviderArgs, opts?: pulumi.InvokeOptions): Promise<GetReplicationRecoveryServicesProviderResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:recoveryservices/v20230401:getReplicationRecoveryServicesProvider", {
        "fabricName": args.fabricName,
        "providerName": args.providerName,
        "resourceGroupName": args.resourceGroupName,
        "resourceName": args.resourceName,
    }, opts);
}

export interface GetReplicationRecoveryServicesProviderArgs {
    /**
     * Fabric name.
     */
    fabricName: string;
    /**
     * Recovery services provider name.
     */
    providerName: string;
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
 * Provider details.
 */
export interface GetReplicationRecoveryServicesProviderResult {
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
     * Provider properties.
     */
    readonly properties: types.outputs.RecoveryServicesProviderPropertiesResponse;
    /**
     * Resource Type
     */
    readonly type: string;
}
/**
 * Gets the details of registered recovery services provider.
 */
export function getReplicationRecoveryServicesProviderOutput(args: GetReplicationRecoveryServicesProviderOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetReplicationRecoveryServicesProviderResult> {
    return pulumi.output(args).apply((a: any) => getReplicationRecoveryServicesProvider(a, opts))
}

export interface GetReplicationRecoveryServicesProviderOutputArgs {
    /**
     * Fabric name.
     */
    fabricName: pulumi.Input<string>;
    /**
     * Recovery services provider name.
     */
    providerName: pulumi.Input<string>;
    /**
     * The name of the resource group where the recovery services vault is present.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the recovery services vault.
     */
    resourceName: pulumi.Input<string>;
}
