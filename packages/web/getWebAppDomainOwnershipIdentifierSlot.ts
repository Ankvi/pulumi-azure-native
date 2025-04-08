import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Description for Get domain ownership identifier for web app.
 *
 * Uses Azure REST API version 2024-04-01.
 *
 * Other available API versions: 2016-08-01, 2018-02-01, 2018-11-01, 2019-08-01, 2020-06-01, 2020-09-01, 2020-10-01, 2020-12-01, 2021-01-01, 2021-01-15, 2021-02-01, 2021-03-01, 2022-03-01, 2022-09-01, 2023-01-01, 2023-12-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native web [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getWebAppDomainOwnershipIdentifierSlot(args: GetWebAppDomainOwnershipIdentifierSlotArgs, opts?: pulumi.InvokeOptions): Promise<GetWebAppDomainOwnershipIdentifierSlotResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:web:getWebAppDomainOwnershipIdentifierSlot", {
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
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
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
    /**
     * String representation of the identity.
     */
    readonly value?: string;
}
/**
 * Description for Get domain ownership identifier for web app.
 *
 * Uses Azure REST API version 2024-04-01.
 *
 * Other available API versions: 2016-08-01, 2018-02-01, 2018-11-01, 2019-08-01, 2020-06-01, 2020-09-01, 2020-10-01, 2020-12-01, 2021-01-01, 2021-01-15, 2021-02-01, 2021-03-01, 2022-03-01, 2022-09-01, 2023-01-01, 2023-12-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native web [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getWebAppDomainOwnershipIdentifierSlotOutput(args: GetWebAppDomainOwnershipIdentifierSlotOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetWebAppDomainOwnershipIdentifierSlotResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:web:getWebAppDomainOwnershipIdentifierSlot", {
        "domainOwnershipIdentifierName": args.domainOwnershipIdentifierName,
        "name": args.name,
        "resourceGroupName": args.resourceGroupName,
        "slot": args.slot,
    }, opts);
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