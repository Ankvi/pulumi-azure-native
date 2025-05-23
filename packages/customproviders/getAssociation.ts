import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Get an association.
 *
 * Uses Azure REST API version 2018-09-01-preview.
 */
export function getAssociation(args: GetAssociationArgs, opts?: pulumi.InvokeOptions): Promise<GetAssociationResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:customproviders:getAssociation", {
        "associationName": args.associationName,
        "scope": args.scope,
    }, opts);
}

export interface GetAssociationArgs {
    /**
     * The name of the association.
     */
    associationName: string;
    /**
     * The scope of the association.
     */
    scope: string;
}

/**
 * The resource definition of this association.
 */
export interface GetAssociationResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * The association id.
     */
    readonly id: string;
    /**
     * The association name.
     */
    readonly name: string;
    /**
     * The provisioning state of the association.
     */
    readonly provisioningState: string;
    /**
     * The REST resource instance of the target resource for this association.
     */
    readonly targetResourceId?: string;
    /**
     * The association type.
     */
    readonly type: string;
}
/**
 * Get an association.
 *
 * Uses Azure REST API version 2018-09-01-preview.
 */
export function getAssociationOutput(args: GetAssociationOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetAssociationResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:customproviders:getAssociation", {
        "associationName": args.associationName,
        "scope": args.scope,
    }, opts);
}

export interface GetAssociationOutputArgs {
    /**
     * The name of the association.
     */
    associationName: pulumi.Input<string>;
    /**
     * The scope of the association.
     */
    scope: pulumi.Input<string>;
}