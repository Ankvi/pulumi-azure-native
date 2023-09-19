import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets an integration account agreement.
 */
export function getIntegrationAccountAgreement(args: GetIntegrationAccountAgreementArgs, opts?: pulumi.InvokeOptions): Promise<GetIntegrationAccountAgreementResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:logic/v20150801preview:getIntegrationAccountAgreement", {
        "agreementName": args.agreementName,
        "integrationAccountName": args.integrationAccountName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetIntegrationAccountAgreementArgs {
    /**
     * The integration account agreement name.
     */
    agreementName: string;
    /**
     * The integration account name.
     */
    integrationAccountName: string;
    /**
     * The resource group name.
     */
    resourceGroupName: string;
}

export interface GetIntegrationAccountAgreementResult {
    /**
     * The agreement type.
     */
    readonly agreementType?: string;
    /**
     * The changed time.
     */
    readonly changedTime: string;
    /**
     * The agreement content.
     */
    readonly content?: types.outputs.AgreementContentResponse;
    /**
     * The created time.
     */
    readonly createdTime: string;
    /**
     * The guest identity.
     */
    readonly guestIdentity?: types.outputs.BusinessIdentityResponse;
    /**
     * The guest partner.
     */
    readonly guestPartner?: string;
    /**
     * The host identity.
     */
    readonly hostIdentity?: types.outputs.BusinessIdentityResponse;
    /**
     * The host partner.
     */
    readonly hostPartner?: string;
    /**
     * The resource id.
     */
    readonly id?: string;
    /**
     * The resource location.
     */
    readonly location?: string;
    /**
     * The metadata.
     */
    readonly metadata?: any;
    /**
     * The resource name.
     */
    readonly name?: string;
    /**
     * The resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * The resource type.
     */
    readonly type?: string;
}
/**
 * Gets an integration account agreement.
 */
export function getIntegrationAccountAgreementOutput(args: GetIntegrationAccountAgreementOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetIntegrationAccountAgreementResult> {
    return pulumi.output(args).apply((a: any) => getIntegrationAccountAgreement(a, opts))
}

export interface GetIntegrationAccountAgreementOutputArgs {
    /**
     * The integration account agreement name.
     */
    agreementName: pulumi.Input<string>;
    /**
     * The integration account name.
     */
    integrationAccountName: pulumi.Input<string>;
    /**
     * The resource group name.
     */
    resourceGroupName: pulumi.Input<string>;
}
