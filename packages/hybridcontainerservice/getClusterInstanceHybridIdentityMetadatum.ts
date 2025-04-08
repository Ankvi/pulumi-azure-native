import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get the hybrid identity metadata proxy resource.
 *
 * Uses Azure REST API version 2024-01-01.
 *
 * Other available API versions: 2023-11-15-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native hybridcontainerservice [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getClusterInstanceHybridIdentityMetadatum(args: GetClusterInstanceHybridIdentityMetadatumArgs, opts?: pulumi.InvokeOptions): Promise<GetClusterInstanceHybridIdentityMetadatumResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:hybridcontainerservice:getClusterInstanceHybridIdentityMetadatum", {
        "connectedClusterResourceUri": args.connectedClusterResourceUri,
    }, opts);
}

export interface GetClusterInstanceHybridIdentityMetadatumArgs {
    /**
     * The fully qualified Azure Resource Manager identifier of the connected cluster resource.
     */
    connectedClusterResourceUri: string;
}

/**
 * Defines the hybridIdentityMetadata.
 */
export interface GetClusterInstanceHybridIdentityMetadatumResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
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
     * Onboarding public key for provisioning the Managed identity for the connected cluster.
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
 *
 * Uses Azure REST API version 2024-01-01.
 *
 * Other available API versions: 2023-11-15-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native hybridcontainerservice [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getClusterInstanceHybridIdentityMetadatumOutput(args: GetClusterInstanceHybridIdentityMetadatumOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetClusterInstanceHybridIdentityMetadatumResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:hybridcontainerservice:getClusterInstanceHybridIdentityMetadatum", {
        "connectedClusterResourceUri": args.connectedClusterResourceUri,
    }, opts);
}

export interface GetClusterInstanceHybridIdentityMetadatumOutputArgs {
    /**
     * The fully qualified Azure Resource Manager identifier of the connected cluster resource.
     */
    connectedClusterResourceUri: pulumi.Input<string>;
}