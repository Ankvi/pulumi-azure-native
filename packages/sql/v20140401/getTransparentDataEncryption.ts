import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Gets a database's transparent data encryption configuration.
 */
export function getTransparentDataEncryption(args: GetTransparentDataEncryptionArgs, opts?: pulumi.InvokeOptions): Promise<GetTransparentDataEncryptionResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:sql/v20140401:getTransparentDataEncryption", {
        "databaseName": args.databaseName,
        "resourceGroupName": args.resourceGroupName,
        "serverName": args.serverName,
        "transparentDataEncryptionName": args.transparentDataEncryptionName,
    }, opts);
}

export interface GetTransparentDataEncryptionArgs {
    /**
     * The name of the database for which the transparent data encryption applies.
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
    transparentDataEncryptionName: string;
}

/**
 * Represents a database transparent data encryption configuration.
 */
export interface GetTransparentDataEncryptionResult {
    /**
     * Resource ID.
     */
    readonly id: string;
    /**
     * Resource location.
     */
    readonly location: string;
    /**
     * Resource name.
     */
    readonly name: string;
    /**
     * The status of the database transparent data encryption.
     */
    readonly status?: string;
    /**
     * Resource type.
     */
    readonly type: string;
}
/**
 * Gets a database's transparent data encryption configuration.
 */
export function getTransparentDataEncryptionOutput(args: GetTransparentDataEncryptionOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetTransparentDataEncryptionResult> {
    return pulumi.output(args).apply((a: any) => getTransparentDataEncryption(a, opts))
}

export interface GetTransparentDataEncryptionOutputArgs {
    /**
     * The name of the database for which the transparent data encryption applies.
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
    transparentDataEncryptionName: pulumi.Input<string>;
}