import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Get the custom domain ownership identifier for an API Management service.
 * Azure REST API version: 2022-08-01.
 *
 * Other available API versions: 2020-06-01-preview, 2020-12-01, 2021-01-01-preview, 2021-04-01-preview, 2021-08-01, 2021-12-01-preview, 2022-04-01-preview, 2022-09-01-preview, 2023-03-01-preview, 2023-05-01-preview.
 */
export function getApiManagementServiceDomainOwnershipIdentifier(args?: GetApiManagementServiceDomainOwnershipIdentifierArgs, opts?: pulumi.InvokeOptions): Promise<GetApiManagementServiceDomainOwnershipIdentifierResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:apimanagement:getApiManagementServiceDomainOwnershipIdentifier", {
    }, opts);
}

export interface GetApiManagementServiceDomainOwnershipIdentifierArgs {
}

/**
 * Response of the GetDomainOwnershipIdentifier operation.
 */
export interface GetApiManagementServiceDomainOwnershipIdentifierResult {
    /**
     * The domain ownership identifier value.
     */
    readonly domainOwnershipIdentifier: string;
}
/**
 * Get the custom domain ownership identifier for an API Management service.
 * Azure REST API version: 2022-08-01.
 *
 * Other available API versions: 2020-06-01-preview, 2020-12-01, 2021-01-01-preview, 2021-04-01-preview, 2021-08-01, 2021-12-01-preview, 2022-04-01-preview, 2022-09-01-preview, 2023-03-01-preview, 2023-05-01-preview.
 */
export function getApiManagementServiceDomainOwnershipIdentifierOutput(opts?: pulumi.InvokeOptions): pulumi.Output<GetApiManagementServiceDomainOwnershipIdentifierResult> {
    return pulumi.output(getApiManagementServiceDomainOwnershipIdentifier(opts))
}
