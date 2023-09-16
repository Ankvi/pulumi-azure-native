import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Gets a logical database's transparent data encryption.
 */
export function getTransparentDataEncryption(args: GetTransparentDataEncryptionArgs, opts?: pulumi.InvokeOptions): Promise<GetTransparentDataEncryptionResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:sql/v20211101:getTransparentDataEncryption", {
        "databaseName": args.databaseName,
        "resourceGroupName": args.resourceGroupName,
        "serverName": args.serverName,
        "tdeName": args.tdeName,
    }, opts);
}

export interface GetTransparentDataEncryptionArgs {
    /**
     * The name of the logical database for which the transparent data encryption is defined.
     */
    databaseName: string;
    /**
     * The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
     */
    resourceGroupName: string;
    /**
     * The name of the server.
     */
    serverName: string;
    /**
     * The name of the transparent data encryption configuration.
     */
    tdeName: string;
}

/**
 * A logical database transparent data encryption state.
 */
export interface GetTransparentDataEncryptionResult {
    /**
     * Resource ID.
     */
    readonly id: string;
    /**
     * Resource name.
     */
    readonly name: string;
    /**
     * Specifies the state of the transparent data encryption.
     */
    readonly state: string;
    /**
     * Resource type.
     */
    readonly type: string;
}
/**
 * Gets a logical database's transparent data encryption.
 */
export function getTransparentDataEncryptionOutput(args: GetTransparentDataEncryptionOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetTransparentDataEncryptionResult> {
    return pulumi.output(args).apply((a: any) => getTransparentDataEncryption(a, opts))
}

export interface GetTransparentDataEncryptionOutputArgs {
    /**
     * The name of the logical database for which the transparent data encryption is defined.
     */
    databaseName: pulumi.Input<string>;
    /**
     * The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the server.
     */
    serverName: pulumi.Input<string>;
    /**
     * The name of the transparent data encryption configuration.
     */
    tdeName: pulumi.Input<string>;
}
