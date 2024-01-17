import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get the hybrid identity metadata proxy resource.
 * Azure REST API version: 2022-09-01-preview.
 *
 * Other available API versions: 2022-05-01-preview, 2023-11-15-preview, 2024-01-01.
 */
export function getHybridIdentityMetadatum(args: GetHybridIdentityMetadatumArgs, opts?: pulumi.InvokeOptions): Promise<GetHybridIdentityMetadatumResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:hybridcontainerservice:getHybridIdentityMetadatum", {
        "hybridIdentityMetadataResourceName": args.hybridIdentityMetadataResourceName,
        "resourceGroupName": args.resourceGroupName,
        "resourceName": args.resourceName,
    }, opts);
}

export interface GetHybridIdentityMetadatumArgs {
    /**
     * Parameter for the name of the hybrid identity metadata resource.
     */
    hybridIdentityMetadataResourceName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * Parameter for the name of the provisioned cluster
     */
    resourceName: string;
}

/**
 * Defines the hybridIdentityMetadata.
 */
export interface GetHybridIdentityMetadatumResult {
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The identity of the provisioned cluster.
     */
    readonly identity?: types.outputs.ProvisionedClusterIdentityResponse;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * provisioning state of the hybridIdentityMetadata resource.
     */
    readonly provisioningState: string;
    /**
     * Onboarding public key for provisioning the Managed identity for the HybridAKS cluster.
     */
    readonly publicKey?: string;
    /**
     * Unique id of the parent provisioned cluster resource.
     */
    readonly resourceUid?: string;
    /**
     * The system data.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Get the hybrid identity metadata proxy resource.
 * Azure REST API version: 2022-09-01-preview.
 *
 * Other available API versions: 2022-05-01-preview, 2023-11-15-preview, 2024-01-01.
 */
export function getHybridIdentityMetadatumOutput(args: GetHybridIdentityMetadatumOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetHybridIdentityMetadatumResult> {
    return pulumi.output(args).apply((a: any) => getHybridIdentityMetadatum(a, opts))
}

export interface GetHybridIdentityMetadatumOutputArgs {
    /**
     * Parameter for the name of the hybrid identity metadata resource.
     */
    hybridIdentityMetadataResourceName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Parameter for the name of the provisioned cluster
     */
    resourceName: pulumi.Input<string>;
}
