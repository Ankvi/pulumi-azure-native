import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Lists the admin credentials of the provisioned cluster (can only be used within private network)
 *
 * Uses Azure REST API version 2024-01-01.
 *
 * Other available API versions: 2023-11-15-preview, 2025-02-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native hybridcontainerservice [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function listProvisionedClusterInstanceAdminKubeconfig(args: ListProvisionedClusterInstanceAdminKubeconfigArgs, opts?: pulumi.InvokeOptions): Promise<ListProvisionedClusterInstanceAdminKubeconfigResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:hybridcontainerservice:listProvisionedClusterInstanceAdminKubeconfig", {
        "connectedClusterResourceUri": args.connectedClusterResourceUri,
    }, opts);
}

export interface ListProvisionedClusterInstanceAdminKubeconfigArgs {
    /**
     * The fully qualified Azure Resource Manager identifier of the connected cluster resource.
     */
    connectedClusterResourceUri: string;
}

/**
 * The list kubeconfig result response.
 */
export interface ListProvisionedClusterInstanceAdminKubeconfigResult {
    readonly error?: types.outputs.ListCredentialResponseResponseError;
    /**
     * Operation Id
     */
    readonly id: string;
    /**
     * Operation Name
     */
    readonly name: string;
    readonly properties: types.outputs.ListCredentialResponseResponseProperties;
    /**
     * ARM Resource Id of the provisioned cluster instance
     */
    readonly resourceId: string;
    /**
     * Provisioning state of the resource
     */
    readonly status: string;
}
/**
 * Lists the admin credentials of the provisioned cluster (can only be used within private network)
 *
 * Uses Azure REST API version 2024-01-01.
 *
 * Other available API versions: 2023-11-15-preview, 2025-02-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native hybridcontainerservice [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function listProvisionedClusterInstanceAdminKubeconfigOutput(args: ListProvisionedClusterInstanceAdminKubeconfigOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<ListProvisionedClusterInstanceAdminKubeconfigResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:hybridcontainerservice:listProvisionedClusterInstanceAdminKubeconfig", {
        "connectedClusterResourceUri": args.connectedClusterResourceUri,
    }, opts);
}

export interface ListProvisionedClusterInstanceAdminKubeconfigOutputArgs {
    /**
     * The fully qualified Azure Resource Manager identifier of the connected cluster resource.
     */
    connectedClusterResourceUri: pulumi.Input<string>;
}