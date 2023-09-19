import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the information about the secret resource with the given name. The information include the description and other properties of the secret.
 */
export function getSecret(args: GetSecretArgs, opts?: pulumi.InvokeOptions): Promise<GetSecretResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:servicefabricmesh/v20180901preview:getSecret", {
        "resourceGroupName": args.resourceGroupName,
        "secretResourceName": args.secretResourceName,
    }, opts);
}

export interface GetSecretArgs {
    /**
     * Azure resource group name
     */
    resourceGroupName: string;
    /**
     * The name of the secret resource.
     */
    secretResourceName: string;
}

/**
 * This type describes a secret resource.
 */
export interface GetSecretResult {
    /**
     * Fully qualified identifier for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The geo-location where the resource lives
     */
    readonly location: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Describes the properties of a secret resource.
     */
    readonly properties: types.outputs.SecretResourcePropertiesResponse;
    /**
     * Resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * The type of the resource. Ex- Microsoft.Compute/virtualMachines or Microsoft.Storage/storageAccounts.
     */
    readonly type: string;
}
/**
 * Gets the information about the secret resource with the given name. The information include the description and other properties of the secret.
 */
export function getSecretOutput(args: GetSecretOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetSecretResult> {
    return pulumi.output(args).apply((a: any) => getSecret(a, opts))
}

export interface GetSecretOutputArgs {
    /**
     * Azure resource group name
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the secret resource.
     */
    secretResourceName: pulumi.Input<string>;
}
