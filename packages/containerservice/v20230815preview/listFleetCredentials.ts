import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Lists the user credentials of a Fleet.
 */
export function listFleetCredentials(args: ListFleetCredentialsArgs, opts?: pulumi.InvokeOptions): Promise<ListFleetCredentialsResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:containerservice/v20230815preview:listFleetCredentials", {
        "fleetName": args.fleetName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface ListFleetCredentialsArgs {
    /**
     * The name of the Fleet resource.
     */
    fleetName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * The Credential results response.
 */
export interface ListFleetCredentialsResult {
    /**
     * Array of base64-encoded Kubernetes configuration files.
     */
    readonly kubeconfigs: types.outputs.FleetCredentialResultResponse[];
}
/**
 * Lists the user credentials of a Fleet.
 */
export function listFleetCredentialsOutput(args: ListFleetCredentialsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<ListFleetCredentialsResult> {
    return pulumi.output(args).apply((a: any) => listFleetCredentials(a, opts))
}

export interface ListFleetCredentialsOutputArgs {
    /**
     * The name of the Fleet resource.
     */
    fleetName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}