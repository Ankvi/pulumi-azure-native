import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get the hybrid identity metadata proxy resource.
 */
export function getHybridIdentityMetadatum(args: GetHybridIdentityMetadatumArgs, opts?: pulumi.InvokeOptions): Promise<GetHybridIdentityMetadatumResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:hybridcontainerservice/v20231115preview:getHybridIdentityMetadatum", {
        "connectedClusterResourceUri": args.connectedClusterResourceUri,
    }, opts);
}

export interface GetHybridIdentityMetadatumArgs {
    /**
     * The fully qualified Azure Resource manager identifier of the connected cluster resource.
     */
    connectedClusterResourceUri: string;
}

/**
 * Defines the hybridIdentityMetadata.
 */
export interface GetHybridIdentityMetadatumResult {
    /**
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
     */
    readonly id: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Provisioning state of the resource
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
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
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
     * The fully qualified Azure Resource manager identifier of the connected cluster resource.
     */
    connectedClusterResourceUri: pulumi.Input<string>;
}