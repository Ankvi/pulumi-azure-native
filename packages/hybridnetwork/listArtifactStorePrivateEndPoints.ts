import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * List manual private endpoints on artifact stores
 *
 * Uses Azure REST API version 2024-04-15.
 */
export function listArtifactStorePrivateEndPoints(args: ListArtifactStorePrivateEndPointsArgs, opts?: pulumi.InvokeOptions): Promise<ListArtifactStorePrivateEndPointsResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:hybridnetwork:listArtifactStorePrivateEndPoints", {
        "artifactStoreName": args.artifactStoreName,
        "publisherName": args.publisherName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface ListArtifactStorePrivateEndPointsArgs {
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
 * List of manual private endpoints.
 */
export interface ListArtifactStorePrivateEndPointsResult {
    /**
     * The URI to get the next set of results.
     */
    readonly nextLink: string;
    /**
     * A list of private endpoints.
     */
    readonly value?: types.outputs.ArtifactStorePrivateEndPointsFormatResponse[];
}
/**
 * List manual private endpoints on artifact stores
 *
 * Uses Azure REST API version 2024-04-15.
 */
export function listArtifactStorePrivateEndPointsOutput(args: ListArtifactStorePrivateEndPointsOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<ListArtifactStorePrivateEndPointsResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:hybridnetwork:listArtifactStorePrivateEndPoints", {
        "artifactStoreName": args.artifactStoreName,
        "publisherName": args.publisherName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface ListArtifactStorePrivateEndPointsOutputArgs {
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