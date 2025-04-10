import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Service Token
 *
 * Uses Azure REST API version 2023-04-01.
 *
 * Other available API versions: 2023-04-01-preview, 2023-06-01-preview, 2023-08-01-preview, 2023-10-01, 2024-01-01-preview, 2024-04-01, 2024-04-01-preview, 2024-07-01-preview, 2024-10-01, 2024-10-01-preview, 2025-01-01-preview.
 */
export function getOnlineEndpointToken(args: GetOnlineEndpointTokenArgs, opts?: pulumi.InvokeOptions): Promise<GetOnlineEndpointTokenResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:machinelearningservices:getOnlineEndpointToken", {
        "endpointName": args.endpointName,
        "resourceGroupName": args.resourceGroupName,
        "workspaceName": args.workspaceName,
    }, opts);
}

export interface GetOnlineEndpointTokenArgs {
    /**
     * Online Endpoint name.
     */
    endpointName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * Name of Azure Machine Learning workspace.
     */
    workspaceName: string;
}

/**
 * Service Token
 */
export interface GetOnlineEndpointTokenResult {
    /**
     * Access token for endpoint authentication.
     */
    readonly accessToken?: string;
    /**
     * Access token expiry time (UTC).
     */
    readonly expiryTimeUtc?: number;
    /**
     * Refresh access token after time (UTC).
     */
    readonly refreshAfterTimeUtc?: number;
    /**
     * Access token type.
     */
    readonly tokenType?: string;
}
/**
 * Service Token
 *
 * Uses Azure REST API version 2023-04-01.
 *
 * Other available API versions: 2023-04-01-preview, 2023-06-01-preview, 2023-08-01-preview, 2023-10-01, 2024-01-01-preview, 2024-04-01, 2024-04-01-preview, 2024-07-01-preview, 2024-10-01, 2024-10-01-preview, 2025-01-01-preview.
 */
export function getOnlineEndpointTokenOutput(args: GetOnlineEndpointTokenOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetOnlineEndpointTokenResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:machinelearningservices:getOnlineEndpointToken", {
        "endpointName": args.endpointName,
        "resourceGroupName": args.resourceGroupName,
        "workspaceName": args.workspaceName,
    }, opts);
}

export interface GetOnlineEndpointTokenOutputArgs {
    /**
     * Online Endpoint name.
     */
    endpointName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Name of Azure Machine Learning workspace.
     */
    workspaceName: pulumi.Input<string>;
}