import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * Returns the cluster customer credentials for the dedicated appliance.
 */
export function listApplianceKeys(args: ListApplianceKeysArgs, opts?: pulumi.InvokeOptions): Promise<ListApplianceKeysResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:resourceconnector/v20221027:listApplianceKeys", {
        "artifactType": args.artifactType,
        "resourceGroupName": args.resourceGroupName,
        "resourceName": args.resourceName,
    }, opts);
}

export interface ListApplianceKeysArgs {
    /**
     * This sets the type of artifact being returned, when empty no artifact endpoint is returned.
     */
    artifactType?: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * Appliances name.
     */
    resourceName: string;
}

/**
 * The List Cluster Keys Results appliance.
 */
export interface ListApplianceKeysResult {
    /**
     * Map of artifacts that contains a list of ArtifactProfile used to upload artifacts such as logs.
     */
    readonly artifactProfiles: {[key: string]: types.outputs.resourceconnector.v20221027.ArtifactProfileResponse};
    /**
     * The list of appliance kubeconfigs.
     */
    readonly kubeconfigs: types.outputs.resourceconnector.v20221027.ApplianceCredentialKubeconfigResponse[];
    /**
     * Map of Customer User Public, Private SSH Keys and Certificate when available.
     */
    readonly sshKeys: {[key: string]: types.outputs.resourceconnector.v20221027.SSHKeyResponse};
}
/**
 * Returns the cluster customer credentials for the dedicated appliance.
 */
export function listApplianceKeysOutput(args: ListApplianceKeysOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<ListApplianceKeysResult> {
    return pulumi.output(args).apply((a: any) => listApplianceKeys(a, opts))
}

export interface ListApplianceKeysOutputArgs {
    /**
     * This sets the type of artifact being returned, when empty no artifact endpoint is returned.
     */
    artifactType?: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Appliances name.
     */
    resourceName: pulumi.Input<string>;
}
