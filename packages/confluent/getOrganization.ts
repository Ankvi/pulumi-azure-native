import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Organization resource.
 *
 * Uses Azure REST API version 2024-07-01.
 *
 * Other available API versions: 2021-12-01, 2023-08-22, 2024-02-13. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native confluent [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getOrganization(args: GetOrganizationArgs, opts?: pulumi.InvokeOptions): Promise<GetOrganizationResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:confluent:getOrganization", {
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
     * Resource group name
     */
    resourceGroupName: string;
}

/**
 * Organization resource.
 */
export interface GetOrganizationResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
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
 *
 * Uses Azure REST API version 2024-07-01.
 *
 * Other available API versions: 2021-12-01, 2023-08-22, 2024-02-13. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native confluent [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getOrganizationOutput(args: GetOrganizationOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetOrganizationResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:confluent:getOrganization", {
        "organizationName": args.organizationName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetOrganizationOutputArgs {
    /**
     * Organization resource name
     */
    organizationName: pulumi.Input<string>;
    /**
     * Resource group name
     */
    resourceGroupName: pulumi.Input<string>;
}