import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Lists policy resources that reference the policy fragment.
 *
 * Uses Azure REST API version 2022-09-01-preview.
 *
 * Other available API versions: 2023-03-01-preview, 2023-05-01-preview, 2023-09-01-preview, 2024-05-01, 2024-06-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native apimanagement [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function listWorkspacePolicyFragmentReferences(args: ListWorkspacePolicyFragmentReferencesArgs, opts?: pulumi.InvokeOptions): Promise<ListWorkspacePolicyFragmentReferencesResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:apimanagement:listWorkspacePolicyFragmentReferences", {
        "id": args.id,
        "resourceGroupName": args.resourceGroupName,
        "serviceName": args.serviceName,
        "skip": args.skip,
        "top": args.top,
        "workspaceId": args.workspaceId,
    }, opts);
}

export interface ListWorkspacePolicyFragmentReferencesArgs {
    /**
     * A resource identifier.
     */
    id: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * The name of the API Management service.
     */
    serviceName: string;
    /**
     * Number of records to skip.
     */
    skip?: number;
    /**
     * Number of records to return.
     */
    top?: number;
    /**
     * Workspace identifier. Must be unique in the current API Management service instance.
     */
    workspaceId: string;
}

/**
 * A collection of resources.
 */
export interface ListWorkspacePolicyFragmentReferencesResult {
    /**
     * Total record count number.
     */
    readonly count?: number;
    /**
     * Next page link if any.
     */
    readonly nextLink?: string;
    /**
     * A collection of resources.
     */
    readonly value?: types.outputs.ResourceCollectionResponseValue[];
}
/**
 * Lists policy resources that reference the policy fragment.
 *
 * Uses Azure REST API version 2022-09-01-preview.
 *
 * Other available API versions: 2023-03-01-preview, 2023-05-01-preview, 2023-09-01-preview, 2024-05-01, 2024-06-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native apimanagement [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function listWorkspacePolicyFragmentReferencesOutput(args: ListWorkspacePolicyFragmentReferencesOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<ListWorkspacePolicyFragmentReferencesResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:apimanagement:listWorkspacePolicyFragmentReferences", {
        "id": args.id,
        "resourceGroupName": args.resourceGroupName,
        "serviceName": args.serviceName,
        "skip": args.skip,
        "top": args.top,
        "workspaceId": args.workspaceId,
    }, opts);
}

export interface ListWorkspacePolicyFragmentReferencesOutputArgs {
    /**
     * A resource identifier.
     */
    id: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the API Management service.
     */
    serviceName: pulumi.Input<string>;
    /**
     * Number of records to skip.
     */
    skip?: pulumi.Input<number>;
    /**
     * Number of records to return.
     */
    top?: pulumi.Input<number>;
    /**
     * Workspace identifier. Must be unique in the current API Management service instance.
     */
    workspaceId: pulumi.Input<string>;
}