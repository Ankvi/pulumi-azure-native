import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Lists the admin credentials of the provisioned cluster (can only be used within private network)
 */
export function listprovisionedClusterInstanceAdminKubeconfig(args: ListprovisionedClusterInstanceAdminKubeconfigArgs, opts?: pulumi.InvokeOptions): Promise<ListprovisionedClusterInstanceAdminKubeconfigResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:hybridcontainerservice/v20240101:listprovisionedClusterInstanceAdminKubeconfig", {
        "connectedClusterResourceUri": args.connectedClusterResourceUri,
    }, opts);
}

export interface ListprovisionedClusterInstanceAdminKubeconfigArgs {
    /**
     * The fully qualified Azure Resource Manager identifier of the connected cluster resource.
     */
    connectedClusterResourceUri: string;
}

/**
 * The list kubeconfig result response.
 */
export interface ListprovisionedClusterInstanceAdminKubeconfigResult {
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
 */
export function listprovisionedClusterInstanceAdminKubeconfigOutput(args: ListprovisionedClusterInstanceAdminKubeconfigOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<ListprovisionedClusterInstanceAdminKubeconfigResult> {
    return pulumi.output(args).apply((a: any) => listprovisionedClusterInstanceAdminKubeconfig(a, opts))
}

export interface ListprovisionedClusterInstanceAdminKubeconfigOutputArgs {
    /**
     * The fully qualified Azure Resource Manager identifier of the connected cluster resource.
     */
    connectedClusterResourceUri: pulumi.Input<string>;
}