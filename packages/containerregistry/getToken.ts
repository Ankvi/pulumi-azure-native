import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the properties of the specified token.
 *
 * Uses Azure REST API version 2022-12-01.
 *
 * Other available API versions: 2023-01-01-preview, 2023-06-01-preview, 2023-07-01, 2023-08-01-preview, 2023-11-01-preview, 2024-11-01-preview.
 */
export function getToken(args: GetTokenArgs, opts?: pulumi.InvokeOptions): Promise<GetTokenResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:containerregistry:getToken", {
        "registryName": args.registryName,
        "resourceGroupName": args.resourceGroupName,
        "tokenName": args.tokenName,
    }, opts);
}

export interface GetTokenArgs {
    /**
     * The name of the container registry.
     */
    registryName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * The name of the token.
     */
    tokenName: string;
}

/**
 * An object that represents a token for a container registry.
 */
export interface GetTokenResult {
    /**
     * The creation date of scope map.
     */
    readonly creationDate: string;
    /**
     * The credentials that can be used for authenticating the token.
     */
    readonly credentials?: types.outputs.TokenCredentialsPropertiesResponse;
    /**
     * The resource ID.
     */
    readonly id: string;
    /**
     * The name of the resource.
     */
    readonly name: string;
    /**
     * Provisioning state of the resource.
     */
    readonly provisioningState: string;
    /**
     * The resource ID of the scope map to which the token will be associated with.
     */
    readonly scopeMapId?: string;
    /**
     * The status of the token example enabled or disabled.
     */
    readonly status?: string;
    /**
     * Metadata pertaining to creation and last modification of the resource.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * The type of the resource.
     */
    readonly type: string;
}
/**
 * Gets the properties of the specified token.
 *
 * Uses Azure REST API version 2022-12-01.
 *
 * Other available API versions: 2023-01-01-preview, 2023-06-01-preview, 2023-07-01, 2023-08-01-preview, 2023-11-01-preview, 2024-11-01-preview.
 */
export function getTokenOutput(args: GetTokenOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetTokenResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:containerregistry:getToken", {
        "registryName": args.registryName,
        "resourceGroupName": args.resourceGroupName,
        "tokenName": args.tokenName,
    }, opts);
}

export interface GetTokenOutputArgs {
    /**
     * The name of the container registry.
     */
    registryName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the token.
     */
    tokenName: pulumi.Input<string>;
}