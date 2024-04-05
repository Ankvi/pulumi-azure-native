import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Get domain ownership identifier for web app.
 */
export function getWebAppDomainOwnershipIdentifier(args: GetWebAppDomainOwnershipIdentifierArgs, opts?: pulumi.InvokeOptions): Promise<GetWebAppDomainOwnershipIdentifierResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:web/v20181101:getWebAppDomainOwnershipIdentifier", {
        "domainOwnershipIdentifierName": args.domainOwnershipIdentifierName,
        "name": args.name,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetWebAppDomainOwnershipIdentifierArgs {
    /**
     * Name of domain ownership identifier.
     */
    domainOwnershipIdentifierName: string;
    /**
     * Name of the app.
     */
    name: string;
    /**
     * Name of the resource group to which the resource belongs.
     */
    resourceGroupName: string;
}

/**
 * A domain specific resource identifier.
 */
export interface GetWebAppDomainOwnershipIdentifierResult {
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
     * Resource type.
     */
    readonly type: string;
}
/**
 * Get domain ownership identifier for web app.
 */
export function getWebAppDomainOwnershipIdentifierOutput(args: GetWebAppDomainOwnershipIdentifierOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetWebAppDomainOwnershipIdentifierResult> {
    return pulumi.output(args).apply((a: any) => getWebAppDomainOwnershipIdentifier(a, opts))
}

export interface GetWebAppDomainOwnershipIdentifierOutputArgs {
    /**
     * Name of domain ownership identifier.
     */
    domainOwnershipIdentifierName: pulumi.Input<string>;
    /**
     * Name of the app.
     */
    name: pulumi.Input<string>;
    /**
     * Name of the resource group to which the resource belongs.
     */
    resourceGroupName: pulumi.Input<string>;
}