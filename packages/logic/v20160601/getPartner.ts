import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets an integration account partner.
 */
export function getPartner(args: GetPartnerArgs, opts?: pulumi.InvokeOptions): Promise<GetPartnerResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:logic/v20160601:getPartner", {
        "integrationAccountName": args.integrationAccountName,
        "partnerName": args.partnerName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetPartnerArgs {
    /**
     * The integration account name.
     */
    integrationAccountName: string;
    /**
     * The integration account partner name.
     */
    partnerName: string;
    /**
     * The resource group name.
     */
    resourceGroupName: string;
}

/**
 * The integration account partner.
 */
export interface GetPartnerResult {
    /**
     * The changed time.
     */
    readonly changedTime: string;
    /**
     * The partner content.
     */
    readonly content: types.outputs.PartnerContentResponse;
    /**
     * The created time.
     */
    readonly createdTime: string;
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
     * The partner type.
     */
    readonly partnerType: string;
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
 * Gets an integration account partner.
 */
export function getPartnerOutput(args: GetPartnerOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetPartnerResult> {
    return pulumi.output(args).apply((a: any) => getPartner(a, opts))
}

export interface GetPartnerOutputArgs {
    /**
     * The integration account name.
     */
    integrationAccountName: pulumi.Input<string>;
    /**
     * The integration account partner name.
     */
    partnerName: pulumi.Input<string>;
    /**
     * The resource group name.
     */
    resourceGroupName: pulumi.Input<string>;
}
