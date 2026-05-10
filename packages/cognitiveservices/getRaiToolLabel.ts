import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the specified RAI Tool Label associated with the Azure OpenAI account.
 *
 * Uses Azure REST API version 2025-10-01-preview.
 */
export function getRaiToolLabel(args: GetRaiToolLabelArgs, opts?: pulumi.InvokeOptions): Promise<GetRaiToolLabelResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:cognitiveservices:getRaiToolLabel", {
        "accountName": args.accountName,
        "raiToolConnectionName": args.raiToolConnectionName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetRaiToolLabelArgs {
    /**
     * The name of Cognitive Services account.
     */
    accountName: string;
    /**
     * The name of the Rai Tool Label
     */
    raiToolConnectionName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * Cognitive Services RAI Tool Label resource.
 */
export interface GetRaiToolLabelResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * Resource Etag.
     */
    readonly etag: string;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Properties of the RAI Tool Label.
     */
    readonly properties: types.outputs.RaiToolLabelPropertiesResponse;
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
 * Gets the specified RAI Tool Label associated with the Azure OpenAI account.
 *
 * Uses Azure REST API version 2025-10-01-preview.
 */
export function getRaiToolLabelOutput(args: GetRaiToolLabelOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetRaiToolLabelResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:cognitiveservices:getRaiToolLabel", {
        "accountName": args.accountName,
        "raiToolConnectionName": args.raiToolConnectionName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetRaiToolLabelOutputArgs {
    /**
     * The name of Cognitive Services account.
     */
    accountName: pulumi.Input<string>;
    /**
     * The name of the Rai Tool Label
     */
    raiToolConnectionName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}