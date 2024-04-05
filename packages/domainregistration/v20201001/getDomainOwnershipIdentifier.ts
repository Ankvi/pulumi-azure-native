import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get ownership identifier for domain
 */
export function getDomainOwnershipIdentifier(args: GetDomainOwnershipIdentifierArgs, opts?: pulumi.InvokeOptions): Promise<GetDomainOwnershipIdentifierResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:domainregistration/v20201001:getDomainOwnershipIdentifier", {
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
     * The system metadata relating to this resource.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * Resource type.
     */
    readonly type: string;
}
/**
 * Get ownership identifier for domain
 */
export function getDomainOwnershipIdentifierOutput(args: GetDomainOwnershipIdentifierOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetDomainOwnershipIdentifierResult> {
    return pulumi.output(args).apply((a: any) => getDomainOwnershipIdentifier(a, opts))
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