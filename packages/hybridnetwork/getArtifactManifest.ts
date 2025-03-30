import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets information about a artifact manifest resource.
 *
 * Uses Azure REST API version 2023-09-01.
 *
 * Other available API versions: 2024-04-15.
 */
export function getArtifactManifest(args: GetArtifactManifestArgs, opts?: pulumi.InvokeOptions): Promise<GetArtifactManifestResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:hybridnetwork:getArtifactManifest", {
        "artifactManifestName": args.artifactManifestName,
        "artifactStoreName": args.artifactStoreName,
        "publisherName": args.publisherName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetArtifactManifestArgs {
    /**
     * The name of the artifact manifest.
     */
    artifactManifestName: string;
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
 * Artifact manifest properties.
 */
export interface GetArtifactManifestResult {
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
     * Artifact manifest properties.
     */
    readonly properties: types.outputs.ArtifactManifestPropertiesFormatResponse;
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
 * Gets information about a artifact manifest resource.
 *
 * Uses Azure REST API version 2023-09-01.
 *
 * Other available API versions: 2024-04-15.
 */
export function getArtifactManifestOutput(args: GetArtifactManifestOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetArtifactManifestResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:hybridnetwork:getArtifactManifest", {
        "artifactManifestName": args.artifactManifestName,
        "artifactStoreName": args.artifactStoreName,
        "publisherName": args.publisherName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetArtifactManifestOutputArgs {
    /**
     * The name of the artifact manifest.
     */
    artifactManifestName: pulumi.Input<string>;
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