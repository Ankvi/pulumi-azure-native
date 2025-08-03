import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a ConfigurationReference
 *
 * Uses Azure REST API version 2025-06-01.
 */
export function getConfigurationReference(args: GetConfigurationReferenceArgs, opts?: pulumi.InvokeOptions): Promise<GetConfigurationReferenceResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:edge:getConfigurationReference", {
        "configurationReferenceName": args.configurationReferenceName,
        "resourceUri": args.resourceUri,
    }, opts);
}

export interface GetConfigurationReferenceArgs {
    /**
     * The name of the ConfigurationReference
     */
    configurationReferenceName: string;
    /**
     * The fully qualified Azure Resource manager identifier of the resource.
     */
    resourceUri: string;
}

/**
 * ConfigurationReference Resource
 */
export interface GetConfigurationReferenceResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
     */
    readonly id: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The resource-specific properties for this resource.
     */
    readonly properties: types.outputs.ConfigurationReferencePropertiesResponse;
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
 * Get a ConfigurationReference
 *
 * Uses Azure REST API version 2025-06-01.
 */
export function getConfigurationReferenceOutput(args: GetConfigurationReferenceOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetConfigurationReferenceResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:edge:getConfigurationReference", {
        "configurationReferenceName": args.configurationReferenceName,
        "resourceUri": args.resourceUri,
    }, opts);
}

export interface GetConfigurationReferenceOutputArgs {
    /**
     * The name of the ConfigurationReference
     */
    configurationReferenceName: pulumi.Input<string>;
    /**
     * The fully qualified Azure Resource manager identifier of the resource.
     */
    resourceUri: pulumi.Input<string>;
}