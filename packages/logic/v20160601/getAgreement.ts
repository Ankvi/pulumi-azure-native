import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets an integration account agreement.
 */
export function getAgreement(args: GetAgreementArgs, opts?: pulumi.InvokeOptions): Promise<GetAgreementResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:logic/v20160601:getAgreement", {
        "agreementName": args.agreementName,
        "integrationAccountName": args.integrationAccountName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetAgreementArgs {
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

/**
 * The integration account agreement.
 */
export interface GetAgreementResult {
    /**
     * The agreement type.
     */
    readonly agreementType: string;
    /**
     * The changed time.
     */
    readonly changedTime: string;
    /**
     * The agreement content.
     */
    readonly content: types.outputs.AgreementContentResponse;
    /**
     * The created time.
     */
    readonly createdTime: string;
    /**
     * The business identity of the guest partner.
     */
    readonly guestIdentity: types.outputs.BusinessIdentityResponse;
    /**
     * The integration account partner that is set as guest partner for this agreement.
     */
    readonly guestPartner: string;
    /**
     * The business identity of the host partner.
     */
    readonly hostIdentity: types.outputs.BusinessIdentityResponse;
    /**
     * The integration account partner that is set as host partner for this agreement.
     */
    readonly hostPartner: string;
    /**
     * The resource id.
     */
    readonly id: string;
    /**
     * The resource location.
     */
    readonly location?: string;
    /**
     * The metadata.
     */
    readonly metadata?: any;
    /**
     * Gets the resource name.
     */
    readonly name: string;
    /**
     * The resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * Gets the resource type.
     */
    readonly type: string;
}
/**
 * Gets an integration account agreement.
 */
export function getAgreementOutput(args: GetAgreementOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetAgreementResult> {
    return pulumi.output(args).apply((a: any) => getAgreement(a, opts))
}

export interface GetAgreementOutputArgs {
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
