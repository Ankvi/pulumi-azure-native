import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Lists the user credentials of a Fleet.
 *
 * Uses Azure REST API version 2024-05-02-preview.
 *
 * Other available API versions: 2022-06-02-preview, 2022-07-02-preview, 2022-09-02-preview, 2023-03-15-preview, 2023-06-15-preview, 2023-08-15-preview, 2023-10-15, 2024-02-02-preview, 2024-04-01, 2025-03-01, 2025-04-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native containerservice [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function listFleetCredentials(args: ListFleetCredentialsArgs, opts?: pulumi.InvokeOptions): Promise<ListFleetCredentialsResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:containerservice:listFleetCredentials", {
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
 *
 * Uses Azure REST API version 2024-05-02-preview.
 *
 * Other available API versions: 2022-06-02-preview, 2022-07-02-preview, 2022-09-02-preview, 2023-03-15-preview, 2023-06-15-preview, 2023-08-15-preview, 2023-10-15, 2024-02-02-preview, 2024-04-01, 2025-03-01, 2025-04-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native containerservice [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function listFleetCredentialsOutput(args: ListFleetCredentialsOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<ListFleetCredentialsResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:containerservice:listFleetCredentials", {
        "fleetName": args.fleetName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
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