import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Description for Get ownership identifier for domain
 * Azure REST API version: 2022-09-01.
 *
 * Other available API versions: 2020-10-01, 2023-01-01, 2023-12-01, 2024-04-01.
 */
export function getDomainOwnershipIdentifier(args: GetDomainOwnershipIdentifierArgs, opts?: pulumi.InvokeOptions): Promise<GetDomainOwnershipIdentifierResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:domainregistration:getDomainOwnershipIdentifier", {
        "domainName": args.domainName,
        "name": args.name,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetDomainOwnershipIdentifierArgs {
    /**
     * Name of domain.
     */
    domainName: string;
    /**
     * Name of identifier.
     */
    name: string;
    /**
     * Name of the resource group to which the resource belongs.
     */
    resourceGroupName: string;
}

/**
 * Domain ownership Identifier.
 */
export interface GetDomainOwnershipIdentifierResult {
    /**
     * Resource Id.
     */
    readonly id: string;
    /**
     * Kind of resource.
     */
    readonly kind?: string;
    /**
     * Resource Name.
     */
    readonly name: string;
    /**
     * Ownership Id.
     */
    readonly ownershipId?: string;
    /**
     * Resource type.
     */
    readonly type: string;
}
/**
 * Description for Get ownership identifier for domain
 * Azure REST API version: 2022-09-01.
 *
 * Other available API versions: 2020-10-01, 2023-01-01, 2023-12-01, 2024-04-01.
 */
export function getDomainOwnershipIdentifierOutput(args: GetDomainOwnershipIdentifierOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetDomainOwnershipIdentifierResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:domainregistration:getDomainOwnershipIdentifier", {
        "domainName": args.domainName,
        "name": args.name,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetDomainOwnershipIdentifierOutputArgs {
    /**
     * Name of domain.
     */
    domainName: pulumi.Input<string>;
    /**
     * Name of identifier.
     */
    name: pulumi.Input<string>;
    /**
     * Name of the resource group to which the resource belongs.
     */
    resourceGroupName: pulumi.Input<string>;
}