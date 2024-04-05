import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * List credential for publishing artifacts defined in artifact manifest.
 */
export function listArtifactManifestCredential(args: ListArtifactManifestCredentialArgs, opts?: pulumi.InvokeOptions): Promise<ListArtifactManifestCredentialResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:hybridnetwork/v20230901:listArtifactManifestCredential", {
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
 */
export function listArtifactManifestCredentialOutput(args: ListArtifactManifestCredentialOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<ListArtifactManifestCredentialResult> {
    return pulumi.output(args).apply((a: any) => listArtifactManifestCredential(a, opts))
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