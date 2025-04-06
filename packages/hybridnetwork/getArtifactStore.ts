import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets information about the specified artifact store.
 *
 * Uses Azure REST API version 2024-04-15.
 *
 * Other available API versions: 2023-09-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native hybridnetwork [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getArtifactStore(args: GetArtifactStoreArgs, opts?: pulumi.InvokeOptions): Promise<GetArtifactStoreResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:hybridnetwork:getArtifactStore", {
        "artifactStoreName": args.artifactStoreName,
        "publisherName": args.publisherName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetArtifactStoreArgs {
    /**
     * The name of the artifact store.
     */
    artifactStoreName: string;
    /**
     * The name of the publisher.
     */
    publisherName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * Artifact store properties.
 */
export interface GetArtifactStoreResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The geo-location where the resource lives
     */
    readonly location: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * ArtifactStores properties.
     */
    readonly properties: types.outputs.ArtifactStorePropertiesFormatResponse;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * Resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Gets information about the specified artifact store.
 *
 * Uses Azure REST API version 2024-04-15.
 *
 * Other available API versions: 2023-09-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native hybridnetwork [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getArtifactStoreOutput(args: GetArtifactStoreOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetArtifactStoreResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:hybridnetwork:getArtifactStore", {
        "artifactStoreName": args.artifactStoreName,
        "publisherName": args.publisherName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetArtifactStoreOutputArgs {
    /**
     * The name of the artifact store.
     */
    artifactStoreName: pulumi.Input<string>;
    /**
     * The name of the publisher.
     */
    publisherName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}