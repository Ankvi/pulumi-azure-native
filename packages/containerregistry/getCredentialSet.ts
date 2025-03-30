import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the properties of the specified credential set resource.
 *
 * Uses Azure REST API version 2023-01-01-preview.
 *
 * Other available API versions: 2023-06-01-preview, 2023-07-01, 2023-08-01-preview, 2023-11-01-preview, 2024-11-01-preview.
 */
export function getCredentialSet(args: GetCredentialSetArgs, opts?: pulumi.InvokeOptions): Promise<GetCredentialSetResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:containerregistry:getCredentialSet", {
        "credentialSetName": args.credentialSetName,
        "registryName": args.registryName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetCredentialSetArgs {
    /**
     * The name of the credential set.
     */
    credentialSetName: string;
    /**
     * The name of the container registry.
     */
    registryName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * An object that represents a credential set resource for a container registry.
 */
export interface GetCredentialSetResult {
    /**
     * List of authentication credentials stored for an upstream.
     * Usually consists of a primary and an optional secondary credential.
     */
    readonly authCredentials?: types.outputs.AuthCredentialResponse[];
    /**
     * The creation date of credential store resource.
     */
    readonly creationDate: string;
    /**
     * The resource ID.
     */
    readonly id: string;
    /**
     * Identities associated with the resource. This is used to access the KeyVault secrets.
     */
    readonly identity?: types.outputs.IdentityPropertiesResponse;
    /**
     * The credentials are stored for this upstream or login server.
     */
    readonly loginServer?: string;
    /**
     * The name of the resource.
     */
    readonly name: string;
    /**
     * Provisioning state of the resource.
     */
    readonly provisioningState: string;
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
 * Gets the properties of the specified credential set resource.
 *
 * Uses Azure REST API version 2023-01-01-preview.
 *
 * Other available API versions: 2023-06-01-preview, 2023-07-01, 2023-08-01-preview, 2023-11-01-preview, 2024-11-01-preview.
 */
export function getCredentialSetOutput(args: GetCredentialSetOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetCredentialSetResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:containerregistry:getCredentialSet", {
        "credentialSetName": args.credentialSetName,
        "registryName": args.registryName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetCredentialSetOutputArgs {
    /**
     * The name of the credential set.
     */
    credentialSetName: pulumi.Input<string>;
    /**
     * The name of the container registry.
     */
    registryName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}