import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets an existing attestation at resource group scope.
 * Azure REST API version: 2022-09-01.
 */
export function getAttestationAtResourceGroup(args: GetAttestationAtResourceGroupArgs, opts?: pulumi.InvokeOptions): Promise<GetAttestationAtResourceGroupResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:policyinsights:getAttestationAtResourceGroup", {
        "attestationName": args.attestationName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetAttestationAtResourceGroupArgs {
    /**
     * The name of the attestation.
     */
    attestationName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * An attestation resource.
 */
export interface GetAttestationAtResourceGroupResult {
    /**
     * The time the evidence was assessed
     */
    readonly assessmentDate?: string;
    /**
     * Comments describing why this attestation was created.
     */
    readonly comments?: string;
    /**
     * The compliance state that should be set on the resource.
     */
    readonly complianceState?: string;
    /**
     * The evidence supporting the compliance state set in this attestation.
     */
    readonly evidence?: types.outputs.AttestationEvidenceResponse[];
    /**
     * The time the compliance state should expire.
     */
    readonly expiresOn?: string;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The time the compliance state was last changed in this attestation.
     */
    readonly lastComplianceStateChangeAt: string;
    /**
     * Additional metadata for this attestation
     */
    readonly metadata?: any;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The person responsible for setting the state of the resource. This value is typically an Azure Active Directory object ID.
     */
    readonly owner?: string;
    /**
     * The resource ID of the policy assignment that the attestation is setting the state for.
     */
    readonly policyAssignmentId: string;
    /**
     * The policy definition reference ID from a policy set definition that the attestation is setting the state for. If the policy assignment assigns a policy set definition the attestation can choose a definition within the set definition with this property or omit this and set the state for the entire set definition.
     */
    readonly policyDefinitionReferenceId?: string;
    /**
     * The status of the attestation.
     */
    readonly provisioningState: string;
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
 * Gets an existing attestation at resource group scope.
 * Azure REST API version: 2022-09-01.
 */
export function getAttestationAtResourceGroupOutput(args: GetAttestationAtResourceGroupOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetAttestationAtResourceGroupResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:policyinsights:getAttestationAtResourceGroup", {
        "attestationName": args.attestationName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetAttestationAtResourceGroupOutputArgs {
    /**
     * The name of the attestation.
     */
    attestationName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}