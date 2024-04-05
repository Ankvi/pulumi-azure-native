import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Lists the decrypted value of the specified named value of the secret resource. This is a privileged operation.
 */
export function listSecretValue(args: ListSecretValueArgs, opts?: pulumi.InvokeOptions): Promise<ListSecretValueResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:servicefabricmesh/v20180901preview:listSecretValue", {
        "resourceGroupName": args.resourceGroupName,
        "secretResourceName": args.secretResourceName,
        "secretValueResourceName": args.secretValueResourceName,
    }, opts);
}

export interface ListSecretValueArgs {
    /**
     * Azure resource group name
     */
    resourceGroupName: string;
    /**
     * The name of the secret resource.
     */
    secretResourceName: string;
    /**
     * The name of the secret resource value which is typically the version identifier for the value.
     */
    secretValueResourceName: string;
}

/**
 * This type represents the unencrypted value of the secret.
 */
export interface ListSecretValueResult {
    /**
     * The actual value of the secret.
     */
    readonly value?: string;
}
/**
 * Lists the decrypted value of the specified named value of the secret resource. This is a privileged operation.
 */
export function listSecretValueOutput(args: ListSecretValueOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<ListSecretValueResult> {
    return pulumi.output(args).apply((a: any) => listSecretValue(a, opts))
}

export interface ListSecretValueOutputArgs {
    /**
     * Azure resource group name
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the secret resource.
     */
    secretResourceName: pulumi.Input<string>;
    /**
     * The name of the secret resource value which is typically the version identifier for the value.
     */
    secretValueResourceName: pulumi.Input<string>;
}