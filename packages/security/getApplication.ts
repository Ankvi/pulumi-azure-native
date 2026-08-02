import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a specific application for the requested scope by applicationId
 *
 * Uses Azure REST API version 2022-07-01-preview.
 */
export function getApplication(args: GetApplicationArgs, opts?: pulumi.InvokeOptions): Promise<GetApplicationResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:security:getApplication", {
        "applicationId": args.applicationId,
    }, opts);
}

export interface GetApplicationArgs {
    /**
     * The security Application key - unique key for the standard application
     */
    applicationId: string;
}

/**
 * Security Application over a given scope
 */
export interface GetApplicationResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * The application conditionSets - see examples
     */
    readonly conditionSets: any[];
    /**
     * description of the application
     */
    readonly description?: string;
    /**
     * display name of the application
     */
    readonly displayName?: string;
    /**
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
     */
    readonly id: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The application source, what it affects, e.g. Assessments
     */
    readonly sourceResourceType: string;
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
 * Get a specific application for the requested scope by applicationId
 *
 * Uses Azure REST API version 2022-07-01-preview.
 */
export function getApplicationOutput(args: GetApplicationOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetApplicationResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:security:getApplication", {
        "applicationId": args.applicationId,
    }, opts);
}

export interface GetApplicationOutputArgs {
    /**
     * The security Application key - unique key for the standard application
     */
    applicationId: pulumi.Input<string>;
}