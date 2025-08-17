import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the details of registered recovery services provider.
 *
 * Uses Azure REST API version 2024-10-01.
 *
 * Other available API versions: 2023-02-01, 2023-04-01, 2023-06-01, 2023-08-01, 2024-01-01, 2024-02-01, 2024-04-01, 2025-01-01, 2025-02-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native recoveryservices [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getReplicationRecoveryServicesProvider(args: GetReplicationRecoveryServicesProviderArgs, opts?: pulumi.InvokeOptions): Promise<GetReplicationRecoveryServicesProviderResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:recoveryservices:getReplicationRecoveryServicesProvider", {
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
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
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
 *
 * Uses Azure REST API version 2024-10-01.
 *
 * Other available API versions: 2023-02-01, 2023-04-01, 2023-06-01, 2023-08-01, 2024-01-01, 2024-02-01, 2024-04-01, 2025-01-01, 2025-02-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native recoveryservices [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getReplicationRecoveryServicesProviderOutput(args: GetReplicationRecoveryServicesProviderOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetReplicationRecoveryServicesProviderResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:recoveryservices:getReplicationRecoveryServicesProvider", {
        "fabricName": args.fabricName,
        "providerName": args.providerName,
        "resourceGroupName": args.resourceGroupName,
        "resourceName": args.resourceName,
    }, opts);
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