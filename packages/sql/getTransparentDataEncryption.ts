import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Gets a logical database's transparent data encryption.
 *
 * Uses Azure REST API version 2021-11-01.
 *
 * Other available API versions: 2014-04-01, 2022-11-01-preview, 2023-02-01-preview, 2023-05-01-preview, 2023-08-01, 2023-08-01-preview, 2024-05-01-preview.
 */
export function getTransparentDataEncryption(args: GetTransparentDataEncryptionArgs, opts?: pulumi.InvokeOptions): Promise<GetTransparentDataEncryptionResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:sql:getTransparentDataEncryption", {
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
 *
 * Uses Azure REST API version 2021-11-01.
 *
 * Other available API versions: 2014-04-01, 2022-11-01-preview, 2023-02-01-preview, 2023-05-01-preview, 2023-08-01, 2023-08-01-preview, 2024-05-01-preview.
 */
export function getTransparentDataEncryptionOutput(args: GetTransparentDataEncryptionOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetTransparentDataEncryptionResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:sql:getTransparentDataEncryption", {
        "databaseName": args.databaseName,
        "resourceGroupName": args.resourceGroupName,
        "serverName": args.serverName,
        "tdeName": args.tdeName,
    }, opts);
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