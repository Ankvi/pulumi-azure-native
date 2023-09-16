import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * The list credential result response.
 */
export function listFleetCredentials(args: ListFleetCredentialsArgs, opts?: pulumi.InvokeOptions): Promise<ListFleetCredentialsResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:containerservice/v20220702preview:listFleetCredentials", {
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
 * The list credential result response.
 */
export interface ListFleetCredentialsResult {
    /**
     * Base64-encoded Kubernetes configuration file.
     */
    readonly kubeconfigs: types.outputs.containerservice.v20220702preview.FleetCredentialResultResponse[];
}
/**
 * The list credential result response.
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
