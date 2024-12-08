import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * List network fabric controllers to artifact stores
 * Azure REST API version: 2024-04-15.
 */
export function listArtifactStoreNetworkFabricControllerPrivateEndPoints(args: ListArtifactStoreNetworkFabricControllerPrivateEndPointsArgs, opts?: pulumi.InvokeOptions): Promise<ListArtifactStoreNetworkFabricControllerPrivateEndPointsResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:hybridnetwork:listArtifactStoreNetworkFabricControllerPrivateEndPoints", {
        "artifactStoreName": args.artifactStoreName,
        "publisherName": args.publisherName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface ListArtifactStoreNetworkFabricControllerPrivateEndPointsArgs {
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
export interface ListArtifactStoreNetworkFabricControllerPrivateEndPointsResult {
    /**
     * The URI to get the next set of results.
     */
    readonly nextLink: string;
    /**
     * A list of network fabric controllers.
     */
    readonly value?: types.outputs.ArtifactStoreNetworkFabricControllerEndPointsResponse[];
}
/**
 * List network fabric controllers to artifact stores
 * Azure REST API version: 2024-04-15.
 */
export function listArtifactStoreNetworkFabricControllerPrivateEndPointsOutput(args: ListArtifactStoreNetworkFabricControllerPrivateEndPointsOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<ListArtifactStoreNetworkFabricControllerPrivateEndPointsResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:hybridnetwork:listArtifactStoreNetworkFabricControllerPrivateEndPoints", {
        "artifactStoreName": args.artifactStoreName,
        "publisherName": args.publisherName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface ListArtifactStoreNetworkFabricControllerPrivateEndPointsOutputArgs {
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