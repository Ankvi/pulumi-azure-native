import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Retrieve the Dsc node configurations by node configuration.
 *
 * Uses Azure REST API version 2023-11-01.
 *
 * Other available API versions: 2015-10-31, 2018-01-15, 2019-06-01, 2020-01-13-preview, 2022-08-08, 2023-05-15-preview, 2024-10-23. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native automation [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getDscNodeConfiguration(args: GetDscNodeConfigurationArgs, opts?: pulumi.InvokeOptions): Promise<GetDscNodeConfigurationResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:automation:getDscNodeConfiguration", {
        "automationAccountName": args.automationAccountName,
        "nodeConfigurationName": args.nodeConfigurationName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetDscNodeConfigurationArgs {
    /**
     * The name of the automation account.
     */
    automationAccountName: string;
    /**
     * The Dsc node configuration name.
     */
    nodeConfigurationName: string;
    /**
     * Name of an Azure Resource group.
     */
    resourceGroupName: string;
}

/**
 * Definition of the dsc node configuration.
 */
export interface GetDscNodeConfigurationResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * Gets or sets the configuration of the node.
     */
    readonly configuration?: types.outputs.DscConfigurationAssociationPropertyResponse;
    /**
     * Gets or sets creation time.
     */
    readonly creationTime?: string;
    /**
     * Fully qualified resource Id for the resource
     */
    readonly id: string;
    /**
     * If a new build version of NodeConfiguration is required.
     */
    readonly incrementNodeConfigurationBuild?: boolean;
    /**
     * Gets or sets the last modified time.
     */
    readonly lastModifiedTime?: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Number of nodes with this node configuration assigned
     */
    readonly nodeCount?: number;
    /**
     * Source of node configuration.
     */
    readonly source?: string;
    /**
     * The type of the resource.
     */
    readonly type: string;
}
/**
 * Retrieve the Dsc node configurations by node configuration.
 *
 * Uses Azure REST API version 2023-11-01.
 *
 * Other available API versions: 2015-10-31, 2018-01-15, 2019-06-01, 2020-01-13-preview, 2022-08-08, 2023-05-15-preview, 2024-10-23. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native automation [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getDscNodeConfigurationOutput(args: GetDscNodeConfigurationOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetDscNodeConfigurationResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:automation:getDscNodeConfiguration", {
        "automationAccountName": args.automationAccountName,
        "nodeConfigurationName": args.nodeConfigurationName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetDscNodeConfigurationOutputArgs {
    /**
     * The name of the automation account.
     */
    automationAccountName: pulumi.Input<string>;
    /**
     * The Dsc node configuration name.
     */
    nodeConfigurationName: pulumi.Input<string>;
    /**
     * Name of an Azure Resource group.
     */
    resourceGroupName: pulumi.Input<string>;
}