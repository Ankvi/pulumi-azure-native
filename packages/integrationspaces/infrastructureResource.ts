import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * An infrastructure resource under Space.
 *
 * Uses Azure REST API version 2023-11-14-preview. In version 2.x of the Azure Native provider, it used API version 2023-11-14-preview.
 */
export class InfrastructureResource extends pulumi.CustomResource {
    /**
     * Get an existing InfrastructureResource resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): InfrastructureResource {
        return new InfrastructureResource(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:integrationspaces:InfrastructureResource';

    /**
     * Returns true if the given object is an instance of InfrastructureResource.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is InfrastructureResource {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === InfrastructureResource.__pulumiType;
    }

    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The status of the last operation.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * The id of the infrastructure resource.
     */
    public readonly resourceId!: pulumi.Output<string>;
    /**
     * The type of the infrastructure resource.
     */
    public readonly resourceType!: pulumi.Output<string>;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a InfrastructureResource resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: InfrastructureResourceArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.resourceId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceId'");
            }
            if ((!args || args.resourceType === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceType'");
            }
            if ((!args || args.spaceName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'spaceName'");
            }
            resourceInputs["infrastructureResourceName"] = args ? args.infrastructureResourceName : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["resourceId"] = args ? args.resourceId : undefined;
            resourceInputs["resourceType"] = args ? args.resourceType : undefined;
            resourceInputs["spaceName"] = args ? args.spaceName : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["resourceId"] = undefined /*out*/;
            resourceInputs["resourceType"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:integrationspaces/v20231114preview:InfrastructureResource" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(InfrastructureResource.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a InfrastructureResource resource.
 */
export interface InfrastructureResourceArgs {
    /**
     * The name of the infrastructure resource in the space.
     */
    infrastructureResourceName?: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The id of the infrastructure resource.
     */
    resourceId: pulumi.Input<string>;
    /**
     * The type of the infrastructure resource.
     */
    resourceType: pulumi.Input<string>;
    /**
     * The name of the space
     */
    spaceName: pulumi.Input<string>;
}