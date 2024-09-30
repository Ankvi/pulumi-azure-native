import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Retrieve the configuration identified by configuration name.
 * Azure REST API version: 2022-08-08.
 *
 * Other available API versions: 2023-05-15-preview, 2023-11-01.
 */
export function getDscConfiguration(args: GetDscConfigurationArgs, opts?: pulumi.InvokeOptions): Promise<GetDscConfigurationResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:automation:getDscConfiguration", {
        "automationAccountName": args.automationAccountName,
        "configurationName": args.configurationName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetDscConfigurationArgs {
    /**
     * The name of the automation account.
     */
    automationAccountName: string;
    /**
     * The configuration name.
     */
    configurationName: string;
    /**
     * Name of an Azure Resource group.
     */
    resourceGroupName: string;
}

/**
 * Definition of the configuration type.
 */
export interface GetDscConfigurationResult {
    /**
     * Gets or sets the creation time.
     */
    readonly creationTime?: string;
    /**
     * Gets or sets the description.
     */
    readonly description?: string;
    /**
     * Gets or sets the etag of the resource.
     */
    readonly etag?: string;
    /**
     * Fully qualified resource Id for the resource
     */
    readonly id: string;
    /**
     * Gets or sets the job count of the configuration.
     */
    readonly jobCount?: number;
    /**
     * Gets or sets the last modified time.
     */
    readonly lastModifiedTime?: string;
    /**
     * The Azure Region where the resource lives
     */
    readonly location?: string;
    /**
     * Gets or sets verbose log option.
     */
    readonly logVerbose?: boolean;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Gets the number of compiled node configurations.
     */
    readonly nodeConfigurationCount?: number;
    /**
     * Gets or sets the configuration parameters.
     */
    readonly parameters?: {[key: string]: types.outputs.DscConfigurationParameterResponse};
    /**
     * Gets or sets the provisioning state of the configuration.
     */
    readonly provisioningState?: string;
    /**
     * Gets or sets the source.
     */
    readonly source?: types.outputs.ContentSourceResponse;
    /**
     * Gets or sets the state of the configuration.
     */
    readonly state?: string;
    /**
     * Resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * The type of the resource.
     */
    readonly type: string;
}
/**
 * Retrieve the configuration identified by configuration name.
 * Azure REST API version: 2022-08-08.
 *
 * Other available API versions: 2023-05-15-preview, 2023-11-01.
 */
export function getDscConfigurationOutput(args: GetDscConfigurationOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetDscConfigurationResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:automation:getDscConfiguration", {
        "automationAccountName": args.automationAccountName,
        "configurationName": args.configurationName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetDscConfigurationOutputArgs {
    /**
     * The name of the automation account.
     */
    automationAccountName: pulumi.Input<string>;
    /**
     * The configuration name.
     */
    configurationName: pulumi.Input<string>;
    /**
     * Name of an Azure Resource group.
     */
    resourceGroupName: pulumi.Input<string>;
}