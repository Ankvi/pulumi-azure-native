import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Organization resource.
 */
export function getOrganization(args: GetOrganizationArgs, opts?: pulumi.InvokeOptions): Promise<GetOrganizationResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:confluent/v20230822:getOrganization", {
        "organizationName": args.organizationName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetOrganizationArgs {
    /**
     * Organization resource name
     */
    organizationName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * Organization resource.
 */
export interface GetOrganizationResult {
    /**
     * The creation time of the resource.
     */
    readonly createdTime: string;
    /**
     * The ARM id of the resource.
     */
    readonly id: string;
    /**
     * Location of Organization resource
     */
    readonly location?: string;
    /**
     * The name of the resource.
     */
    readonly name: string;
    /**
     * Confluent offer detail
     */
    readonly offerDetail: types.outputs.OfferDetailResponse;
    /**
     * Id of the Confluent organization.
     */
    readonly organizationId: string;
    /**
     * Provision states for confluent RP
     */
    readonly provisioningState: string;
    /**
     * SSO url for the Confluent organization.
     */
    readonly ssoUrl: string;
    /**
     * Metadata pertaining to creation and last modification of the resource
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * Organization resource tags
     */
    readonly tags?: {[key: string]: string};
    /**
     * The type of the resource.
     */
    readonly type: string;
    /**
     * Subscriber detail
     */
    readonly userDetail: types.outputs.UserDetailResponse;
}
/**
 * Organization resource.
 */
export function getOrganizationOutput(args: GetOrganizationOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetOrganizationResult> {
    return pulumi.output(args).apply((a: any) => getOrganization(a, opts))
}

export interface GetOrganizationOutputArgs {
    /**
     * Organization resource name
     */
    organizationName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}