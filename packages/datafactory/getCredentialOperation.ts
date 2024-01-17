import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets a credential.
 * Azure REST API version: 2018-06-01.
 */
export function getCredentialOperation(args: GetCredentialOperationArgs, opts?: pulumi.InvokeOptions): Promise<GetCredentialOperationResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:datafactory:getCredentialOperation", {
        "credentialName": args.credentialName,
        "factoryName": args.factoryName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetCredentialOperationArgs {
    /**
     * Credential name
     */
    credentialName: string;
    /**
     * The factory name.
     */
    factoryName: string;
    /**
     * The resource group name.
     */
    resourceGroupName: string;
}

/**
 * Credential resource type.
 */
export interface GetCredentialOperationResult {
    /**
     * Etag identifies change in the resource.
     */
    readonly etag: string;
    /**
     * The resource identifier.
     */
    readonly id: string;
    /**
     * The resource name.
     */
    readonly name: string;
    /**
     * Managed Identity Credential properties.
     */
    readonly properties: types.outputs.ManagedIdentityCredentialResponse;
    /**
     * The resource type.
     */
    readonly type: string;
}
/**
 * Gets a credential.
 * Azure REST API version: 2018-06-01.
 */
export function getCredentialOperationOutput(args: GetCredentialOperationOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetCredentialOperationResult> {
    return pulumi.output(args).apply((a: any) => getCredentialOperation(a, opts))
}

export interface GetCredentialOperationOutputArgs {
    /**
     * Credential name
     */
    credentialName: pulumi.Input<string>;
    /**
     * The factory name.
     */
    factoryName: pulumi.Input<string>;
    /**
     * The resource group name.
     */
    resourceGroupName: pulumi.Input<string>;
}