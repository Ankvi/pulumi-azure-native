import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Retrieve the connection type identified by connection type name.
 *
 * Uses Azure REST API version 2023-11-01.
 *
 * Other available API versions: 2015-10-31, 2019-06-01, 2020-01-13-preview, 2022-08-08, 2023-05-15-preview, 2024-10-23. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native automation [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getConnectionType(args: GetConnectionTypeArgs, opts?: pulumi.InvokeOptions): Promise<GetConnectionTypeResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:automation:getConnectionType", {
        "automationAccountName": args.automationAccountName,
        "connectionTypeName": args.connectionTypeName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetConnectionTypeArgs {
    /**
     * The name of the automation account.
     */
    automationAccountName: string;
    /**
     * The name of connection type.
     */
    connectionTypeName: string;
    /**
     * Name of an Azure Resource group.
     */
    resourceGroupName: string;
}

/**
 * Definition of the connection type.
 */
export interface GetConnectionTypeResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * Gets the creation time.
     */
    readonly creationTime: string;
    /**
     * Gets or sets the description.
     */
    readonly description?: string;
    /**
     * Gets the field definitions of the connection type.
     */
    readonly fieldDefinitions: {[key: string]: types.outputs.FieldDefinitionResponse};
    /**
     * Gets the id of the resource.
     */
    readonly id: string;
    /**
     * Gets or sets a Boolean value to indicate if the connection type is global.
     */
    readonly isGlobal?: boolean;
    /**
     * Gets or sets the last modified time.
     */
    readonly lastModifiedTime?: string;
    /**
     * Gets the name of the connection type.
     */
    readonly name: string;
    /**
     * Resource type
     */
    readonly type: string;
}
/**
 * Retrieve the connection type identified by connection type name.
 *
 * Uses Azure REST API version 2023-11-01.
 *
 * Other available API versions: 2015-10-31, 2019-06-01, 2020-01-13-preview, 2022-08-08, 2023-05-15-preview, 2024-10-23. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native automation [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getConnectionTypeOutput(args: GetConnectionTypeOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetConnectionTypeResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:automation:getConnectionType", {
        "automationAccountName": args.automationAccountName,
        "connectionTypeName": args.connectionTypeName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetConnectionTypeOutputArgs {
    /**
     * The name of the automation account.
     */
    automationAccountName: pulumi.Input<string>;
    /**
     * The name of connection type.
     */
    connectionTypeName: pulumi.Input<string>;
    /**
     * Name of an Azure Resource group.
     */
    resourceGroupName: pulumi.Input<string>;
}