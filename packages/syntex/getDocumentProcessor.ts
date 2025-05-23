import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Returns a document processor for a given name.
 *
 * Uses Azure REST API version 2022-09-15-preview.
 */
export function getDocumentProcessor(args: GetDocumentProcessorArgs, opts?: pulumi.InvokeOptions): Promise<GetDocumentProcessorResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:syntex:getDocumentProcessor", {
        "processorName": args.processorName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetDocumentProcessorArgs {
    /**
     * The name of document processor resource.
     */
    processorName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * Document processor details
 */
export interface GetDocumentProcessorResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The geo-location where the resource lives
     */
    readonly location: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Document processor properties.
     */
    readonly properties: types.outputs.DocumentProcessorPropertiesResponse;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * Resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Returns a document processor for a given name.
 *
 * Uses Azure REST API version 2022-09-15-preview.
 */
export function getDocumentProcessorOutput(args: GetDocumentProcessorOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetDocumentProcessorResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:syntex:getDocumentProcessor", {
        "processorName": args.processorName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetDocumentProcessorOutputArgs {
    /**
     * The name of document processor resource.
     */
    processorName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}