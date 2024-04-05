import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Get the custom domain ownership identifier for an API Management service.
 */
export function getApiManagementServiceDomainOwnershipIdentifier(args?: GetApiManagementServiceDomainOwnershipIdentifierArgs, opts?: pulumi.InvokeOptions): Promise<GetApiManagementServiceDomainOwnershipIdentifierResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:apimanagement/v20230301preview:getApiManagementServiceDomainOwnershipIdentifier", {
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
 */
export function getApiManagementServiceDomainOwnershipIdentifierOutput(opts?: pulumi.InvokeOptions): pulumi.Output<GetApiManagementServiceDomainOwnershipIdentifierResult> {
    return pulumi.output(getApiManagementServiceDomainOwnershipIdentifier(opts))
}