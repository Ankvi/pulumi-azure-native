import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Retrieve the connection identified by connection name.
 *
 * Uses Azure REST API version 2023-11-01.
 *
 * Other available API versions: 2015-10-31, 2019-06-01, 2020-01-13-preview, 2022-08-08, 2023-05-15-preview, 2024-10-23. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native automation [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getConnection(args: GetConnectionArgs, opts?: pulumi.InvokeOptions): Promise<GetConnectionResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:automation:getConnection", {
        "automationAccountName": args.automationAccountName,
        "connectionName": args.connectionName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetConnectionArgs {
    /**
     * The name of the automation account.
     */
    automationAccountName: string;
    /**
     * The name of connection.
     */
    connectionName: string;
    /**
     * Name of an Azure Resource group.
     */
    resourceGroupName: string;
}

/**
 * Definition of the connection.
 */
export interface GetConnectionResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * Gets or sets the connectionType of the connection.
     */
    readonly connectionType?: types.outputs.ConnectionTypeAssociationPropertyResponse;
    /**
     * Gets the creation time.
     */
    readonly creationTime: string;
    /**
     * Gets or sets the description.
     */
    readonly description?: string;
    /**
     * Gets the field definition values of the connection.
     */
    readonly fieldDefinitionValues: {[key: string]: string};
    /**
     * Fully qualified resource Id for the resource
     */
    readonly id: string;
    /**
     * Gets the last modified time.
     */
    readonly lastModifiedTime: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The type of the resource.
     */
    readonly type: string;
}
/**
 * Retrieve the connection identified by connection name.
 *
 * Uses Azure REST API version 2023-11-01.
 *
 * Other available API versions: 2015-10-31, 2019-06-01, 2020-01-13-preview, 2022-08-08, 2023-05-15-preview, 2024-10-23. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native automation [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getConnectionOutput(args: GetConnectionOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetConnectionResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:automation:getConnection", {
        "automationAccountName": args.automationAccountName,
        "connectionName": args.connectionName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetConnectionOutputArgs {
    /**
     * The name of the automation account.
     */
    automationAccountName: pulumi.Input<string>;
    /**
     * The name of connection.
     */
    connectionName: pulumi.Input<string>;
    /**
     * Name of an Azure Resource group.
     */
    resourceGroupName: pulumi.Input<string>;
}