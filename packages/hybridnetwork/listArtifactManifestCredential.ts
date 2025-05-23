import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * List credential for publishing artifacts defined in artifact manifest.
 *
 * Uses Azure REST API version 2024-04-15.
 *
 * Other available API versions: 2023-09-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native hybridnetwork [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function listArtifactManifestCredential(args: ListArtifactManifestCredentialArgs, opts?: pulumi.InvokeOptions): Promise<ListArtifactManifestCredentialResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:hybridnetwork:listArtifactManifestCredential", {
        "artifactManifestName": args.artifactManifestName,
        "artifactStoreName": args.artifactStoreName,
        "publisherName": args.publisherName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface ListArtifactManifestCredentialArgs {
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
 * The artifact manifest credential definition.
 */
export interface ListArtifactManifestCredentialResult {
    /**
     * The credential type.
     */
    readonly credentialType: string;
}
/**
 * List credential for publishing artifacts defined in artifact manifest.
 *
 * Uses Azure REST API version 2024-04-15.
 *
 * Other available API versions: 2023-09-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native hybridnetwork [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function listArtifactManifestCredentialOutput(args: ListArtifactManifestCredentialOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<ListArtifactManifestCredentialResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:hybridnetwork:listArtifactManifestCredential", {
        "artifactManifestName": args.artifactManifestName,
        "artifactStoreName": args.artifactStoreName,
        "publisherName": args.publisherName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface ListArtifactManifestCredentialOutputArgs {
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