import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get an VolumeGroups.
 *
 * Uses Azure REST API version 2024-05-01.
 *
 * Other available API versions: 2021-11-20-preview, 2022-12-01-preview, 2023-01-01, 2024-06-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native elasticsan [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getVolumeGroup(args: GetVolumeGroupArgs, opts?: pulumi.InvokeOptions): Promise<GetVolumeGroupResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:elasticsan:getVolumeGroup", {
        "elasticSanName": args.elasticSanName,
        "resourceGroupName": args.resourceGroupName,
        "volumeGroupName": args.volumeGroupName,
    }, opts);
}

export interface GetVolumeGroupArgs {
    /**
     * The name of the ElasticSan.
     */
    elasticSanName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * The name of the VolumeGroup.
     */
    volumeGroupName: string;
}

/**
 * Response for Volume Group request.
 */
export interface GetVolumeGroupResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * Type of encryption
     */
    readonly encryption?: string;
    /**
     * Encryption Properties describing Key Vault and Identity information
     */
    readonly encryptionProperties?: types.outputs.EncryptionPropertiesResponse;
    /**
     * A boolean indicating whether or not Data Integrity Check is enabled
     */
    readonly enforceDataIntegrityCheckForIscsi?: boolean;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The identity of the resource.
     */
    readonly identity?: types.outputs.IdentityResponse;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * A collection of rules governing the accessibility from specific network locations.
     */
    readonly networkAcls?: types.outputs.NetworkRuleSetResponse;
    /**
     * The list of Private Endpoint Connections.
     */
    readonly privateEndpointConnections: types.outputs.PrivateEndpointConnectionResponse[];
    /**
     * Type of storage target
     */
    readonly protocolType?: string;
    /**
     * State of the operation on the resource.
     */
    readonly provisioningState: string;
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
 * Get an VolumeGroups.
 *
 * Uses Azure REST API version 2024-05-01.
 *
 * Other available API versions: 2021-11-20-preview, 2022-12-01-preview, 2023-01-01, 2024-06-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native elasticsan [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getVolumeGroupOutput(args: GetVolumeGroupOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetVolumeGroupResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:elasticsan:getVolumeGroup", {
        "elasticSanName": args.elasticSanName,
        "resourceGroupName": args.resourceGroupName,
        "volumeGroupName": args.volumeGroupName,
    }, opts);
}

export interface GetVolumeGroupOutputArgs {
    /**
     * The name of the ElasticSan.
     */
    elasticSanName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the VolumeGroup.
     */
    volumeGroupName: pulumi.Input<string>;
}