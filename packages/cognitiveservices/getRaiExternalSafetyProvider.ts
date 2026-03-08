import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the specified external safety provider associated with the Subscription
 *
 * Uses Azure REST API version 2025-10-01-preview.
 */
export function getRaiExternalSafetyProvider(args: GetRaiExternalSafetyProviderArgs, opts?: pulumi.InvokeOptions): Promise<GetRaiExternalSafetyProviderResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:cognitiveservices:getRaiExternalSafetyProvider", {
        "safetyProviderName": args.safetyProviderName,
    }, opts);
}

export interface GetRaiExternalSafetyProviderArgs {
    /**
     * The name of the Rai External Safety Provider associated with the Cognitive Services Account
     */
    safetyProviderName: string;
}

/**
 * Cognitive Services Rai External Safety provider Schema.
 */
export interface GetRaiExternalSafetyProviderResult {
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
     * Properties of Cognitive Services Rai External Safety provider.
     */
    readonly properties: types.outputs.RaiExternalSafetyProviderSchemaPropertiesResponse;
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
 * Gets the specified external safety provider associated with the Subscription
 *
 * Uses Azure REST API version 2025-10-01-preview.
 */
export function getRaiExternalSafetyProviderOutput(args: GetRaiExternalSafetyProviderOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetRaiExternalSafetyProviderResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:cognitiveservices:getRaiExternalSafetyProvider", {
        "safetyProviderName": args.safetyProviderName,
    }, opts);
}

export interface GetRaiExternalSafetyProviderOutputArgs {
    /**
     * The name of the Rai External Safety Provider associated with the Cognitive Services Account
     */
    safetyProviderName: pulumi.Input<string>;
}