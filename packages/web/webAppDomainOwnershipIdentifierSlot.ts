import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * A domain specific resource identifier.
 * Azure REST API version: 2022-09-01. Prior API version in Azure Native 1.x: 2020-12-01.
 *
 * Other available API versions: 2018-11-01, 2020-10-01, 2023-01-01, 2023-12-01.
 */
export class WebAppDomainOwnershipIdentifierSlot extends pulumi.CustomResource {
    /**
     * Get an existing WebAppDomainOwnershipIdentifierSlot resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): WebAppDomainOwnershipIdentifierSlot {
        return new WebAppDomainOwnershipIdentifierSlot(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:web:WebAppDomainOwnershipIdentifierSlot';

    /**
     * Returns true if the given object is an instance of WebAppDomainOwnershipIdentifierSlot.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is WebAppDomainOwnershipIdentifierSlot {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === WebAppDomainOwnershipIdentifierSlot.__pulumiType;
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
     * Resource type.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * String representation of the identity.
     */
    public readonly value!: pulumi.Output<string | undefined>;

    /**
     * Create a WebAppDomainOwnershipIdentifierSlot resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: WebAppDomainOwnershipIdentifierSlotArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.name === undefined) && !opts.urn) {
                throw new Error("Missing required property 'name'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.slot === undefined) && !opts.urn) {
                throw new Error("Missing required property 'slot'");
            }
            resourceInputs["domainOwnershipIdentifierName"] = args ? args.domainOwnershipIdentifierName : undefined;
            resourceInputs["kind"] = args ? args.kind : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["slot"] = args ? args.slot : undefined;
            resourceInputs["value"] = args ? args.value : undefined;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["kind"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["value"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:web/v20160801:WebAppDomainOwnershipIdentifierSlot" }, { type: "azure-native:web/v20180201:WebAppDomainOwnershipIdentifierSlot" }, { type: "azure-native:web/v20181101:WebAppDomainOwnershipIdentifierSlot" }, { type: "azure-native:web/v20190801:WebAppDomainOwnershipIdentifierSlot" }, { type: "azure-native:web/v20200601:WebAppDomainOwnershipIdentifierSlot" }, { type: "azure-native:web/v20200901:WebAppDomainOwnershipIdentifierSlot" }, { type: "azure-native:web/v20201001:WebAppDomainOwnershipIdentifierSlot" }, { type: "azure-native:web/v20201201:WebAppDomainOwnershipIdentifierSlot" }, { type: "azure-native:web/v20210101:WebAppDomainOwnershipIdentifierSlot" }, { type: "azure-native:web/v20210115:WebAppDomainOwnershipIdentifierSlot" }, { type: "azure-native:web/v20210201:WebAppDomainOwnershipIdentifierSlot" }, { type: "azure-native:web/v20210301:WebAppDomainOwnershipIdentifierSlot" }, { type: "azure-native:web/v20220301:WebAppDomainOwnershipIdentifierSlot" }, { type: "azure-native:web/v20220901:WebAppDomainOwnershipIdentifierSlot" }, { type: "azure-native:web/v20230101:WebAppDomainOwnershipIdentifierSlot" }, { type: "azure-native:web/v20231201:WebAppDomainOwnershipIdentifierSlot" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(WebAppDomainOwnershipIdentifierSlot.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a WebAppDomainOwnershipIdentifierSlot resource.
 */
export interface WebAppDomainOwnershipIdentifierSlotArgs {
    /**
     * Name of domain ownership identifier.
     */
    domainOwnershipIdentifierName?: pulumi.Input<string>;
    /**
     * Kind of resource.
     */
    kind?: pulumi.Input<string>;
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
    /**
     * String representation of the identity.
     */
    value?: pulumi.Input<string>;
}