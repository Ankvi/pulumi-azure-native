import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Gets a server key.
 *
 * Uses Azure REST API version 2021-11-01.
 *
 * Other available API versions: 2015-05-01-preview, 2022-11-01-preview, 2023-02-01-preview, 2023-05-01-preview, 2023-08-01, 2023-08-01-preview, 2024-05-01-preview.
 */
export function getServerKey(args: GetServerKeyArgs, opts?: pulumi.InvokeOptions): Promise<GetServerKeyResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:sql:getServerKey", {
        "keyName": args.keyName,
        "resourceGroupName": args.resourceGroupName,
        "serverName": args.serverName,
    }, opts);
}

export interface GetServerKeyArgs {
    /**
     * The name of the server key to be retrieved.
     */
    keyName: string;
    /**
     * The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
     */
    resourceGroupName: string;
    /**
     * The name of the server.
     */
    serverName: string;
}

/**
 * A server key.
 */
export interface GetServerKeyResult {
    /**
     * Key auto rotation opt-in flag. Either true or false.
     */
    readonly autoRotationEnabled: boolean;
    /**
     * The server key creation date.
     */
    readonly creationDate: string;
    /**
     * Resource ID.
     */
    readonly id: string;
    /**
     * Kind of encryption protector. This is metadata used for the Azure portal experience.
     */
    readonly kind: string;
    /**
     * Resource location.
     */
    readonly location: string;
    /**
     * Resource name.
     */
    readonly name: string;
    /**
     * Subregion of the server key.
     */
    readonly subregion: string;
    /**
     * Thumbprint of the server key.
     */
    readonly thumbprint: string;
    /**
     * Resource type.
     */
    readonly type: string;
}
/**
 * Gets a server key.
 *
 * Uses Azure REST API version 2021-11-01.
 *
 * Other available API versions: 2015-05-01-preview, 2022-11-01-preview, 2023-02-01-preview, 2023-05-01-preview, 2023-08-01, 2023-08-01-preview, 2024-05-01-preview.
 */
export function getServerKeyOutput(args: GetServerKeyOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetServerKeyResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:sql:getServerKey", {
        "keyName": args.keyName,
        "resourceGroupName": args.resourceGroupName,
        "serverName": args.serverName,
    }, opts);
}

export interface GetServerKeyOutputArgs {
    /**
     * The name of the server key to be retrieved.
     */
    keyName: pulumi.Input<string>;
    /**
     * The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the server.
     */
    serverName: pulumi.Input<string>;
}