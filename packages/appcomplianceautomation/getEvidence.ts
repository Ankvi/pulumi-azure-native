import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get the evidence metadata
 *
 * Uses Azure REST API version 2024-06-27.
 */
export function getEvidence(args: GetEvidenceArgs, opts?: pulumi.InvokeOptions): Promise<GetEvidenceResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:appcomplianceautomation:getEvidence", {
        "evidenceName": args.evidenceName,
        "reportName": args.reportName,
    }, opts);
}

export interface GetEvidenceArgs {
    /**
     * The evidence name.
     */
    evidenceName: string;
    /**
     * Report Name.
     */
    reportName: string;
}

/**
 * A class represent an AppComplianceAutomation evidence resource.
 */
export interface GetEvidenceResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * Control id.
     */
    readonly controlId?: string;
    /**
     * Evidence type.
     */
    readonly evidenceType?: string;
    /**
     * Extra data considered as evidence.
     */
    readonly extraData?: string;
    /**
     * The path of the file in storage.
     */
    readonly filePath: string;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Azure lifecycle management
     */
    readonly provisioningState: string;
    /**
     * Responsibility id.
     */
    readonly responsibilityId?: string;
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
 * Get the evidence metadata
 *
 * Uses Azure REST API version 2024-06-27.
 */
export function getEvidenceOutput(args: GetEvidenceOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetEvidenceResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:appcomplianceautomation:getEvidence", {
        "evidenceName": args.evidenceName,
        "reportName": args.reportName,
    }, opts);
}

export interface GetEvidenceOutputArgs {
    /**
     * The evidence name.
     */
    evidenceName: pulumi.Input<string>;
    /**
     * Report Name.
     */
    reportName: pulumi.Input<string>;
}