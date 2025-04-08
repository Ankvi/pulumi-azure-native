import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Returns the list of currently active sessions on the Bastion.
 *
 * Uses Azure REST API version 2024-05-01.
 *
 * Other available API versions: 2019-09-01, 2019-11-01, 2019-12-01, 2020-03-01, 2020-04-01, 2020-05-01, 2020-06-01, 2020-07-01, 2020-08-01, 2020-11-01, 2021-02-01, 2021-03-01, 2021-05-01, 2021-08-01, 2022-01-01, 2022-05-01, 2022-07-01, 2022-09-01, 2022-11-01, 2023-02-01, 2023-04-01, 2023-05-01, 2023-06-01, 2023-09-01, 2023-11-01, 2024-01-01, 2024-03-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native network [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getActiveSessions(args: GetActiveSessionsArgs, opts?: pulumi.InvokeOptions): Promise<GetActiveSessionsResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:network:getActiveSessions", {
        "bastionHostName": args.bastionHostName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetActiveSessionsArgs {
    /**
     * The name of the Bastion Host.
     */
    bastionHostName: string;
    /**
     * The name of the resource group.
     */
    resourceGroupName: string;
}

/**
 * Response for GetActiveSessions.
 */
export interface GetActiveSessionsResult {
    /**
     * The URL to get the next set of results.
     */
    readonly nextLink?: string;
    /**
     * List of active sessions on the bastion.
     */
    readonly value?: types.outputs.BastionActiveSessionResponse[];
}
/**
 * Returns the list of currently active sessions on the Bastion.
 *
 * Uses Azure REST API version 2024-05-01.
 *
 * Other available API versions: 2019-09-01, 2019-11-01, 2019-12-01, 2020-03-01, 2020-04-01, 2020-05-01, 2020-06-01, 2020-07-01, 2020-08-01, 2020-11-01, 2021-02-01, 2021-03-01, 2021-05-01, 2021-08-01, 2022-01-01, 2022-05-01, 2022-07-01, 2022-09-01, 2022-11-01, 2023-02-01, 2023-04-01, 2023-05-01, 2023-06-01, 2023-09-01, 2023-11-01, 2024-01-01, 2024-03-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native network [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getActiveSessionsOutput(args: GetActiveSessionsOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetActiveSessionsResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:network:getActiveSessions", {
        "bastionHostName": args.bastionHostName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetActiveSessionsOutputArgs {
    /**
     * The name of the Bastion Host.
     */
    bastionHostName: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
}