import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get object metadata from an integration runtime
 *
 * Uses Azure REST API version 2021-06-01.
 *
 * Other available API versions: 2021-06-01-preview.
 */
export function getIntegrationRuntimeObjectMetadatum(args: GetIntegrationRuntimeObjectMetadatumArgs, opts?: pulumi.InvokeOptions): Promise<GetIntegrationRuntimeObjectMetadatumResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:synapse:getIntegrationRuntimeObjectMetadatum", {
        "integrationRuntimeName": args.integrationRuntimeName,
        "metadataPath": args.metadataPath,
        "resourceGroupName": args.resourceGroupName,
        "workspaceName": args.workspaceName,
    }, opts);
}

export interface GetIntegrationRuntimeObjectMetadatumArgs {
    /**
     * Integration runtime name
     */
    integrationRuntimeName: string;
    /**
     * Metadata path.
     */
    metadataPath?: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * The name of the workspace.
     */
    workspaceName: string;
}

/**
 * A list of SSIS object metadata.
 */
export interface GetIntegrationRuntimeObjectMetadatumResult {
    /**
     * The link to the next page of results, if any remaining results exist.
     */
    readonly nextLink?: string;
    /**
     * List of SSIS object metadata.
     */
    readonly value?: (types.outputs.SsisEnvironmentResponse | types.outputs.SsisFolderResponse | types.outputs.SsisPackageResponse | types.outputs.SsisProjectResponse)[];
}
/**
 * Get object metadata from an integration runtime
 *
 * Uses Azure REST API version 2021-06-01.
 *
 * Other available API versions: 2021-06-01-preview.
 */
export function getIntegrationRuntimeObjectMetadatumOutput(args: GetIntegrationRuntimeObjectMetadatumOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetIntegrationRuntimeObjectMetadatumResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:synapse:getIntegrationRuntimeObjectMetadatum", {
        "integrationRuntimeName": args.integrationRuntimeName,
        "metadataPath": args.metadataPath,
        "resourceGroupName": args.resourceGroupName,
        "workspaceName": args.workspaceName,
    }, opts);
}

export interface GetIntegrationRuntimeObjectMetadatumOutputArgs {
    /**
     * Integration runtime name
     */
    integrationRuntimeName: pulumi.Input<string>;
    /**
     * Metadata path.
     */
    metadataPath?: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the workspace.
     */
    workspaceName: pulumi.Input<string>;
}