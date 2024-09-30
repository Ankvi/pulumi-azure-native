import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets an integration account partner.
 * Azure REST API version: 2019-05-01.
 *
 * Other available API versions: 2015-08-01-preview.
 */
export function getIntegrationAccountPartner(args: GetIntegrationAccountPartnerArgs, opts?: pulumi.InvokeOptions): Promise<GetIntegrationAccountPartnerResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:logic:getIntegrationAccountPartner", {
        "integrationAccountName": args.integrationAccountName,
        "partnerName": args.partnerName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetIntegrationAccountPartnerArgs {
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
export interface GetIntegrationAccountPartnerResult {
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
 * Azure REST API version: 2019-05-01.
 *
 * Other available API versions: 2015-08-01-preview.
 */
export function getIntegrationAccountPartnerOutput(args: GetIntegrationAccountPartnerOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetIntegrationAccountPartnerResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:logic:getIntegrationAccountPartner", {
        "integrationAccountName": args.integrationAccountName,
        "partnerName": args.partnerName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetIntegrationAccountPartnerOutputArgs {
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