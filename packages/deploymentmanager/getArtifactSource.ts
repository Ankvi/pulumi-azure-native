import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * The resource that defines the source location where the artifacts are located.
 * Azure REST API version: 2019-11-01-preview.
 */
export function getArtifactSource(args: GetArtifactSourceArgs, opts?: pulumi.InvokeOptions): Promise<GetArtifactSourceResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:deploymentmanager:getArtifactSource", {
        "artifactSourceName": args.artifactSourceName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetArtifactSourceArgs {
    /**
     * The name of the artifact source.
     */
    artifactSourceName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * The resource that defines the source location where the artifacts are located.
 */
export interface GetArtifactSourceResult {
    /**
     * The path from the location that the 'authentication' property [say, a SAS URI to the blob container] refers to, to the location of the artifacts. This can be used to differentiate different versions of the artifacts. Or, different types of artifacts like binaries or templates. The location referenced by the authentication property concatenated with this optional artifactRoot path forms the artifact source location where the artifacts are expected to be found.
     */
    readonly artifactRoot?: string;
    /**
     * The authentication method to use to access the artifact source.
     */
    readonly authentication: types.outputs.SasAuthenticationResponse;
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
     * The type of artifact source used.
     */
    readonly sourceType: string;
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
 * The resource that defines the source location where the artifacts are located.
 * Azure REST API version: 2019-11-01-preview.
 */
export function getArtifactSourceOutput(args: GetArtifactSourceOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetArtifactSourceResult> {
    return pulumi.output(args).apply((a: any) => getArtifactSource(a, opts))
}

export interface GetArtifactSourceOutputArgs {
    /**
     * The name of the artifact source.
     */
    artifactSourceName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}
