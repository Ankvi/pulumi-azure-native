import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a CertificateObjectLocalRulestackResource
 */
export function getCertificateObjectLocalRulestack(args: GetCertificateObjectLocalRulestackArgs, opts?: pulumi.InvokeOptions): Promise<GetCertificateObjectLocalRulestackResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:cloudngfw/v20230901preview:getCertificateObjectLocalRulestack", {
        "localRulestackName": args.localRulestackName,
        "name": args.name,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetCertificateObjectLocalRulestackArgs {
    /**
     * LocalRulestack resource name
     */
    localRulestackName: string;
    /**
     * certificate name
     */
    name: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * LocalRulestack Certificate Object
 */
export interface GetCertificateObjectLocalRulestackResult {
    /**
     * comment for this object
     */
    readonly auditComment?: string;
    /**
     * use certificate self signed
     */
    readonly certificateSelfSigned: string;
    /**
     * Resource Id of certificate signer, to be populated only when certificateSelfSigned is false
     */
    readonly certificateSignerResourceId?: string;
    /**
     * user description for this object
     */
    readonly description?: string;
    /**
     * read only string representing last create or update
     */
    readonly etag?: string;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Provisioning state of the resource.
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
 * Get a CertificateObjectLocalRulestackResource
 */
export function getCertificateObjectLocalRulestackOutput(args: GetCertificateObjectLocalRulestackOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetCertificateObjectLocalRulestackResult> {
    return pulumi.output(args).apply((a: any) => getCertificateObjectLocalRulestack(a, opts))
}

export interface GetCertificateObjectLocalRulestackOutputArgs {
    /**
     * LocalRulestack resource name
     */
    localRulestackName: pulumi.Input<string>;
    /**
     * certificate name
     */
    name: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}