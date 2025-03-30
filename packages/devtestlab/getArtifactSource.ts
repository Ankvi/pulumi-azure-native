import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Get artifact source.
 *
 * Uses Azure REST API version 2018-09-15.
 */
export function getArtifactSource(args: GetArtifactSourceArgs, opts?: pulumi.InvokeOptions): Promise<GetArtifactSourceResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:devtestlab:getArtifactSource", {
        "expand": args.expand,
        "labName": args.labName,
        "name": args.name,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetArtifactSourceArgs {
    /**
     * Specify the $expand query. Example: 'properties($select=displayName)'
     */
    expand?: string;
    /**
     * The name of the lab.
     */
    labName: string;
    /**
     * The name of the artifact source.
     */
    name: string;
    /**
     * The name of the resource group.
     */
    resourceGroupName: string;
}

/**
 * Properties of an artifact source.
 */
export interface GetArtifactSourceResult {
    /**
     * The folder containing Azure Resource Manager templates.
     */
    readonly armTemplateFolderPath?: string;
    /**
     * The artifact source's branch reference.
     */
    readonly branchRef?: string;
    /**
     * The artifact source's creation date.
     */
    readonly createdDate: string;
    /**
     * The artifact source's display name.
     */
    readonly displayName?: string;
    /**
     * The folder containing artifacts.
     */
    readonly folderPath?: string;
    /**
     * The identifier of the resource.
     */
    readonly id: string;
    /**
     * The location of the resource.
     */
    readonly location?: string;
    /**
     * The name of the resource.
     */
    readonly name: string;
    /**
     * The provisioning status of the resource.
     */
    readonly provisioningState: string;
    /**
     * The security token to authenticate to the artifact source.
     */
    readonly securityToken?: string;
    /**
     * The artifact source's type.
     */
    readonly sourceType?: string;
    /**
     * Indicates if the artifact source is enabled (values: Enabled, Disabled).
     */
    readonly status?: string;
    /**
     * The tags of the resource.
     */
    readonly tags?: {[key: string]: string};
    /**
     * The type of the resource.
     */
    readonly type: string;
    /**
     * The unique immutable identifier of a resource (Guid).
     */
    readonly uniqueIdentifier: string;
    /**
     * The artifact source's URI.
     */
    readonly uri?: string;
}
/**
 * Get artifact source.
 *
 * Uses Azure REST API version 2018-09-15.
 */
export function getArtifactSourceOutput(args: GetArtifactSourceOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetArtifactSourceResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:devtestlab:getArtifactSource", {
        "expand": args.expand,
        "labName": args.labName,
        "name": args.name,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetArtifactSourceOutputArgs {
    /**
     * Specify the $expand query. Example: 'properties($select=displayName)'
     */
    expand?: pulumi.Input<string>;
    /**
     * The name of the lab.
     */
    labName: pulumi.Input<string>;
    /**
     * The name of the artifact source.
     */
    name: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
}