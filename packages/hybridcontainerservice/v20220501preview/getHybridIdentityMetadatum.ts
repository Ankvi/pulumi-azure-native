import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get the hybrid identity metadata proxy resource.
 */
export function getHybridIdentityMetadatum(args: GetHybridIdentityMetadatumArgs, opts?: pulumi.InvokeOptions): Promise<GetHybridIdentityMetadatumResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:hybridcontainerservice/v20220501preview:getHybridIdentityMetadatum", {
        "hybridIdentityMetadataResourceName": args.hybridIdentityMetadataResourceName,
        "provisionedClustersName": args.provisionedClustersName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetHybridIdentityMetadatumArgs {
    /**
     * Parameter for the name of the hybrid identity metadata resource.
     */
    hybridIdentityMetadataResourceName: string;
    /**
     * Parameter for the name of the provisioned cluster
     */
    provisionedClustersName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
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
     * Parameter for the name of the provisioned cluster
     */
    provisionedClustersName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}
