import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * Get domain ownership identifier for web app.
 */
export function getWebAppDomainOwnershipIdentifierSlot(args: GetWebAppDomainOwnershipIdentifierSlotArgs, opts?: pulumi.InvokeOptions): Promise<GetWebAppDomainOwnershipIdentifierSlotResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:web/v20201001:getWebAppDomainOwnershipIdentifierSlot", {
        "domainOwnershipIdentifierName": args.domainOwnershipIdentifierName,
        "name": args.name,
        "resourceGroupName": args.resourceGroupName,
        "slot": args.slot,
    }, opts);
}

export interface GetWebAppDomainOwnershipIdentifierSlotArgs {
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
    /**
     * Name of the deployment slot. If a slot is not specified, the API will delete the binding for the production slot.
     */
    slot: string;
}

/**
 * A domain specific resource identifier.
 */
export interface GetWebAppDomainOwnershipIdentifierSlotResult {
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
     * The system metadata relating to this resource.
     */
    readonly systemData: types.outputs.web.v20201001.SystemDataResponse;
    /**
     * Resource type.
     */
    readonly type: string;
    /**
     * String representation of the identity.
     */
    readonly value?: string;
}
/**
 * Get domain ownership identifier for web app.
 */
export function getWebAppDomainOwnershipIdentifierSlotOutput(args: GetWebAppDomainOwnershipIdentifierSlotOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetWebAppDomainOwnershipIdentifierSlotResult> {
    return pulumi.output(args).apply((a: any) => getWebAppDomainOwnershipIdentifierSlot(a, opts))
}

export interface GetWebAppDomainOwnershipIdentifierSlotOutputArgs {
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
    /**
     * Name of the deployment slot. If a slot is not specified, the API will delete the binding for the production slot.
     */
    slot: pulumi.Input<string>;
}
