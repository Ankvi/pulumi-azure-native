import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Retrieves information about an SSH public key.
 */
export function getSshPublicKey(args: GetSshPublicKeyArgs, opts?: pulumi.InvokeOptions): Promise<GetSshPublicKeyResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:compute/v20230701:getSshPublicKey", {
        "resourceGroupName": args.resourceGroupName,
        "sshPublicKeyName": args.sshPublicKeyName,
    }, opts);
}

export interface GetSshPublicKeyArgs {
    /**
     * The name of the resource group.
     */
    resourceGroupName: string;
    /**
     * The name of the SSH public key.
     */
    sshPublicKeyName: string;
}

/**
 * Specifies information about the SSH public key.
 */
export interface GetSshPublicKeyResult {
    /**
     * Resource Id
     */
    readonly id: string;
    /**
     * Resource location
     */
    readonly location: string;
    /**
     * Resource name
     */
    readonly name: string;
    /**
     * SSH public key used to authenticate to a virtual machine through ssh. If this property is not initially provided when the resource is created, the publicKey property will be populated when generateKeyPair is called. If the public key is provided upon resource creation, the provided public key needs to be at least 2048-bit and in ssh-rsa format.
     */
    readonly publicKey?: string;
    /**
     * Resource tags
     */
    readonly tags?: {[key: string]: string};
    /**
     * Resource type
     */
    readonly type: string;
}
/**
 * Retrieves information about an SSH public key.
 */
export function getSshPublicKeyOutput(args: GetSshPublicKeyOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetSshPublicKeyResult> {
    return pulumi.output(args).apply((a: any) => getSshPublicKey(a, opts))
}

export interface GetSshPublicKeyOutputArgs {
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the SSH public key.
     */
    sshPublicKeyName: pulumi.Input<string>;
}