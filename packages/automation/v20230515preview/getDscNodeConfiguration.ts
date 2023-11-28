import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Retrieve the Dsc node configurations by node configuration.
 */
export function getDscNodeConfiguration(args: GetDscNodeConfigurationArgs, opts?: pulumi.InvokeOptions): Promise<GetDscNodeConfigurationResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:automation/v20230515preview:getDscNodeConfiguration", {
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
     * Gets or sets the configuration of the node.
     */
    readonly configuration?: types.outputs.DscConfigurationAssociationPropertyResponse;
    /**
     * Gets or sets creation time.
     */
    readonly creationTime?: string;
    /**
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
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
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Retrieve the Dsc node configurations by node configuration.
 */
export function getDscNodeConfigurationOutput(args: GetDscNodeConfigurationOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetDscNodeConfigurationResult> {
    return pulumi.output(args).apply((a: any) => getDscNodeConfiguration(a, opts))
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
