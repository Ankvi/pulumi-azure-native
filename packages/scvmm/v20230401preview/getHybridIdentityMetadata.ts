import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * Implements HybridIdentityMetadata GET method.
 */
export function getHybridIdentityMetadata(args: GetHybridIdentityMetadataArgs, opts?: pulumi.InvokeOptions): Promise<GetHybridIdentityMetadataResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:scvmm/v20230401preview:getHybridIdentityMetadata", {
        "metadataName": args.metadataName,
        "resourceGroupName": args.resourceGroupName,
        "virtualMachineName": args.virtualMachineName,
    }, opts);
}

export interface GetHybridIdentityMetadataArgs {
    /**
     * Name of the HybridIdentityMetadata.
     */
    metadataName: string;
    /**
     * The name of the resource group.
     */
    resourceGroupName: string;
    /**
     * Name of the vm.
     */
    virtualMachineName: string;
}

/**
 * Defines the HybridIdentityMetadata.
 */
export interface GetHybridIdentityMetadataResult {
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The identity of the resource.
     */
    readonly identity: types.outputs.scvmm.v20230401preview.IdentityResponse;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Gets or sets the provisioning state.
     */
    readonly provisioningState: string;
    /**
     * Gets or sets the Public Key.
     */
    readonly publicKey?: string;
    /**
     * Gets or sets the Vm Id.
     */
    readonly resourceUid?: string;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.scvmm.v20230401preview.SystemDataResponse;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Implements HybridIdentityMetadata GET method.
 */
export function getHybridIdentityMetadataOutput(args: GetHybridIdentityMetadataOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetHybridIdentityMetadataResult> {
    return pulumi.output(args).apply((a: any) => getHybridIdentityMetadata(a, opts))
}

export interface GetHybridIdentityMetadataOutputArgs {
    /**
     * Name of the HybridIdentityMetadata.
     */
    metadataName: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Name of the vm.
     */
    virtualMachineName: pulumi.Input<string>;
}
