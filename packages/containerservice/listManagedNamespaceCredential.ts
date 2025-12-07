import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * The list credential result response.
 *
 * Uses Azure REST API version 2025-04-02-preview.
 *
 * Other available API versions: 2025-03-02-preview, 2025-05-02-preview, 2025-06-02-preview, 2025-07-02-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native containerservice [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function listManagedNamespaceCredential(args: ListManagedNamespaceCredentialArgs, opts?: pulumi.InvokeOptions): Promise<ListManagedNamespaceCredentialResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:containerservice:listManagedNamespaceCredential", {
        "managedNamespaceName": args.managedNamespaceName,
        "resourceGroupName": args.resourceGroupName,
        "resourceName": args.resourceName,
    }, opts);
}

export interface ListManagedNamespaceCredentialArgs {
    /**
     * The name of the managed namespace.
     */
    managedNamespaceName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * The name of the managed cluster resource.
     */
    resourceName: string;
}

/**
 * The list credential result response.
 */
export interface ListManagedNamespaceCredentialResult {
    /**
     * Base64-encoded Kubernetes configuration file.
     */
    readonly kubeconfigs: types.outputs.CredentialResultResponse[];
}
/**
 * The list credential result response.
 *
 * Uses Azure REST API version 2025-04-02-preview.
 *
 * Other available API versions: 2025-03-02-preview, 2025-05-02-preview, 2025-06-02-preview, 2025-07-02-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native containerservice [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function listManagedNamespaceCredentialOutput(args: ListManagedNamespaceCredentialOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<ListManagedNamespaceCredentialResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:containerservice:listManagedNamespaceCredential", {
        "managedNamespaceName": args.managedNamespaceName,
        "resourceGroupName": args.resourceGroupName,
        "resourceName": args.resourceName,
    }, opts);
}

export interface ListManagedNamespaceCredentialOutputArgs {
    /**
     * The name of the managed namespace.
     */
    managedNamespaceName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the managed cluster resource.
     */
    resourceName: pulumi.Input<string>;
}