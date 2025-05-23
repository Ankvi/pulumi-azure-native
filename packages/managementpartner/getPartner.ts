import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Get the management partner using the partnerId, objectId and tenantId.
 *
 * Uses Azure REST API version 2018-02-01.
 */
export function getPartner(args: GetPartnerArgs, opts?: pulumi.InvokeOptions): Promise<GetPartnerResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:managementpartner:getPartner", {
        "partnerId": args.partnerId,
    }, opts);
}

export interface GetPartnerArgs {
    /**
     * Id of the Partner
     */
    partnerId: string;
}

/**
 * this is the management partner operations response
 */
export interface GetPartnerResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * This is the DateTime when the partner was created.
     */
    readonly createdTime?: string;
    /**
     * Type of the partner
     */
    readonly etag?: number;
    /**
     * Identifier of the partner
     */
    readonly id: string;
    /**
     * Name of the partner
     */
    readonly name: string;
    /**
     * This is the object id.
     */
    readonly objectId?: string;
    /**
     * This is the partner id
     */
    readonly partnerId?: string;
    /**
     * This is the partner name
     */
    readonly partnerName?: string;
    /**
     * This is the tenant id.
     */
    readonly tenantId?: string;
    /**
     * Type of resource. "Microsoft.ManagementPartner/partners"
     */
    readonly type: string;
    /**
     * This is the DateTime when the partner was updated.
     */
    readonly updatedTime?: string;
    /**
     * This is the version.
     */
    readonly version?: number;
}
/**
 * Get the management partner using the partnerId, objectId and tenantId.
 *
 * Uses Azure REST API version 2018-02-01.
 */
export function getPartnerOutput(args: GetPartnerOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetPartnerResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:managementpartner:getPartner", {
        "partnerId": args.partnerId,
    }, opts);
}

export interface GetPartnerOutputArgs {
    /**
     * Id of the Partner
     */
    partnerId: pulumi.Input<string>;
}