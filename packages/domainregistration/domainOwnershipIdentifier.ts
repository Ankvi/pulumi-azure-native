import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Domain ownership Identifier.
 * Azure REST API version: 2022-09-01. Prior API version in Azure Native 1.x: 2020-10-01.
 *
 * Other available API versions: 2020-10-01, 2023-01-01.
 */
export class DomainOwnershipIdentifier extends pulumi.CustomResource {
    /**
     * Get an existing DomainOwnershipIdentifier resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): DomainOwnershipIdentifier {
        return new DomainOwnershipIdentifier(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:domainregistration:DomainOwnershipIdentifier';

    /**
     * Returns true if the given object is an instance of DomainOwnershipIdentifier.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is DomainOwnershipIdentifier {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === DomainOwnershipIdentifier.__pulumiType;
    }

    /**
     * Kind of resource.
     */
    public readonly kind!: pulumi.Output<string | undefined>;
    /**
     * Resource Name.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Ownership Id.
     */
    public readonly ownershipId!: pulumi.Output<string | undefined>;
    /**
     * Resource type.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a DomainOwnershipIdentifier resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DomainOwnershipIdentifierArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.domainName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'domainName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["domainName"] = args ? args.domainName : undefined;
            resourceInputs["kind"] = args ? args.kind : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["ownershipId"] = args ? args.ownershipId : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["kind"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["ownershipId"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:domainregistration/v20150401:DomainOwnershipIdentifier" }, { type: "azure-native:domainregistration/v20180201:DomainOwnershipIdentifier" }, { type: "azure-native:domainregistration/v20190801:DomainOwnershipIdentifier" }, { type: "azure-native:domainregistration/v20200601:DomainOwnershipIdentifier" }, { type: "azure-native:domainregistration/v20200901:DomainOwnershipIdentifier" }, { type: "azure-native:domainregistration/v20201001:DomainOwnershipIdentifier" }, { type: "azure-native:domainregistration/v20201201:DomainOwnershipIdentifier" }, { type: "azure-native:domainregistration/v20210101:DomainOwnershipIdentifier" }, { type: "azure-native:domainregistration/v20210115:DomainOwnershipIdentifier" }, { type: "azure-native:domainregistration/v20210201:DomainOwnershipIdentifier" }, { type: "azure-native:domainregistration/v20210301:DomainOwnershipIdentifier" }, { type: "azure-native:domainregistration/v20220301:DomainOwnershipIdentifier" }, { type: "azure-native:domainregistration/v20220901:DomainOwnershipIdentifier" }, { type: "azure-native:domainregistration/v20230101:DomainOwnershipIdentifier" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(DomainOwnershipIdentifier.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a DomainOwnershipIdentifier resource.
 */
export interface DomainOwnershipIdentifierArgs {
    /**
     * Name of domain.
     */
    domainName: pulumi.Input<string>;
    /**
     * Kind of resource.
     */
    kind?: pulumi.Input<string>;
    /**
     * Name of identifier.
     */
    name?: pulumi.Input<string>;
    /**
     * Ownership Id.
     */
    ownershipId?: pulumi.Input<string>;
    /**
     * Name of the resource group to which the resource belongs.
     */
    resourceGroupName: pulumi.Input<string>;
}
