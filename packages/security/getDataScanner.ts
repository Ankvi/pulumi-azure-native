import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets a data scanner resource for the specified scope.
 *
 * Uses Azure REST API version 2026-08-01.
 */
export function getDataScanner(args: GetDataScannerArgs, opts?: pulumi.InvokeOptions): Promise<GetDataScannerResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:security:getDataScanner", {
        "scannerName": args.scannerName,
        "scopeId": args.scopeId,
    }, opts);
}

export interface GetDataScannerArgs {
    /**
     * The name of the data scanner.
     */
    scannerName: string;
    /**
     * The scope of the data scanner. Valid scopes are a subscription (format: 'subscriptions/{subscriptionId}') or a resource group (format: 'subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}').
     */
    scopeId: string;
}

/**
 * The data scanner resource used by Defender for Storage to scan data for malware and sensitive data discovery.
 */
export interface GetDataScannerResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
     */
    readonly id: string;
    /**
     * The managed service identities assigned to this resource.
     */
    readonly identity?: types.outputs.SystemAssignedServiceIdentityResponse;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Data scanner resource properties.
     */
    readonly properties: any;
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
 * Gets a data scanner resource for the specified scope.
 *
 * Uses Azure REST API version 2026-08-01.
 */
export function getDataScannerOutput(args: GetDataScannerOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetDataScannerResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:security:getDataScanner", {
        "scannerName": args.scannerName,
        "scopeId": args.scopeId,
    }, opts);
}

export interface GetDataScannerOutputArgs {
    /**
     * The name of the data scanner.
     */
    scannerName: pulumi.Input<string>;
    /**
     * The scope of the data scanner. Valid scopes are a subscription (format: 'subscriptions/{subscriptionId}') or a resource group (format: 'subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}').
     */
    scopeId: pulumi.Input<string>;
}